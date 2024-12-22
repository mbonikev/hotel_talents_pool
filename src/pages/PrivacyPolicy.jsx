import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src/content/privacy-policy.md")
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

export default PrivacyPolicy;
