// import json-server
const jsonServer = require('json-server')
// create server for media player app
const empserver = jsonServer.create()
// create middleware used by JSON Server.
const middleware = jsonServer.defaults()
// set up route for json file in server
const route = jsonServer.router('db.json')
// set up port for running srever app
const PORT = 3000 || process.env.PORT


empserver.use(middleware)
empserver.use(route)
empserver.listen(PORT,()=>{
    console.log(`Media Player Server Started at port ${PORT} and waiting for client request`);
})