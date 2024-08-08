import { Theme, dt } from '@primeuix/styled';
import { uuid } from '@primeuix/utils';
import { getKeyValue, minifyCSS, resolve } from '@primeuix/utils/object';
import * as React from 'react';
import { PrimeReactContext } from '../config';
import { ComponentContext } from './Component.context';

export const useComponentStyle = ({ props, attrs, state, style }: any = {}, ref?: any) => {
    const config = React.useContext<any>(PrimeReactContext);
    const parent = React.useContext<any>(ComponentContext);
    const name = props.__TYPE;
    // @todo
    const instance = {
        ref,
        name,
        props,
        attrs,
        state,
        parent
    };
    // @todo
    const $params = {
        instance: ref,
        props,
        state,
        attrs,
        parent
    };

    //config?.sheet?.add(style.name, Theme.transformCSS(style.name, minifyCSS(resolve(style.theme, { dt }))!));
    //config?.sheet?.add(style.name, Theme.transformCSS(style.name, minifyCSS(resolve(style.theme, { dt }))!));

    const load = (_style: any, options: any = {}, transform = (cs: any) => cs) => {
        const computedStyle = transform(resolve(_style, { dt }));

        !!computedStyle && config?.sheet?.add(options.name, minifyCSS(computedStyle));
    };
    const loadTheme = (options: any = {}) => {
        return load(style.theme, options, (computedStyle) => Theme.transformCSS(options.name || style.name, computedStyle));
    };

    const { primitive, semantic } = Theme.getCommon?.(style.name, {}) || {};

    load(primitive?.css, { name: 'primitive-variables' });
    load(semantic?.css, { name: 'semantic-variables' });
    //loadTheme({ name: 'global-style' });

    if (!Theme.isStyleNameLoaded('common')) {
        Theme.setLoadedStyleName('common');
    }

    // component
    if (!Theme.isStyleNameLoaded(style?.name) && style?.name) {
        const { css } = Theme.getComponent(style.name, {}) || {};

        load(css, { name: `${style.name}-variables` });
        loadTheme({ name: `${style.name}-style` });

        Theme.setLoadedStyleName(style.name);
    }

    // layer order
    if (!Theme.isStyleNameLoaded('layer-order')) {
        const layerOrder = Theme.getLayerOrderCSS(style.name);

        load(layerOrder, { name: 'layer-order', first: true });

        Theme.setLoadedStyleName('layer-order');
    }

    // methods
    /*const _loadStyles = () => {
        const _load = () => {
            // @todo
            if (!Base.isStyleNameLoaded('base')) {
                BaseStyle.loadCSS($styleOptions);
                _loadGlobalStyles();

                Base.setLoadedStyleName('base');
            }

            _loadThemeStyles();
        };

        _load();
        _themeChangeListener(_load);
    };
    const _loadCoreStyles = () => {
        if (!Base.isStyleNameLoaded(style?.name) && style?.name) {
            BaseComponentStyle.loadCSS($styleOptions);
            this.$options.style && this.$style.loadCSS($styleOptions);

            Base.setLoadedStyleName(style.name);
        }
    };
    const _loadGlobalStyles = () => {
        const globalCSS = this._useGlobalPT(getKeyValue, 'global.css', $params);

        isNotEmpty(globalCSS) && BaseStyle.load(globalCSS, { name: 'global', ...$styleOptions });
    };
    const _loadThemeStyles = () => {
        if (this.isUnstyled) return;

        // common
        if (!Theme.isStyleNameLoaded('common')) {
            const { primitive, semantic } = this.$style?.getCommonTheme?.() || {};

            BaseStyle.load(primitive?.css, { name: 'primitive-variables', ...$styleOptions });
            BaseStyle.load(semantic?.css, { name: 'semantic-variables', ...$styleOptions });
            BaseStyle.loadTheme({ name: 'global-style', ...$styleOptions });

            Theme.setLoadedStyleName('common');
        }

        // component
        if (!Theme.isStyleNameLoaded($style?.name) && $style?.name) {
            const { css } = $style?.getComponentTheme?.() || {};

            this.$style?.load(css, { name: `${this.$style.name}-variables`, ...this.$styleOptions });
            this.$style?.loadTheme({ name: `${this.$style.name}-style`, ...this.$styleOptions });

            Theme.setLoadedStyleName(this.$style.name);
        }

        // layer order
        if (!Theme.isStyleNameLoaded('layer-order')) {
            const layerOrder = this.$style?.getLayerOrderThemeCSS?.();

            BaseStyle.load(layerOrder, { name: 'layer-order', first: true, ...this.$styleOptions });

            Theme.setLoadedStyleName('layer-order');
        }
    };
    const _loadScopedThemeStyles = (preset) => {
        const { css } = this.$style?.getPresetTheme?.(preset, `[${this.$attrSelector}]`) || {};
        const scopedStyle = this.$style?.load(css, { name: `${this.$attrSelector}-${this.$style.name}`, ...this.$styleOptions });

        this.scopedStyleEl = scopedStyle.el;
    };
    const _unloadScopedThemeStyles = () => {
        this.scopedStyleEl?.value?.remove();
    };
    const _themeChangeListener = (callback = () => {}) => {
        Base.clearLoadedStyleNames();
        ThemeService.on('theme:change', callback);
    };*/

    // exposed methods
    const cx = (key = '', params = {}) => {
        return !$isUnstyled ? getKeyValue(style.classes, key, { ...$params, ...params }) : undefined;
    };

    const sx = (key = '', when = true, params = {}) => {
        if (when) {
            const self = getKeyValue(style.inlineStyles, key, { ...$params, ...params });
            const base = {}; //getKeyValue(BaseComponentStyle.inlineStyles, key, { ...this.$params, ...params }); // @todo

            return { ...base, ...self };
        }

        return undefined;
    };

    // computed values
    const $isUnstyled = React.useMemo(() => (props.unstyled !== undefined ? props.unstyled : config?.unstyled), [props, config]);
    const $attrSelector = React.useMemo(() => uuid('pc'), []);
    const $styleOptions = React.useMemo(() => ({ nonce: config?.csp?.nonce }), [config]);

    return {
        cx,
        sx
    };
};
