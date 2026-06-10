"use client";

import { CommandIcon } from "lucide-react";
import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";

interface Props {
  links: { url: string; title: string }[];
  labels: {
    actions: string;
    links: string;
    print: string;
    noResults: string;
    searchPlaceholder: string;
    commandHintPrefix: string;
    commandHintSuffix: string;
  };
}

export const CommandMenu = ({ links, labels }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [isMac, setIsMac] = React.useState(false);

  React.useEffect(() => {
    setIsMac(window.navigator.userAgent.includes("Mac"));

    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden bg-gradient-to-t from-[hsl(var(--background))] to-transparent p-1 pt-6 text-center text-sm text-muted-foreground print:hidden xl:block">
        {labels.commandHintPrefix}{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>+J
        </kbd>{" "}
        {labels.commandHintSuffix}
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 h-6 w-6" aria-hidden="true" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={labels.searchPlaceholder} />
        <CommandList>
          <CommandEmpty>{labels.noResults}</CommandEmpty>
          <CommandGroup heading={labels.actions}>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>{labels.print}</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading={labels.links}>
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
