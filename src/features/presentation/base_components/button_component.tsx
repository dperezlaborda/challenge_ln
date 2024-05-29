import { IconComponent } from './icon_component';
interface ButtonComponentProps {
  label?: string;
  icon?: string;
  onClick?: () => void;
  bgColor?: string;
  border?: string;
  labelColor?: string;
}

export const ButtonComponent = ({
  label, 
  icon = '', 
  onClick, 
  bgColor = 'bg-gray-ln', 
  border,
  labelColor = 'text-button-text'
}: ButtonComponentProps) => {
  return (
    <div className={`flex py-3 px-4 rounded gap-x-2 items-center ${bgColor} ${border}`} onClick={onClick}>
      {icon && <IconComponent icon={icon} h="16px" w="16px" />}
      <p className={`text-xs font-bold uppercase ${labelColor}`}>{label}</p>
    </div>
  )
}
