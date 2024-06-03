const CardRegularFooterImg = ({author, author_img}: {author: string, author_img?: string }) => {
  return (
    <div className="flex flex-col gap-y-2 items-center md:flex-row md:items-center md:gap-x-2">
      <div>
        {author_img ? (
          <img src={author_img} alt={author} className="rounded-full w-14 h-14"/>
        ) : (
          <span className="block rounded-full bg-gray-ln w-14 h-14"></span>
        )}
      </div>
      <div>
        <p className="text-base button-text arial-typo">{author}</p>
      </div>
    </div>
  )
}

export default CardRegularFooterImg;