import React from 'react'

const CatList = (props) => {

  console.log(props.catPics)

  return <div>
    {props.catPics.map(cat =>
      <img src={cat.url} alt={cat.id}
      />
    )}
  </div>
}

export default CatList