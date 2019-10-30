var socket = io();

// Los on son para Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexcion con el servidor');
});

// Enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Alejandro',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del server: ', resp);
});

// Escuchar informacion del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});