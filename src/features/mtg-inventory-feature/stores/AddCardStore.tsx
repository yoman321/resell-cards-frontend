import { create } from 'zustand';

import { MtgCard } from '../types/MtgCardTypes';

interface AddCardActions {
  updateMtgCardName: (updateCardName: MtgCard['mtgCardName']) => void,
  updateMtgCardType: (updateCardType: MtgCard['mtgCardType']) => void,
  updateMtgCardEdition: (updateCardEdition: MtgCard['mtgCardEdition']) => void,
  updateMtgCardValue: (updateCardValue: MtgCard['mtgCardValue']) => void
}

export const useAddCardStore = create<MtgCard & AddCardActions>()((set) => ({
  mtgCardName: "",
  mtgCardType: undefined,
  mtgCardEdition: "",
  mtgCardValue: null,

  updateMtgCardName: (cardName) => set(() => ({ mtgCardName: cardName })),
  updateMtgCardType: (cardType) => set(() => ({ mtgCardType: cardType })),
  updateMtgCardEdition: (cardEdition) => set(() => ({ mtgCardEdition: cardEdition })),
  updateMtgCardValue: (cardValue) => set(() => ({ mtgCardValue: cardValue }))
}))


