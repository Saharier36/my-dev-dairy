import Image from "next/image";
import kathBirali from "../../assets/images/kathBirali.jpg";

const AboutPage = () => {
  return (
    <div className="grid grid-cols-2 mx-auto">
      <Image
        width="500"
        height="300"
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
        alt="panda"
      ></Image>
      <Image
        width="500"
        height="300"
        src="https://images.unsplash.com/photo-1474511320723-9a56873867b5"
        alt="fox"
      ></Image>
      <Image width="500" height="300" src="/panda.jpg" alt="panda"></Image>
      <Image width="500" height="300" src={kathBirali} alt="kathBirali"></Image>
    </div>
  );
};

export default AboutPage;
