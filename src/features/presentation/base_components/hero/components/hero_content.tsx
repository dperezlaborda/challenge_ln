import { useContext } from "react";
import { HeroContext } from "../../../apertura/components/hero";

const HeroContent = ({ title }: { title?: string }) => {

  const { data } = useContext(HeroContext) as { data: { titulo: string }[] };

  return(
    <h1 className="text-gray-ln font-bold text-2xl md:text-4xl lg:text-5xl">
      { title ? title : data[0].titulo }
    </h1>
  )
};

export default HeroContent;
