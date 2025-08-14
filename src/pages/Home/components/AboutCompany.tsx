import { Text, Title } from '../../../components/common';
import aboutCompany from '../constants/aboutCompany';

const AboutCompany = () => {
  return (
    <div className="spacing-sm">
      <Title as="h2" align="center" className="underline decoration-dark underline-offset-4">
        Про компанію «Світ Граніту»
      </Title>
      <Text>
        «Світ Граніту» — має досвід з понад 10 років у виготовленні та встановленні пам’ятників і
        виробів з натурального каменю. Вибираючи матеріали для свого будинку чи пам’ятника, багато
        хто віддає перевагу натуральному каменю, їх природний зовнішній вигляд, довговічність та
        унікальність роблять їх відмінним вибором. Ми поєднуємо традиції та сучасні технології, щоб
        створювати вироби, які зберігають пам’ять на покоління. Ми готові співпрацювати з клієнтами,
        які надають свої ескізи. Ваше завдання - визначити, які пам'ятники Ви хочете, щоб були
        втілені в життя, а ми, в свою чергу, зобов'язуємося якісно, грамотно виконати в термін.
        Також Ви можете вказати, де виріб повинен бути встановлено, і наші фахівці виконають
        поставлене завдання. Працюємо по Західній Україні, забезпечуючи клієнтів якісними гранітними
        виробами та професійним сервісом. Звертайтесь до нас, щоб отримати консультацію та
        індивідуальне рішення.
      </Text>

      <div className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-2">
        {aboutCompany.map(({ title, items }, index) => (
          <div key={index}>
            <Title as="h3" size="sm" className="mb-4 ">
              {title}
            </Title>
            <ul className="list-inside list-disc space-y-2 font-main text-dark-100 sm:text-lg">
              {items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCompany;
