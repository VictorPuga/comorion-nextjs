import React from "react";
import randomArrayElement from "../utils/randomArrayElement";
type NoElementsProps = {
  noun: string;
  plural?: string;
};
export default function NoElements(props: NoElementsProps): JSX.Element {
  const { noun } = props;
  const plural: string = props.plural || noun + "s";
  const phrases = computePhrases(noun, plural);
  const phrase = randomArrayElement(phrases);
  return <div>{phrase}</div>;
}
function computePhrases(noun: string, plural: string) {
  return [
    `Oh, no! No hay ${plural} que mostrar`,
    `No parece haber ningún ${noun} para ti`
  ];
}
