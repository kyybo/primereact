'use client';
import { useComponent, withComponent } from '@primereact/core/component';
import { useId } from '@primereact/hooks';
import { style } from '@primereact/styles/panel';
import { mergeProps } from '@primeuix/utils/mergeprops';
import * as React from 'react';
import type { withInProps } from '../types';
import { defaultProps } from './usePanel.props';
import type { usePanelProps } from './usePanel.types';

export const usePanel = withComponent((props: withInProps<usePanelProps>, attrs: any, ref?: React.RefObject<any>) => {
    const [collapsedState, setCollapsedState] = React.useState(props.collapsed);
    const collapsed = props.toggleable ? (props.onToggle ? props.collapsed : collapsedState) : false;
    const id = useId(attrs.id);
    const headerId = id + '_header';
    const contentId = id + '_content';
    const state = {
        collapsed
    };

    const instance = useComponent({ props, attrs, state, style }, ref);

    const root = mergeProps(
        {
            id,
            style: props.style,
            className: instance.cx('root')
        },
        attrs,
        instance.ptm('root')
    );

    const HEADER = useHeader({ id: headerId, setCollapsedState, props, state, instance }, ref);
    const CONTENT = useContent({ id: contentId, headerId, state, instance });
    const FOOTER = useFooter({ instance });

    return {
        id,
        instance: ref,
        props,
        state,
        attrs,
        parent: {},
        $sections: {
            root,
            ...HEADER,
            ...CONTENT,
            ...FOOTER
        }
    };
}, defaultProps);

const useHeader = ({ id, setCollapsedState, props, state, instance }: any, ref?: React.RefObject<any>) => {
    const toggle = (event: any) => {
        if (!props.toggleable) {
            return;
        }

        state.collapsed ? expand(event) : collapse(event);

        if (event) {
            if (props.onToggle) {
                props.onToggle({
                    originalEvent: event,
                    value: !state.collapsed
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

    React.useImperativeHandle(ref, () => ({
        toggle,
        expand,
        collapse
    }));

    const header = mergeProps(
        {
            className: instance.cx('header')
        },
        instance.ptm('header')
    );

    const title = mergeProps(
        {
            id,
            className: instance.cx('title')
        },
        instance.ptm('title')
    );

    const headerActions = mergeProps(
        {
            className: instance.cx('headerActions')
        },
        instance.ptm('headerActions')
    );

    const toggleButton = mergeProps(
        {
            onClick: toggle,
            className: instance.cx('pcToggleButton')
        },
        instance.ptm('pcToggleButton')
    );

    return {
        header,
        title,
        headerActions,
        toggleButton
    };
};

const useContent = ({ id, headerId, state, instance }: any) => {
    const contentContainer = mergeProps(
        {
            id,
            className: instance.cx('contentContainer'),
            'aria-hidden': state.collapsed,
            role: 'region',
            'aria-labelledby': headerId
        },
        instance.ptm('contentContainer')
    );
    const content = mergeProps(
        {
            className: instance.cx('content')
        },
        instance.ptm('content')
    );

    return {
        contentContainer,
        content
    };
};

const useFooter = ({ instance }: any) => {
    const footer = mergeProps(
        {
            className: instance.cx('footer')
        },
        instance.ptm('footer')
    );

    return {
        footer
    };
};
