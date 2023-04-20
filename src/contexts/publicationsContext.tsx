import { createContext, ReactNode, useState } from 'react'

interface IPublication {
  title: string
  body: string
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

  return (
    <PublicationContext.Provider value={{ publications, addPublications }}>
      {children}
    </PublicationContext.Provider>
  )
}
