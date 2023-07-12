import { createContext } from 'react';
import { Socket, io } from 'socket.io-client';

import useEnv from '@hooks/useEnv';

const { DOMAIN } = useEnv();

export const socket: Socket = io(`ws://${DOMAIN}:80`, {
  autoConnect: true,
  reconnection: true,
});

export const WebSocketContext = createContext<Socket>(socket);
