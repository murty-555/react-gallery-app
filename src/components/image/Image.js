import React from 'react'
import classes from './Image.module.css'
import { Link } from 'react-router-dom'

const Image = ({imageData}) => {
  return (
    <div className={classes.imageForCheck}>
        <Link to={`/${imageData.id}`}><img className={classes.image} src={imageData.src.original} alt='img-here'/></Link>
        <p className={classes.imageOwner}>{imageData.photographer}</p>
    </div>
  )
}

export default Image