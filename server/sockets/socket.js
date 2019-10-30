const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    // Enviar informacion al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar informacion del Cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo ok'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo mal'
        //     })
        // }

    });


});