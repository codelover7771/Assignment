import React, { useState } from 'react';

const EditBio = ({ onClose }) => {
  const [bioContent, setBioContent] = useState(''); 
  const handleSaveClick = () => {
    onClose(); 
  };

  return (
    <div>
      <h1>Write Something About YourSelf</h1>
      <textarea
        value={bioContent}
        onChange={(e) => setBioContent(e.target.value)}
        placeholder="Write Something Here"
      />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditBio;
