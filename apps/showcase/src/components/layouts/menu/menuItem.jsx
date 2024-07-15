'use client';

import { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MenuItem = (props) => {
    const pathname = usePathname()
    const { menuItem, root } = props;

    const btnRef = useRef(null);

    const isActiveRootmenuItem = (rootItem) => {
        return rootItem.children && !rootItem.children.some((item) => item.to === pathname || (item.children && item.children.some((it) => it.to === pathname)));
    };

    return (
        <li>
            {menuItem.children && root && (
                <>
                {/* <StyleClass nodeRef={btnRef} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup"> */}
                    <button ref={btnRef} type="button" className="px-link">
                        <span className="menu-icon">
                            <i className={menuItem.icon} />
                        </span>
                        <span>{menuItem.name}</span>
                        <i className="menu-toggle-icon pi pi-angle-down" />
                    </button>
                {/* </StyleClass> */}
                </>
            )}
            {menuItem?.href && (
                <Link href={menuItem.href} passHref>
                   
                        {menuItem?.icon && root && (
                            <span className="menu-icon">
                                <i className={menuItem?.icon} />
                            </span>
                        )}
                        <span>{menuItem?.name}</span>
                        {/* {menuItem?.badge && <Badge value={menuItem?.badge} className="ml-auto" />} */}
                  
                </Link>
            )}
            {menuItem?.to && (
                <Link href={menuItem?.to} passHref>
                   
                        {menuItem?.icon && root && (
                            <span className="menu-icon">
                                <i className={menuItem.icon} />
                            </span>
                        )}
                        <span>{menuItem?.name}</span>
                        {/* {menuItem?.badge && <Badge value={menuItem.badge} className="ml-auto" />} */}
                
                </Link>
            )}
            {!root && menuItem.children && <span className="menu-child-category">{menuItem?.name}</span>}
            {menuItem?.children && (
                <div className={'overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out'}>
                    <ol>
                        {menuItem.children.map((item, index) => (
                            <MenuItem root={false} menuItem={item} key={`_root${index}`} />
                        ))}
                    </ol>
                </div>
            )}
        </li>
    );
};

export default MenuItem;
