import './App.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import BackupIcon from '@material-ui/icons/Backup';

export default function App() {
  const [file, setfile] = useState('');
  const [fileCaption, setfileCaption] = useState('');

  let handleChange = e => {
    setfile(URL.createObjectURL(e.target.files[0]));
  };
  let handleText = e => {
    setfileCaption(e.target.value);
  };

  let handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileCaption', fileCaption);

    for (var value of formData.values()) {
      console.log(value);
    }

    fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data',
      },
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Response was not OK');
        }
        alert('The file is successfully uploaded');
        return response.blob();
      })
      .then(formData => {
        console.log('Success:', formData);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  };

  return (
    <div className="App">
      <div className="formImage flex-container space-around">
        <form onSubmit={handleUpload} method="post">
          <div className="flex-item fileUpload">
            <input type="file" name="file" onChange={handleChange} />
          </div>
          <div className="flex-item">
            <input
              type="text"
              name="fileCaption"
              onChange={handleText}
              value={fileCaption}
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
      {file && fileCaption && (
        <div className="display">
          <ul>
            <li>
              <img src={file} alt={fileCaption} />
              <br />
              <span> Caption: {fileCaption}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
