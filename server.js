const express = require('express');
const {json, urlencoded, static} = express,
    {Server} = require('socket.io'),
    {ApolloServer}=require('apollo-server-express'),
    {authMiddleware} = require("./utils/auth"),
    typeDefs = require('./schema/typeDefs'),
    resolvers = require('./schema/resolvers'),
    path=require('path'),
    app = express(),
    PORT = process.env.PORT || 4005,
    mongoose = require("mongoose");

    // database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/clandestine_test", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

    //servers
const httpServer = require('http').createServer(app),
    io = new Server(httpServer,{
        cors:{
            origin:['http://localhost:3000','https://cshopv1.herokkuapp.com']
        }
    }),
    server = new ApolloServer({typeDefs, resolvers, context:authMiddleware});


async function startServer(){
    await server.start();
    app.use(json())
    app.use(urlencoded({extended: true}))
    app.use(static(path.join(__dirname, './client/build')))
    app.use(require('cors')());
    app.get("*",(req,res)=>{res.sendFile(path.join(__dirname, './client/build/index.html'))})
    server.applyMiddleware({app, cors: {origin: ["http://localhost:3000", "https://studio.apollographql.com"]}});

    await new Promise(resolve=>{
        httpServer.listen(PORT, resolve);
        console.log(`Server listening @ localhost:${PORT}/graphql`);
    });
}

io.on('connection', (socket)=>{
    console.log(socket.id);
    socket.emit('message', socket.id+" connected");
})




mongoose.connection.once('open', async()=>{
    await startServer();
})

