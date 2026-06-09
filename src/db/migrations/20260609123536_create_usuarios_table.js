export async function up(knex) {
  await knex.schema.createTable('usuarios', table => {
    table.increments('id').primary();
    table.string('nome', 120).notNullable();
    table.string('email', 120).notNullable();
  });
}

export async function down(knex) {
  await knex.schema.dropTable('usuarios');
}