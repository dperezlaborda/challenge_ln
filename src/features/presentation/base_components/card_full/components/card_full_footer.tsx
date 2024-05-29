const CardFullFooter = ({ author, textColor = 'text-gray-ln'}: {author: string, textColor?: string}) => {
  return (
    <div>
      <h3 className={`text-sm font-bold ${textColor}`}>{author}</h3>
    </div>
  )
}

export default CardFullFooter;
