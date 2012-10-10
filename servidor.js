var mesclient = {message:''};
var io = require('./socket.io/lib/socket.io').listen(8081);
var chat = io
  .of('/chat')
  .on('connection', function (socket) {
	socket.on('from client', function(data){
		mesclient = data;
		chat.emit('from server',{message:'Did you said: '+mesclient.message + '?'});
	});
  });