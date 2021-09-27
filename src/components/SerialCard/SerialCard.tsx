import React, { FC, HTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Series } from "../../services/tvmazeService";
import "./SerialCard.scss"

export interface SerialCardProps extends HTMLAttributes<HTMLDivElement> {
  serial: Series
}

export const SerialCard: FC<SerialCardProps> = ({
  serial,
  className,
  ...props
}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const {
    id,
    name,
    image: {original: image = 'https://en.islcollective.com/preview/201506/f/what-a-film-without-popcorn-information-gap-activities-reading-comprehension-e_80462_1.jpg'},
    rating,
    genres
  } = serial

  const ratingComponent = rating ? 
    <span className="rating">{rating}</span> : null

  const handleClick = () => {
    dispatch({type: 'SET_CURRENT_SERIAL_ID', payload: serial})
    history.push('/serial/' + id)
  }

  return (
    <div 
      className={'serial-card ' + className}
      onClick={handleClick}
      {...props}>
      <img src={image} alt={image} />

      {ratingComponent}

      <div>
        <h6>{name}</h6>
        <p>{genres.join(', ')}</p>
      </div>
    </div>
  )
}