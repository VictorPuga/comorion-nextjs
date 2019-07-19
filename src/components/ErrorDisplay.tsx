import React from "react";
type ErrorDisplayProps = {
  message: string;
};
export default function ErrorDisplay(props: ErrorDisplayProps): JSX.Element {
  return <div>Oh no! {props.message}</div>;
}
