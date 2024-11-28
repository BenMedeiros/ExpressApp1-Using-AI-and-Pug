const activeConnections = [];
console.log('tracking connections');

// Middleware to track connections
module.exports = (req, res, next) => {
    // Add connection details to the activeConnections array
    const connectionInfo = {
        id: req.socket.remoteAddress + ':' + req.socket.remotePort,
        timestamp: new Date(),
    };

    activeConnections.push(connectionInfo);
    console.log('connection added', activeConnections);

    // Clean up connections when they're closed
    req.on('close', () => {
        activeConnections.splice(activeConnections.findIndex(conn => conn.id !== connectionInfo.id));
        console.log('connection removed', activeConnections);
    });

    next();
}