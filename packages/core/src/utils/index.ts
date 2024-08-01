import { isFunction } from '@primeuix/utils/object';

export function mergeProps(...props: any[]) {
    return props?.reduce((merged, ps = {}) => {
        for (const key in ps) {
            const value = ps[key];

            if (key === 'style') {
                merged['style'] = { ...merged['style'], ...ps['style'] };
            } else if (key === 'className') {
                merged['className'] = [merged['className'], ps['className']].join(' ').trim() || undefined;
            } else if (isFunction(value)) {
                const fn = merged[key];

                merged[key] = fn
                    ? (...args: any[]) => {
                          fn(...args);
                          value(...args);
                      }
                    : value;
            } else {
                merged[key] = value;
            }
        }

        return merged;
    }, {});
}

export function classNames(...args: any[]) {
    if (args) {
        let classes: any = [];

        for (let i = 0; i < args.length; i++) {
            let className = args[i];

            if (!className) {
                continue;
            }

            const type = typeof className;

            if (type === 'string' || type === 'number') {
                classes.push(className);
            } else if (type === 'object') {
                const _classes = Array.isArray(className) ? className : Object.entries(className).map(([key, value]) => (value ? key : null));

                classes = _classes.length ? classes.concat(_classes.filter((c) => !!c)) : classes;
            }
        }

        return classes.join(' ').trim();
    }

    return undefined;
}
