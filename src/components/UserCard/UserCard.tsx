import React, { FC, HTMLAttributes, useEffect } from "react";
import { useHistory } from "react-router";
import { User } from "../../common/intarfaces";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import Button from "../Button";
import "./UserCard.scss"

export interface UserCardPrpos extends HTMLAttributes<HTMLDivElement> {
  user: User | null
}

export const UserCard: FC<UserCardPrpos> = ({
  user,
  className,
  ...props
}) => {
  const { user: me } = useTSelector(state => state.user)
  const { addFriend, removeFriend } = useActions()
  const history = useHistory()
  useEffect(() => {
    if (me === null || user === null) history.push('/sign-in')
  }, [])

  const { id, name, imageURL } = user as User
  const isFriend = me?.friendIDs?.includes(id) ?? false
  const handleClick = () => {
    if(me !== null && user !== null) isFriend ?
      removeFriend(me, user.id) :
      addFriend(me, user.id)
  }

  className = 'user-card ' + className

  return (
    <div className={className} {...props}>
      <img src={imageURL ?? 'https://m.poisk.vid.ru/img/icons/no_avatar.jpg'} alt={name} />
      <h6>{name}</h6>
      <Button 
        className="user-card__btn" 
        label={isFriend ? 'unsubscribe' : 'subscribe'}
        onClick={handleClick} />
    </div>
  )
}