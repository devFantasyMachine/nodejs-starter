'use strict'

import http from "http";
import app from "./src/app";


const PORT = process.env.PORT || '3000'
const httpServer = http.createServer(app);


httpServer.listen(PORT, () => console.info('Server on port ' + PORT));

httpServer.on('connection', (stream) => {

    console.warn('someone connected! with remote address ' + stream.remoteAddress + " and remote port " + stream.remotePort);
});

