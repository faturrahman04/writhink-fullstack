import { create } from "zustand"

const useStoreModal = create((set) => ({
  modal: false,
  setModal: () => set((state) => ({modal : !state.modal})),
}));

export default useStoreModal