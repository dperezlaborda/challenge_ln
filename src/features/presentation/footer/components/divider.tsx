
export const Divider = ({ hidden } : {hidden: boolean}) => (
  <span className={hidden ?
    'hidden lg:block lg:button-border lg:h-px lg:w-full lg:bg-button-border' : 
    'block button-border h-px w-full bg-button-border'}
  >
  </span>
)
