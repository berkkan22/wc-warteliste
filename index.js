const electron = require('electron');
const url = require('url');
const path = require('path');

const {
    app,
    BrowserWindow,
    Menu,
    globalShortcut
} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function () {
    // create new window
    mainWindow = new BrowserWindow({});
    // load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
    }));

    globalShortcut.register('F11', () => {
        toggleFullscreen();
    })

});

// create menu templete
const mainMenuTemplate = [{
    // label: 'Fullscreen',
    // submenu: [{
    //     role: 'togglefullscreen'
    // }],

    label: 'Fullscreen',
    click: () => {
        toggleFullscreen();
    },
    accelerator: 'F11'

}];

function toggleFullscreen() {
    if (mainWindow.isFullScreen()) {
        mainWindow.setFullScreen(false);
        // mainMenu.
    } else {
        mainWindow.setFullScreen(true);
    }
}

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});


/*
    ʕ•ᴥ•ʔ
*/