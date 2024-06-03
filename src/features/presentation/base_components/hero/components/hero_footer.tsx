

const HeroFooter = ({ 
  author,
  textColor = 'text-gray-ln',
  className = '' 
}: { 
  author: string,
  textColor?: string,
  className?: string
}) => {
  return (
    <div className={className}>
      <h4 className={`text-sm font-bold ${textColor} arial-typo`}>{author}</h4>
    </div>
  )
}

export default HeroFooter;
