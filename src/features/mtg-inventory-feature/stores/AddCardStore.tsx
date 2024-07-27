import { create } from 'zustand';

import { CardTypes, MtgCard } from '../types/MtgCardTypes';
import { MtgCardTypesEnum } from '../enums/MtgCardEnums';
import { MTG_CARD_INVENTORY_API } from '@/configs/GlobalVars';

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

export const putCardTransformer = () => {
  const addCardStore = useAddCardStore();
  const newCard: MtgCard = {
    mtgCardName: addCardStore.mtgCardName,
    mtgCardType: addCardStore.mtgCardType,
    mtgCardEdition: addCardStore.mtgCardEdition,
    mtgCardValue: addCardStore.mtgCardValue
  };

  return newCard;
}
export const addCardToInventory = () => {

  try {
    const putCard = async () => {
      await fetch(MTG_CARD_INVENTORY_API, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(putCardTransformer),
      })
    }
    putCard();
  }
  catch (error) {
    console.log("Failed put request with error", error);
  }
}

