import { create } from 'zustand';

import { CardTypes, MtgCard } from '../types/MtgCardTypes';

interface AddCardActions {
  updateMtgCardName: (updateCardName: MtgCard['mtgCardName']) => void,
  updateMtgCardType: (updateCardType: MtgCard['mtgCardType']) => void,
  updateMtgCardEdition: (updateCardEdition: MtgCard['mtgCardEdition']) => void,
  updateMtgCardValue: (updateCardValue: MtgCard['mtgCardValue']) => void,

  addMtgCardType: (addMtgCardType: CardTypes) => void,
}

export const useAddCardStore = create<MtgCard & AddCardActions>()((set, get) => ({
  mtgCardName: "",
  mtgCardType: [],
  mtgCardEdition: "",
  mtgCardValue: null,

  updateMtgCardName: (cardName) => set(() => ({ mtgCardName: cardName })),
  updateMtgCardType: (cardType) => set((state) => ({ mtgCardType: cardType })),
  updateMtgCardEdition: (cardEdition) => set(() => ({ mtgCardEdition: cardEdition })),
  updateMtgCardValue: (cardValue) => set(() => ({ mtgCardValue: cardValue })),

  addMtgCardType: (cardType) => set(() => ({
    mtgCardType: [
      ...get().mtgCardType, cardType
    ]
  }))
}))

export const updateMtgInventory = () => {
}

