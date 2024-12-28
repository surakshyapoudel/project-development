import type { HttpContext } from '@adonisjs/core/http'
import { LucidRow, ModelPaginatorContract } from '@adonisjs/lucid/types/model'

export const getPageNumber = (request: HttpContext['request']) => {
    const pageQuery = Number.parseInt(request.qs().page)
    return Number.isNaN(pageQuery) ? 1 : pageQuery
}

export function getPaginationData<T extends LucidRow>(data: ModelPaginatorContract<T>, baseUrl: string) {
    data.baseUrl(baseUrl)
    return {
        ...data.toJSON(),
        pageLinks: data.getUrlsForRange(1, data.lastPage),
        nextPageUrl: data.getNextPageUrl(),
        prevPageUrl: data.getPreviousPageUrl(),
    }

}