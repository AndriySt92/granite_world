import { useForm } from 'react-hook-form';
import { PiPhone } from 'react-icons/pi';

import useModalActions from '../../../hooks/useModalAction';
import { Button, Input, Modal } from '../../';

const NAME_MIN = 3;
const NAME_MAX = 50;
const UA_PHONE_REGEX = /^(?:\+?380|0)\d{9}$/;

const CallbackModal = () => {
  const { closeModal } = useModalActions();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ name: string; phone: string }>({
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Modal onClose={closeModal} title="Запит на зворотній дзвінок">
      <form
        className="custom-shadow-rounded m-auto flex w-full max-w-lg flex-col gap-8"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4">
          <Input
            register={register}
            placeholder="Ваше ім'я"
            name="name"
            type="text"
            error={errors.name?.message}
            validation={{
              required: "Обов'язкове поле",
              minLength: {
                value: NAME_MIN,
                message: `Ім'я має містити щонайменше ${NAME_MIN} символів`,
              },
              maxLength: {
                value: NAME_MAX,
                message: `Ім'я має містити щонайменше ${NAME_MAX} символів`,
              },
            }}
          />
          <Input
            register={register}
            placeholder="Ваш номер телефону"
            name="phone"
            type="tel"
            error={errors.phone?.message}
            validation={{
              required: "Обов'язкове поле",
              pattern: {
                value: UA_PHONE_REGEX,
                message: 'Номер телефону має бути у форматі +380XXXXXXXXX або 0XXXXXXXXX',
              },
            }}
          />
        </div>
        <div className="flex gap-2 sm:gap-4">
          <Button intent="secondary" size="md" className="w-1/3" onClick={closeModal}>
            Скасувати
          </Button>

          <Button
            icon={<PiPhone className="text-lg" />}
            intent="primary"
            type="submit"
            size="sm"
            className="w-2/3"
            onClick={onSubmit}
            loadingText="Відправка..."
          >
            Відправити запит
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CallbackModal;
