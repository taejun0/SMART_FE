import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 78px;
  background-color: ${({ theme }) => theme.colors.beige01};
  box-shadow: 0px -6px 14px 0px rgba(47, 47, 47, 0.06);
`;

export const container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;

export const FooterIcon = styled.img`
  width: 26px;
  height: 26px;
`;

export const FooterLabel = styled.div`
  ${({ theme }) => theme.fonts.Caption_Light_10};
  color: ${({ $color }) => $color};
`;
