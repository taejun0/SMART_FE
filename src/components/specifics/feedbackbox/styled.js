import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Image = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 55px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Date = styled.div`
  ${({ theme }) => theme.fonts.Body_Bold_14};
  color: ${({ theme }) => theme.colors.black};
`;

export const Comment = styled.div`
  ${({ theme }) => theme.fonts.Caption_SemiBold_12};
  color: rgba(18, 18, 18, 0.5);
  line-height: 1.5;
  white-space: pre-wrap;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $expanded }) => ($expanded ? 'unset' : 2)};
  -webkit-box-orient: vertical;
  cursor: pointer;
`;
