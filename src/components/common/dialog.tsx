import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ReactNode } from "react";

interface DialogCard {
  children: ReactNode;
  images?: {
    cat?: string;
    dog?: string;
  };
  name?: string;
  status?: string | number;
  description?: string;
  value: "cats" | "dogs";
}

export function DialogCard({
  children,
  images,
  name,
  status,
  description,
  value,
}: DialogCard) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="bg-blue-100 px-3 py-1 rounded-full text-md">{status}</span>
            <h2 className="text-xl">{name}</h2>
          </DialogTitle>
        </DialogHeader>
        <div className="rounded-lg overflow-hidden">
          <img
            src={
              value === "cats"
                ? images?.cat ?? "https://placehold.co/600x400?text=UPS!"
                : images?.dog ?? "https://placehold.co/600x400?text=UPS!"
            }
            alt={`image ${name}`}
          />
        </div>
        <DialogDescription className="font-medium text-muted-foreground">{description}</DialogDescription>
        <DialogFooter>
          <div>source: mdn documentation</div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
