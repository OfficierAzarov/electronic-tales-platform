import React, { useState } from 'react';

import './Add.css';

const Add = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(value);
    event.preventDefault();
  };

  return (
    <div id="add">
      <form onSubmit={handleSubmit}>
        <label>
          Tu veux partager une expérience ? <br /> Le mic est à toi !
          <textarea value={value} autoFocus="true" onChange={handleChange} />
        </label>
        <input type="submit" value="Partager" />
      </form>
    </div>
  );
};

export default Add;
