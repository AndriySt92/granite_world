import { CgMail } from 'react-icons/cg';
import { FiPhone } from 'react-icons/fi';

import { contactInfo } from '../../../constants';
import { Text } from '../../common';

const ContactInfo = () => (
  <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:gap-6">
    <div className="flex justify-start">
      <a
        className="flex flex-col"
        href={`mailto:${contactInfo.email}`}
        rel="nofollow"
        target="_blank"
      >
        <div className="flex flex-col">
          <Text
            as="span"
            variant="light"
            size="lg"
            className="uppercase"
            weight="bold"
            hover="primary"
          >
            {contactInfo.email}
          </Text>
          <div className="group flex items-center justify-start gap-1 text-secondary transition-colors duration-300 hover:text-primary lg:justify-center">
            <CgMail className="h-5 w-5" />
            <Text as="span" variant="secondary" size="sm" weight="medium" hover="group">
              Напишіть нам на E-Mail
            </Text>
          </div>
        </div>
      </a>
    </div>
    <div className="flex justify-start">
      <a
        className="flex flex-col"
        href={`tel:${contactInfo.phones[0]}`}
        rel="nofollow"
        target="_blank"
      >
        <div className="flex flex-col">
          <Text
            as="span"
            variant="light"
            size="lg"
            className="uppercase"
            weight="bold"
            hover="primary"
          >
            {contactInfo.phones[0]}
          </Text>

          <div className="group flex items-center justify-start gap-1 text-secondary transition-colors duration-300 hover:text-primary lg:justify-center">
            <FiPhone className="h-4 w-4" />
            <Text as="span" variant="secondary" size="sm" weight="medium" hover="group">
              Зателефонуйте нам
            </Text>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default ContactInfo;
