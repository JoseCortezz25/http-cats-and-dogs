import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { status } from "@/lib/data";
import { useEffect, useState } from "react";

interface CardProps {
  images?: {
    cat?: string;
    dog?: string;
  };
  name?: string;
  status?: string | number;
}

const Card = ({ images, name, status }: CardProps) => {
  return (
    <article>
      <div>
        <img src={images.cat} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{status}</p>
    </article>
  )
};

const ListCards = () => {
  const [filteredStatus, setFilteredStatus] = useState(status.slice(0, 13));

  const searchStatus = (value: string) => {
    const filteredStatus = status.slice(0, 13).filter((item) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    setFilteredStatus(filteredStatus);
  };

  return (
    <section className="pt-[6rem] space-y-[30px]">
      <div className="w-[50%] flex relative mx-auto">
        <Input type="text" placeholder="" className="pr-[38px]" onChange={({ target }) => searchStatus(target.value)} />
        <Search size={22} className="absolute right-[10px] text-gray-400/90 dark:text-gray-400/30 bottom-[10px]" />
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        {filteredStatus.map((item, index) => (
          <Card key={index} images={item.images} name={item.name} status={item.status} />
        ))}
      </div>
    </section>
  )
}

export default ListCards