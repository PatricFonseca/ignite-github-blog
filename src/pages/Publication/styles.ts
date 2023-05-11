import styled from 'styled-components'

export const HeaderContainer = styled.div`
  /* display: grid;
  grid-template-areas:
    'imageArea imageArea . . . '
    'imageArea imageArea . . . '; */
  padding: 2rem;
  background-color: #0b1b2b;
  color: #fff;
  max-width: 864px;
  margin: -5rem auto 0;
  border-radius: 10px;

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-200']};
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  div {
    display: flex;
    border-bottom: 1px solid transparent;
  }

  div:hover {
    border-bottom: 1px solid ${(props) => props.theme['blue-400']};
  }

  a {
    color: ${(props) => props.theme['blue-400']};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 160%;
  }

  div:first-child a {
    margin-left: 0.8rem;
  }

  div:last-child a {
    margin-right: 0.8rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  margin-top: 1.4rem;

  span {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 25.6px;
    color: ${(props) => props.theme['gray-400']};
  }

  span {
    margin-left: 0.2rem;
  }
`

export const Content = styled.div`
  max-width: 864px;
  margin: 1rem auto 0;
  color: ${(props) => props.theme['gray-400']};
  /* background-color: ${(props) => props.theme['light-steelblue-400']}; */
  padding: 2rem;
  border-radius: 6px;
`
