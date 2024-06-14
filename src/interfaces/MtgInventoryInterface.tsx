
import { MtgCard } from '../configs/MtgInventoryConfigs.tsx';


export interface MtgInventoryState {
  mtgInventory: MtgCard[],
  updateMtgInventory: (update: MtgCard[]) => void,
}
