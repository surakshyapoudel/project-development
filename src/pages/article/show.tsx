import type Article from '#models/article'
import { BaseLayout } from '@/components/layout/base-layout'

function ArticleShow(props : {
    article : Article
}) {
  return (
    <div className=' container mx-auto'>
        <img src={props.article.image} />
        <h1>{props.article.title}</h1>
        <p>{props.article.description}</p>
        <div className='mdEditor' dangerouslySetInnerHTML={{__html: props.article.content}}></div>

        
    </div>
  )
}
BaseLayout
ArticleShow.layout = BaseLayout

export default ArticleShow