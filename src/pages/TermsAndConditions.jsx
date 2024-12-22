import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";

const TermsAndConditions = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src/content/terms-and-conditions.md")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <>
      <Navbar />
      <div className="markdown-container">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default TermsAndConditions;
