import React from 'react';
import { cleanup, fireEvent, render, screen, renderHook } from '@testing-library/react';
import { vi } from "vitest";

import Inventory from '../src/pages/Inventory.tsx';
import { fetchMtgInventory } from '../src/features/mtg-inventory-feature/hooks/MtgInventoryHooks.tsx'
import { initialMtgInventoryStoreState } from '../src/features/mtg-inventory-feature/stores/MtgInventoryStore.tsx';


describe('testing the fetchMtgInventory function', () => {
  const fetchMtgInventorySpy = vi.fn(() => fetchMtgInventory);

  test('should call fetchMtgInventory', () => {

    fetchMtgInventorySpy();

    expect(fetchMtgInventorySpy).toHaveBeenCalled();
  })

  test('should return dummy values from fetchMtgInventory', () => {

    fetchMtgInventorySpy.mockReturnValueOnce(() => initialMtgInventoryStoreState);
    fetchMtgInventorySpy();

    expect(fetchMtgInventorySpy).toHaveReturnedWith(initialMtgInventoryStoreState);
  })

})
//it('should render intial/dummy inventory data for the inventory page with ', () => {
//  const inventoryData = renderHook(() => fetchMtgInventory());
//  expect(inventoryData).toBe(initialMtgInventoryStoreState);
//})
//it('should make add card dialog appear on Add Card button click',  () => {
//  render(<Inventory />);
//
//  const addCardButton = screen.getByRole('button', {
//    name: 'Add Card'
//  });
//  const dialogSubText = 'Add a card to your inventory';
//
//  expect(screen.getByText(dialogSubText)).toBeFalsy();
//  fireEvent.click(addCardButton);
//  expect(screen.getByText(dialogSubText)).toBeTruthy();
//
//})
