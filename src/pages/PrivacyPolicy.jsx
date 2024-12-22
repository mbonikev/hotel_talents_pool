import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <div className="markdown-container p-14 max-lg:p-5">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
