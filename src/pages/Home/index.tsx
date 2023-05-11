import { useEffect, useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { api } from '../../libs/axios'
import { useTheme } from 'styled-components'
import SearchBoxPublication from '../../components/SearchBox'
import PublicationsGallery from '../../components/PublicationsGallery'
import { Header } from '../../components/Header'
import { Footer, InfoProfile, Profile } from './styles'

export function Home() {
  const theme = useTheme()
  const [imgProfile, setImgProfile] = useState('')
  const [userProfile, setUserProfile] = useState('')
  const [companyProfile, setCompanyProfile] = useState('')
  const [bioProfile, setBioProfile] = useState('')
  const [linkProfile, setLinkProfile] = useState('')
  const [followers, setFollowers] = useState('')
  const [nameProfile, setNameProfile] = useState('')

  async function getUserProfile() {
    const response = await api.get('users/patricfonseca')

    console.log(response.data)
    setUserProfile(response.data.login)
    setCompanyProfile(response.data.company || 'not avaliable')
    setFollowers(response.data.followers)
    setImgProfile(response.data.avatar_url)
    setBioProfile(response.data.bio)
    setLinkProfile(response.data.html_url)
    setNameProfile(response.data.name)
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <div>
      <Header />
      <Profile>
        <img src={imgProfile} alt="" />
        <InfoProfile>
          <header>
            <h3>{nameProfile}</h3>
            <div>
              <a href={linkProfile}>
                <span>github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </header>
          <p>{bioProfile}</p>
          <Footer>
            <div>
              <FontAwesomeIcon
                icon={faGithub}
                color={theme['light-steelblue-200']}
              />
              <span> {userProfile}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faBuilding}
                color={theme['light-steelblue-200']}
              />
              <span> {companyProfile}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faGithub}
                color={theme['light-steelblue-200']}
              />
              <span> {followers} seguidores</span>
            </div>
          </Footer>
        </InfoProfile>
      </Profile>
      <SearchBoxPublication />
      <PublicationsGallery />
    </div>
  )
}
