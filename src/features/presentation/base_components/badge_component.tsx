interface BadgeComponentProps {
  label: string;
  bgColor?: string;
  border?: string;
  labelColor?: string;
}

export const BadgeComponent = ({
  label,
  bgColor = 'bg-black-ln',
  labelColor = 'text-white-ln'
}: BadgeComponentProps) => {
  return (
    <div className={`px-2 py-1 rounded-2xl gap-x-1 w-min ${bgColor}`}>
      <p className={`uppercase text-xs text-center ${labelColor}`}>{label}</p>
    </div>
  )
}