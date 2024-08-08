import * as React from 'react';

export default class {
    _styles;
    _attrs;
    constructor({ attrs }: any = {}) {
        this._styles = new Map();
        this._attrs = attrs || {};
    }
    add(key: string, css: string) {
        const _attrs = Object.entries(this._attrs)
            .reduce((acc: any, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        this._styles.set(key, {
            css,
            tag: `<style ${_attrs} data-primereact-style-id="${key}">${css}</style>`,
            element: (
                <style {...this._attrs} data-primereact-style-id={key} key={key}>
                    {css}
                </style>
            )
        });
    }
    update() {
        // @todo
    }
    delete(key: string) {
        this._styles.delete(key);
    }
    clear() {
        this._styles.clear();
    }
    get(key: string) {
        return this._styles.get(key);
    }
    getAllCSS() {
        return [...this._styles.values()].map((style: any) => style.css).filter(String);
    }
    getAllTags() {
        return [...this._styles.values()].map((style: any) => style.tag).filter(String);
    }
    getAllElements() {
        return [...this._styles.values()].map((style) => style.element);
    }
    has(key: string) {
        return this._styles.has(key);
    }
}
