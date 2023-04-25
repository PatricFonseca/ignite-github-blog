import styled from 'styled-components'

interface HeaderProps {
  backgroundImage: string
}

export const HeaderComponent = styled.header<HeaderProps>`
  /* background-image: url(${import.meta.env.VITE_PUBLIC_URL}/header.svg); */
  background-image: url(${(props) => props.backgroundImage});
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 9.25rem;
    height: 6.12rem;
    margin-bottom: 2rem;
  }
`
