import { useContext } from 'react'
import { Container, PublicationHeader, PublicationItem } from './styles'
import { PublicationContext } from '../../contexts/publicationsContext'

function PublicationsGallery() {
  const { publications } = useContext(PublicationContext)
  return (
    <Container>
      {publications.map((publication) => {
        console.log(publication.shortBody)
        const text = publication.shortBody
        const characterLimit = 440

        if (text?.length > characterLimit) {
          // text = text.slice(0, characterLimit) + '...'
        }
        return (
          <>
            <PublicationItem
              key={publication.number}
              href={`/publications/${publication.number}`}
            >
              <PublicationHeader>
                <h4>{publication.title}</h4>
                <span title="Dia 23/03/2023">Há 1 dia</span>
              </PublicationHeader>
              <p>{text}</p>
              {/* <Markdown>{text}</Markdown> */}
              {/* <Markdown rehypePlugins={[rehypeRaw]}>{text}</Markdown> */}
            </PublicationItem>
          </>
        )
      })}
    </Container>
  )
}

export default PublicationsGallery
