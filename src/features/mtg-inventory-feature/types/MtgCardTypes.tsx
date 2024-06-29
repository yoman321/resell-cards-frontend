import { MtgCardTypesEnum } from "../enums/MtgCardEnums";

export type MtgCard = {
  mtgCardName: string;
  mtgCardType: MtgCardTypesEnum;
  mtgCardEdition: string;
  mtgCardValue: number | null;
};

export type CardTypes = Record<"value" | "label", string>;
