import { waitFor, fireEvent, render, screen, } from '@testing-library/react';
import { vi } from "vitest";

import Inventory from './Inventory.tsx';
import { MtgCardTypesEnum } from '../features/mtg-inventory-feature/enums/MtgCardEnums.tsx';
import { MtgCard } from '../features/mtg-inventory-feature/types/MtgCardTypes.tsx';
import * as MtgInventoryStore from '../features/mtg-inventory-feature/stores/MtgInventoryStore.tsx'


const dummyInventoryData: MtgCard[] = [
  {
    mtgCardName: "Some dummy card name",
    mtgCardType: MtgCardTypesEnum.ENCHANTMENT,
    mtgCardEdition: "Oldest Edition",
    mtgCardValue: 10
  }
]


beforeEach(() => {
  vi.spyOn(MtgInventoryStore, "fetchMtgInventory").mockReturnValue(dummyInventoryData);
})

describe('testing the Inventory component', () => {

  it('should have dummy data on render of Inventory component', async () => {
    render(<Inventory />);

    await waitFor(() => {
      expect(screen.getByText("Oldest Edition")).toBeInTheDocument();
    })

  })

  it("should render the Add Card component", () => {
    render(<Inventory />);

    const ResizeObserverMock = vi.fn(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);

    const addCardButton = screen.getByRole('button', {
      name: 'Add Card'
    });
    const dialogSubText = 'Add a card to your inventory';

    expect(screen.queryByText(dialogSubText)).not.toBeInTheDocument();
    fireEvent.click(addCardButton);
    expect(screen.queryByText(dialogSubText)).toBeInTheDocument();
  })
})
