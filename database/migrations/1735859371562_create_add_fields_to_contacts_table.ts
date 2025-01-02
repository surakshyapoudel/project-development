import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contacts'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('address').defaultTo("")
      table.string('company_name').defaultTo("")
      table.string('country').defaultTo("")
      table.string('job_title').defaultTo("")
      table.string('job_detail').defaultTo("")
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}