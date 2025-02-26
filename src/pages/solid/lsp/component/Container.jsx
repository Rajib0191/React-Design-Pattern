import React, { useEffect, useState } from "react";
import Cat from "../page/Cat";
import Dog from "../page/Dog";

const Container = () => {
  const [sound, setSound] = useState("");

  useEffect(() => {
    if (sound) {
      const sound = setTimeout(() => {
        setSound("");
      }, 2000);

      return () => clearTimeout(sound);
    }
  }, [sound]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-2">
        <Cat onClick={() => setSound("mew mew")} />
        <Dog onClick={() => setSound("Ghew Ghew")} />
      </div>
      {sound && <strong>{sound}</strong>}
    </div>
  );
};

export default Container;
