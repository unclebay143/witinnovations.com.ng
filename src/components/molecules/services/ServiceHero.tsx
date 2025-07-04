const SectionHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200">
            Comprehensive technology solutions designed to accelerate your
            business growth and digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;

// <div className="relative w-full h-60 md:h-80 overflow-hidden mb-56">
//   <img
//     src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3Rvcnl8ZW58MHx8MHx8fDA%3D"
//     alt={title}
//     className="w-full h-full object-cover"
//   />
//   <div className="absolute inset-0 bg-black/70 bg-opacity-30" />
//   <h2 className="absolute top-1/2 left-1/5  transform -translate-y-1/2 text-3xl md:text-5xl font-bold text-white z-10 max-w-4xl mx-auto">
//     {title}
//   </h2>
//   {/* white stepped bottom mask */}
//   <div className="absolute bottom-[-11] left-0 w-full flex">
//     <div className="bg-[#745296] h-40 w-[20%]" />
//     <div className="bg-[#745296] h-20 w-[20%]" />
//     <div className="bg-blue-900 h-30 w-[20%]" />
//     <div className="bg-[#eaeaea] h-6 w-[20%]" />
//     <div className="bg-blue-900 h-40 w-[20%]" />
//   </div>
// </div>;
