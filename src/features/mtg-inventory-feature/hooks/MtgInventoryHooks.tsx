import { useEffect } from 'react';

import { useMtgInventoryStore } from '../stores/MtgInventoryStore.tsx';
import { MTG_CARD_INVENTORY_API } from '../types/MtgInventoryTypes.tsx';


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
