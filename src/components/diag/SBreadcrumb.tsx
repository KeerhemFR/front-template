import styled from 'styled-components';

export const SBreadcrumb = styled.p`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: lowercase;
  color: var(--prim-color);
  margin: 11px 0 11px 60px;
  align-self: flex-start;

  @media screen and (max-width: 576px) {
    margin: 11px 0 11px 20px;
  }
`;
