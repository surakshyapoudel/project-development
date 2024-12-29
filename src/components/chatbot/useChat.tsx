import { useState } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello, I am your assistant. How can I help you today?' },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const finalMessages: Message[] = [...messages, { role: 'user', content }]

    setMessages(finalMessages)
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalMessages),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      const assistantMessage: Message = { role: 'assistant', content: data.choices[0].message.content }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, an error occurred' }])
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, input, setInput, sendMessage, isLoading }
}
