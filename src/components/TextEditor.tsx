import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

import { useState } from "react";

const TextEditor = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};

export default TextEditor;
