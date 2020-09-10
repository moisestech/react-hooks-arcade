import * as React from "react";
import marked from "marked";
import ReactMarkdown from "react-markdown";
import "./index.css";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = React.useState("# type here");

  function handleTextChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="markdown-editor app-body">
      <textarea onChange={handleTextChange} value={markdown} />

      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}

      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
