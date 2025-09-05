import React from "react";

const AreaMap = () => {
  return (
    <div className="w-full h-[350px]">
      <iframe
        title="area-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11021032.383893963!2d-97.56635489999998!3d30.97122045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a4b55f79a40f%3A0x6a8e3ad5e64d0bb7!2sLouisiana%2C%20USA!5e0!3m2!1sen!2sus!4v1693653971234!5m2!1sen!2sus"
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
