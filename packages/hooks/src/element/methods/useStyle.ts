import { isClient, isExist, setAttribute, setAttributes } from '@primeuix/utils/dom';
import * as React from 'react';

let _id = 0;

export const useStyle = (css: string | undefined, options: any = {}) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const cssRef = React.useRef<string | undefined>(css);
    const styleRef = React.useRef<any>(null);
    const styleNameRef = React.useRef<string | null>(null);

    const defaultDocument = isClient() ? window.document : undefined;
    const {
        document = defaultDocument,
        container = defaultDocument?.head,
        immediate = true,
        manual = false,
        name = `style_${++_id}`,
        id = undefined,
        media = undefined,
        nonce = undefined,
        first = false,
        onMounted: onStyleMounted = undefined,
        onUpdated: onStyleUpdated = undefined,
        onLoad: onStyleLoaded = undefined,
        props = {}
    } = options;

    const update = (_css?: string) => {
        if (isLoaded && cssRef.current !== _css) {
            styleRef.current.textContent = cssRef.current = _css;
            onStyleUpdated?.(styleNameRef.current);
        }
    };

    const load = (_css?: string, _props?: any) => {
        if (!document || isLoaded) {
            return;
        }

        const _styleProps = { ...props, ..._props };
        const [_name, _id, _nonce] = [_styleProps.name || name, _styleProps.id || id, _styleProps.nonce || nonce];

        styleRef.current = container.querySelector(`style[data-primevue-style-id="${_name}"]`) || document.getElementById(_id) || document.createElement('style');
        styleNameRef.current = _name;

        if (!styleRef.current.isConnected) {
            cssRef.current = _css || css;
            setAttributes(styleRef.current, {
                type: 'text/css',
                id: _id,
                media,
                nonce: _nonce
            });
            first ? container.prepend(styleRef.current) : container.appendChild(styleRef.current);
            setAttribute(styleRef.current, 'data-primevue-style-id', styleNameRef.current);
            setAttributes(styleRef.current, _styleProps);
            styleRef.current.textContent = cssRef.current;
            styleRef.current.onload = (event: React.ReactEventHandler<HTMLStyleElement>) => onStyleLoaded?.(event, { name: styleNameRef.current });
            onStyleMounted?.(styleNameRef.current);
        }

        setIsLoaded(true);
    };

    const unload = () => {
        if (!document || !isLoaded) return;
        isExist(styleRef.current) && container.removeChild(styleRef.current);
        setIsLoaded(false);
    };

    React.useEffect(() => {
        if (immediate && !manual) {
            load();
        }
    }, [manual]);

    React.useEffect(() => {
        update(css);
    }, [css]);

    return {
        id,
        name,
        update,
        unload,
        load,
        isLoaded
    };
};
