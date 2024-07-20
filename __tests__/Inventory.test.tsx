import React from 'react';
import { cleanup, fireEvent, render, screen, renderHook } from '@testing-library/react';
import { vi } from "vitest";

import Inventory from '../src/pages/Inventory.tsx';
import { fetchMtgInventory } from '../src/features/mtg-inventory-feature/hooks/MtgInventoryHooks.tsx'
import { initialMtgInventoryStoreState } from '../src/features/mtg-inventory-feature/stores/MtgInventoryStore.tsx';


describe('testing the Inventory component', () => {

  it("should render Inventory component", () => {
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
