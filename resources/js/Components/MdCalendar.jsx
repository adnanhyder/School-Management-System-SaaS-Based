import React, { useState, useEffect } from 'react';

export default function MdCalendar() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos'); // Example URL
        const data = await response.json();
        setContent(`<img src='https://via.placeholder.com/1200x500' />`); // Update this based on the actual response format
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <div id="content-area">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>


);
}
