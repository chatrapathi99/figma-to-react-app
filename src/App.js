import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [generatedCode, setGeneratedCode] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please upload a Figma JSON file!");
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5001/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setGeneratedCode(response.data.code);
      setPreviewUrl(response.data.previewUrl); // Deployed link
    } catch (error) {
      console.error("Error:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div className="container">
      <h2>Upload Figma Design</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Generate React Code</button>
      
      {generatedCode && (
        <>
          <h3>Generated JSX:</h3>
          <textarea value={generatedCode} readOnly rows="10"></textarea>
          <h3>Live Preview:</h3>
          <a href={previewUrl} target="_blank" rel="noopener noreferrer">View Live App</a>
        </>
      )}
    </div>
  );
};

export default App;
