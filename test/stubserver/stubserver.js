const restify = require('restify');
const server = restify.createServer({
    name: 'stubserver'
});
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.put('/authenticateUser', function (req, res, next) {
    res.send(require('../responses/authenticate/authenticate.json'));
    res.status(200);
    return next();
});

server.get('/fetchTasks', function (req, res, next) {
    res.send(require('../responses/tasks/tasks.json'));
    res.status(200);
    return next();
});

module.exports = server;