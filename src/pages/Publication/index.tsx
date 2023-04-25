import { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Header } from '../../components/Header'
import { Actions, Footer, HeaderContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

export function Publication() {
  const theme = useTheme()
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
            <a href="">Voltar</a>
          </div>
          <div>
            <a href="">ver no github</a>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              color={theme['blue-400']}
              size={'sm'}
            />
          </div>
        </Actions>
        <h1>Javascript data types and data structures</h1>

        <Footer>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              color={theme['light-steelblue-200']}
            />
            <span> patricfonseca</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCalendarDay}
              color={theme['light-steelblue-200']}
            />
            <span>há 1 dia</span>
            {/* <span> {companyProfile}</span> */}
          </div>
          <div>
            <FontAwesomeIcon
              icon={faComment}
              color={theme['light-steelblue-200']}
            />
            <span>4 comentários</span>
          </div>
        </Footer>
      </HeaderContainer>
    </>
  )
}
