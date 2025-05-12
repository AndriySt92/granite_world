const contactInfo = {
  address: 'Івано-Франківська обл., м. Городенка, вул. Шевченка 81',
  phones: [import.meta.env.VITE_PHONE_1, import.meta.env.VITE_PHONE_2],
  email: import.meta.env.VITE_EMAIL,
  hours: {
    working: 'Пн-Нд: 08:00-17:00',
    daysOff: 'неділя',
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42168.324450126114!2d25.4441045!3d48.6572918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473147e407593b2f%3A0x46dd02c45c828596!2sPam'yatnyky%20Z%20Hranitu%20%22Svit%20Hranitu%22!5e0!3m2!1sru!2sua!4v1746711789890!5m2!1sua!2sua",
  mapLink: 'https://maps.app.goo.gl/6KgLJifNohaMp5ad7',
};

export default contactInfo;
