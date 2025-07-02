const SectionHero = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full h-60 md:h-80 overflow-hidden mb-56">
      {/* <img
        src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3Rvcnl8ZW58MHx8MHx8fDA%3D"
        alt={title}
        className="w-full h-full object-cover"
      /> */}
      <div className="absolute inset-0 bg-black/10 bg-opacity-30" />
      <h2 className="absolute top-1/2 left-1/5  transform -translate-y-1/2 text-3xl md:text-5xl font-bold text-white z-10 max-w-4xl mx-auto">
        {title}
      </h2>
      {/* white stepped bottom mask */}
      <div className="absolute bottom-[-11] left-0 w-full flex">
        <div className="bg-[#745296] h-40 w-[20%]" />
        <div className="bg-[#745296] h-20 w-[20%]" />
        <div className="bg-[#eaeaea] h-30 w-[20%]" />
        <div className="bg-[#eaeaea] h-6 w-[20%]" />
        <div className="bg-[#eaeaea] h-40 w-[20%]" />
      </div>
    </div>
  );
};

export default SectionHero;
