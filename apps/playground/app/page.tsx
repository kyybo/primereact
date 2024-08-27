'use client';
import { usePanel } from '@primereact/base/usepanel';
import * as Panel from '@primereact/composite/panel';
import { Component } from '@primereact/core/component';

export default function Home() {
    const { state, $sections } = usePanel({ toggleable: true }) as any;

    return (
        <div className="card flex flex-col gap-4">
            <Panel.Root toggleable>
                <Panel.Header>
                    <Panel.Header.Title>Header</Panel.Header.Title>
                    <Panel.Header.Actions>
                        <Panel.ToggleButton />
                    </Panel.Header.Actions>
                </Panel.Header>
                <Component>
                    {({ state }: any) =>
                        !state.collapsed ? (
                            <Panel.Content>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </p>
                                <Panel.Footer>Footer</Panel.Footer>
                            </Panel.Content>
                        ) : null
                    }
                </Component>
            </Panel.Root>

            <div {...$sections.root}>
                <div {...$sections.header}>
                    <div {...$sections.title}> Header </div>
                    <button {...$sections.toggleButton}>-</button>
                </div>
                <div {...$sections.contentContainer}>
                    {!state.collapsed ? (
                        <div {...$sections.content}>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    ) : null}
                </div>
                <div {...$sections.footer}>Footer</div>
            </div>
        </div>
    );
}
