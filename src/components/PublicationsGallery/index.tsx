import { useContext } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { Container, PublicationHeader, PublicationItem } from './styles'
import { PublicationContext } from '../../contexts/publicationsContext'
import ptBR from 'date-fns/locale/pt-BR'

function PublicationsGallery() {
  const { publications } = useContext(PublicationContext)
  return (
    <Container>
      {publications.map((publication) => {
        const text = publication.shortBody
        const characterLimit = 440
        const dataFormatted = format(
          publication.createdAt,
          "d 'de' LLLL 'às' HH:mm'h'",
          {
            locale: ptBR,
          },
        )
        const createdAtRelativeToNow = formatDistanceToNow(
          publication.createdAt,
          {
            locale: ptBR,
            addSuffix: true,
          },
        )

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
                <time
                  title={dataFormatted}
                  dateTime={publication.createdAt.toISOString()}
                >
                  {createdAtRelativeToNow}
                </time>
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
