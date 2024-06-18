import { create } from 'zustand';

import { MtgCard } from '../types/MtgCardTypes.tsx';
import { MtgCardTypesEnum } from '../enums/MtgCardEnums.tsx';

interface MtgInventoryState {
  mtgInventory: MtgCard[],
  updateMtgInventory: (update: MtgCard[]) => void,
}

const initialMtgInventoryStoreState: MtgCard[] = [
  {
    mtgCardName: "A Card Name",
    mtgCardType: MtgCardTypesEnum.ARTIFACT,
    mtgCardEdition: "",
    mtgCardValue: 10
  }
]

export const useMtgInventoryStore = create<MtgInventoryState>()((set) => ({
  mtgInventory: initialMtgInventoryStoreState,
  updateMtgInventory: (update: MtgCard[]) =>
    set((state) =>
      ({ ...state, mtgInventory: update }))
}));


