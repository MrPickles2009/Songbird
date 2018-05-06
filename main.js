const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

//var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':songbirddb:');

const path = require('path')
const url = require('url')
const Menu = electron.Menu

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		resizable: true,
		icon: 'app/img/songbird_logo.png'
	})

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, '/app/pages/index.html'),
		protocol: 'file:',
		slashes: true
	}))

	// Open the DevTools.
	// mainWindow.webContents.openDevTools()

	mainWindow.on('closed', function () {
		mainWindow = null
	})
}

	app.on('ready', function () {
	createWindow();

	const template = [
		{
			label: 'File',
			submenu: [
				{ label: 'Preferences...',
				click() { require('electron').shell.open('app/pages/settings.html'); } },
				{ type: 'separator' },
				{ role: 'quit' }
			]
		},
		{
			label: 'Edit',
			submenu: [
				{ role: 'undo' },
				{ role: 'redo' },
				{ type: 'separator' },
				{ role: 'cut' },
				{ role: 'copy' },
				{ role: 'paste' },
				{ role: 'pasteandmatchstyle' },
				{ role: 'delete' },
				{ role: 'selectall' }
			]
		},
		{
			label: 'View',
			submenu: [
				{ role: 'reload' },
				{ type: 'separator' },
				{ role: 'togglefullscreen' },
				{ type: 'separator' },
				{ role: 'resetzoom' },
				{ role: 'zoomin' },
				{ role: 'zoomout' }
			]
		},
		{
			role: 'window',
			submenu: [
				{ role: 'minimize' },
				{ role: 'close' }
			]
		},
		{
			role: 'help',
			submenu: [
				{
					label: 'Learn More',
					click() { require('electron').shell.openExternal('https://electron.atom.io') }
				}
			]
		}
	]

	const menu = Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu)

});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow()
	}
})