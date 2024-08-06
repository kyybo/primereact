import * as React from 'react';

export interface BaseOptions<P, R = undefined> {
    props?: P | undefined;
    ref?: React.Ref<R> | undefined;
}

export interface useGlobalProps {
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
    children?: React.ReactNode | undefined;
}

export type withInProps<P> = P & { [key: string]: any };

export type withTypeProps<P> = P & { __TYPE: string };
