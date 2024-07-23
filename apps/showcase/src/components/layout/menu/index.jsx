'use client';

import { usePathname } from 'next/navigation'
import MenuItem from "./menuItem";
import MenuData from './menu.json';

const Menu = ({ className }) => {
    const pathname = usePathname()

    const menuItems = MenuData.data.map((data) => {
        const rootItem = { ...data };

        rootItem.expanded = rootItem.children && rootItem.children.some((item) => item.to === pathname || (item.children && item.children.some((it) => it.to === pathname)));

        return rootItem;
    });

    return (
        <aside className={className}>
            <nav>
                <ol className="layout-menu">
                    {menuItems.map((item, index) => (
                        <MenuItem menuItem={item} root={true} key={`_root${index}`} />
                    ))}
                </ol>
            </nav>
        </aside>
    );
};

export default Menu;
