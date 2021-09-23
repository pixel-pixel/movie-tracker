import React, { FC, HTMLAttributes } from "react";
import * as Icons from "react-bootstrap-icons"
import { useHistory } from "react-router";

import "./MainBar.scss"

export interface MainBarProps extends HTMLAttributes<HTMLDivElement> {}

export const MainBar: FC<MainBarProps> = ({
  children, 
  className,
  ...props
}) => {
  const history = useHistory()

  const onNewspaperClick = () => history.push('/news')
  const onSearchClick = () => history.push('/search')
  const onHomeClick = () => history.push('/home')

  className = "main-bar d-flex justify-content-evenly align-items-center " + className

  return (
    <div className={className} {...props}>
      <Icons.Newspaper 
      color="white" 
      size={32}
      onClick={onNewspaperClick} />
      <Icons.Search color="white"
      size={32}
      onClick={onSearchClick} />
      <Icons.House color="white"
      size={32}
      onClick={onHomeClick} />
    </div>
  )
}