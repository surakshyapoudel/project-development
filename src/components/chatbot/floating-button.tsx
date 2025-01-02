import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

interface FloatingButtonProps {
  onClick: () => void
}

export function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <Button
      className="fixed bottom-4 [&_svg]:size-6 right-4 rounded-full w-16 h-16 p-0 text-xl"
      onClick={onClick}
    >
      <MessageCircle className="w-20 h-20" />
    </Button>
  )
}

