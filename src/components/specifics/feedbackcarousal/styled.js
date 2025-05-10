import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .swiper-pagination {
    position: relative;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.green04};
    opacity: 1;
    border-radius: 50%;
    transition: background-color 0.3s;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    height: 6px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.green01};
  }
`;

export const Card = styled.div`
  height: 80px;
  display: flex;
  gap: 1rem;
  padding: 1rem;

  background-color: rgba(240, 236, 222, 0.7);
  border-radius: 12px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

export const Image = styled.img`
  width: 45px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Date = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const Comment = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.4;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
