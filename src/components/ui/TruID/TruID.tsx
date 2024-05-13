import Image from "next/image";
import TruIDLogo from "../../../../public/assets/images/truID.png";

export const TruID: React.FC = () => (
  <div>
    <Image src={TruIDLogo} alt="TruID Logo" width={50} height={50} />
  </div>
);
