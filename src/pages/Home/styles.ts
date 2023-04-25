import styled from 'styled-components'

export const Profile = styled.div`
  display: grid;
  grid-template-areas:
    'imageArea imageArea . . . '
    'imageArea imageArea . . . ';
  padding: 2rem;
  background-color: #0b1b2b;
  color: #fff;
  max-width: 864px;
  margin: -5rem auto 0;
  border-radius: 10px;

  img {
    grid-area: imageArea;
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const InfoProfile = styled.div`
  padding: 0.5rem 2rem;

  header {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${(props) => props.theme['blue-400']};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 160%;

      span {
        margin-right: 0.4rem;
      }

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['blue-400']};
      }
    }

    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 31.2px;
      color: ${(props) => props.theme['gray-200']};
    }
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 25.6px;
    color: ${(props) => props.theme['gray-400']};
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
