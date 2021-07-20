import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Toast from "../../util/Toast";

const SecondComponent = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [counter, setCounter] = useState(0);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // toast.success(toastMessage);
    setCounter(counter + 1);

    setShowToast(true);
  };

  return (
    <>
      <div className="toast-btn-div">
        <form onSubmit={(e) => handleSubmit(e)} className="toast-input">
          <input
            autoFocus
            type="text"
            onChange={(e) => setToastMessage(e.target.value)}
            value={toastMessage}
          />{" "}
          <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        limit="3"
        type="success"
        autoClose="7000"
      />

      {showToast && <Toast toastMessage={toastMessage} counter="1" />}
    </>
  );
};

export default SecondComponent;
