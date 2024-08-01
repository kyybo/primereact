import { useComponent } from '@primereact/core/component';
import { mergeProps } from '@primereact/core/utils';
import { useMountEffect } from '@primereact/hooks/lifecycle';
import { uuid } from '@primeuix/utils/uuid';
import { useImperativeHandle, useRef, useState } from 'react';
import { defaultProps } from './Panel.props';

export const usePanel = (options: any) => {
    const { props, attrs, cx, ptm } = useComponent({ ...options, defaultProps });
    const [idState, setIdState] = useState(attrs.id);
    const [collapsedState, setCollapsedState] = useState(props.collapsed);
    const elementRef = useRef(null);
    const contentRef = useRef(null);
    const collapsed = props.toggleable ? (props.onToggle ? props.collapsed : collapsedState) : false;
    const headerId = idState + '_header';
    const contentId = idState + '_content';

    const state = {};
    const context = {};

    const toggle = (event: any) => {
        if (!props.toggleable) {
            return;
        }

        collapsed ? expand(event) : collapse(event);

        if (event) {
            if (props.onToggle) {
                props.onToggle({
                    originalEvent: event,
                    value: !collapsed
                });
            }

            event.preventDefault();
        }
    };

    const expand = (event: any) => {
        if (!props.onToggle) {
            setCollapsedState(false);
        }

        props.onExpand && event && props.onExpand(event);
    };

    const collapse = (event: any) => {
        if (!props.onToggle) {
            setCollapsedState(true);
        }

        props.onCollapse && event && props.onCollapse(event);
    };

    useImperativeHandle(options.ref, () => ({
        props,
        toggle,
        expand,
        collapse,
        getRootElement: () => elementRef.current,
        getContentElement: () => contentRef.current
    }));

    useMountEffect(() => {
        if (!idState) {
            setIdState(uuid());
        }
    });

    const ROOT = mergeProps(
        {
            id: idState,
            ref: elementRef,
            style: props.style,
            className: cx('root')
        },
        attrs,
        ptm('root')
    );

    const HEADER = mergeProps(
        {
            className: cx('header')
        },
        ptm('header')
    );

    const TITLE = mergeProps(
        {
            id: headerId,
            className: cx('title')
        },
        ptm('title')
    );

    const ICONS = mergeProps(
        {
            className: cx('icons')
        },
        ptm('icons')
    );

    return {
        instance: options.ref,
        props,
        state,
        attrs,
        context,
        parent: {},
        $sections: {
            ROOT,
            HEADER,
            TITLE,
            ICONS
        }
    };
};
