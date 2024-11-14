import { app, BrowserWindow } from 'electron';
import path from 'path'
import { isDev } from './util.js';

const devURL: string = 'http://localhost:5123'
const prodURL: string = '/dist-views/index.html'

app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    if (isDev()) {
        mainWindow.loadURL(devURL);
    }
    else {
        mainWindow.loadFile(path.join(app.getAppPath() + prodURL))
    }

});
