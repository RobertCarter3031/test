import React from 'react'
import { Datum, Data, Included } from './types/SearchData'

type Props = {
  item: Datum,
  dataset: Data,
}

const RentalCard = (props: Props) => {

  const { item, dataset } = props;

  // Parse URL from data
  const imgId: string = item.relationships?.primary_image?.data.id;
  const correctImageArray: Included[] | undefined = dataset?.included.filter(item => item.id === imgId);
  const imgUrl: string | undefined = correctImageArray[0]?.attributes.url;

  // TODO: ask why we can get this from item.attributes?
  const fallbackUrl: string = item.attributes.primary_image_url;

  return (
    <div>
      <img style={{"height": "150px", "width": "200px"}} src={imgUrl || fallbackUrl} />
      <p>{item.attributes.name}</p>
    </div>
  )
}

export default RentalCard