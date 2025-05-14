import { useEffect, useState, useRef } from 'react';
import TrainingService from '@services/TrainingService';

const PAGE_SIZE = 10;

export const useFeedback = () => {
  const [page, setPage] = useState(1);
  const [visibleList, setVisibleList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadFeedback = async () => {
      setIsLoading(true);
      const newData = await TrainingService.getFeedback(page, PAGE_SIZE);
      setVisibleList((prev) => [...prev, ...newData]);
      setHasMore(newData.length === PAGE_SIZE);
      setIsLoading(false);
    };

    loadFeedback();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore, isLoading]);

  return {
    visibleList,
    loaderRef,
    hasMore,
  };
};
