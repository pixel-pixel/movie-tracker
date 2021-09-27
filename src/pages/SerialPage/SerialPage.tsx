import React, { FC } from "react";
import { useParams } from "react-router";

export const SerialPage: FC = () => {
  const { id } = useParams<{id: string}>()

  return (
    <p>Hello {id}</p>
  )
}