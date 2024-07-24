import { useEffect, useRef, useState } from "react";
import data from "./data.json";
console.log(data);

const DATA_LENGTH = data.length;
let intervalId;

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const ref = useRef(null);

  const handleNext = () => {
    setIndex((prevIndex) => {
      if (prevIndex == DATA_LENGTH - 1) {
        return 0;
      }
      return prevIndex + 1;
    });

    // if (index == DATA_LENGTH - 1) {
    //   setIndex(0);
    // } else {
    //   setIndex(index + 1);
    // }
  };

  const handlePrev = () => {
    if (index == 0) {
      setIndex(DATA_LENGTH - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    intervalId = setInterval(handleNext, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div onMouseEnter={() => clearInterval(intervalId)} className="container">
      <div onClick={handlePrev} className="left-btn">
        {"<"}
      </div>
      <img src={data[index].download_url} alt="" />
      <div onClick={handleNext} className=" right-btn">
        {">"}
      </div>
    </div>
  );
}
