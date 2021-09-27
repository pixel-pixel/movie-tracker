import React, { FC, HTMLAttributes } from "react";
import { useHistory } from "react-router";
import "./SerialCard.scss"

export interface SerialCardProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  name: string
  image: string
  genres: string[]
  rating: number | string
}

export const SerialCard: FC<SerialCardProps> = ({
  id,
  name, 
  image, 
  genres, 
  rating,
  className,
  ...props
}) => {
  const history = useHistory()

  const handleClick = () => history.push('/serial/' + id)
  const ratingComponent = rating ? 
    <span className="rating">{rating}</span> : null
  image = image ?? 'https://en.islcollective.com/preview/201506/f/what-a-film-without-popcorn-information-gap-activities-reading-comprehension-e_80462_1.jpg'

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