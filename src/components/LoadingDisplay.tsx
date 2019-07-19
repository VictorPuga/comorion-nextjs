import React from "react";
type LoadingDisplayProps = {
  noun: string;
};
export default function LoadingDisplay(
  props: LoadingDisplayProps
): JSX.Element {
  return <div>En busqueda de {props.noun}</div>;
}
