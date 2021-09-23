import React, { FC, HTMLAttributes, useState } from "react";
import * as Icons from "react-bootstrap-icons"
import { useHistory } from "react-router";
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'

import Search from "../Search";

import "./MainBar.scss"
import { State } from "../../store";

export interface MainBarProps extends HTMLAttributes<HTMLDivElement> {}

export const MainBar: FC<MainBarProps> = ({
  children, 
  className,
  ...props
}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const findText = useSelector<State, State['findText']>(state => state.findText)

  const onNewspaperClick = () => history.push('/news')
  const onSearchClick = () => { 
    history.push('/search')
    dispatch({type: 'SET_FIND_TEXT', payload: ''})
  }
  const onHomeClick = () => history.push('/home')

  className = "main-bar d-flex justify-content-evenly align-items-center " + className

  return (
    <div className={className} {...props}>
      {
      findText !== null ? 
      <Search 
      autoFocus
      name="global-search"
      onChange={e => dispatch({type: 'SET_FIND_TEXT', payload: e.target.value})}
      onKeyDown={e => e.keyCode === 13 ? dispatch({type: 'SET_FIND_TEXT', payload: null}): null} /> :
      <>
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
      </>
    }
    </div>
  )
}