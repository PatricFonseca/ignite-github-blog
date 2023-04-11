import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 864px;
  margin: 4rem auto 3rem;
  padding: 0.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.6rem;

    span {
      font-weight: 400;
      font-size: 0.87rem;
      color: ${(props) => props.theme['light-steelblue-100']};
    }
  }

  h3 {
    color: ${(props) => props.theme['gray-300']};
    font-weight: 700;
    font-size: 1.12rem;
    line-height: 160%;
  }

  input[type='search'] {
    flex: 1;
    width: 100%;
    background-color: ${(props) => props.theme['light-steelblue-800']};

    border: 1px solid ${(props) => props.theme['light-steelblue-300']};
    color: ${(props) => props.theme['gray-400']};
    border-radius: 6px;
    padding: 0.8rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme['light-steelblue-200']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme['blue-400']};
    }
  }
`
