import logo from '../../assets/logo.svg'
import headerBackground from '../../assets/header.svg'

import { HeaderComponent } from './styles'

export function Header() {
  return (
    <HeaderComponent backgroundImage={headerBackground}>
      <img src={logo} alt="" />
    </HeaderComponent>
  )
}
