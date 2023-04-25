import { useContext } from 'react'
import { Container, PublicationHeader, PublicationItem } from './styles'
import { PublicationContext } from '../../contexts/publicationsContext'

function PublicationsGallery() {
  const { publications } = useContext(PublicationContext)
  return (
    <Container>
      {publications.map((publication) => {
        return (
          <>
            <PublicationItem href="#">
              <PublicationHeader>
                <h4>{publication.title}</h4>
                <span title="Dia 23/03/2023">Há 1 dia</span>
              </PublicationHeader>
              <p>{publication.body}</p>
            </PublicationItem>
          </>
        )
      })}
    </Container>
  )
}

export default PublicationsGallery
