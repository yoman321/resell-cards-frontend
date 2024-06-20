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
import { useMtgAddCardState } from '../stores/MtgAddCardStore';
import MtgCardTypeCombobox from "./MtgCardTypeCombobox";

const MtgInventoryAddCardsDialog = () => {

  const mtgAddCardState = useMtgAddCardState();

  const handleButton = () => {
    console.log(mtgAddCardState.mtgCardName, mtgAddCardState.mtgCardEdition, mtgAddCardState.mtgCardValue);
  }
  const handleChange = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Card</Button>
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
            <Input id="cardName" value={mtgAddCardState.mtgCardName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => mtgAddCardState.updateMtgCardName(event.target.value)}
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cardEdition" className="text-right">
              Card Type
            </Label>
            <MtgCardTypeCombobox />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cardEdition" className="text-right">
              Card Edition
            </Label>
            <Input id="cardEdition" value={mtgAddCardState.mtgCardEdition}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => mtgAddCardState.updateMtgCardEdition(event.target.value)}
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cardValue" className="text-right">
              Card Value
            </Label>
            <Input id="cardValue" value={mtgAddCardState.mtgCardValue ?? ""}
              type="number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                mtgAddCardState.updateMtgCardValue(!Number.isNaN(event.target.valueAsNumber) ? event.target.valueAsNumber : null)}
              className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleButton}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default MtgInventoryAddCardsDialog;
