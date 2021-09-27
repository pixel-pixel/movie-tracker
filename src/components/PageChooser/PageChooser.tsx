import React, { FC, HTMLAttributes,  useCallback, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./PageChooser.scss"

export interface PageChooserProps extends HTMLAttributes<HTMLDivElement> {
  data: {label: string, path: string}[]
}

export const PageChooser: FC<PageChooserProps> = ({
  data,
  className,
  ...props
}) => {
  const { pathname } = useLocation()
  let dataComponents = data.map(item => {
    let className = 'page-chooser__item'
    if(item.path === pathname) className += '_selected'
    return (
      <Link 
        className={className}
        to={item.path}>
          {item.label}
      </Link>
    )
  })
  useEffect(() => {
    console.log('kek')
    dataComponents = data.map(item => {
      let className = 'page-chooser__item'
      if(item.path === pathname) className += ' page-chooser__item_selected'
      return (
        <Link 
          className={className}
          to={item.path}>
            {item.label}
        </Link>
      )
    })
  }, [pathname])


  className = 'page-chooser ' + className

  return (
    <div className={className}>
      {dataComponents}
    </div>
  )
} 