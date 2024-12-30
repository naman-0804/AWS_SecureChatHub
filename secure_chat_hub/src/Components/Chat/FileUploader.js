import React, { useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    try {
      const response = await axios.get("https://YOUR_API_URL/get-presigned-url", {
        params: { fileName: file.name },
      });
      const { url } = response.data;

      await axios.put(url, file);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default FileUploader;
