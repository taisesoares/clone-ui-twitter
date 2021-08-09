import styled from 'styled-components'

export const Container = styled.div`
  > img {
    flex-shrink: 0;

    border-radius: 50%;
    background: var(--gray);
    
  };

  img.small {
    width: 39px;
    height: 39px;
  };

  img.medium {
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
  };
`;