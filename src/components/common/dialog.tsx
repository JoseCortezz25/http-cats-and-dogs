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
          <DialogTitle>{`${status} ${name}`}</DialogTitle>
        </DialogHeader>
        <div>
          <img
            src={
              value === "cats"
                ? images?.cat ?? "https://placehold.co/600x400?text=UPS!"
                : images?.dog ?? "https://placehold.co/600x400?text=UPS!"
            }
            alt={`image ${name}`}
          />
        </div>
        <DialogDescription>{description}</DialogDescription>
        <DialogFooter>
          <div>source: mdn documentation</div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
