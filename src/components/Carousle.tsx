const Carousel = () => {
  return (
    <>
      <div className="relative">
        <img
          className="w-full "
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-cyan-950">
          <div className="text-center text-white">
            <h1 className="lg:text-5xl text-xl font-semibold mb-3">
              Ikuti job fair dan temukan pekerjaan idamanmu!
            </h1>
            <h1 className="lg:text-xl text-md px-5">
              Layanan job fair / bursa kerja Kemnaker merupakan layanan yang
              mempertemukan antara pencari pekerjaan dan pemberi kerja.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
