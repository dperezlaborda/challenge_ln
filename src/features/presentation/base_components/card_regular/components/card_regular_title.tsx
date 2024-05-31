interface CardRegularTitleProps {
  lead: string;
  title: string;
  fontSize?: string
  className?: string;
  fontBold?: boolean;
}

const CardRegularTitle = ({
  lead,
  title,
  fontSize = 'text-xl',
  className = '',
  fontBold = false
}: CardRegularTitleProps) => {
  return (
    <div className={`flex gap-x-2 ${className}`}>
      <h3 className={`${fontBold ? 'font-bold md:font-semibold' : 'font-semibold'} ${fontSize ?? 'text-xl'}`}>
        <span className="text-blue-ln pr-1">{lead}.</span>
        {title}
      </h3>
    </div>
  );
}

export default CardRegularTitle;