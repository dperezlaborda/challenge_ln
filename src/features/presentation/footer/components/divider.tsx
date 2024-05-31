
export const Divider = ({ hidden } : {hidden: boolean}) => (
  <span className={`block button-border h-px w-full bg-button-border ${hidden ? 'lg:hidden' : ''}`}></span>
)
