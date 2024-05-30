import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CardProps {
  images?: {
    cat?: string;
    dog?: string;
  };
  value: "cats" | "dogs";
  name?: string;
  status?: string | number;
}

const Card = ({
  images,
  name = "Unamed",
  status = "No status",
  value,
}: CardProps) => {
  return (
    <article>
      <AspectRatio ratio={9 / 6} className="bg-muted overflow-hidden">
        <img
          src={
            value === "cats"
              ? images?.cat ?? "https://placehold.co/600x400?text=UPS!"
              : images?.dog ?? "https://placehold.co/600x400?text=UPS!"
          }
          alt={`image ${name}`}
          className="rounded-md object-cover w-full  h-full"
        />
      </AspectRatio>
      <div className="flex justify-between py-[1rem]">
        <h3>{name}</h3>
        <p>{status}</p>
      </div>
    </article>
  );
};

export default Card;
