import { useState } from "react";
import unflatten from "../utils/unflatten";
import flatten from "../utils/flatten";

export default function useNested<T extends object>(
  model: T,
  separator: string = "."
): [T, object, (path: string, value: any) => void] {
  const [stateModel, updateStateModel] = useState<T>(model);
  let flattened: any = flatten(stateModel as object, separator);
  const updateModel = (path: string, value: any) => {
    flattened[path] = value;
    updateStateModel(unflatten(flattened) as T);
  };
  return [stateModel, flattened, updateModel];
}
