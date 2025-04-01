import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    monaco.editor.create(editorRef.current, {
      value: '// Start coding here!',
      language: 'javascript',
      theme: 'vs-dark'
    });
  }, []);

  return <div ref={editorRef} className="w-2/3 h-full"></div>;
};

export default Editor;
