import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  
  const imageRef = useRef(null);

  const [inView,senInView] = useState(false);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight
  }

  const scrollHandler = () => {
    setInView(isInView);
  }

useEffect(() => {
  window.addEventListener("scroll",scrollHandler)
  return () => {
    window.removeEventListener("scroll", scrollHandler)
  }
},[]);

  return (
    <img 
      src={inView ? secondaryImg : primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageToggleOnScroll;
