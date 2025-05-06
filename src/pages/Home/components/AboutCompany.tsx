import aboutCompany from '../../../constants/aboutCompany';

const AboutCompany = () => {
  return (
    <div className="container space-y-6">
      <div>
        <h2 className="mb-4 text-center font-main text-4xl font-extrabold uppercase underline first-letter:text-primary">
          Про компанію «Світ Граніту»
        </h2>
        <p className="text-dark-100 sm:text-lg">
          «Світ Граніту» — має досвід з понад 10 років у виготовленні та встановленні пам’ятників і
          виробів з натурального каменю. Вибираючи матеріали для свого будинку чи пам’ятника, багато
          хто віддає перевагу натуральному каменю, їх природний зовнішній вигляд, довговічність та
          унікальність роблять їх відмінним вибором. Ми поєднуємо традиції та сучасні технології,
          щоб створювати вироби, які зберігають пам’ять на покоління. Ми готові співпрацювати з
          клієнтами, які надають свої ескізи. Ваше завдання - визначити, які пам'ятники Ви хочете,
          щоб були втілені в життя, а ми, в свою чергу, зобов'язуємося якісно, грамотно виконати в
          термін. Також Ви можете вказати, де виріб повинен бути встановлено, і наші фахівці
          виконають поставлене завдання. Працюємо по Західній Україні, забезпечуючи клієнтів
          якісними гранітними виробами та професійним сервісом. Звертайтесь до нас, щоб отримати
          консультацію та індивідуальне рішення.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {aboutCompany.map(({ title, items }, index) => (
          <div key={index}>
            <h3 className="mb-4 text-2xl font-bold text-dark-100 first-letter:text-primary">
              {title}
            </h3>
            <ul className="list-inside list-disc space-y-2 text-dark-100 sm:text-lg">
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
