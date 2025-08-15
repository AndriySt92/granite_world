import { productCatalog, stoneCatalog } from '../../constants';

import { AboutCompany, CategoriesList, Hero, OurAdvantages, SliderSection } from './components/';
import { ourWorks } from './constants';

const Home = () => {
  const {
    'monument-accessories': monumentAccessories,
    'construction-materials': constructionMaterials,
    monuments,
  } = productCatalog;

  return (
    <div className="spacing-lg">
      <section>
        <Hero />
      </section>

      <section>
        <div className="spacing-lg container">
          <CategoriesList
            title={monuments.title}
            items={monuments.items}
            linkPath={monuments.path}
          />
          <CategoriesList
            title={monumentAccessories.title}
            items={monumentAccessories.items}
            linkPath={monumentAccessories.path}
          />
          <CategoriesList
            title={constructionMaterials.title}
            items={constructionMaterials.items}
            linkPath={constructionMaterials.path}
          />
        </div>
      </section>
      <section className="bg-gray-100 pb-16 pt-12 sm:pb-24 sm:pt-20">
        <div className="container">
          <SliderSection title={stoneCatalog.title} items={stoneCatalog.items} />
        </div>
      </section>
      <section>
        <div className="container">
          <OurAdvantages />
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container pb-16 pt-12 sm:pb-24 sm:pt-20">
          <SliderSection title={ourWorks.title} items={ourWorks.items} />
        </div>
      </section>
      <section>
        <div className="container">
          <AboutCompany />
        </div>
      </section>
    </div>
  );
};

export default Home;
