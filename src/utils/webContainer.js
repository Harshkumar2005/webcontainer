import { WebContainer } from '@webcontainer/api';

export async function startWebContainer() {
  const webContainerInstance = await WebContainer.boot();
  await webContainerInstance.mount({
    'index.js': {
      file: { contents: 'console.log("Hello, WebContainer!");' }
    }
  });
  return webContainerInstance;
}
