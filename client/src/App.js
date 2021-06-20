import './App.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import BackupIcon from '@material-ui/icons/Backup';

export default function App() {
  const [img, setImg] = useState('');
  const [imgCaption, setImgCaption] = useState('');

  const handleChange = e => {
    setImg(e.target.value);
  };
  const handleText = e => {
    setImgCaption(e.target.value);
  };

  const handleUpload = async e => {};

  return (
    <div className="App">
      <div className="formImage flex-container space-around">
        <form onSubmit={handleUpload}>
          <div className="flex-item imgUpload">
            <input type="file" name="img" onChange={handleChange} value={img} />
          </div>
          <div className="flex-item">
            <input
              type="text"
              name="imgCaption"
              onChange={handleText}
              value={imgCaption}
            />
          </div>
          <div className="flex-item">
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
            >
              <BackupIcon className="uploadBtn" />
              Upload
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
