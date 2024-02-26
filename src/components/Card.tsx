import { Card } from "@/types/card";

const Card = ({ content, children }: Card) => {
  return (
    <div className="w-80 text-balance text-center flex items-center flex-col">
      {children}
      <span className="pt-2">{content}</span>
    </div>
  );
};

export default Card;
