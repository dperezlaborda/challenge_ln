import { Link, MockLinksType } from "../../../types/mock"

export const Links = (
  { 
    linksLineOne,
    magazineLinks,
    wineClubLinks,
    shippingLinks
  } : { 
    linksLineOne: MockLinksType[], 
    magazineLinks: Link[] | undefined,
    wineClubLinks: Link[] | undefined,
    shippingLinks: Link[] | undefined
      }) => {
      return (
        <div className="grid gap-y-4">
          <div className="flex gap-x-6">
            {linksLineOne.map((link, index) => (
              <p key={index} className="text-sm text-blue-ln arial-typo font-bold cursor-pointer">{link.link}</p>
            ))}
          </div>
          <div className="flex gap-x-6">
            <p className="text-sm arial-typo">Revistas:</p>
            {magazineLinks?.map((link, index) => (
              <p key={index} className="text-sm text-blue-ln arial-typo font-bold cursor-pointer">{link.link}</p> 
            ))}
          </div>
          <div className="flex gap-x-6">
            <p className="text-sm arial-typo">Club del Vino:</p>
            {wineClubLinks?.map((link, index) => (
              <p key={index} className="text-sm text-blue-ln arial-typo font-bold cursor-pointer">{link.link}</p>
            ))}
            <p className="text-sm arial-typo">Envíos:</p>
            {shippingLinks?.map((link, index) => (
              <p key={index} className="text-sm text-blue-ln arial-typo font-bold cursor-pointer">{link.link}</p>
            ))}	
          </div>
        </div>
      )
    }
