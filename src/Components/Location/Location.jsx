import React from "react";

function Location() {
  return (
    <div>
      <div className="pb-">
      <h1 className="text-6xl font-bold underline-offset-3 underline text-center">Our <span className="choose">Location</span></h1>
      </div>
      <div className="p-12">
      <iframe
        width="100%"
        height="500"
        style={{borderRadius : '20px'}}
        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=23.745921,90.349029+(hasan%20it%20and%20software)&amp;t=p&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      </div>
    </div>
  );
}

export default Location;
