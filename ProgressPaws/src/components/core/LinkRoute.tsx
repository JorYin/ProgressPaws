import React from "react";
import { Link } from "react-router-dom";

interface LinkRouteProps {
  style: string,
  toRoute: string,
  text: string
}

const LinkRoute: React.FC<LinkRouteProps> = ({style, toRoute, text}) => {
  return (
    <Link className={style} to={toRoute}>{text}</Link> 
  )
}

export default LinkRoute;