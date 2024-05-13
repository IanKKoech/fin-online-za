// components/ScrollIndicator.tsx
import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";

export const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      // Hide the scroll indicator when the user reaches the bottom
      setIsVisible(!isAtBottom);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.scrollIndicator} ${
        isVisible ? styles.show : styles.hide
      }`}
    >
      <span>Scroll Down</span>
    </div>
  );
};
