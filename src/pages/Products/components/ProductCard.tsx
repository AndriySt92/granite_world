import { ImEnlarge } from 'react-icons/im';

interface ProductItemProps {
  name: string;
  image: string;
}

const ProductCard = ({ name, image }: ProductItemProps) => {
  return (
    <>
      {/* Variant 1 */}
      {/* <div className="group relative flex min-h-[380px] cursor-pointer flex-col overflow-hidden rounded-md shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        
        <div className="relative aspect-square flex-1 overflow-hidden rounded-t-md">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

          
          <div className="absolute inset-0 flex items-center justify-center bg-dark/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <ImEnlarge className="z-10 text-4xl text-white transition-transform duration-500 group-hover:scale-150" />
          </div>
        </div>

        <div className="w-full border-t  bg-white px-1 py-3 text-center font-main text-lg text-dark transition-colors group-hover:bg-primary-hover group-hover:text-white">
          {name}
        </div>
      </div> */}
      {/* Variant 2 */}
      <div className="group relative flex min-h-[380px] cursor-pointer flex-col overflow-hidden rounded-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Image and overlay*/}
        <div className="relative flex-1 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Blur overlay */}
          <div className="bg-red absolute inset-0 flex items-center justify-center bg-dark/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <ImEnlarge className="z-10 text-4xl text-white/90 transition-transform duration-500 group-hover:scale-150" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-dark/80 to-transparent px-1 pb-2 pt-6 text-center">
          <span className="font-main text-lg font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {name}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
