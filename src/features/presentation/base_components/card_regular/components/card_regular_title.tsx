interface CardRegularTitleProps {
  lead: string;
  title: string;
  className?: string
}

const CardRegularTitle = ({
  lead,
  title,
  className = 'xl'
}: CardRegularTitleProps) => {
  return (
    <div className="flex py-2 px-4 gap-x-2">
      <h3 className={`font-semibold text-${className}`}>
        <span className="text-blue-ln">{lead}</span>
        {title}
      </h3>
    </div>
  );
}

export default CardRegularTitle;