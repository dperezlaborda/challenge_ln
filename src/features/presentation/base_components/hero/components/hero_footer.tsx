const HeroFooter = ({ author, textColor = 'text-gray-ln'}: {author: string, textColor?: string}) => {
  return (
    <div>
      <h3 className={`text-sm font-bold ${textColor} arial-typo`}>{author}</h3>
    </div>
  )
}

export default HeroFooter;
