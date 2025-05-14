import * as S from './FeedbackCarousal.styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { MAINSOLCONSTANTS } from '../../constants/mainSolConstants';
export const FeedbackCarousal = ({ feedbackList }) => {
  const sortedFeedback = [...feedbackList].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const latestThree = sortedFeedback.slice(0, 3);
  return (
    <S.Wrapper>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.2}
        centeredSlides={true}
        loop
      >
        {latestThree.map((item, idx) => (
          <SwiperSlide key={idx}>
            <S.Card>
              <S.Image src={MAINSOLCONSTANTS.Images.soldier_Smile} />
              <S.Col>
                <S.Date>{item.date}</S.Date>
                <S.Comment>{item.comment}</S.Comment>
              </S.Col>
            </S.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
};

export default FeedbackCarousal;
