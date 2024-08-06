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

    const { methods } = useComponent({
        props,
        attrs,
        state,
        style
    });

    React.useImperativeHandle(ref, () => ({
        props
    }));

    const root = mergeProps(
        {
            id,
            style: props.style,
            className: methods.cx('root')
        },
        attrs,
        methods.ptm('root')
    );

    const HEADER = useHeader({ id: headerId, setCollapsedState, props, state, methods }, ref);
    const CONTENT = useContent({ id: contentId, headerId, state, methods });
    const FOOTER = useFooter({ methods });

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

const useHeader = ({ id, setCollapsedState, props, state, methods }: any, ref?: React.RefObject<any>) => {
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
            className: methods.cx('header')
        },
        methods.ptm('header')
    );

    const title = mergeProps(
        {
            id,
            className: methods.cx('title')
        },
        methods.ptm('title')
    );

    const headerActions = mergeProps(
        {
            className: methods.cx('headerActions')
        },
        methods.ptm('headerActions')
    );

    const toggleButton = mergeProps(
        {
            onClick: toggle,
            className: methods.cx('pcToggleButton')
        },
        methods.ptm('pcToggleButton')
    );

    return {
        header,
        title,
        headerActions,
        toggleButton
    };
};

const useContent = ({ id, headerId, state, methods }: any) => {
    const contentContainer = mergeProps(
        {
            id,
            className: methods.cx('contentContainer'),
            'aria-hidden': state.collapsed,
            role: 'region',
            'aria-labelledby': headerId
        },
        methods.ptm('contentContainer')
    );
    const content = mergeProps(
        {
            className: methods.cx('content')
        },
        methods.ptm('content')
    );

    return {
        contentContainer,
        content
    };
};

const useFooter = ({ methods }: any) => {
    const footer = mergeProps(
        {
            className: methods.cx('footer')
        },
        methods.ptm('footer')
    );

    return {
        footer
    };
};
