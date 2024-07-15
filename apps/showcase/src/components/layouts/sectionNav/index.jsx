const SectionNav = ({ sections }) => {
    return (
        <nav className="section-nav">
        <ul>
            {sections.map((section, index) => (
            <li key={index}>
                <a href={`#${section.id}`}>{section.title}</a>
            </li>
            ))}
        </ul>
        </nav>
    );
}

export default SectionNav;
