import React from 'react';
import Typewriter from 'typewriter-effect';

function TypeWriter({ strings, wrapperClassName, cursorClassName }) {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 50,
        wrapperClassName,
        cursorClassName,
      }}
    />
  );
}

export default TypeWriter;
