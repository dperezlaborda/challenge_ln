import { MockDataType } from '../../../types/mock'
import { CardRegular } from '../../base_components/card_regular/card_regular'
import { SectionTitleComponent } from '../../base_components/section_title_component'

export const Opinion = ({ data } : { data: MockDataType[] }) => {
  return (
    <div className='mt-12'>
    <SectionTitleComponent title="Opinión" />
      <div className='px-5 grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-53px xl:px-80'>
        {data.map((card, index) => (
          <CardRegular
          key={index}
          className='border border-button-border p-4 gap-y-2 flex flex-col items-center text-center md:text-start md:items-start'
          >
            <CardRegular.Title 
              lead={card.volanta || 'N/A'} 
              title={card.titulo || 'N/A'}
              className='fontbold md:font-normal'
              fontSize='md:text-lg'
            />
            <CardRegular.FooterImg
              author={card.nombre_autor}
              author_img={card.imagen_autor || undefined}
            />
          </CardRegular>
        ))}
      </div>
    </div>
  )
}
