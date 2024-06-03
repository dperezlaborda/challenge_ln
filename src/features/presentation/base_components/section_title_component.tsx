export const SectionTitleComponent = ({ title } : {title: string}) => {
  return (
    <div className="py-0 px-4 mb-4 lg:px-50px xl:px-80">
      <h2 className="text-2xl	mb-2 font-bold">
        {title}
      </h2>
      <span className="block h-px bg-button-border w-full"></span>
    </div>
  )
}
