import * as React from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

import { ClassNameProps } from "../../../interfaces/PropsInterface"
import { MtgCardTypesEnum } from "../enums/MtgCardEnums";
import { CardTypes } from "../types/MtgCardTypes";
import { useAddCardStore } from "../stores/AddCardStore";

const CARD_TYPES = Object.entries(MtgCardTypesEnum)
  .map(([label, value]) => ({ label, value })) satisfies CardTypes[];

const MtgCardTypeMultiSelect = ({ className }: ClassNameProps) => {
  const addCardStore = useAddCardStore();
  const useCardTypes = addCardStore.mtgCardType;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  //  const [selected, setSelected] = React.useState<CardTypes[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((cardType: CardTypes) => {
    addCardStore.updateMtgCardType(useCardTypes?.filter((type) => type.value !== cardType.value));
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            return useCardTypes?.pop();
          }
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = CARD_TYPES.filter(
    (cardType) => !useCardTypes?.includes(cardType)
  );


  return (
    <Command
      onKeyDown={handleKeyDown}
      className={`${className} overflow-visible bg-transparent`}
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {useCardTypes?.map((cardType) => {
            return (
              <Badge key={cardType.label} variant="secondary">
                {cardType.value}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(cardType);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(cardType)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select card types..."
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((cardType) => {
                  return (
                    <CommandItem
                      key={cardType.value}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => {
                        setInputValue("");
                        addCardStore.addMtgCardType(cardType)
                      }}
                      className={"cursor-pointer"}
                    >
                      {cardType.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  );
}

export default MtgCardTypeMultiSelect;
