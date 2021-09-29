import React, { FC, HTMLAttributes } from "react";
import Button from "../Button";
import "./UserCard.scss"

export interface UserCardPrpos extends HTMLAttributes<HTMLDivElement> {
  image?: string
  name?: string
  isFriend?: boolean
}

export const UserCard: FC<UserCardPrpos> = ({
  image = 'https://m.poisk.vid.ru/img/icons/no_avatar.jpg',
  name = 'Andrii Bartish',
  isFriend = false,
  className,
  ...props
}) => {
  className = 'user-card ' + className

  return (
    <div className={className} {...props}>
      <img src={image} alt={name} />
      <h6>{name}</h6>
      <Button className="user-card__btn" label={isFriend ? 'unsubscribe' : 'subscribe'} />
    </div>
  )
}