import { GridContainer, Title } from '../../../components/common';
import { ourAdvatages } from '../constants';

const OurAdvantages = () => {
  return (
    <div className="spacing-sm">
      <Title as="h2" align="center">
        Наші переваги
      </Title>

      <GridContainer>
        {ourAdvatages.map(({ icon, title }) => (
          <div key={title} className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center justify-center rounded-full border border-dashed border-primary p-6 text-primary sm:p-8">
              {icon}
            </div>
            <Title
              as="h4"
              size="xs"
              variant="dark"
              uppercase={false}
              weight="extrabold"
              className="max-w-64"
            >
              {title}
            </Title>
          </div>
        ))}
      </GridContainer>
    </div>
  );
};

export default OurAdvantages;
