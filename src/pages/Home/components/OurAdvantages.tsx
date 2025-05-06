import { ourAdvantages } from '../constants';

const OurAdvantages = () => {
  return (
    <div className="container space-y-10">
      <h2 className="text-center font-main text-4xl font-extrabold uppercase first-letter:text-primary">
        Наші переваги
      </h2>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {ourAdvantages.map(({ icon, title }) => (
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center justify-center rounded-full border border-dashed border-primary p-6 text-primary sm:p-8">
              {icon}
            </div>
            <h3 className="max-w-64 font-main text-xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAdvantages;
