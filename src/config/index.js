import isElectron from 'is-electron';
import path from 'path';

function ensureFirstBackSlash(str) {
  return str.length > 0 && str.charAt(0) !== '/'
    ? '/' + str
    : str;
}

function uriFromPath(_path) {
  const pathName = path.resolve(_path).replace(/\\/g, '/');

  return encodeURI('file://' + ensureFirstBackSlash(pathName));
}

const vsElectronPath = uriFromPath(
  path.join(__dirname, '../node_modules/monaco-editor/min/vs')
);

const vs = isElectron()
  ? vsElectronPath
  : 'https://cdn.jsdelivr.net/npm/monaco-editor@0.20.0/min/vs'

// console.log('[monaco-editor-electron] using vs:', vs);

const config = {
  paths: {
    vs,
  },
}

export default config;
