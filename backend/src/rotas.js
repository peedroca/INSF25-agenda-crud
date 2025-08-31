import eventosController from './controller/eventosController.js'

export default function adicionarRotas(servidor) {
    servidor.use(eventosController);
}