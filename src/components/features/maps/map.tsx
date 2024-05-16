import React, { useEffect, useState } from "react";

export const Map = () => {
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;
    const center = "-26.2041,28.0473"; // Coordinates for Johannesburg
    const zoom = 12;
    const size = "600x400";

    const apiUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${size}&key=${apiKey}`;

    setMapUrl(apiUrl);
  }, []);

  return <div>{mapUrl && <img src={mapUrl} alt="Map of Johannesburg" />}</div>;
};

export default Map;
