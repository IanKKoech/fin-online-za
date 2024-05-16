import React from 'react';
import nexiconImage from "../../../public/assets/Partners/Nexion.png";
import macShackImage from "../../../public/assets/Partners/Macshack.png";
import switchPayImage from "../../../public/assets/Partners/Switchpay.png";
import oxfordImage from "../../../public/assets/Partners/Oxford.png";
import smartFunderImage from "../../../public/assets/Partners/Smartfunder.png";
import weightDoctorImage from "../../../public/assets/Partners/weightdoctor.png";
import merlinMedImage from "../../../public/assets/Partners/merlinmed.png";
import hearComImage from "../../../public/assets/Partners/hearcom.png";
import podImage from "../../../public/assets/Partners/Pod.png";
import alviaAmaniImage from "../../../public/assets/Partners/alviarmani.png";
import centurionImage from "../../../public/assets/Partners/Centurion.png";

const images = [
    nexiconImage,
    macShackImage,
    switchPayImage,
    oxfordImage,
    smartFunderImage,
    weightDoctorImage,
    merlinMedImage,
    hearComImage,
    podImage,
    alviaAmaniImage,
    centurionImage
];

export const Partners = () => {
    return (
        <div className="grid grid-cols-4 gap-4 p-4 align-middle items-center justify-center">
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={`Partner ${index + 1}`} className="w-60 gap-8 h-auto object-contain" />
            ))}
        </div>
    );
};

export default Partners;
