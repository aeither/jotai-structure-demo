import { useAtom } from "jotai";
import { uppercaseAtom } from "../state";

export const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};
