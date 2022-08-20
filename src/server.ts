import express from 'express';

const server = express()
const PORT = Number( process.env.NODE_PORT ) || 5000;


server.get( '/', ( req, res ) => res.end( "Hello Wolrd!" ) );

server.listen( PORT, () => console.log( `Server started on port: ${ PORT }` ) );
