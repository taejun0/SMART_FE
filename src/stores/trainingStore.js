import { create } from 'zustand';

const useTrainingStore = create((set) => ({
  feedbacks: [],
  count: 0,

  addFeedback: (text) =>
    set((state) => {
      const existing = state.feedbacks.find((fb) => fb.text === text);

      if (existing) {
        return {
          feedbacks: state.feedbacks.map((fb) =>
            fb.text === text ? { ...fb, count: fb.count + 1 } : fb
          ),
        };
      } else {
        return {
          feedbacks: [...state.feedbacks, { text, count: 1 }],
        };
      }
    }),

  incrementCount: () => set((state) => ({ count: state.count + 1 })),

  setCount: (value) => set({ count: value }),

  reset: () => set({ feedbacks: [], count: 0 }),
}));

export default useTrainingStore;
