import Marquee from "react-fast-marquee";

const Partners = () => {
  const trustedCompanies = [
    {
      name: "TechFlow",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "InnovateLab",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "GrowthCorp",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "StartupHub",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "CloudTech",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "DataSync",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 my-20">
      <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
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
                src={company?.logo}
                alt={company?.name}
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
