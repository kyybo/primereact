import type { Nullable } from '@primereact/core';
import * as React from 'react';
import type { useGlobalProps } from '../types';

/**
 * Custom toggle event.
 * @see {@link usePanelProps.onToggle}
 * @event
 */
interface usePanelToggleEvent<E = any> {
    /**
     * Browser event.
     */
    originalEvent: E | React.SyntheticEvent;
    /**
     * Collapsed state as a boolean.
     */
    value: boolean;
}

export interface usePanelProps extends useGlobalProps {
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @defaultValue false
     */
    toggleable?: Nullable<boolean>;
    /**
     * Defines the initial state of panel content, supports one or two-way binding as well.
     * @defaultValue false
     */
    collapsed?: Nullable<boolean>;
    /**
     * Callback to invoke when panel gets expanded.
     * @param {React.SyntheticEvent} event - Browser event.
     */
    onExpand?: Nullable<(event: React.SyntheticEvent) => void>;
    /**
     * Callback to invoke when panel gets collapsed.
     * @param {React.SyntheticEvent} event - Browser event.
     */
    onCollapse?: Nullable<(event: React.SyntheticEvent) => void>;
    /**
     * Callback to invoke when panel gets expanded or collapsed.
     * @param {PanelToggleEvent} event - Custom toggle event.
     */
    onToggle?: Nullable<(event: usePanelToggleEvent) => void>;
}
