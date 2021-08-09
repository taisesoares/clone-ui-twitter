import styled from 'styled-components';

export const Container = styled.div`
  > img {
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));

    background: var(--outline);
    border-radius: 14px;

    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`