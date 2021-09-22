import React, { FC, HTMLAttributes } from "react";

export interface SerialCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  image: string
  genres: string[]
  status: string
  rating: number
}

export const SerialCard: FC<SerialCardProps> = ({
  name, 
  image, 
  genres, 
  status, 
  rating,
  className,
  ...props
}) => {
  className = 'serial-card ' + className


  return (
    <div className={className} >
      <img 
        className="serial-card__img"
        src={image} 
        alt={name}
      />
      <h2>{name}</h2>
      <p>{genres.join()}</p>
      <p>{"status: " + status}</p>
      <p>{"rating: " + rating}</p>
    </div>
  )
}