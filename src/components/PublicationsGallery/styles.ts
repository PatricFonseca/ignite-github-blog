import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  max-width: 864px;
  margin: 4rem auto 3rem;
  gap: 1.2rem;

  padding: 0.3rem;
`

export const PublicationItem = styled.div`
  width: 26rem;
  height: 15.5rem;
  background: ${(props) => props.theme['light-steelblue-400']};
  border-radius: 10px;
  padding: 2rem;
  overflow: hidden;
  flex-grow: 1;

  p {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-400']};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 4;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
`

export const PublicationHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: first baseline;
  margin-bottom: 0.5rem;

  h4 {
    color: ${(props) => props.theme['gray-200']};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;
    max-width: 70%;
  }

  span {
    font-size: 0.87rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['light-steelblue-100']};
  }
`
