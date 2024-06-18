import { useMtgAddCardState } from "../stores/MtgAddCardStore";

export const mtgAddCard = (field: string, value: string) => {
  const mtgAddCardState = useMtgAddCardState();
  mtgAddCardState.updateMtgCard(field, value);
}
