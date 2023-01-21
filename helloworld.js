// msg dans console
console.log('HELLO WORLD')

// creation server
const http=require('http')
const server=http.createServer((req,res)=>{
    res.write('<h1>Hello Node!!!!</h1>') 
    res.end()
})
server.listen(3000,(err)=>{
    err?console.log(err): console.log('you are conected with the port 3000')
})
// creation a new file with msg
const fs = require('fs')
fs.writeFile('welcome.txt','hello node',(err)=>{
err?console.log('err'): console.log('la creation is done')
})
