import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import SerialLayout from "../../layouts/SerialLayout";
import tvmazeService from "../../services/tvmazeService";
// import { State } from "../../Oldstore";

export const SerialPage: FC = () => {
  // const serial = useSelector<State, State['currentSerial']>(state => state.currentSerial)
  // console.log(serial)

  return (<p>kek</p>
    // <SerialLayout serial={serial}/>
  )
}