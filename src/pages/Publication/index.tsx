import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { api } from '../../libs/axios'
import { Header } from '../../components/Header'
import { Actions, Content, Footer, HeaderContainer } from './styles'
import Markdown from '../../components/Markdown'

interface IPublication {
  title: string
  body: string
  createdAt: string
  comments: string
  author: string
  link: string
}

export function Publication() {
  const theme = useTheme()
  const params = useParams()
  const [publication, setPublication] = useState({} as IPublication)

  useEffect(() => {
    api
      .get(
        `repos/patricfonseca/ignite-github-blog/issues/${params.publicationNumber}`,
      )
      .then((response) => {
        setPublication({
          title: response.data.title,
          body: response.data.body,
          createdAt: response.data.createdAt,
          comments: response.data.comments,
          author: response.data.user.login,
          link: response.data.html_url,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [params])

  return (
    <>
      <Header />
      <HeaderContainer>
        <Actions>
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              color={theme['blue-400']}
              size={'sm'}
            />
            <Link to={'/'}>Voltar</Link>
          </div>
          <div>
            <a href={publication.link}>ver no github</a>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              color={theme['blue-400']}
              size={'sm'}
            />
          </div>
        </Actions>
        <h1>{publication.title}</h1>

        <Footer>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              color={theme['light-steelblue-200']}
            />
            <span>{publication.author}</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCalendarDay}
              color={theme['light-steelblue-200']}
            />
            <span>{publication.createdAt}</span>
            {/* há 1 dia */}
          </div>
          <div>
            <FontAwesomeIcon
              icon={faComment}
              color={theme['light-steelblue-200']}
            />
            <span>{publication.comments} comentários</span>
          </div>
        </Footer>
      </HeaderContainer>
      <Content>
        {/* remarkPlugins={[remarkGfm]}  */}
        <Markdown>{publication.body}</Markdown>
      </Content>
    </>
  )
}
