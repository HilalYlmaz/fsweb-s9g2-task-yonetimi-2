import React from "react";
import { formatDistanceToNow , differenceInDays } from 'date-fns' ;
import {tr } from 'date-fns/locale' ;


const Task = ({ taskObj, onComplete }) => {
  const result = formatDistanceToNow(new Date(taskObj.deadline) ,{
    addSuffix : true,
    locale : tr,
  })
  const days = differenceInDays(new Date(taskObj.deadline), new Date()) 
 
  return (
    <div className=" p-6 bg-white rounded-md leading-normal mt-4 shadow-md">
      <h3>{taskObj.title}</h3>
      <div className=" text-xs py-1">son teslim: {" "}
      <span className={days <= 3 ? "bg-[#ffd9d4]" : "bg-[#d2d5fd]"}> 
        {result}
      </span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className=" inline-block px-3 py-1 text-xs border-solid rounded-full" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
