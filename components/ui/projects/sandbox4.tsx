"use client";
import { useState } from "react";

export default function Sandbox() {
  const [referenceFile, setFile1] = useState<File | null>(null);
  const [inputFile, setFile2] = useState<File | null>(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [draggingFile1, setDraggingFile1] = useState(false);
  const [draggingFile2, setDraggingFile2] = useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    setDragging: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setFile(files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    setDragging: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (
    setDragging: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setDragging(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!referenceFile || !inputFile) {
      setError("Please upload both images");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("reference", referenceFile);
    formData.append("input", inputFile);

    try {
      const response = await fetch("http://localhost:5000/process", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process the images");
      }

      const data = await response.json();
      setResult(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-36 pb-20">
      <div className="sandbox">
        <h1>Sandbox</h1>
        <div
          className="drag-drop-container"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            // marginBottom: "20px",
          }}
        >
          <div
            className={`drop-zone ${draggingFile1 ? "dragging" : ""}`}
            onDragOver={(e) => handleDragOver(e, setDraggingFile1)}
            onDragLeave={() => handleDragLeave(setDraggingFile1)}
            onDrop={(e) => handleDrop(e, setFile1, setDraggingFile1)}
            style={{
              border: "2px dashed #ccc",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            {referenceFile ? (
              <p>File 1 ready: {referenceFile.name}</p>
            ) : (
              <p>Drag and drop an image here for File 1, or click to upload</p>
            )}
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setFile1)}
              style={{ display: "block", marginTop: "10px" }}
            />
          </div>

          <div
            className={`drop-zone ${draggingFile2 ? "dragging" : ""}`}
            onDragOver={(e) => handleDragOver(e, setDraggingFile2)}
            onDragLeave={() => handleDragLeave(setDraggingFile2)}
            onDrop={(e) => handleDrop(e, setFile2, setDraggingFile2)}
            style={{
              border: "2px dashed #ccc",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            {inputFile ? (
              <p>File 2 ready: {inputFile.name}</p>
            ) : (
              <p>Drag and drop an image here for File 2, or click to upload</p>
            )}
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setFile2)}
              style={{ display: "block", marginTop: "10px" }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Submit"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {result && (
          <div className="result">
            <h2>Results</h2>
            <p>X: {result.X}</p>
            <p>Y: {result.Y}</p>
            <p>H: {result.H}</p>
            <p>A: {result.A}</p>
          </div>
        )}

        <style jsx>{`
          .drag-drop-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }

          @media (min-width: 768px) {
            .drag-drop-container {
              flex-direction: row;
            }
          }

          .drop-zone {
            transition: border-color 0.3s;
          }

          .drop-zone.dragging {
            border-color: #007bff;
          }
        `}</style>
      </div>
    </div>
  );
}
