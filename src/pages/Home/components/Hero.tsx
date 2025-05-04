const Hero = () => {
  return (
    <div className="relative z-10 h-[calc(100vh-176px)]">
      <div className="relative mb-20 aspect-[16/9] h-full w-full overflow-hidden shadow-2xl">
        <img
          src="https://antik.ua/wp-content/uploads/2022/06/Pamyatniki-foto-slajd.webp"
          alt="Granite monuments collection"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent" />

        {/* Content Overlay */}
      </div>
      <div className="container absolute inset-0 flex flex-col justify-center font-main text-white">
        <h2 className="mb-4 max-w-4xl font-main text-4xl font-extrabold uppercase  drop-shadow-lg md:text-5xl">
          Компанія <span className="text-primary">Світ грантіну</span> – виробник продукції із
          граніту
        </h2>
        <p className="max-w-4xl text-lg text-white/90 drop-shadow-md md:text-xl">
          На нашому сайті ви можете переглянути каталог різних видів пам’ятників, деталів до
          пам’ятників та будівельні матеріали з натурального каменю. Виробляємо гранітні пам’ятники,
          дeталі до пам’ятників та різну продукцію з натурального каменю на замовлення.
        </p>
      </div>
    </div>
  );
};

export default Hero;
