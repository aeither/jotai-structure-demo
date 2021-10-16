import { useAtom } from "jotai";
import { textAtom } from "../state";

// Use them anywhere in your app
export const Input = () => {
  const [text, setText] = useAtom(textAtom);
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};
