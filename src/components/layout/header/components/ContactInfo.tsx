import { CgMail } from 'react-icons/cg';
import { FiPhone } from 'react-icons/fi';

const ContactInfo = () => (
  <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:gap-6">
    <div className="flex justify-start">
      <a
        className="flex flex-col"
        href="mailto:graniteworld@gmail.com"
        rel="nofollow"
        target="_blank"
      >
        <div className="flex flex-col">
          <div className="font-main text-xl font-bold uppercase text-light">
            graniteworld@gmail.com
          </div>
          <div className="flex items-center justify-start gap-1 font-main text-secondary transition-colors duration-500 hover:text-primary lg:justify-center">
            <CgMail className="h-5 w-5" />
            <span>Напишіть нам на E-Mail</span>
          </div>
        </div>
      </a>
    </div>
    <div className="flex justify-start">
      <a className="flex flex-col" href="tel:+38 096 112 112 6" rel="nofollow" target="_blank">
        <div className="flex flex-col">
          <div className="font-main text-xl font-bold uppercase text-light">+38 067 112 112 6</div>
          <div className="font-main text-xl font-bold uppercase text-light">+38 096 112 112 6</div>
          <div className="flex items-center justify-start gap-1 align-baseline font-main text-secondary transition-colors duration-500 hover:text-primary lg:justify-center">
            <FiPhone className="h-4 w-4" />
            <span>Зателефонуйте нам</span>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default ContactInfo;
