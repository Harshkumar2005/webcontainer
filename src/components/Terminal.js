import React, { useEffect, useState } from 'react';
import { WebContainer } from '@webcontainer/api';

const Terminal = () => {
  const [terminalOutput, setTerminalOutput] = useState('');
  const [command, setCommand] = useState('');

  useEffect(() => {
    async function startWebContainer() {
      const webContainerInstance = await WebContainer.boot();
      await webContainerInstance.mount({
        'index.js': {
          file: { contents: 'console.log("Hello, World!");' }
        }
      });
    }
    startWebContainer();
  }, []);

  const runCommand = async () => {
    const webContainerInstance = await WebContainer.boot();
    const process = await webContainerInstance.spawn('sh', ['-c', command]);
    process.output.pipeTo(
      new WritableStream({
        write(chunk) {
          setTerminalOutput(prev => prev + chunk);
        }
      })
    );
  };

  return (
    <div className="w-1/3 h-full bg-black p-4">
      <div className="border border-gray-700 p-2 h-5/6 overflow-y-auto">
        <pre>{terminalOutput}</pre>
      </div>
      <input
        type="text"
        className="w-full p-2 mt-2 bg-gray-800 text-white"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && runCommand()}
        placeholder="Type a command..."
      />
    </div>
  );
};

export default Terminal;
