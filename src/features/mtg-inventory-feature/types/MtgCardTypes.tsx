import { MtgCardTypesEnum } from "../enums/MtgCardEnums";

export type CardTypes = Record<"value" | "label", string>;

export type MtgCard = {
  mtgCardName: string;
  mtgCardType: CardTypes[];
  mtgCardEdition: string;
  mtgCardValue: number | null;
};

