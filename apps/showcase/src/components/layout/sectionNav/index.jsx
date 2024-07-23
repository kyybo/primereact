import Link from "next/link";

const SectionNav = ({ sections, className }) => {
    const createItem = ({ id, label, children }, level = 0) => {

        return (
            <li key={id} className={'navbar-item'}>
                <div className="navbar-item-content">
                    <Link href={`#${id}`}>
                        <button className="px-link" title={label}>
                            {label}
                        </button>
                    </Link>
                </div>

                <ul>{level !== 1 && children && children.map((child) => createItem(child, 1))}</ul>
            </li>
        );
    };


    return (
        <ul className={className}>
            {sections.map((item) => createItem(item))}
        </ul>
    );
}

export default SectionNav;
