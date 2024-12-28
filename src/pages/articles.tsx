import type Article from '#models/article'
import ArticleCard from '@/components/article-card'
import { BaseLayout } from '@/components/layout/base-layout'
import PaginationLinks from '@/components/pagination-links'
import { Page } from '@/types'



function ArticlePage(props: {
  articles: Page<Article>
}) {

  return (
    <div className='container mx-auto my-6 px-4'>
    <h1 className='text-3xl font-bold text-center my-6'>Our Articles</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {
      props.articles.data.map(article => (
        <ArticleCard author={article.author} createdAt={new Date(article.createdAt.toString()).toLocaleString()} key={article.id} id={article.id} description={article.description} image={article.image} title={article.title} />
      ))
    }
    </div>
    <PaginationLinks data={props.articles} />
  </div>
  )
}

ArticlePage.layout = BaseLayout

export default ArticlePage