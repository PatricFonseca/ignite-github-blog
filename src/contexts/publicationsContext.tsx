import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../libs/axios'
import { getPlainText } from '../libs/markdown'

interface IPublication {
  number: string
  title: string
  body: string
  shortBody: string
}

interface PublicationContextProps {
  publications: Array<IPublication>
  addPublications: (publications: IPublication[]) => void
}

export const PublicationContext = createContext({} as PublicationContextProps)

interface PublicationProps {
  children: ReactNode
}

export function PublicationsProvider({ children }: PublicationProps) {
  const [publications, setPublications] = useState<IPublication[]>([])

  function addPublications(publications: IPublication[]) {
    setPublications(publications)
  }

  useEffect(() => {
    // function extractTextFromMarkdown(markdown: string): string {
    //   const tree = unified().use(remarkParse).parse(markdown)

    //   function extractText(node: Node): string {
    //     if (node.type === 'text') {
    //       return mdastToString(node)
    //     } else if (isNodeWithChildren(node)) {
    //       return node.children.map(extractText).join('')
    //     }
    //     return ''
    //   }

    //   const plainText = extractText(tree)

    //   return plainText
    // }

    // function getPlainText(body: string) {
    //   return extractTextFromMarkdown(body)
    // }

    const publicationsArray: IPublication[] = []

    api.get('repos/patricfonseca/ignite-github-blog/issues').then((resp) => {
      resp.data.forEach((publication: IPublication) => {
        const pub = {} as IPublication

        pub.body = publication.body
        pub.number = publication.number
        pub.title = publication.title
        pub.shortBody = getPlainText(publication.body)
        publicationsArray.push(pub)
      })

      setPublications(publicationsArray)
    })
  }, [])

  return (
    <PublicationContext.Provider value={{ publications, addPublications }}>
      {children}
    </PublicationContext.Provider>
  )
}
