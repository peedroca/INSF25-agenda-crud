import con from "./connection.js";


export async function inserirEvento(evento) {
    const comando = `
        insert into tb_eventos (titulo, descricao, data_do_evento) 
					        values (?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [evento.titulo, evento.descricao, evento.dataevento])
    let info = resposta[0];
    
    return info.insertId;
}

export async function listarTodosEventos() {
    const comando = `
        select id_evento            id,
               titulo               titulo,
               descricao            descricao,
               data_do_evento       dataevento
          from tb_eventos
    `;

    let resposta = await con.query(comando);
    return resposta[0];
}

export async function consultarEventoPorId(idEvento) {
    const comando = `
        select id_evento            id,
               titulo               titulo,
               descricao            descricao,
               data_do_evento       dataevento
          from tb_eventos
          where id_evento = ?
    `;

    let resposta = await con.query(comando, [idEvento]);
    let registros = resposta[0][0];

    return registros;
}

export async function alterarEvento(id, evento) {
    const comando = `
         update tb_eventos
            set titulo = ?,
                descricao = ?,
                data_do_evento = ?
            where id_evento = ?;
    `

    let resposta = await con.query(comando, [evento.titulo, evento.descricao, evento.dataevento, id])
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerEvento(id) {
    const comando = `
        delete from tb_eventos
         where id_evento = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}
