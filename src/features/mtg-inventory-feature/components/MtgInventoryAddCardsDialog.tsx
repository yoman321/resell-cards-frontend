import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addCardToInventory, useAddCardStore } from '../stores/AddCardStore';
import MtgCardTypeMultiSelect from "./MtgCardTypeMultiSelect";
import { ClassNameProps } from "@/interfaces/PropsInterface";

const MtgInventoryAddCardsDialog = ({ className }: ClassNameProps) => {

  const cardStore = useAddCardStore();

  const handleAddCardButton = () => {
    addCardToInventory(cardStore.mtgCardName, cardStore.mtgCardType, cardStore.mtgCardEdition, cardStore.mtgCardValue);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={className}>Add Card</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Card</DialogTitle>
          <DialogDescription>
            Add a card to your inventory
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cardName" className="text-right">
              Card Name
            </Label>
            <Input id="cardName" value={cardStore.mtgCardName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => cardStore.updateMtgCardName(event.target.value)}
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cardEdition" className="text-right">
              Card Type
            </Label>
            <MtgCardTypeMultiSelect className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cardEdition" className="text-right">
              Card Edition
            </Label>
            <Input id="cardEdition" value={cardStore.mtgCardEdition}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => cardStore.updateMtgCardEdition(event.target.value)}
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cardValue" className="text-right">
              Card Value
            </Label>
            <Input id="cardValue" value={cardStore.mtgCardValue ?? ""}
              type="number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                cardStore.updateMtgCardValue(!Number.isNaN(event.target.valueAsNumber) ? event.target.valueAsNumber : null)}
              className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddCardButton}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default MtgInventoryAddCardsDialog;
