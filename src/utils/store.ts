import OneModal from "@/components/Modal/OneModal/OneModal";
import TwoModal from "@/components/Modal/TwoModal/TwoModal";
import { create } from "zustand";

export const ModalStore = {
  onemodal: OneModal,
  twomodal: TwoModal,
};

export type ModalKey = keyof typeof ModalStore;

export type ModalType<T> = {
  name: ModalKey;
  props: T;
};

export const useModalStore = create<{
  modals: ModalType<any>[];
  onOpen: <T>(modal: ModalType<T>) => void;
  onClose: (name: ModalKey) => void;
}>((set) => ({
  modals: [],
  onOpen: <T>(modal: ModalType<T>) =>
    set((state) => ({ modals: [...state.modals, modal] })),
  onClose: (name: ModalKey) =>
    set((state) => ({
      modals: [...state.modals].filter((item) => item.name !== name),
    })),
}));
