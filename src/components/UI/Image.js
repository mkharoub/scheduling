import { useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/use-intersection-observer";

const Image = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useIntersectionObserver({
    imgRef,
    callback: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(imgRef.current);
      }
    },
  });

  return (
    <div className="image" ref={imgRef}>
      {isVisible && <img {...props} />}
    </div>
  );
};

export default Image;
