const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.on('window-all-closed', () => {

	// Users quit explicitly on mac
	if(process.platform != 'darwin') app.quit()

})

app.on('ready', () => {

	mainWindow = new BrowserWindow({width: 800, height: 600})
	mainWindow.loadURL(`file://${__dirname}/windows/main.html`)

	// Open dev tools
	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', () => {
		mainWindow = null
	})

})
