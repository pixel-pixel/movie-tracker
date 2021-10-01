import React, { FC, HTMLAttributes } from "react";
import { Serial } from "../../common/intarfaces";
import Button from "../../components/Button";

export interface SerialLayoutProps extends HTMLAttributes<HTMLDivElement> {
  serial: Serial | null
}

export const SerialLayout: FC<SerialLayoutProps> = ({
  serial,
  className,
  ...props
}) => {
  className = 'serial-layout ' + className

  return (
    <>
      <img 
        className="serial-layout__background" 
        src={serial?.image.original} 
        alt={serial?.name} />
    
    <div className={className}>
      <div className="serial-layout__image-block">
        <img src={serial?.image.original} />
        <div className="serial-layout__buttons">
          <Button label="like" />
          <Button label="share" />
        </div>
      </div>

      <div className="serial-layout__text-block">
        <h2 className="serial-layout__title">
          {serial?.name}
        </h2>
        <p className="serial-layout__genres">
          {serial?.genres.join(', ')}
        </p>
        <p dangerouslySetInnerHTML={{__html: serial?.summary || ''}} />
      </div>
    </div>
    </>
  )
}