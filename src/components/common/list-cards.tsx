import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { status } from "@/lib/data";
import { useEffect, useState } from "react";
import Card from "./card";
import { DialogCard } from "./dialog";

interface ListCardsProps {
  value: "cats" | "dogs";
}

const ListCards = ({ value }: ListCardsProps) => {
  const [filteredStatus, setFilteredStatus] = useState(status);

  const searchStatus = (value: string) => {
    const filteredStatus = status
      .slice(0, 13)
      .filter((item) =>
        item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    setFilteredStatus(filteredStatus);
  };

  return (
    <section className="pt-[2rem] space-y-[30px]">
      <div className="w-[50%] flex relative mx-auto">
        <Input
          type="text"
          placeholder="Search your http error"
          className="pr-[38px]"
          onChange={({ target }) => searchStatus(target.value)}
        />
        <Search
          size={22}
          className="absolute right-[10px] text-gray-400/90 dark:text-gray-400/30 bottom-[10px]"
        />
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        {filteredStatus.map((item, index) => (
          <DialogCard
            key={index}
            images={item.images}
            name={item.name}
            status={item.status}
            description={item.description}
            value={value}
          >
            <Card
              key={index}
              images={item.images}
              name={item.name}
              status={item.status}
              value={value}
            />
          </DialogCard>
        ))}
      </div>
    </section>
  );
};

export default ListCards;
