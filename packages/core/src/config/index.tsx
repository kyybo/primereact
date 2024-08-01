import React, { useState } from 'react';

export const PrimeReactContext = React.createContext({});

export const PrimeReactProvider = (props: any) => {
    const propsValue = props.value || {};

    const [ripple, setRipple] = useState(propsValue.ripple || false);
    const [inputStyle, setInputStyle] = useState(propsValue.inputStyle || 'outlined');
    const [locale, setLocale] = useState(propsValue.locale || 'en');
    const [appendTo, setAppendTo] = useState(propsValue.appendTo || null);
    const [styleContainer, setStyleContainer] = useState(propsValue.styleContainer || null);
    const [cssTransition, setCssTransition] = useState(propsValue.cssTransition || true);
    const [autoZIndex, setAutoZIndex] = useState(propsValue.autoZIndex || true);
    const [hideOverlaysOnDocumentScrolling, setHideOverlaysOnDocumentScrolling] = useState(propsValue.hideOverlaysOnDocumentScrolling || false);
    const [nonce, setNonce] = useState(propsValue.nonce || null);
    const [nullSortOrder, setNullSortOrder] = useState(propsValue.nullSortOrder || 1);
    const [zIndex, setZIndex] = useState(
        propsValue.zIndex || {
            modal: 1100,
            overlay: 1000,
            menu: 1000,
            tooltip: 1100,
            toast: 1200
        }
    );
    const [ptOptions, setPtOptions] = useState(
        propsValue.ptOptions || {
            mergeSections: true,
            mergeProps: true
        }
    );
    const [pt, setPt] = useState(propsValue.pt || undefined);
    const [unstyled, setUnstyled] = useState(propsValue.unstyled || false);

    const value = {
        ripple,
        setRipple,
        inputStyle,
        setInputStyle,
        locale,
        setLocale,
        appendTo,
        setAppendTo,
        styleContainer,
        setStyleContainer,
        cssTransition,
        setCssTransition,
        autoZIndex,
        setAutoZIndex,
        hideOverlaysOnDocumentScrolling,
        setHideOverlaysOnDocumentScrolling,
        nonce,
        setNonce,
        nullSortOrder,
        setNullSortOrder,
        zIndex,
        setZIndex,
        ptOptions,
        setPtOptions,
        pt,
        setPt,
        unstyled,
        setUnstyled
    };

    return <PrimeReactContext.Provider value={value}>{props.children}</PrimeReactContext.Provider>;
};
