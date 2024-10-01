import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "./helloSlice";

export const Hello = () => {
  const [msg, setMsg] = useState("");
  const message = useSelector((state) => state.message.message);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{message}</h1>
      <input type="text" onChange={(e) => setMsg(e.target.value)} />
      <button onClick={() => dispatch(setMessage(count))}>submit</button>
    </div>
  );
};
