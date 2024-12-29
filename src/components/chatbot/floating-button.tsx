import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

interface FloatingButtonProps {
  onClick: () => void
}

export function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full w-16 h-16"
      onClick={onClick}
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  )
}

