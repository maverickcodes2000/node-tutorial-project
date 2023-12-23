const os = require('os')

const userinfo= os.userInfo()
console.log('total uptime is',os.uptime())

 const totalmem=os.totalmem()
const freemem=os.freemem()
const release=os.release()
console.log(totalmem,freemem,release,userinfo)