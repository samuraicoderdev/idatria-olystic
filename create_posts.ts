import fs from "fs";

const posts = [
  {
    title: "El Péndulo Hebreo: Una herramienta de alta tecnología espiritual",
    excerpt: "Conoce cómo el Péndulo Hebreo funciona a través de la vibración de las letras sagradas para limpiar y sanar nuestro campo electromagnético.",
    category: "Péndulo Hebreo",
    image: "https://images.unsplash.com/photo-1590005354167-6da97ce231ba?auto=format&fit=crop&q=80&w=1000",
    date: "2023-08-10",
    readTime: "6 min lectura",
    author: "Isabella Romeu",
    slug: "pendulo-hebreo-tecnologia-espiritual",
    content: "El Péndulo Hebreo, también conocido como el Péndulo Metutelet, engloba una de las técnicas de radiestesia y sanación energética más potentes que existen.\n\nA diferencia de otros péndulos (como el de cuarzo o metal), este es un cilindro de madera de haya o nogal (maderas con vibración neutra). Su verdadero poder no reside en el material, sino en las **etiquetas con palabras en arameo o hebreo antiguo** que se le colocan.\n\n### ¿Cómo funciona la Radiestesia Hebrea?\nEl idioma hebreo es un idioma ideográfico, lo que significa que cada letra emite una onda de forma y una vibración específica con un significado profundo. Al colocar una etiqueta como *`Sanación`* o *`Luz`* en el péndulo y hacerlo girar sobre el campo electromagnético del paciente (aura), estamos emitiendo directamente esa frecuencia al sistema energético de la persona.\n\n### Beneficios de una sesión\n* **Detección profunda:** Es capaz de detectar y limpiar bloqueos energéticos, larvas astrales, magia ritual (mal de ojo) y miasmas antes de que se manifiesten en el cuerpo físico.\n* **Sellado del Aura:** Tras la limpieza, repara fisuras en el campo áurico, evitando fugas de energía.\n* **Equilibrio de Chakras:** Alinea y purifica nuestros centros de energía principales.\n\nTrabajar con el Péndulo Hebreo es experimentar la medicina del alma en su estado más puro."
  },
  {
    title: "Limpieza Energética del Hogar",
    excerpt: "Aprende los métodos definitivos para limpiar tu casa de energías estancadas y crear un templo de paz y alta vibración espacial.",
    category: "Energía",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=1000",
    date: "2023-07-22",
    readTime: "4 min lectura",
    author: "Isabella Romeu",
    slug: "limpieza-energetica-del-hogar",
    content: "¿Sientes el ambiente de tu casa pesado? ¿Hay más discusiones de lo normal o te cuesta descansar? Tu hogar es una esponja que absorbe las emociones y vibraciones de quienes lo habitan y lo visitan.\n\n### El Ritual de purificación con Palo Santo y Salvia\nLa defumación es una práctica ancestral que utiliza el humo de plantas sagradas para limpiar el éter. \n1. **Abre las ventanas:** Es crucial dejar que la energía estancada tenga una vía de escape.\n2. **El recorrido:** Enciende la ramita de palo santo o tu atado de salvia blanca. Recorre tu casa desde la habitación más profunda hacia la puerta de entrada.\n3. **Las esquinas:** Haz especial hincapié en las esquinas, porque ahí es donde la energía tiende a estancarse.\n\n### Cristales Protectores\nTener una **Turmalina Negra** en la entrada de tu casa actúa como un escudo protector que transmuta la densidad que traemos de la calle. Además, colocar una drusa de **Amatista** en el salón principal pacificará el ambiente y fomentará la armonía familiar.\n\nTu casa debe ser tu templo, tu refugio sagrado. Dedica tiempo a mimar su campo sutil y verás cómo mejora tu calidad de vida."
  },
  {
    title: "Entendiendo qué es un Acompañamiento Integrativo",
    excerpt: "No somos solo un cuerpo físico. Un acompañamiento integrativo aborda tu salud desde todas tus dimensiones: mental, emocional y espiritual.",
    category: "Terapias",
    image: "https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&q=80&w=1000",
    date: "2023-07-10",
    readTime: "8 min lectura",
    author: "Isabella Romeu",
    slug: "que-es-acompanamiento-integrativo",
    content: "La medicina tradicional y la hiper-especialización a menudo tienden a tratar al ser humano por piezas, separando el cuerpo de la mente y la mente del espíritu. Pero la realidad es que somos un todo indivisible.\n\n### ¿En qué consiste mi Acompañamiento?\nEl **Acompañamiento Integrativo** busca la causa raíz del desequilibrio, no solo silenciar el síntoma. Si presentas ansiedad, no solo abordamos la mente; exploramos qué emociones no han sido procesadas o qué nudos energéticos están presentes en tu sistema nervioso sutil.\n\n* **Fase 1: Diagnóstico Holístico.** Evaluamos tu estado vital, rutinas, historia de vida y tu campo electromagnético.\n* **Fase 2: Herramientas a Medida.** Se combinan diferentes técnicas como la lectura de Registros, el Reiki y recursos de psicología transpersonal para crear un proceso personalizado.\n* **Fase 3: Automaestría.** El objetivo final no es crear dependencia del terapeuta, sino entregarte las herramientas para que tú mismo/a seas tu propio maestro y sanador.\n\nSanar es un arte, y tú eres la obra de arte."
  },
  {
    title: "El Poder de los Minerales: Guía Básica",
    excerpt: "Comienza tu colección de cristales con propósito. Conoce las 5 piedras fundamentales que todo principiante debería tener.",
    category: "Cristaloterapia",
    image: "https://images.unsplash.com/photo-1567117565985-05e8dc2d2a45?auto=format&fit=crop&q=80&w=1000",
    date: "2023-06-28",
    readTime: "5 min lectura",
    author: "Isabella Romeu",
    slug: "poder-minerales-guia-basica",
    content: "Las piedras y minerales no son simples rocas bonitas; son el ADN de la Madre Tierra. Cristales como el Cuarzo están ordenados geométricamente de una forma tan perfecta a nivel molecular que son capaces de emitir frecuencias vibratorias estables y continuas.\n\n### El Kit Básico del Sanador\n1. **Cuarzo Transparente (Maestro Sanador):** Amplifica la energía y el pensamiento. Es el todoterreno de la cristaloterapia.\n2. **Amatista (Paz Mística):** La gran transmutadora. Calma la mente, alivia el insomnio y conecta directamente con nuestro chakra del tercer ojo.\n3. **Cuarzo Rosa (Amor Incondicional):** Ideal para trabajar el amor propio, sanar heridas del corazón y atraer relaciones armónicas.\n4. **Turmalina Negra (Protección Escudo):** Es tu chaleco antibalas astral. Absorbe y transmuta toda la energía densa del ambiente, ondas electromagnéticas e intenciones tóxicas.\n5. **Citrino (Abundancia Solar):** Lleva la luz del sol en su interior. Ayuda con la autoconfianza, la prosperidad y limpia nuestro chakra del plexo solar.\n\n*Recuerda: Los cristales te eligen a ti. Si sientes atracción por uno, tu intuición sabe exactamente lo que tu sistema energético necesita.*"
  },
  {
    title: "Cerrando Ciclos y Cortando Lazos Tóxicos",
    excerpt: "Aprende el arte de soltar lo que ya no te pertenece mediante prácticas conscientes de cierre energético y emocional.",
    category: "Crecimiento",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1000",
    date: "2023-06-15",
    readTime: "6 min lectura",
    author: "Isabella Romeu",
    slug: "cerrando-ciclos-lazos",
    content: "Uno de los actos de mayor amor propio es reconocer cuándo un ciclo, una relación o un trabajo ha llegado a su fin. Sin embargo, aunque nos distanciemos de forma física, los **lazos energéticos (cordones etéricos)** pueden seguir activos.\n\n### ¿Qué es un cordón etérico?\nCuando creamos un vínculo emocional intenso con alguien, desarrollamos un cordón energético invisible que nos conecta. Si la relación termina mal o está basada en el apego tóxico, este cordón se convierte en una fuga de energía brutal, haciéndote sentir agotamiento, pensar constantemente en la persona, o experimentar su tristeza como si fuera tuya.\n\n### Ejercicio práctico para cortar lazos\n1. **Sientate en meditación:** Invoca al Arcángel Miguel, el arcángel de la protección y la verdad.\n2. **Visualiza el cordón:** Imagina que frente a ti está esa persona. Visualiza el tubo de luz densa que os conecta (generalmente desde tu abdomen o corazón hacia el suyo).\n3. **El corte:** Imagina una espada de brillante luz azul que corta este cordón. Agradece a la persona la lección, y observa cómo la energía tuya vuelve a ti bañada en luz dorada, y la de la otra persona vuelve a ella.\n\nSoltar es dejar espacio para que lo nuevo y asombroso pueda entrar."
  },
  {
    title: "La Anatomía de tu Aura: Capas y Significados",
    excerpt: "Más allá de tu piel existe un mapa de colores y vibraciones. Descubre las siete capas de tu campo áurico y cómo protegerlas.",
    category: "Energía",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1000",
    date: "2023-05-30",
    readTime: "7 min lectura",
    author: "Isabella Romeu",
    slug: "anatomia-del-aura",
    content: "El Aura es el campo electromagnético multifrecuencial que envuelve tu cuerpo físico. No es estática, cambia con cada emoción, pensamiento y estado de salud.\n\n### Las tres capas principales\nAunque los esotéricos dividen el aura en 7 capas (asociadas a los chakras), las 3 principales con las que lidiamos diariamente son:\n\n1. **Capa Etérica:** Es el molde más cercano a la piel. Contiene la información de nuestra vitalidad y salud física.\n2. **Capa Emocional:** Almacena todos nuestros sentimientos. Presenta manchas oscuras cuando hay trauma y colores brillantes cuando estamos felices y amando.\n3. **Capa Mental:** Nuestro mundo de ideas. Esta capa pulsa más activamente en color amarillo alrededor de la cabeza cuando estudiamos o pensamos profundamente.\n\n### ¿Cómo mantener tu Aura brillante?\nTu aura es tu sistema inmunológico espiritual. Caminar descalzo sobre el césped (grounding), darse baños de agua con sal marina, las terapias energéticas constantes y cuidar tu diálogo interno son las mejores medicinas para mantener un aura robusta e impenetrable."
  },
  {
    title: "Identificando tu Herida del Alma",
    excerpt: "Todos encarnamos con una lección pendiente. Reconocer tu herida original (rechazo, abandono, humillación, traición o injusticia) es el primer paso para sanar.",
    category: "Psicología",
    image: "https://images.unsplash.com/photo-1544474705-d147ec5e173e?auto=format&fit=crop&q=80&w=1000",
    date: "2023-05-12",
    readTime: "9 min lectura",
    author: "Isabella Romeu",
    slug: "herida-del-alma-sanacion",
    content: "Según la psicoterapia profunda, formamos nuestro carácter alrededor de una gran \"Herida del Alma\" adquirida durante nuestros primeros años de vida (o arrastrada kármicamente).\n\nExisten 5 heridas fundamentales, y de ellas derivan las \"Máscaras\" que usamos para sobrevivir en la adultez:\n\n*   **Rechazo -> Máscara de Huidizo:** Miedo al pánico, tendencia a huir, aislarse y no sentir que pertenece o merece existir.\n*   **Abandono -> Máscara de Dependiente:** Pánico a la soledad, sumisión, y necesidad de aprobación.\n*   **Traición -> Máscara de Controlador:** Necesidad de controlar todo para asegurar que nadie le falle. Altas expectativas.\n\n### El camino a la integración\nSanar no significa borrar la herida de tu memoria, significa dejar que controle tus reacciones automáticas en piloto automático. El Acompañamiento Integrativo y un análisis de tus Registros Akáshicos te darán las respuestas necesarias para mirarlas con amor y, por fin, despojarte de la máscara pesada."
  },
  {
    title: "Meditación y Mindfulness para el día a día",
    excerpt: "No necesitas retirarte al Tíbet para encontrar la calma. Prácticas reales para personas ocupadas y mentes modernas.",
    category: "Meditación",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=1000",
    date: "2023-04-20",
    readTime: "5 min lectura",
    author: "Isabella Romeu",
    slug: "meditacion-mindfulness-dia-a-dia",
    content: "Existe un gran mito sobre la meditación: \"Hay que dejar la mente en blanco\".\n\nNuestra mente está diseñada para generar pensamientos. Tratar de forzarla a detenerse es como tratar de detener el océano con las manos. El Mindfulness o Atención Plena se basa simplemente en **observar sin juzgar**.\n\n### Práctica de los 3 minutos\n1. **Frena:** Para lo que estés haciendo, cierra los ojos o fija la vista en un punto.\n2. **Respira:** Toma tres respiraciones profundas. Inhala en 4 tiempos, sostén 2 tiempos, exhala en 6.\n3. **Siente:** Escanea cómo se siente tu cuerpo. Siente la planta de tus pies, la temperatura de tus manos.\n\nSi implementas esto tres veces al día (por ejemplo: antes de arrancar el ordenador, antes de comer y antes de dormir), el volumen de ansiedad general se reducirá drásticamente en menos de una semana."
  },
  {
    title: "Qué es una crisis curativa y por qué ocurre",
    excerpt: "Cuando comienzas un proceso terapéutico o de sanación energética, a veces te sientes peor antes de mejorar. Aprende a transitarlo.",
    category: "Terapias",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000",
    date: "2023-04-05",
    readTime: "6 min lectura",
    author: "Isabella Romeu",
    slug: "crisis-curativa",
    content: "Es muy común que después de una sesión de Reiki profunda, una apertura de Registros o un proceso con Péndulo Hebreo, las personas experimenten lo que en la medicina holística se llama una **Crisis Curativa**.\n\n### Síntomas comunes\n* Llanto sin razón aparente.\n* Cansancio extremo o necesidad de dormir mucho.\n* Ligeros dolores de cabeza.\n* Sueños muy vívidos y extraños.\n\n### Es un síntoma de Éxito, no de retroceso\nCuando movemos energías muy profundas o densas que han estado enquistadas en tu sistema durante años (como un dolor reprimido de la infancia), este necesita salir al exterior para ser liberado. Tu cuerpo está haciendo una purga exhaustiva.\n\n**¿Qué hacer?** Hidrátate abundantemente, descansa todo lo que te pida tu cuerpo, y acompáñate con compasión. Date permiso de sentir. La tempestad es anunciadora de una enorme y despejada calma."
  }
];

posts.forEach(post => {
  const fileContent = "---\ntitle: \"" + post.title + "\"\nexcerpt: \"" + post.excerpt + "\"\ncategory: \"" + post.category + "\"\nimage: \"" + post.image + "\"\ndate: \"" + post.date + "\"\nreadTime: \"" + post.readTime + "\"\nauthor: \"" + post.author + "\"\n---\n\n" + post.content;
  
  fs.writeFileSync("./src/content/" + post.slug + ".md", fileContent);
});

console.log("Created 9 blog posts!");

