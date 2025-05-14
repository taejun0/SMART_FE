import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TrainingService from '@services/TrainingService';

const isToday = (dateString) => {
  const today = new Date();
  const targetDate = new Date(
    dateString.replace(/\.|년|월|일/g, '-').replace(/-$/, '')
  );
  return (
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  );
};

export const useAnalyze = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const [latest, setLatest] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [diff, setDiff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isTodayRecord, setIsTodayRecord] = useState({
    pushup: false,
    situp: false,
    running: false,
    shooting: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const feedbackList = await TrainingService.getFeedback(1, 4);

        if (type === 'fitness') {
          const result = feedbackList.map((item) => ({
            date: item.date,
            pushup: item.pushup,
            situp: item.situp,
            running: item.running,
            comment: item.comment,
          }));

          const latestItem = result[0] ?? null;
          const previousItem = result[1] ?? null;

          setData(result);
          setLatest(latestItem);
          setPrevious(previousItem);

          if (latestItem && previousItem) {
            setDiff({
              pushup: latestItem.pushup - previousItem.pushup,
              situp: latestItem.situp - previousItem.situp,
              running: latestItem.running - previousItem.running,
            });
          } else {
            setDiff(null);
          }

          setIsTodayRecord({
            pushup: isToday(latestItem?.date),
            situp: isToday(latestItem?.date),
            running: isToday(latestItem?.date),
            shooting: false,
          });
        } else if (type === 'shooting') {
          const result = feedbackList.map((item) => ({
            date: item.date,
            value: item.shooting,
            comment: item.comment,
          }));

          const latestItem = result[0] ?? null;
          const previousItem = result[1] ?? null;

          setData(result);
          setLatest(latestItem);
          setPrevious(previousItem);

          if (latestItem && previousItem) {
            setDiff({
              value: latestItem.value - previousItem.value,
            });
          } else {
            setDiff(null);
          }

          setIsTodayRecord({
            pushup: false,
            situp: false,
            running: false,
            shooting: isToday(latestItem?.date),
          });
        }
      } catch (error) {
        console.error('분석 데이터 로딩 실패:', error);
        setData([]);
        setLatest(null);
        setPrevious(null);
        setDiff(null);
        setIsTodayRecord({
          pushup: false,
          situp: false,
          running: false,
          shooting: false,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return { type, data, latest, previous, diff, isTodayRecord, loading };
};
