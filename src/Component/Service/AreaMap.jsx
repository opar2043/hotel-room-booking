import React from "react";

const AreaMap = () => {
  return (
    <div className="w-full h-[350px]">
      <iframe
        title="area-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.304249830163!2d-90.06457818488707!3d29.94421658192007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a60f3d24bb6f%3A0x51038b82c8d28c5c!2sPort%20of%20New%20Orleans!5e0!3m2!1sen!2sus!4v1693895254321!5m2!1sen!2sus"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="border-0 rounded-lg"
      ></iframe>
    </div>
  );
};

export default AreaMap;



{/* <IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule> */}
