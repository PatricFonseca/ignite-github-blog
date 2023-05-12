import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { toString as mdastToString } from 'mdast-util-to-string'

import { Node } from 'unist'

function extractTextFromMarkdown(markdown: string): string {
  const tree = unified().use(remarkParse).parse(markdown)

  // Função de verificação de tipo personalizada para nós com propriedade 'children'
  function isNodeWithChildren(node: Node): node is Node & { children: Node[] } {
    return (
      'children' in node &&
      Array.isArray((node as { children: unknown }).children)
    )
  }

  function extractText(node: Node): string {
    if (node.type === 'text') {
      return mdastToString(node)
    } else if (isNodeWithChildren(node)) {
      return node.children.map(extractText).join('')
    }
    return ''
  }

  const plainText = extractText(tree)

  return plainText
}

export function getPlainText(text: string) {
  return extractTextFromMarkdown(text)
}
