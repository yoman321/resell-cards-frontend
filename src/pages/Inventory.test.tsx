import { waitFor, fireEvent, render, screen, } from '@testing-library/react';
import { vi } from "vitest";


import Inventory from './Inventory.tsx';
import * as MtgInventoryStore from '../features/mtg-inventory-feature/stores/MtgInventoryStore.tsx'




beforeEach(() => {
  vi.spyOn(MtgInventoryStore, "fetchMtgInventory").mockReturnValue();
})

describe('testing the Inventory component', () => {
  beforeEach(() => {
    render(<Inventory />)
  })

  it('should have dummy data on render of Inventory component', async () => {
    await waitFor(() => {
      expect(screen.getByText("Some edition")).toBeInTheDocument();
    })

  })

  it('should display the card type as strings seperated by a space', async () => {
    await waitFor(() => {
      expect(screen.getByText("Artifact Enchantment Sorcery"))
    })
  })

  it("should render the Add Card component", () => {
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

