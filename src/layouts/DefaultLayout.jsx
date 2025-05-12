import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const DefaultLayout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.beige01};
  min-height: calc(var(--vh) * 100);
`;
