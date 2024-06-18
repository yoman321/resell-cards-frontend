import { create } from 'zustand';

import { MtgCard } from '../types/MtgCardTypes';
import { MtgCardTypesEnum } from '../enums/MtgCardEnums';

interface MtgAddCardActions {
  updateMtgCardName: (updateCardName: MtgCard['mtgCardName']) => void,
  updateMtgCardType: (updateCardType: MtgCard['mtgCardType']) => void,
  updateMtgCardEdition: (updateCardEdition: MtgCard['mtgCardEdition']) => void,
  updateMtgCardValue: (updateCardValue: MtgCard['mtgCardValue']) => void
}

export const useMtgAddCardState = create<MtgCard & MtgAddCardActions>()((set) => ({
  mtgCardName: "",
  mtgCardType: MtgCardTypesEnum.ENCHANTMENT,
  mtgCardEdition: "",
  mtgCardValue: 0,

  updateMtgCardName: (cardName) => set(() => ({ mtgCardName: cardName })),
  updateMtgCardType: (cardType) => set(() => ({ mtgCardType: cardType })),
  updateMtgCardEdition: (cardEdition) => set(() => ({ mtgCardEdition: cardEdition })),
  updateMtgCardValue: (cardValue) => set(() => ({ mtgCardValue: cardValue }))
}))
