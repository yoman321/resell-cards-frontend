import { create } from 'zustand';

import { CardTypes, MtgCard } from '../types/MtgCardTypes';
import { MtgCardTypesEnum } from '../enums/MtgCardEnums';

interface AddCardActions {
  updateMtgCardName: (updateCardName: MtgCard['mtgCardName']) => void,
  updateMtgCardType: (updateCardType: MtgCard['mtgCardType']) => void,
  updateMtgCardEdition: (updateCardEdition: MtgCard['mtgCardEdition']) => void,
  updateMtgCardValue: (updateCardValue: MtgCard['mtgCardValue']) => void,

  addMtgCardType: (addMtgCardType: MtgCardTypesEnum) => void,
}

export const useAddCardStore = create<MtgCard & AddCardActions>()((set, get) => ({
  mtgCardName: "",
  mtgCardType: [],
  mtgCardEdition: "",
  mtgCardValue: null,

  updateMtgCardName: (cardName) => set(() => ({ mtgCardName: cardName })),
  updateMtgCardType: (cardType) => set(() => ({ mtgCardType: cardType })),
  updateMtgCardEdition: (cardEdition) => set(() => ({ mtgCardEdition: cardEdition })),
  updateMtgCardValue: (cardValue) => set(() => ({ mtgCardValue: cardValue })),

  addMtgCardType: (cardType) => set(() => ({
    mtgCardType: [
      ...get().mtgCardType, cardType
    ]
  }))
}))

export const cardTypeToCardEnumTransformer = () => {
  const addCardStore = useAddCardStore();
  const cardTypes = addCardStore.mtgCardType;


}
export const updateMtgInventory = () => {
}

