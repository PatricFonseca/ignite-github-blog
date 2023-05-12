import styled from 'styled-components'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export const MarkdownStyled = styled(ReactMarkdown)`
  font-family: 'Nunito';
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.theme['gray-400']};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1rem;
    margin-bottom: 16px;
    font-weight: bold;
    line-height: 1.25;
  }

  p {
    /* margin-bottom: 16px; */
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 16px 0;
  }

  pre {
    background-color: #0a0d0f;
    color: #c9c9c9;
    padding: 16px;
    border-radius: 4px;
    overflow: auto;
  }

  code {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, mon;
  }

  a {
    color: ${(props) => props.theme['blue-400']};
  }
`
