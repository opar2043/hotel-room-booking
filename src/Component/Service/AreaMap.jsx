import React from "react";

const AreaMap = () => {
  return (
    <div className="w-full h-[400px]">
      <iframe
        title="area-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903546584909!2d90.39152047465527!3d23.75088528874426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5b9e2a7f05%3A0xc652e67f4a4a3e3f!2sDhaka!5e0!3m2!1sen!2sbd!4v1693653971234!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="border-0 rounded-lg"
      ></iframe>
    </div>
  );
};

export default AreaMap;
