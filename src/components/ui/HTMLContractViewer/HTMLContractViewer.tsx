import { creditLifePolicy } from "@/utils/creditLifePolicy";
import { useEffect, useRef, useState } from "react";

interface HTMLContractViewerProps {
  htmlContent: string;
  onAccept: () => void;
}

export const HTMLContractViewer: React.FC<HTMLContractViewerProps> = ({
  htmlContent,
  onAccept,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState<boolean>(false);
  const [isAccepted, setIsAccepted] = useState<boolean>(false); // New state variable

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = htmlContent
        ? htmlContent
        : creditLifePolicy;
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [htmlContent]);

  const handleScroll = () => {
    if (
      containerRef.current &&
      containerRef.current.scrollTop + containerRef.current.clientHeight ===
        containerRef.current.scrollHeight
    ) {
      setIsScrolledToEnd(true);
      setIsAccepted(true); // Set isAccepted to true when scrolled to the bottom
    } else {
      setIsScrolledToEnd(false);
      setIsAccepted(false); // Reset isAccepted when not at the bottom
    }
  };

  return (
    // <iframe
    //   id="pre_agreement"
    //   className="h-[50vh] w-[94vw] lg:w-[50vw] overflow-y-auto rounded-xl border border-gray-100 mb-4"
    //   srcDoc={htmlContent}
    // />
    <div
      // style={{
      //   position: "relative",
      //   maxHeight: "calc(100vh - 0px)", // Adjust the max height to fit the content within the screen height
      //   overflowY: "scroll",
      //   border: "none",
      //   borderRadius: "8px",
      //   boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      //   backgroundColor: "#fff",
      //   padding: "16px",
      //   width: "1000px",
      //   height: "1000px",
      //   maxWidth: "100vw", // Limit the width of the container to 90% of the viewport width
      //   margin: "0 auto", // Center the container horizontally
      // }}
      className="relative max-h-[calc(100vh-0px)] overflow-y-scroll border-none rounded-8 shadow-md bg-white p-16 w-[350px] h-[500px] lg:w-[1000px] lg:h-[1000px] max-w-screen-70 mx-auto"
    >
      <div ref={containerRef} style={{ marginBottom: "32px" }} />
    </div>
  );
};
