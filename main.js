var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
    if(process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        show: false,
        width: 1400,
        height: 658,
        center: true,
        title: 'Unsplashify',
        icon: __dirname + '/public/img/logo.png'
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.webContents.on('did-finish-load', function() {
        mainWindow.setMinimumSize(800, 400);
        mainWindow.openDevTools();
        mainWindow.show();
        mainWindow.focus();
    });

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});