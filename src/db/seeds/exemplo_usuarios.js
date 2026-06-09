export async function seed(knex) {
  await knex('usuarios').del();
  await knex('usuarios').insert([
    {
      nome: 'Daniel',
      email: 'daniel@email.com'
    },
    {
      nome: 'Maria',
      email: 'maria@email.com'
    }
  ]);
}