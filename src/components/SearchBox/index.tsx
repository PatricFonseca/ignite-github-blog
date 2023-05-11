import { useState, useContext, KeyboardEvent } from 'react'
import { api } from '../../libs/axios'
import { PublicationContext } from '../../contexts/publicationsContext'
import { Container } from './styles'

interface IPublication {
  number: string
  title: string
  body: string
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
        response.data.items.forEach((item: IPublication) => {
          newPublications.push({
            title: item.title,
            body: item.body,
            number: item.number,
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

  /// Criar contexto...
  // useEffect(() => {
  // const getPublications = setTimeout(() => {
  //   api
  //     .get(`/search/issues`, {
  //       params: {
  //         q: searchText + 'repo:patricfonseca/ignite-github-blog/',
  //       },
  //     })
  //     .then((response) => {
  //       const newPublications: Publication[] = []
  //       response.data.items.forEach((item: Publication) => {
  //         newPublications.push({
  //           title: item.title,
  //           body: item.body,
  //         })
  //       })
  //       addPublications(newPublications)
  //     })
  // }, 5000)
  // return () => clearTimeout(getPublications)
  // }, [addPublications])

  // useEffect(() => {
  //   console.log(formValues.usuario)
  // }, [formValues])

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
        {isLoading && <h2>Loading</h2>}
      </Container>
    </>
  )
}

export default SearchBoxPublication
