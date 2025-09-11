import { create } from 'zustand'

const useStoreMenu = create((set) => ({
  isMenuOnClick: false,
  setIsMenuOnClick: () => set((state) => ({ isMenuOnClick: !state.isMenuOnClick })),
  setMenuClosed: () => set({isMenuOnClick : false})
}));

export default useStoreMenu