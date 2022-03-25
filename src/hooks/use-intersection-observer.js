import { useEffect } from "react";

const useIntersectionObserver = ({ imgRef, callback }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px",
      threshold: 0.1,
    });

    const img = imgRef.current;

    observer.observe(img);

    return () => {
      observer.unobserve(img);
    };
  }, []);
};

export default useIntersectionObserver;
