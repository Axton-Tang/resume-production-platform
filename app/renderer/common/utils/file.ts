import fs, { promises as fsPromiseAPIs } from 'fs';

const fileAction = {
  read: (path: string, encoding: BufferEncoding): Promise<string> => {
    return fsPromiseAPIs.readFile(path, { encoding: encoding || 'utf8' });
  },
  write: (path: string, content: any, encoding: BufferEncoding): Promise<void> => {
    let updateContent = typeof content === 'string' ? content : JSON.stringify(content);
    return fsPromiseAPIs.writeFile(path, updateContent, { encoding: encoding || 'utf8' });
  },
  rename: (oldPath: string, newPath: string) => {
    return fsPromiseAPIs.rename(oldPath, newPath);
  },
  delete: (path: string) => {
    return fsPromiseAPIs.unlink(path);
  },
  hasFile: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.F_OK);
  },
  canWrite: (path: string): Promise<void> => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  canRead: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
  readDir: (path: string): Promise<string[]> => {
    return fsPromiseAPIs.readdir(path);
  },

  mkdirDir: (path: string) => {
    return fsPromiseAPIs.mkdir(path, { recursive: true });
  },
  isExitsFoler: (path: string) => {
    return fs.existsSync(path);
  },
};

export default fileAction;
