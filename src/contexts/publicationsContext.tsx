import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../libs/axios'
import { getPlainText } from '../libs/markdown'

interface IPublication {
  number: string
  title: string
  body: string
  shortBody: string
  createdAt: Date
}

interface PublicationResponse {
  number: string
  title: string
  body: string
  created_at: Date
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
    const publicationsArray: IPublication[] = []

    api.get('repos/patricfonseca/ignite-github-blog/issues').then((resp) => {
      resp.data.forEach((publication: PublicationResponse) => {
        const pub = {} as IPublication

        pub.body = publication.body
        pub.number = publication.number
        pub.title = publication.title
        pub.createdAt = new Date(publication.created_at)
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
