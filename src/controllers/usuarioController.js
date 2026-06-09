import db from '../db/connection.js';

class UsuarioController {

  // LISTAR TODOS
  async listar(req, res) {
    try {
      const usuarios = await db('usuarios');
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({
        erro: error.message
      });
    }
  }

  // BUSCAR UM
  async buscar(req, res) {
    try {
      const { id } = req.params;
      const usuario = await db('usuarios')
        .where({ id })
        .first();

      if (!usuario) {
        return res.status(404).json({
          mensagem: 'Usuário não encontrado'
        });
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).json({
        erro: error.message
      });
    }
  }

  // CRIAR
  async criar(req, res) {
    try {
      const { nome, email } = req.body;

      if (!nome || !email) {
        return res.status(400).json({
          mensagem: 'Nome e email são obrigatórios'
        });
      }
      await db('usuarios').insert({
        nome,
        email
      });
      res.status(201).json({
        mensagem: 'Usuário criado com sucesso'
      });
    } catch (error) {
      res.status(500).json({
        erro: error.message
      });
    }
  }

  // ATUALIZAR
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      const usuarioExiste = await db('usuarios')
        .where({ id })
        .first();

      if (!usuarioExiste) {
        return res.status(404).json({
          mensagem: 'Usuário não encontrado'
        });
      }
      await db('usuarios')
        .where({ id })
        .update({
          nome,
          email
        });
      res.json({
        mensagem: 'Usuário atualizado'
      });
    } catch (error) {
      res.status(500).json({
        erro: error.message
      });
    }
  }

  // DELETAR
  async deletar(req, res) {
    try {
      const { id } = req.params;
      const usuarioExiste = await db('usuarios')
        .where({ id })
        .first();

      if (!usuarioExiste) {
        return res.status(404).json({
          mensagem: 'Usuário não encontrado'
        });
      }

      await db('usuarios')
        .where({ id })
        .del();

      res.json({
        mensagem: 'Usuário deletado'
      });
    } catch (error) {
      res.status(500).json({
        erro: error.message
      });
    }
  }
}

export default new UsuarioController();