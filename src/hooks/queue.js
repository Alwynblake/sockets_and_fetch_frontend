import React, { useState, useEffect } from "react";
import Q from '@nmq/q/client';

//connect outside of the render cycle.
const queue = new Q('deeds');

const Queue = require('@nmq/q/client');

Queue.publish('deeds', 'work', values);

useEffect( () => {
  queue.subscribe('work', message => {
    setQueueMessage(message);
  });
});

export default queue;