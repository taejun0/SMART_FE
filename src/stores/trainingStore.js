import { create } from 'zustand';

const useTrainingStore = create((set) => ({
  feedbacks: [],
  count: 0,
  addFeedback: (text) =>
    set((state) => ({ feedbacks: [...state.feedbacks, text] })),
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ feedbacks: [], count: 0 }),
}));

export default useTrainingStore;
