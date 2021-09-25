import React, { FC, HTMLAttributes } from "react";
import "./SerialCard.scss"

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
  const ratingComponent = rating ? 
    <span className="rating">{rating}</span> :
    null
  image = image ?? 'https://en.islcollective.com/preview/201506/f/what-a-film-without-popcorn-information-gap-activities-reading-comprehension-e_80462_1.jpg'

  return (
    <div className={'serial-card ' + className} {...props}>
      <img src={image} alt={image} />

      {ratingComponent}

      <div>
        <h6>{name}</h6>
        <p>{genres.join(', ')}</p>
      </div>
    </div>

    // <div className="card mb-3 w-100">
    //   <div className="row g-0">
    //     <div className="col-md-4">
    //       <img src={image} className="img-fluid rounded-start" alt="..." />
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 className="card-title">{name}</h5>
    //         <p className="card-text" dangerouslySetInnerHTML={{__html: summary}}/>
    //         <p className="card-text">
    //           <small className="text-muted">{genresString}</small>
    //         </p>
    //         <p className="card-text">
    //           <small className="text-muted">{rating}</small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}