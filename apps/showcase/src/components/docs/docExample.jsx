const DocExample = ({ children }) => {
    return (
        <pre className="doc-section-example">
            <code>
                {children}
            </code>
        </pre>
    )
};

export default DocExample;
