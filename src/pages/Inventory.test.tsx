import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Inventory from './Inventory.tsx';


afterEach(cleanup);

it('should make add card dialog appear on Add Card button click', () => {
  render(<Inventory />);

  const addCardButton = screen.getByRole('button', {
    name: 'Add Card'
  });
  const dialogSubText = 'Add a card to your inventory';

  expect(screen.getByText(dialogSubText)).toBeFalsy();
  fireEvent.click(addCardButton);
  expect(screen.getByText(dialogSubText)).toBeTruthy();

})
