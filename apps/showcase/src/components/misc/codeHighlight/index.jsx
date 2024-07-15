import PrismLoader from "@/components/misc/prism-loader";
import useHasMounted from "@/hooks/useHasMounted";

const CodeHighlight = ({ children, style, lang }) => {
    const hasMounted = useHasMounted();

    if (!hasMounted) {
        return null;
    }
    
    const languageClassName = `language-${lang || 'jsx'}`;

    return (
        <div>
            <pre style={style} tabIndex="-1">
                <code className={languageClassName}>
                    {children}
                </code>
            </pre>
            <PrismLoader />
        </div>
    )
};

export default CodeHighlight
