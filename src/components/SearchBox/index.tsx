import { useState, useContext, KeyboardEvent } from 'react'
import { api } from '../../libs/axios'
import { PublicationContext } from '../../contexts/publicationsContext'
import { Container } from './styles'
import { getPlainText } from '../../libs/markdown'
import imgLoading from '../../assets/loading.svg'

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

// interface ISearchTest {
//   usuario?: string
// }

function SearchBoxPublication() {
  // const [formValues, setFormValues] = useState({} as ISearchTest)
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // const [publicationsLength, setPublicationsLength] = useState(0)

  const { addPublications, publications } = useContext(PublicationContext)

  // Feito apenas para teste
  // function handleChangeValues(event) {
  //   const fieldName = event.target.name
  //   const fieldValue = event.target.value

  //   setFormValues((current) => {
  //     return {
  //       ...current,
  //       [fieldName]: fieldValue,
  //     }
  //   })
  // }

  function getPublications() {
    setIsLoading(true)
    api
      .get(`/search/issues`, {
        params: {
          q: searchText + 'repo:patricfonseca/ignite-github-blog/',
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data))
        const newPublications: IPublication[] = []
        response.data.items.forEach((item: PublicationResponse) => {
          newPublications.push({
            title: item.title,
            body: item.body,
            number: item.number,
            shortBody: getPlainText(item.body),
            createdAt: new Date(item.created_at),
          })
        })
        addPublications(newPublications)
        setIsLoading(false)
      })
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter') {
      getPublications()
    }
  }

  return (
    <>
      <Container>
        <div>
          <h3>Publicações</h3>
          <span>{publications.length} publicações</span>
        </div>
        <input
          type="search"
          placeholder="Buscar conteúdo"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {isLoading && (
          <img src={imgLoading} alt="imagem de um círculo girando" />
        )}
      </Container>
    </>
  )
}

export default SearchBoxPublication
