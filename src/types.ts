import { SimplePaginator } from "@adonisjs/lucid/database"

export type Page<T> = {
    data: T[]
    meta: SimplePaginator
    pageLinks: {
      isActive: boolean
      url: string
      page: number
    }[]
    nextPageUrl: string | null
    prevPageUrl: string | null
  }
  