import { Socket} from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';


export const desconectar = (cliente: Socket) =>{
    
    cliente.on('disconnect', () =>{
        console.log('Cliente desconectado');
    });
}

export const mensaje = (cliente: Socket, io: SocketIOServer) =>{
    cliente.on('mensaje', (payload: {de: string, cuerpo: string}) =>{
        console.log('Mensajes recibido', payload);

        io.emit('mensaje-nuevo', payload);
    });
}

