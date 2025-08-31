import * as db from '../repository/eventosRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.get('/eventos', async (req, resp) => {
    try {
        let registros = await db.listarTodosEventos();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/eventos/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let registros = await db.consultarEventoPorId(id);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/eventos', async (req, resp) => {
    try {
        let evento = req.body;
        let id = await db.inserirEvento(evento);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/eventos/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let evento = req.body;

        let linhasAfetadas = await db.alterarEvento(id, evento);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/eventos/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerEvento(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;