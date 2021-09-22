import React, { FC, HTMLAttributes } from "react";

export interface SerialCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  image: string
  summary: string
  genres: string[]
  rating: number | string
}

export const SerialCard: FC<SerialCardProps> = ({
  name, 
  image, 
  summary,
  genres, 
  rating,
  className,
  ...props
}) => {
  const genresString = 'Genres: ' + genres.join(', ')
  image = image ?? 'https://en.islcollective.com/preview/201506/f/what-a-film-without-popcorn-information-gap-activities-reading-comprehension-e_80462_1.jpg'
  rating = 'Rating: ' + rating
  className = 'serial-card ' + className

  return (
    <div className="card mb-3 w-50">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{__html: summary}}/>
            <p className="card-text">
              <small className="text-muted">{genresString}</small>
            </p>
            <p className="card-text">
              <small className="text-muted">{rating}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}