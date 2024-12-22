import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';

const PrivacyPolicy = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/content/privacy-policy.md')
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className='markdown-body'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PrivacyPolicy;
