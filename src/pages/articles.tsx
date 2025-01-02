import type Article from '#models/article'
import ArticleCard from '@/components/article-card'
import { BaseLayout } from '@/components/layout/base-layout'
import PaginationLinks from '@/components/pagination-links'
import TitleBox from '@/components/titlebox'
import { Page } from '@/types'



function ArticlePage(props: {
  articles: Page<Article>
}) {

  return (
    <>
    <TitleBox title="Articles" />
    <div className='container mx-auto my-6 px-4'>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {
      props.articles.data.map(article => (
        <ArticleCard key={article.id} {...article} />
      ))
    }
    </div>
    <PaginationLinks data={props.articles} />
  </div>
    </>
  )
}

ArticlePage.layout = BaseLayout

export default ArticlePage