import React from "react";

export const HtmlRenderer = ({ htmlContent }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border-none rounded-8 shadow-md">
      <div
        className="col-span-full overflow-auto"
        style={{ maxHeight: "80vh" }} // Adjust as needed
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};
