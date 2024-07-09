const DocCodeBlock = ({ children }) => {
    return (
        <pre className="doc-section-code">
            <code>
                {children}
            </code>
        </pre>
    )
};

export default DocCodeBlock
