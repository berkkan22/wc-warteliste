const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

// process.env.NODE_ENV = 'production';

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
    // create new window
    mainWindow = new BrowserWindow({});
    // load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // mainWindow.setMenu(null);

    // // build menu from template
    // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // // insert menu
    // Menu.setApplicationMenu(mainMenu);


});

// create menu templete
const mainMenuTemplate = [
    {
        label: 'File'
    }
];