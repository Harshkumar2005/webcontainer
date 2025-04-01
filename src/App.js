import React from 'react';
import Editor from './components/Editor';
import Terminal from './components/Terminal';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Editor />
      <Terminal />
    </div>
  );
}

export default App;
