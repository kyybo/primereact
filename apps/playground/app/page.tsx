'use client';
import { usePanel } from '@primereact/base/usepanel';
import * as CPanel from '@primereact/composite/panel';
import { Panel } from 'primereact/panel';

export default function Home() {
    const panel = usePanel({}) as any;

    return (
        <>
            <Panel pt={{ root: 'test' }}></Panel>
            <CPanel.Root>
                <CPanel.Header>
                    <CPanel.HeaderTitle>THeader</CPanel.HeaderTitle>
                </CPanel.Header>
                <CPanel.Footer>TFooter</CPanel.Footer>
            </CPanel.Root>
            <div {...panel.$sections.root}>
                <span {...panel.$sections.header}>TTHeader</span>
                <span {...panel.$sections.footer}>TTFooter</span>
            </div>
        </>
    );
}
