import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from 'react';


function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonData, setjsonData] = useState(null);

  // changes the state of the image file
   const fileChangeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0])
  // 
}
// updates the file in the formdata
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData;
    formData.append(
      "file",
      selectedFile,
      selectedFile.name
    );
  
  // 
    const requestOptions = {
    method: "POST",
    body: formData
  };

  fetch("http://127.0.0.1:8000/severity", requestOptions)
  .then(response => response.json())
  .then(data => {setjsonData(data.result);
    console.log(data.result.severity);
  })
  .catch(error => console.log(error));

  fetch("http://127.0.0.1:8000/object-to-json", requestOptions)
  .then(response => response.json())
  .then(data => {setjsonData(data.result);
    console.log(data.result[0].name);
  })
  .catch(error => console.log(error));
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Upload Your Car image</h1>
        <form><fieldset>
          <input onChange={fileChangeHandler} name="image" type="file" accept='.jpg , .png , .jpeg'>
          </input>
          </fieldset>
          <button onClick={handleSubmit}>Upload</button>
        </form>
      </header>
    </div>
  );
}

export default App;
