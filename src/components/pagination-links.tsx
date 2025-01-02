import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from '@/components/ui/pagination'
  import { cn } from '@/lib/utils'
  import { Page } from '@/types'
  
  const PaginationLinks = <T extends any>({
    data,
    nextandprevonly,
    className,
  }: {
    data: Page<T>
    nextandprevonly?: boolean
    className?: string
  }) => {
    return (
      <Pagination className={cn('my-4 pt-10 mx-0', className)}>
        <PaginationContent className="m-0">
          <PaginationItem className="list-none">
            <PaginationPrevious
              className="text-black"
              href={data.prevPageUrl ?? '#'}
              isActive={!!data.prevPageUrl}
              disabled={!data.prevPageUrl}
            />
          </PaginationItem>
  
          {!nextandprevonly &&
            data.pageLinks.map((link, i) => {
              return (
                <PaginationItem key={i} className="list-none">
                  <PaginationLink
                    href={link.url ?? '#'}
                    isActive={link.isActive}
                    disabled={link.url === null}
                  >
                    {link.page}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
  
          <PaginationItem className="list-none">
            <PaginationNext
              className="text-black"
              href={data.nextPageUrl ?? '#'}
              isActive={!!data.nextPageUrl}
              disabled={!data.nextPageUrl}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  
  export default PaginationLinks