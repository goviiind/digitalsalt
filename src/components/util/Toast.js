import React, { useState, useEffect } from "react";
import "./Toast.css";

const Toast = ({ toastMessage, counter }) => {
  const [toastList, setToastList] = useState();

  let toasts = [];

  //Remove Toast
  const removeToast = (i) => {
    // const filteredToasts = toasts.filter((toast, index) => index !== i);
    // setToastList(filteredToasts);
    toasts.splice(i);
    setToastList(toasts);
    console.log(toasts);
  };

  //Creating Toast and Displaying it

  for (let i = 0; i < counter; i++) {
    toasts.push(
      <div className="toast">
        <p>{toastMessage ? toastMessage : "Default Toast Message"}</p>
        <span onClick={() => removeToast(i)}>x</span>
      </div>
    );
  }

  useEffect(() => {
    setToastList(toasts);
  }, [toasts]);

  return <div className="toast-container">{toastList}</div>;
};

export default Toast;
