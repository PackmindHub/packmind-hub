import CodeMirror from '@uiw/react-codemirror';
import CodeMirrorMerge from "react-codemirror-merge";
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;

interface ExamplesProps {
    lang: string;
    positive?: string;
    negative?: string;
}

export const Example = ({lang, positive, negative}: ExamplesProps) => {
    if (positive && negative) {
        return (
            <CodeMirrorMerge>
                <Original 
                    value={negative} 
                    extensions={[
                        javascript({ typescript: true }),
                        oneDark
                    ]}
                />
                <Modified
                    value={positive}
                    extensions={[
                        EditorView.editable.of(false), 
                        EditorState.readOnly.of(true),
                        javascript({ typescript: true }),
                        oneDark
                    ]}
                />
            </CodeMirrorMerge>
        );
    };
    return <></>;
}
