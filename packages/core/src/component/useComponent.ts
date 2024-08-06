import { Theme } from '@primeuix/styled';
import { classNames, uuid } from '@primeuix/utils';
import { mergeProps } from '@primeuix/utils/mergeprops';
import { getKeyValue, isArray, isFunction, isNotEmpty, isString, resolve, toFlatCase } from '@primeuix/utils/object';
import * as React from 'react';
import BaseStyle from '../basestyle';
import { PrimeReactContext } from '../config';
import { ComponentContext } from './Component.context';

export const useComponent = (options: any = {}) => {
    const config = React.useContext<any>(PrimeReactContext);
    const context = React.useContext<any>(ComponentContext);
    const { props, attrs, state, style } = options;

    const $name = React.useMemo(() => {
        return props.__TYPE;
    }, []);
    const _getPT = (pt: any, key = '', callback?: any) => {
        const getValue = (value: any, checkSameKey = false) => {
            const computedValue = callback ? callback(value) : value;
            const _key = toFlatCase(key);
            const _cKey = toFlatCase($name);

            return (checkSameKey ? (_key !== _cKey ? computedValue?.[_key] : undefined) : computedValue?.[_key]) ?? computedValue;
        };

        return pt?.hasOwnProperty('_usept')
            ? {
                  _usept: pt['_usept'],
                  originalValue: getValue(pt.originalValue),
                  value: getValue(pt.value)
              }
            : getValue(pt, true);
    };
    const _getOptionValue = (options: any, key = '', params = {}) => {
        return getKeyValue(options, key, params);
    };
    const $params = React.useMemo(() => {
        const parentInstance: any = {}; //_getHostInstance(this) || this.$parent;

        return {
            instance: this,
            props,
            state, //this.$data,
            attrs,
            parent: {
                instance: parentInstance,
                props: parentInstance?.props,
                state: parentInstance?.data,
                attrs: parentInstance?.attrs
            }
        };
    }, []);
    const $globalPT = React.useMemo(() => {
        return _getPT(config?.pt, undefined, (value: any) => resolve(value, { instance: this }));
    }, []);
    const $defaultPT = React.useMemo(() => {
        return _getPT(config?.pt, undefined, (value: any) => _getOptionValue(value, $name, { ...$params }) || resolve(value, { ...$params }));
    }, []);
    const $isUnstyled = React.useMemo(() => {
        return props.unstyled !== undefined ? props.unstyled : config?.unstyled;
    }, []);
    const $theme = React.useMemo(() => {
        return config?.theme;
    }, []);
    const $style = React.useMemo(() => {
        return { classes: undefined, inlineStyles: undefined, load: () => {}, loadCSS: () => {}, loadTheme: () => {}, ...options.style };
    }, []);
    const $styleOptions = React.useMemo(() => {
        return { nonce: config?.csp?.nonce };
    }, []);

    const $_attrsPT = React.useMemo(() => {
        return Object.entries(attrs || {})
            .filter(([key]) => key?.startsWith('pt:'))
            .reduce((result, [key, value]) => {
                const [, ...rest] = key.split(':');

                rest?.reduce<any>((currentObj, nestedKey, index, array) => {
                    !currentObj[nestedKey] && (currentObj[nestedKey] = index === array.length - 1 ? value : {});

                    return currentObj[nestedKey];
                }, result);

                return result;
            }, {});
    }, []);
    const $_attrsWithoutPT = React.useMemo(() => {
        return Object.entries(attrs || {})
            .filter(([key]) => !key?.startsWith('pt:'))
            .reduce<any>((acc, [key, value]) => {
                acc[key] = value;

                return acc;
            }, {});
    }, []);
    const $attrSelector = React.useMemo(() => {
        return uuid('pc');
    }, []);

    const _mergeProps = (fn: any, ...args: any[]) => {
        return isFunction(fn) ? fn(...args) : mergeProps(...args);
    };

    const _loadStyles = () => {
        /*const _load = () => {
            // @todo
            if (!Base.isStyleNameLoaded('base')) {
                BaseStyle.loadCSS(this.$styleOptions);
                this._loadGlobalStyles();

                Base.setLoadedStyleName('base');
            }

            this._loadThemeStyles();
        };

        _load();
        this._themeChangeListener(_load);*/
    };

    const _loadCoreStyles = () => {
        /*if (!Base.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
            BaseComponentStyle.loadCSS(this.$styleOptions);
            this.$options.style && this.$style.loadCSS(this.$styleOptions);

            Base.setLoadedStyleName(this.$style.name);
        }*/
    };

    const _loadGlobalStyles = () => {
        /*
         * @todo Add self custom css support;
         * <Panel :pt="{ css: `...` }" .../>
         *
         * const selfCSS = this._getPTClassValue(this.pt, 'css', this.$params);
         * const defaultCSS = this._getPTClassValue(this.defaultPT, 'css', this.$params);
         * const mergedCSS = mergeProps(selfCSS, defaultCSS);
         * isNotEmpty(mergedCSS?.class) && this.$css.loadCustomStyle(mergedCSS?.class);
         */

        const globalCSS = _useGlobalPT(_getOptionValue, 'global.css', $params);

        isNotEmpty(globalCSS) && BaseStyle.load(globalCSS, { name: 'global', ...$styleOptions });
    };

    const _loadThemeStyles = () => {
        if ($isUnstyled) return;

        // common
        if (!Theme.isStyleNameLoaded('common')) {
            const { primitive, semantic } = $style?.getCommonTheme?.() || {};

            BaseStyle.load(primitive?.css, { name: 'primitive-variables', ...$styleOptions });
            BaseStyle.load(semantic?.css, { name: 'semantic-variables', ...$styleOptions });
            BaseStyle.loadTheme({ name: 'global-style', ...$styleOptions });

            Theme.setLoadedStyleName('common');
        }

        // component
        if (!Theme.isStyleNameLoaded($style?.name) && $style?.name) {
            const { css } = $style?.getComponentTheme?.() || {};

            $style?.load(css, { name: `${$style.name}-variables`, ...$styleOptions });
            $style?.loadTheme({ name: `${$style.name}-style`, ...$styleOptions });

            Theme.setLoadedStyleName($style.name);
        }

        // layer order
        if (!Theme.isStyleNameLoaded('layer-order')) {
            const layerOrder = $style?.getLayerOrderThemeCSS?.();

            BaseStyle.load(layerOrder, { name: 'layer-order', first: true, ...$styleOptions });

            Theme.setLoadedStyleName('layer-order');
        }
    };

    const _loadScopedThemeStyles = (preset: any) => {
        const { css } = $style?.getPresetTheme?.(preset, `[${$attrSelector}]`) || {};
        const scopedStyle = $style?.load(css, { name: `${$attrSelector}-${$style.name}`, ...$styleOptions });

        //this.scopedStyleEl = scopedStyle.el;
    };

    const _unloadScopedThemeStyles = () => {
        //this.scopedStyleEl?.value?.remove();
    };

    const _themeChangeListener = (callback = () => {}) => {
        //Base.clearLoadedStyleNames();
        //ThemeService.on('theme:change', callback);
    };

    const _getHostInstance = (instance: any) => {
        return instance; //? (this.$options.hostName ? (instance.$.type.name === this.$options.hostName ? instance : this._getHostInstance(instance.$parentInstance)) : instance.$parentInstance) : undefined;
    };

    const _getPropValue = (name: string) => {
        return props[name]; // || this._getHostInstance(this)?.[name];
    };

    const _getPTValue = (obj = {}, key: string = '', params: any = {}, searchInDefaultPT = true) => {
        const searchOut = /./g.test(key) && !!params[key.split('.')[0]];
        const { mergeSections = true, mergeProps: useMergeProps = false } = _getPropValue('ptOptions') || config?.ptOptions || {};
        const global = searchInDefaultPT ? (searchOut ? _useGlobalPT(_getPTClassValue, key, params) : _useDefaultPT(_getPTClassValue, key, params)) : undefined;
        const self = searchOut ? undefined : _getPTSelf(obj, _getPTClassValue, key, { ...params, global: global || {} });
        const datasets = _getPTDatasets(key);

        return mergeSections || (!mergeSections && self) ? (useMergeProps ? _mergeProps(useMergeProps, global, self, datasets) : { ...global, ...self, ...datasets }) : { ...self, ...datasets };
    };

    const _getPTSelf = (obj = {}, ...args: any) => {
        return mergeProps(
            // @ts-ignore
            _usePT(_getPT(obj, $name), ...args), // Exp; <component :pt="{}"
            // @ts-ignore
            _usePT($_attrsPT, ...args) // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
        );
    };

    const _getPTDatasets = (key = '') => {
        const datasetPrefix = 'data-pc-';
        const isExtended = key === 'root' && isNotEmpty(props.pt?.['data-pc-section']);

        return (
            key !== 'transition' && {
                ...(key === 'root' && {
                    [`${datasetPrefix}name`]: toFlatCase(isExtended ? props.pt?.['data-pc-section'] : $name),
                    ...(isExtended && { [`${datasetPrefix}extend`]: toFlatCase($name) })
                }),
                [`${datasetPrefix}section`]: toFlatCase(key)
            }
        );
    };

    const _getPTClassValue = (...args: any) => {
        // @ts-ignore
        const value = _getOptionValue(...args);

        return isString(value) || isArray(value) ? { className: value } : value;
    };

    const _usePT = (pt: any, callback: any, key: string, params: any) => {
        const fn = (value: any) => callback(value, key, params);

        if (pt?.hasOwnProperty('_usept')) {
            const { mergeSections = true, mergeProps: useMergeProps = false } = pt['_usept'] || config?.ptOptions || {};
            const originalValue = fn(pt.originalValue);
            const value = fn(pt.value);

            if (originalValue === undefined && value === undefined) return undefined;
            else if (isString(value)) return value;
            else if (isString(originalValue)) return originalValue;

            return mergeSections || (!mergeSections && value) ? (useMergeProps ? _mergeProps(useMergeProps, originalValue, value) : { ...originalValue, ...value }) : value;
        }

        return fn(pt);
    };

    const _useGlobalPT = (callback: any, key: string, params: any) => {
        return _usePT($globalPT, callback, key, params);
    };

    const _useDefaultPT = (callback: any, key: string, params: any) => {
        return _usePT($defaultPT, callback, key, params);
    };

    const ptm = (key = '', params = {}) => {
        return _getPTValue(props.pt, key, { ...$params, ...params });
    };

    const ptmi = (key = '', params = {}) => {
        return mergeProps($_attrsWithoutPT, ptm(key, params));
    };

    const ptmo = (obj = {}, key = '', params = {}) => {
        return _getPTValue(obj, key, { instance: this, ...params }, false);
    };

    const cx = (key = '', params = {}) => {
        return !$isUnstyled ? classNames(_getOptionValue($style.classes, key, { ...$params, ...params })) : undefined;
    };

    const sx = (key = '', when = true, params = {}) => {
        if (when) {
            const self = _getOptionValue($style.inlineStyles, key, { ...$params, ...params });
            const base = _getOptionValue(BaseStyle.inlineStyles, key, { ...$params, ...params });

            return [base, self];
        }

        return undefined;
    };

    return {
        props,
        attrs,
        methods: {
            ptm,
            ptmi,
            ptmo,
            cx,
            sx
        }
    };
};
