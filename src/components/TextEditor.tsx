import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

type TTextEditorProps = {
  value?: string;
  onChangeCallBack: (value: string) => void;
};
const TextEditor = ({ value = "", onChangeCallBack }: TTextEditorProps) => {
  console.log(value);
  return <ReactQuill theme="snow" value={value} onChange={onChangeCallBack} />;
};

export default TextEditor;
