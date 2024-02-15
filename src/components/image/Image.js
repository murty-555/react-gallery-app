import React from 'react'
import classes from './Image.module.css'

const Image = ({imageData}) => {
  return (
    <div className={classes.imageForCheck}>
        <img className={classes.image} src={imageData.src.original} alt='img-here'/>
        <p className={classes.imageOwner}>{imageData.photographer}</p>
    </div>
  )
}

export default Image