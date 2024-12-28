import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare image: string

  @column()
  declare content: string

  @column()
  declare author: string

  @column()
  declare category: string


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime


  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}