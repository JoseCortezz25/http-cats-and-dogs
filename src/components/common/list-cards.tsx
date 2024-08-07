import Card from "./card";
import { DialogCard } from "./dialog";

interface ListCardsProps {
  value: "cats" | "dogs";
  status: {
    id: number;
    status: number;
    name: string;
    description: string;
    images: {
      cat: string;
      dog: string;
    };
  }[];
}

const ListCards = ({ value, status }: ListCardsProps) => {

  return (
    <section className="pt-[2rem] space-y-[30px]">

      <div className="flex flex-col px-4 md:px-0 md:grid md:grid-cols-3 gap-[30px] mb-16">
        {status.map((item, index) => (
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
