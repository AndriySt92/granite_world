import { Button, Text, Title } from '../../../components/common';
import useModalActions from '../../../hooks/useModalAction';

const Hero = () => {
  const { openModal } = useModalActions();

  return (
    <div className="relative z-10 h-[calc(100vh-248px)] lg:h-[calc(100vh-156px)]">
      <div className="relative mb-20 aspect-[16/9] h-full w-full overflow-hidden shadow-2xl">
        <img
          src="https://antik.ua/wp-content/uploads/2022/06/Pamyatniki-foto-slajd.webp"
          alt="Granite monuments collection"
          className="h-full w-full object-cover object-[60%] sm:object-[60%] md:object-center"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent" />

        {/* Content Overlay */}
      </div>
      <div className="container absolute inset-0 flex flex-col justify-center space-y-6 font-main text-white">
        <div>
          <Title as="h1" variant="light" size="lg" className="mb-4 max-w-5xl drop-shadow-lg">
            Компанія <span className="font-extrabold text-primary">Світ грантіну</span> – виробник
            продукції із граніту
          </Title>
          <Text size="lg" variant="light" className="max-w-5xl">
            На нашому сайті ви можете переглянути каталог різних видів пам’ятників, деталів до
            пам’ятників та будівельні матеріали з натурального каменю. Виробляємо гранітну плитку,
            бордюри, бруківку, стільниці, підвіконня, та іншу продукцію на замовлення.
          </Text>
        </div>
        <div className="flex gap-4">
          <Button intent="outline" size="lg" onClick={() => openModal('callback')}>
            Замовити дзвінок
          </Button>
          <Button intent="primary" size="lg" onClick={() => openModal('callback')}>
            Написати нам
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
