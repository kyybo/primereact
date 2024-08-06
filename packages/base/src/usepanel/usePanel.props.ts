import type { withTypeProps } from '../types';
import type { usePanelProps } from './usePanel.types';

export const defaultProps: withTypeProps<usePanelProps> = {
    __TYPE: 'Panel',
    toggleable: null,
    collapsed: null,
    onExpand: null,
    onCollapse: null,
    onToggle: null,
    children: undefined
};
