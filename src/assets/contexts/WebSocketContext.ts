import { io, Socket } from 'socket.io-client';
import useEnv from '@hooks/useEnv';
import { createContext } from 'react';

const { DOMAIN } = useEnv();

export const socket: Socket = io(`ws://${DOMAIN}:80`, {
  autoConnect: true,
  reconnection: true,
});

export const WebSocketContext = createContext<Socket>(socket);
