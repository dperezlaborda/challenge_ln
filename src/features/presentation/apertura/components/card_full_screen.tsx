import { BadgeComponent } from "../../base_components/badge_component";

const CardBadge = ({ label } : {label: string}) => <BadgeComponent label={label} />;
const CardContent = ({ title } : {title: string}) => <CardContent title={title} />;
const CardFooter = ({ children } : {children: React.ReactNode}) => <div>{children}</div>;

const Card = {
  Badge: CardBadge,
  Content: CardContent,
  Footer: CardFooter,
}

export const CardFullScreen = () => {
  return (
    <div className="h-450px bg-red-500">
      <div className="bg-gradient-to-b from-black-opacity-0 to-black-opacity-80 h-full flex items-end">
        <div className="h-224px w-full pt-16 px-4	pb-2">
          <Card.Badge label="infografía" />
          <Card.Content title="Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"/>
        </div>
      </div>
    </div>
  )
}
