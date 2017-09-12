const {app, BrowserWindow} = require('electron')
let win
function createWindow(){
  win = new BrowserWindow({
    width:1100, 
    height:850,
    frame:false,
    minWidth:1000,
    minHeight:750,
    transparent:false,
  })
  win.loadURL(`file://${__dirname}/index.html`)
  // win.webContents.openDevTools()//开启调试工具
  win.show()
  win.on('close', () => {
      win = null
  })
  // win.on('resize', () => {
  //     win.reload()
  // })
}
app.on('ready', createWindow)
app.on('window-all-cloased', () => {
  if(process.platform !== 'drawin' ){
      app.quit()
  }
})
app.on('activate', () => {
  if(win === null){
      createWindow()
  }
})