import { ReactNode } from 'react'
// import rehypeRaw from 'rehype-raw'
import { MarkdownStyled } from './styles'

interface MarkdownProps {
  children: ReactNode
}

export default function Markdown({ children }: MarkdownProps) {
  const childrenAsString = children ? children.toString() : ''
  return (
    <>
      {/* //rehypePlugins={[rehypeRaw]} */}
      <MarkdownStyled>{childrenAsString}</MarkdownStyled>
    </>
  )
}
