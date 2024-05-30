import { CardRegular } from '../../base_components/card_regular/card_regular'
import { SectionTitleComponent } from '../../base_components/section_title_component'

export const Opinion = () => {
  return (
    <div className='mt-12'>
    <SectionTitleComponent title="Opinión" />
      <div className='mt-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-53px xl:px-80'>
        <CardRegular
          className='border border-button-border p-4 gap-y-2 flex flex-col items-center text-center md:text-start md:items-start'
        >
          <CardRegular.Title 
            lead='Lead' 
            title='Title cuando se dieron cuenta, los dos hermanos estaban preparándose para alunizar. '
            fontBold
          />
          <CardRegular.FooterImg />
        </CardRegular>
        <CardRegular
          className='border border-button-border p-4 gap-y-2 flex flex-col items-center text-center md:text-start md:items-start'
        >
          <CardRegular.Title 
            lead='Lead'
            title='Title cuando se dieron cuenta, los dos hermanos estaban preparándose para alunizar.'
            fontBold
          />
          <CardRegular.FooterImg />
        </CardRegular>
        <CardRegular
          className='border border-button-border p-4 gap-y-2 flex flex-col items-center text-center md:text-start md:items-start'
        >
          <CardRegular.Title 
            lead='Lead' 
            title='Title cuando se dieron cuenta, los dos hermanos estaban preparándose para alunizar. '
            fontBold
          />
          <CardRegular.FooterImg />
        </CardRegular>
      </div>
    </div>
  )
}
