import { Card as CardType } from "@/types/card";

const Card = ({ content, children }: CardType) => {
  return (
    <div className="flex w-80 flex-col items-center text-balance text-center">
      {children}
      <span className="pt-2">{content}</span>
    </div>
  );
};

export default Card;
