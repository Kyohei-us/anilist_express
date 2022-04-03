import { useEffect, useState } from "react";

// reference: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
export const useInput = (initVal: any) => {
    const [input, setInput] = useState(initVal);

    return {
        input,
        setInput,
        reset: () => setInput(initVal),
        bind: {
            input,
          onChange: (event: any) => {
              setInput(event.target.value);
          }
        }
      };
}