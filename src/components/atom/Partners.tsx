import Marquee from "react-fast-marquee";

const Partners = () => {
  const trustedCompanies = [
    {
      name: "https://res.cloudinary.com/dtryuudiy/image/upload/v1746616130/logo_5_bozrnp_prxhii.png",
      logo: "ITF",
    },
    {
      name: "https://res.cloudinary.com/dtryuudiy/image/upload/v1748257141/Shamzbridge_Consult_white_lw5zgv.png",
      logo: "Shamzbridge",
    },
    {
      name: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1751881330/image-07-02-2025_09_18_AM-removebg-preview_ohof8g.png",
      logo: "NECA-ICT-Academy",
    },
    {
      name: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1751881330/image-07-02-2025_09_30_AM_1_sgyajo.png",
      logo: "NECA",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 my-20">
      <h3 className="text-3xl font-bold tracking-tight mb-6 text-center ">
        Trusted by Leading Companies
      </h3>
      <Marquee speed={50} pauseOnHover={false}>
        <div className="flex gap-3 justify-center items-center">
          {trustedCompanies?.map((company, index) => (
            <div
              key={index}
              className="w-64 h-36  flex justify-center items-center mx-6 "
            >
              <img
                src={company?.name}
                alt={company?.logo}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
