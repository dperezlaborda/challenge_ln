import { useContext } from "react";
import { BadgeComponentProps } from "../../interfaces/interfaces";
import { HeroContext } from "../apertura/components/hero";

const BadgeComponent = ({
  label,
  bgColor = 'bg-black-ln',
  labelColor = 'text-white-ln'
}: BadgeComponentProps) => {

  const { data } = useContext(HeroContext) as { data: { volanta: string }[] };

  return (
    <div className={`px-2 py-1 rounded-2xl gap-x-1 w-min ${bgColor}`}>
      <p className={`uppercase text-xs text-center ${labelColor} arial-typo`}>{ label ? label : data[0].volanta }</p>
    </div>
  )
}

export default BadgeComponent;
