const http=require('http')

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
    res.write('welcome to our homepage')
    res.end()
   }
   if(req.url === '/about'){
    res.write('here is our short history')
    res.end()
   }
    res.end(`
    <h1>oops!</h2>
    <p>couldnt find the page ur looking for</p>
    <a href="/">go to homepage</a>
    `)
})

server.listen(5000)