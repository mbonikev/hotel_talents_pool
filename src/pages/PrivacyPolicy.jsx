import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const PrivacyPolicy = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/content/privacy-policy.md')
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className='markdown-container'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PrivacyPolicy;
