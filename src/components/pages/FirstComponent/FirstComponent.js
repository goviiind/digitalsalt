import React, { useState, useEffect } from "react";
import "./FirstStyles.css";
import { ToastContainer, toast } from "react-toastify";
import Toast from "../../util/Toast";

const FirstComponent = () => {
  const [showToast, setShowToast] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);

  const handleSubmit = () => {
    // toast.success("Default Toast Message")
    setCounter(counter + 1);
    setShowToast(true);
  };

  return (
    <>
      <div className="toast-btn-div">
        <button onClick={handleSubmit}>Show Toast</button>
      </div>
      <ToastContainer
        position="bottom-center"
        limit="3"
        type="success"
        autoClose="7000"
      />

      {showToast && <Toast counter={counter} />}
    </>
  );
};

export default FirstComponent;
