import { create } from 'zustand';

import { MtgCard } from '../types/MtgInventoryTypes.tsx';

interface MtgInventoryState {
  mtgInventory: MtgCard[],
  updateMtgInventory: (update: MtgCard[]) => void,
}

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


