import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      subtitle: 'Train and develop soft skills',
      paragraph1: 'Are you interested in Soft Skills and would like to integrate them into your practice?',
      paragraph2: 'Soft Skills are relational and human skills close to personality traits that are essential in professional life and that complement specialized skills and knowledges (Hard Skills). Each and every one of us acquires them partialy regardless of our professional or personal background.',
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
      subtitle: 'Entrena y desarrolla habilidades blandas',
      paragraph1: '¿Estás interesado en las habilidades blandas y te gustaría integrarlas en tu práctica?',
      paragraph2: 'Las soft skills son habilidades relacionales y humanas cercanas a los rasgos de la personalidad que son esenciales en la vida profesional y que complementan las habilidades y conocimientos especializados (hard skills). Tod@s y cada un@ de nosotr@s las adquirimos parcialmente, independientemente de nuestra trayectoria profesional o personal.',
      paragraph3: 'Sin embargo, hoy en día, la formación en soft skills parece estar orientada de forma más natural a las personas altamente cualificadas.',
      paragraph4: 'El proyecto Erasmus+ "Soft skills" tiene como objetivo facilitar el acceso a las soft skills a las personas con bajo nivel de cualificación y/o con discapacidad, para favorecer su inclusión profesional e incluso social y la igualdad de oportunidades. El dominio de una actividad profesional no sólo requiere la puesta en práctica de habilidades técnicas específicas del trabajo (hard skills), sino que también se basa en las soft skills.',
      paragraph5: 'Nuestro enfoque: tener en cuenta todo el proceso de adquisición de las soft skills. Hemos elaborado numerosos materiales complementarios a los que se puede acceder gratuitamente en este sitio web.',
      paragraph6: 'Además de estos materiales gratuitos, existe una plataforma digital llamada Zerobarrier, a la que se puede acceder bajo cuota. Esta plataforma le permitirá gestionar y seguir el proceso de adquisición de soft skills.',
      button1: 'Informe de medición de impacto',
      // Agrega todas las traducciones
    }
  },
  fr: {
    message: {
      subtitle: 'Former et développer les soft skills',
      paragraph1: 'Vous êtes intéressé par les Soft Skills et vous souhaitez les intégrer dans votre pratique ?',
      paragraph2: 'Les Soft Skills sont des compétences relationnelles et humaines proches des traits de personnalité qui sont essentielles dans la vie professionnelle et qui viennent en complément des compétences et savoirs spécialisés (Hard Skills). Chacun d\'entre nous les acquiert partiellement, quel que soit son parcours professionnel ou personnel.',
      paragraph3: 'Aujourd\'hui, cependant, la formation aux Soft Skills semble s\'adresser plus naturellement aux personnes hautement qualifiées.',
      paragraph4: 'Le projet Erasmus+ "Soft skills" vise à faciliter l\'accès aux soft skills pour les personnes à faible niveau de qualification et/ou en situation de handicap, afin de favoriser leur insertion professionnelle, sociale et l\'égalité des chances. La maîtrise d\'une activité professionnelle ne nécessite pas seulement la mise en œuvre de compétences techniques spécifiques à l\'emploi (hard skills), elle s\'appuie également sur des soft skills.',
      paragraph5: 'Notre approche : prendre en compte l\'ensemble du process d\'acquisition des Soft Skills en developpant de nombreux supports complémentaires et accessibles gratuitement sur ce site.',
      paragraph6: 'En plus de ces supports gratuits, une plateforme numérique appelée Zerobarrier, accessible contre paiement, est mobilisable. Cette plateforme vous permettra de gérer et de suivre le process d\'acquisition des Soft Skills.',
      button1: 'Rapport de mesure d’impact',
      // Agrega todas las traducciones
    }
  },
  de: {
    message: {
      subtitle: 'Soft Skills trainieren und weiterentwickeln',
      paragraph1: 'Sie interessieren sich für Soft Skills und möchten diese in Ihre Praxis integrieren?',
      paragraph2: 'Soft Skills sind soziale und personale Kompetenzen, die den Persönlichkeitsmerkmalen nahekommen, im Berufsleben unverzichtbar sind und die die fachlichen Fähigkeiten und Kenntnisse (Hard Skills) ergänzen. Jede/r von uns erwirbt sie bis zu einem gewissen Grad unabhängig von seinem beruflichen oder persönlichen Hintergrund. Heutzutage hat man jedoch den Eindruck, dass sich Angebote für Soft Skills Schulungen ganz selbstverständlich vor allem an hochqualifizierte Menschen richten.',
      paragraph3: 'Das Erasmus+ Projekt "Soft Skills" zielt darauf ab, den Zugang zu Soft Skills für Menschen mit niedrigem Qualifikationsniveau und/oder mit Behinderungen zu erleichtern, um ihre berufliche und sogar soziale Integration und Chancengleichheit zu fördern. Die Bewältigung einer beruflichen Tätigkeit erfordert nicht nur die Umsetzung von berufsspezifischen technischen Fähigkeiten (Hard Skills), sondern ist auch auf Soft Skills angewiesen.',
      paragraph4: '',
      paragraph5: 'Dabei wurde der Ansatz verfolgt, den gesamten Erwerbsprozess von Soft Skills zu berücksichtigen. Dazu wurden zahlreiche ergänzende Materialien entwickelt, die auf dieser Website kostenfrei zugänglich sind.',
      paragraph6: 'Zusätzlich zu diesen kostenlosen Materialien ist die digitale Plattform Zerobarrier gegen eine Gebühr zugänglich. Diese Plattform ermöglicht es Ihnen, den Erwerbsprozess von Soft Skills für Teilnehmer/innen online zu verwalten und zu dokumentieren.',
      button1: 'Bericht zur Wirkungsmessung',
      // Agrega todas las traducciones
    }
  },
  sl: {
    message: {
      subtitle: 'Usvajajte in razvijajte mehke veščine',
      paragraph1: 'Vas zanimajo mehke veščine in bi jih radi vključili v svoje delo in prakso?',
      paragraph2: 'Mehke veščine so medosebne in človeške veščine, ki so povezane z osebnostnimi lastnostmi posameznika. Zelo pomembne so v poklicnem življenju in dopolnjujejo posebne, določene veščine in znanja (trde veščine). Vsak od nas mehke veščine v življenju ves čas bolj ali manj pridobiva, ne glede na svojo poklicno ali osebno pot.',
      paragraph3: 'V današnjem času je vse bolj jasno, da je pridobivanje mehkih veščin zelo pomemben in obenem naraven proces v doseganju ciljev za čim višjo usposobljenost vsakega izmed nas.',
      paragraph4: 'Namen projekta Erasmus + «Soft Skills» (mehke veščine) je olajšati dostop do učenja in usvajanja mehkih veščin posameznikov z nižjo stopnjo izobrazbe in / ali invalidov. Glavni cilj je spodbuditi njihovo poklicno in socialno vključenost ter enake možnosti za vključevanje na različna področja družbenega življenja. Obvladovanje določenih poklicnih dejavnosti ne zahteva le izvajanje določenih tehničnih veščin, ki so specifične za posamezno delovno mesto (trde veščine), temveč vključuje tudi obvladovanje mehkih veščin, ki jih ima posameznik usvojene do določene mere in jih lahko ves čas uspešno razvija.',
      paragraph5: 'Naš pristop in ponujene možnosti usposabljanja mehkih veščin vključujejo celoten postopek v procesu učenja in pridobivanja mehkih veščin s posameznimi koraki napredovanja znotraj 4 stopenj zahtevnosti. Razvili smo številna učna gradiva in pripomočke za pomoč in uspešno učenje. Na tej spletni strani so dostopni brezplačno.',
      paragraph6: 'Poleg omenjenih brezplačnih gradiv je za doplačilo na voljo tudi digitalna platforma z imenom Zerobarrier. Ta platforma omogoča celotno usposabljanje in smernice v procesu učenja in usvajanja mehkih veščin, spremljanje napredka udeležencev usposabljanja in evalvacijo za vse vključene v celotnem postopku usposabljanja in usvajanja mehkih veščin.',
      button1: 'Poročilo o meritvi vpliva',
      // Agrega todas las traducciones
    }
  },
  es: {
    message: {
      subtitle: 'Soft skill-ak prestatu eta garatu',
      paragraph1: 'Soft skillak interesatzen zaizkizu eta zure praktikan integratu nahiko zenituzke?',
      paragraph2: 'Soft skill-ak bizitza profesionalean funtsezkoak dira eta trebetasun eta ezagutza espezializatuak (hard skills) osatzen dituzten nortasunaren ezaugarrietatik hurbil dauden harreman eta giza trebetasunak dira. Guztiok eta gutariko bakoitzak partzialki eskuratzen ditugu, gure ibilbide profesionala edo pertsonala edozein dela ere.',
      paragraph3: 'Hala ere, gaur egun, badirudi soft skill-en prestakuntza modu naturalagoan bideratuta dagoela kualifikazio handiko pertsonengana.',
      paragraph4: 'Erasmus+ "Soft skills" proiektuaren helburua kualifikazio-maila baxuko eta/edo desgaitasuna duten pertsonei soft skill-etarako sarbidea erraztea da, haien laneratzea, gizarteratzea eta aukera-berdintasuna bultzatzeko. Jarduera profesional bat menderatzeko, lanerako trebetasun tekniko espezifikoak (hard skills) praktikan jartzeaz gain, soft skilletan ere oinarritzen da.',
      paragraph5: 'Gure ikuspegia: soft skill-ak eskuratzeko prozesu osoa kontuan hartzea. webgune honetan, doan ikus ditzakezun material osagarri ugari egin ditugu.',
      paragraph6: 'Doako material horiez gain, Zerobarrier izeneko plataforma digital bat ere badago, kuotaren arabera. Plataforma horri esker, soft skills eskuratzeko prozesua kudeatu eta jarraitu ahal izango duzu.',
      button1: 'Eragin neurketa txostena',
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
