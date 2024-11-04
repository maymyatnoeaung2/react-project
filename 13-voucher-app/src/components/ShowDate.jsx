import React from 'react'


const ShowDate = ({timestamp}) => {

  const date = new Date(timestamp);
  const currentTime = date.toLocaleTimeString("en-US", {
    hour12: true, // Ensures AM/PM format
    hour: "2-digit", // 2-digit hour
    minute: "2-digit", // 2-digit minute
    second: "2-digit", // 2-digit second
  });



  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getUTCFullYear();
  return (
 <>
    <p className="text-xs ">{`${day} ${month} ${year}`}</p>
    <p className="text-xs">{currentTime}</p>
 </>

  )
}

export default ShowDate