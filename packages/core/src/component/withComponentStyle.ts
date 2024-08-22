import { Theme, dt } from '@primeuix/styled';
import { minifyCSS, resolve } from '@primeuix/utils/object';
import * as React from 'react';
import { PrimeReactContext } from '../config';

export const withComponentStyle = (callback: any) => {
    return (options?: any, ref?: any) => {
        const { name = 'base', css, theme } = options?.style || {};
        const config = React.useContext<any>(PrimeReactContext);

        const _load = (css: any, options: any) => {
            config?.sheet?.add(options.name, css);
        };
        const $style = {
            ...options?.style,
            load: (style: any, options = {}, transform = (cs: any) => cs) => {
                const computedStyle = transform(resolve(style, { dt }));

                return computedStyle ? _load(minifyCSS(computedStyle), { name, ...options }) : {};
            },
            loadCSS(options = {}) {
                return this.load(css, options);
            },
            loadTheme(options: any = {}) {
                return this.load(theme, options, (computedStyle: any) => Theme.transformCSS(options.name || name, computedStyle));
            },
            getCommonTheme(params: any) {
                return Theme.getCommon(name, params);
            },
            getComponentTheme(params: any) {
                return Theme.getComponent(name, params);
            },
            getPresetTheme(preset: any, selector: any, params: any) {
                return Theme.getCustomPreset(name, preset, selector, params);
            },
            getLayerOrderThemeCSS() {
                return Theme.getLayerOrderCSS(name);
            },
            getStyleSheet(extendedCSS = '', props = {}) {
                if (css) {
                    const _css = resolve(css, { dt });
                    const _style = minifyCSS(`${_css}${extendedCSS}`);
                    const _props = Object.entries(props)
                        .reduce<any>((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                        .join(' ');

                    return `<style type="text/css" data-primereact-style-id="${name}" ${_props}>${_style}</style>`;
                }

                return '';
            },
            getCommonThemeStyleSheet(params: any, props = {}) {
                return Theme.getCommonStyleSheet(name, params, props);
            },
            getThemeStyleSheet(params: any, props = {}) {
                let cssArr = [Theme.getStyleSheet(name, params, props)];

                if (theme) {
                    const _name = name === 'base' ? 'global-style' : `${name}-style`;
                    const _css = resolve(theme, { dt });
                    const _style = minifyCSS(Theme.transformCSS(name, _css));
                    const _props = Object.entries(props)
                        .reduce<any>((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                        .join(' ');

                    cssArr.push(`<style type="text/css" data-primereact-style-id="${_name}" ${_props}>${_style}</style>`);
                }

                return cssArr.join('');
            }
        };

        return callback({ ...options, $style }, ref);
    };
};
