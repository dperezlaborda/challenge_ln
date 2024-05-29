export interface IconComponentProps {
  icon: string;
  h?: string | number;
  w?: string | number;
}

export const IconComponent = ({icon, h = '100%', w = '100%'}: IconComponentProps) => {
  return (
    <img src={icon} height={h} width={w} alt="icon"/>
  )
}
