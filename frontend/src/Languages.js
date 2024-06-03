import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      title: 'Soft Skills',
      subtitle: 'Train and develop soft skills',
      paragraph1: 'Are you interested in Soft Skills and would like to integrate them into your practice?',
      paragraph2: 'Soft Skills are relational and human skills close to personality traits...',
      paragraph3: 'Today, however, Soft Skills training seems to be more naturally geared towards hig-qualified people.',
      paragraph4: 'The Erasmus+ "Soft skills" project is aiming at facilitating access to soft skills for people with low levels of qualification and/or with disabilities, in order to favour their vocational and even social inclusion and equal opportunities. Mastering a professional activity does not only require the implementation of technical skills specific to the job (hard skills), it also relies on soft skills.',
      paragraph5: 'Our approach: to take into account the whole process of acquisition of Soft Skills. We developped numerous complementary materials which are accessible on this website for free.',
      paragraph6: 'In addition to these free materials, a digital platform called Zerobarrier, accessible for a fee. This platform will allow you to manage and track the process of Soft Skills acquisition.',
      button1: 'Impact measurement report',
      // Agrega todas las traducciones
    }
  },
  es: {
    message: {
      title: 'Habilidades Blandas',
      subtitle: 'Entrena y desarrolla habilidades blandas',
      paragraph1: '¿Estás interesado en las habilidades blandas y te gustaría integrarlas en tu práctica?',
      paragraph2: 'Las habilidades blandas son habilidades relacionales y humanas cercanas a los rasgos de personalidad...',
      paragraph3: 'Sin embargo, hoy en día, la formación en soft skills parece estar orientada de forma más natural a las personas altamente cualificadas.',
      paragraph4: 'El proyecto Erasmus+ "Soft skills" tiene como objetivo facilitar el acceso a las soft skills a las personas con bajo nivel de cualificación y/o con discapacidad, para favorecer su inclusión profesional e incluso social y la igualdad de oportunidades. El dominio de una actividad profesional no sólo requiere la puesta en práctica de habilidades técnicas específicas del trabajo (hard skills), sino que también se basa en las soft skills.',
      paragraph5: 'Nuestro enfoque: tener en cuenta todo el proceso de adquisición de las soft skills. Hemos elaborado numerosos materiales complementarios a los que se puede acceder gratuitamente en este sitio web.',
      paragraph6: 'Además de estos materiales gratuitos, existe una plataforma digital llamada Zerobarrier, a la que se puede acceder bajo cuota. Esta plataforma le permitirá gestionar y seguir el proceso de adquisición de soft skills.',
      button1: 'Informe de medición de impacto',
      // Agrega todas las traducciones
    }
  },
  // Agrega más idiomas...
};

const i18n = createI18n({
  legacy: false, // Asegúrate de que el modo legacy esté deshabilitado
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
