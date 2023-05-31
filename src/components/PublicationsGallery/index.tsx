import { useContext } from 'react'
import { Container, PublicationHeader, PublicationItem } from './styles'
import { PublicationContext } from '../../contexts/publicationsContext'
import useFormattedDate from '../../hooks/useFormattedDate'
// import { title } from 'process'
// import { time } from 'console'

function PublicationsGallery() {
  const { publications } = useContext(PublicationContext)

  function PublicationDate({ date }: { date: Date }) {
    const { dateFormatted, dateRelativeToNow: createdAtRelativeToNow } =
      useFormattedDate(date)

    return (
      <time title={dateFormatted} dateTime={date.toISOString()}>
        {createdAtRelativeToNow}
      </time>
    )
  }

  return (
    <Container>
      {publications.map((publication) => {
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

                <PublicationDate date={publication.createdAt} />
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
