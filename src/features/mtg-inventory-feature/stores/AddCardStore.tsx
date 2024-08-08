import { create } from 'zustand';

import { MtgCard } from '../types/MtgCardTypes';
import { MtgCardTypesEnum } from '../enums/MtgCardEnums';
import { MTG_CARD_INVENTORY_API } from '@/configs/GlobalVars';
import { fetchMtgInventory } from './MtgInventoryStore';

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

export const cardSerializer = (cardName: string, cardType: MtgCardTypesEnum[], cardEdition: string, cardValue: number | null) => {
  const newCard = {
    mtgCardName: cardName,
    mtgCardType: cardType.map(type => type.toUpperCase()),
    mtgCardEdition: cardEdition,
    mtgCardValue: cardValue,
  };

  ///test 
  console.log(newCard);

  return newCard;
}

export const addCardToInventory = (cardName: string, cardType: MtgCardTypesEnum[], cardEdition: string, cardValue: number | null, updateMtgInventory: (update: MtgCard[]) => void) => {
  const newCard = cardSerializer(cardName, cardType, cardEdition, cardValue);

  try {
    const putCard = async () => {
      await fetch(MTG_CARD_INVENTORY_API, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newCard),
      })
    }

    putCard().then(() => {
      fetchMtgInventory(updateMtgInventory);
    });
  }
  catch (error) {
    console.log("Failed put request with error", error);
  }
}

