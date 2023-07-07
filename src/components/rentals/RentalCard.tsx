import React from 'react'
import { Datum, Data, Included } from './types/SearchData'

type Props = {
  item: Datum,
  dataset: Data,
}

const RentalCard = (props: Props) => {

  const { item, dataset } = props;

  // Parse URL from data
  const imgId: string = item.relationships.primary_image.data.id;
  const correctImageArray: Included[] = dataset.included.filter(item => item.id === imgId);
  const imgUrl: string = correctImageArray[0].attributes.url;

  return (
    <div>
      <img style={{"height": "100px", "width": "150px"}}src={imgUrl} />
    </div>
  )
}

export default RentalCard