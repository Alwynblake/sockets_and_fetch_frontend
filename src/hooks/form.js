import React, { useState, useEffect } from "react";
// import Q from './hooks/queue.js';

//callbacks and submits
const Form = cb => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    // cb();
    // Q.publish('deeds', 'work', values);
    // socket.emit('words', values);
  };
};


export default Form;
