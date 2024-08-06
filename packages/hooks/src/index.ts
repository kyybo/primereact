import * as React from 'react';

// @todo Move to correct group
export const useId = (initialValue?: string) => {
    return initialValue || `pr_id_${React.useId().replaceAll(':', '')}`;
};
