import type Article from '#models/article'
import { BaseLayout } from '@/components/layout/base-layout'
import { Badge } from "@/components/ui/badge"
import { formatDateTime } from '@/lib/utils'
function ArticleShow({article} : {
    article : Article
}) {
  return (
    <main className="container mx-auto px-4 py-8">
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <Badge className="mb-2">{article.category}</Badge>
        <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {article.author}</span>
          <time>{formatDateTime(article.createdAt)}</time>
        </div>
      </header>

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div 
        className="mdEditor max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <footer className="text-sm text-gray-500">
        <p>Last updated: {formatDateTime(article.updatedAt)}</p>
      </footer>
    </article>
  </main>
  )
}
BaseLayout
ArticleShow.layout = BaseLayout

export default ArticleShow