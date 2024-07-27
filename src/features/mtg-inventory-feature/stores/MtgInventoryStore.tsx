import { create } from 'zustand';
import { useEffect } from 'react';

import { MtgCard } from '../types/MtgCardTypes.tsx';
import { MtgCardTypesEnum } from '../enums/MtgCardEnums.tsx';
import { MTG_CARD_INVENTORY_API } from '@/configs/GlobalVars.tsx';

interface MtgInventoryState {
  mtgInventory: MtgCard[],
  updateMtgInventory: (update: MtgCard[]) => void,
}

const initialMtgInventoryStoreState: MtgCard[] = [
  {
    mtgCardName: "A Card Name",
    mtgCardType: MtgCardTypesEnum.ARTIFACT,
    mtgCardEdition: "Some edition",
    mtgCardValue: 10
  }
]

export const useMtgInventoryStore = create<MtgInventoryState>()((set) => ({
  mtgInventory: initialMtgInventoryStoreState,
  updateMtgInventory: (update: MtgCard[]) =>
    set({ mtgInventory: update })
}));

export const fetchMtgInventory = () => {
  const mtgInventoryStore = useMtgInventoryStore();

  useEffect(() => {
    try {
      const fetchMtgCards = async () => {
        const data = await fetch(MTG_CARD_INVENTORY_API, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        data.json().then((res) => {
          mtgInventoryStore.updateMtgInventory(res);
        });
      };
      fetchMtgCards();
    }
    catch (error) {
      console.error("Failed to fetch Mtg Cards Inventory: ", error);
    }
  }, []);

  return mtgInventoryStore.mtgInventory;
}

const cardsDataTransformer = (cardList) => {
  const cardTypes = cardList.mtgCardType;
  cardTypes.map()

}

