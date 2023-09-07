import { create } from "zustand";

const useStore = create((set) => ({
  isData: false,
  data: {},
  setData: (tempData) =>
    set(() => ({
      data: { ...tempData },
      isData: true,
    })),
  clearData: () => set((state) => ({ isData: false, data: {} })),
}));

export default useStore;
