import React, { useEffect, useState } from "react";
import Button from "./Button";
import Button2 from "./Button2";
import ShowText from "./ShowText";

const ButtonContainer = () => {
  const [text, setTest] = useState("");

  const onclick = () => {
    setTest("Button-1 Clicked!");
  };

  useEffect(() => {
    if (text) {
      const timer = setTimeout(() => {
        setTest("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col">
        <div className="flex justify-center items-center gap-1">
          <Button text={"Click Me"} setTest={setTest} />
          <Button2
            text={"Click Me"}
            className={
              "bg-cyan-800 border border-red-400 rounded-sm text-white py-1 px-3 cursor-pointer"
            }
            onClick={onclick}
          />
        </div>
        {text && <ShowText text={text} />}
      </div>
    </>
  );
};

export default ButtonContainer;
