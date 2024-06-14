import { create } from 'zustand';

import { MTG_CARD_INVENTORY_API, MtgCard } from '@/configs/MtgInventoryConfigs';
import { MtgInventoryState } from "@/interfaces/MtgInventoryInterface"

const initialMtgInventoryStoreState: MtgCard[] = [
  {
    mtgCardName: "A Card Name",
    mtgCardType: "A Card Type",
    mtgCardEdition: "A Card Edition",
    mtgCardValue: 10
  }
]

export const useMtgInventoryStore = create<MtgInventoryState>()((set) => ({
  mtgInventory: initialMtgInventoryStoreState,
  updateMtgInventory: (update: MtgCard[]) =>
    set((state) =>
      ({ ...state, mtgInventory: update }))
}));


