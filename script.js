const phone = "573012466782";
const fallbackRates = {
  COP: 1,
  USD: 1 / 3650,
  MXN: 0.00465,
  PEN: 0.00102,
  CLP: 0.231,
  CRC: 0.139,
};

let rates = { ...fallbackRates };

const copy = {
  es: {
    navProcedures: "Procedimientos",
    navDoctor: "Dr. Diaz",
    navReviews: "Opiniones",
    navContact: "Ubicación",
    heroEyebrow: "Cirujano plástico · Ibagué",
    heroTitleHtml: "Resultados <em>naturales</em> y seguros, con un cirujano en quien confiar",
    heroCopy:
      "Más de 2.400 pacientes confían en el Dr. Cristhian Diaz, cirujano plástico con formación en la Universidad El Bosque. Atención particular, sin EPS.",
    heroBulletOne: "Resultados naturales y armónicos",
    heroBulletTwo: "Acompañamiento de principio a fin",
    heroBulletThree: "Precios claros y opciones de financiación",
    heroCardTitle: "Escríbenos por WhatsApp",
    heroCardCopy: "Te respondemos rápido y resolvemos tus dudas al instante.",
    heroCardMetaOne: "4.9 · 180+ opiniones",
    heroCardMetaTwo: "Respuesta rápida",
    primaryCta: "Escríbenos por WhatsApp",
    secondaryCta: "Ver procedimientos y precios",
    trustOneLabel: "Doctoralia",
    trustOneValue: "28+ opiniones verificadas",
    trustTwoLabel: "Formación",
    trustTwoValue: "Universidad El Bosque",
    trustThreeLabel: "Idiomas",
    trustThreeValue: "Español e inglés",
    trustFourLabel: "Sin EPS",
    trustFourValue: "Atención particular",
    valueOneTitle: "Resultados naturales",
    valueOneCopy: "Plan quirúrgico alineado con tu anatomía, expectativas reales y armonía corporal.",
    valueTwoTitle: "Seguridad primero",
    valueTwoCopy: "Valoración médica clara, procedimientos en entorno clínico y seguimiento cercano.",
    valueThreeTitle: "Acompañamiento",
    valueThreeCopy: "Un equipo atento desde la primera pregunta hasta los controles posteriores.",
    valueFourTitle: "Precios claros",
    valueFourCopy: "Valores de referencia por procedimiento y cotización personalizada en consulta.",
    galleryEyebrow: "Atención real",
    galleryTitle: "Un proceso médico cercano, preciso y humano",
    galleryCopy:
      "Fotos reales del consultorio y quirófano ayudan a mostrar la seriedad del proceso: escucha, planeación, técnica y seguimiento.",
    galleryNoteTitle: "Nota de privacidad",
    galleryNoteCopy: "Las imágenes clínicas deben publicarse solo con autorización y cuidando la dignidad de cada paciente.",
    galleryCaptionOne: "Consulta y orientación personalizada",
    galleryCaptionTwo: "Concentración quirúrgica",
    galleryCaptionThree: "Ambiente de quirófano",
    galleryCaptionFour: "Planeación prequirúrgica",
    galleryCaptionFive: "Diseño y simetría",
    proceduresEyebrow: "Procedimientos",
    proceduresTitle: "Servicios principales y precios de referencia",
    proceduresCopy: "Cada valor es “desde” y debe confirmarse en valoración médica. La consulta virtual es gratis.",
    doctorEyebrow: "Sobre el doctor",
    doctorTitle: "Dr. Cristhian Diaz",
    doctorCopy:
      "Cirujano plástico reconstructivo y estético formado en la Universidad El Bosque en Bogotá, médico de la Universidad del Tolima y miembro del equipo quirúrgico en clínicas de Ibagué.",
    credentialOne: "Cirugía plástica facial y corporal",
    credentialTwo: "Reconstrucción facial",
    credentialThree: "Atención en español e inglés",
    credentialFour: "Consultorio en Avenida Guabinal #57-15",
    doctoraliaLink: "Ver perfil verificado en Doctoralia",
    doctorBadge: "pacientes atendidos",
    reviewsEyebrow: "Opiniones",
    reviewsTitle: "Confianza construida paciente por paciente",
    reviewsCopy:
      "La página pública de Doctoralia destaca opiniones verificadas y menciona la honestidad como una cualidad valorada por sus pacientes.",
    reviewsSummary: "180+ opiniones verificadas",
    reviewOneTitle: "Claridad antes de decidir",
    reviewOneCopy: "Pacientes destacan explicaciones honestas, expectativas realistas y tiempo suficiente para resolver dudas.",
    reviewTwoTitle: "Acompañamiento atento",
    reviewTwoCopy: "El seguimiento personal y la comunicación cercana ayudan a que el proceso se sienta más seguro.",
    reviewThreeTitle: "Profesionalismo",
    reviewThreeCopy: "Su perfil resalta experiencia en cirugía plástica facial y corporal en Ibagué.",
    reviewNote:
      "Los testimonios finales deben publicarse con autorización del doctor y de cada paciente. Los resultados pueden variar.",
    contactEyebrow: "Contacto",
    contactTitle: "Da el primer paso con una consulta gratis",
    contactCopy: "Cuéntanos qué procedimiento estás considerando y el equipo te orientará por WhatsApp.",
    callLabel: "Llamar",
    mapLabel: "Ubicación",
    formTitle: "Consulta virtual gratis",
    firstName: "Nombre",
    lastName: "Apellido",
    phoneField: "Teléfono con indicativo",
    locationField: "Ciudad / país",
    goalsField: "¿Qué te gustaría lograr?",
    consentText: "Acepto ser contactado por el equipo del Dr. Diaz sobre mi consulta.",
    submitButton: "Submit & Pick My Appointment Time",
    successTitle: "Solicitud lista para enviar.",
    successCopy: "Abrimos WhatsApp con tu información para que el equipo pueda confirmar tu horario.",
    successButton: "Continuar por WhatsApp",
    finalEyebrow: "Consulta sin compromiso",
    finalTitle: "¿Lista para dar el paso?",
    finalCopy: "Escríbenos por WhatsApp y resolvemos tus dudas hoy mismo.",
    mobileCta: "Escríbenos por WhatsApp",
    from: "desde",
    messageProcedure: "Hola, quiero información sobre",
    procedureCta: "WhatsApp",
  },
  en: {
    navProcedures: "Procedures",
    navDoctor: "Dr. Diaz",
    navReviews: "Reviews",
    navContact: "Location",
    heroEyebrow: "Plastic surgeon · Colombia",
    heroTitleHtml: "World-class surgery, <em>private recovery</em> in Colombia",
    heroCopy:
      "English-speaking care from Dr. Cristhian Diaz, a plastic surgeon trained at Universidad El Bosque, with guidance from your first message to your final follow-up.",
    heroBulletOne: "Natural, balanced-looking outcomes",
    heroBulletTwo: "Guidance from consultation to recovery",
    heroBulletThree: "Transparent pricing and travel support",
    heroCardTitle: "Book a free online consultation",
    heroCardCopy: "Tell us your goals and we will help you choose the next step.",
    heroCardMetaOne: "4.9 · 180+ reviews",
    heroCardMetaTwo: "Fast response",
    primaryCta: "Schedule My Free Online Consultation",
    secondaryCta: "Message us on WhatsApp",
    trustOneLabel: "Doctoralia",
    trustOneValue: "28+ verified reviews",
    trustTwoLabel: "Training",
    trustTwoValue: "Universidad El Bosque",
    trustThreeLabel: "Languages",
    trustThreeValue: "English and Spanish",
    trustFourLabel: "Private care",
    trustFourValue: "No EPS required",
    valueOneTitle: "Natural-looking outcomes",
    valueOneCopy: "A surgical plan built around your anatomy, your goals, and realistic expectations.",
    valueTwoTitle: "Safety first",
    valueTwoCopy: "Clear medical evaluation, clinical procedure settings, and close follow-up.",
    valueThreeTitle: "Bilingual support",
    valueThreeCopy: "Guidance before, during, and after your trip from a team that speaks your language.",
    valueFourTitle: "Transparent pricing",
    valueFourCopy: "Reference prices by procedure, with a personalized quote after consultation.",
    galleryEyebrow: "Real care",
    galleryTitle: "A medical process that feels personal, precise, and human",
    galleryCopy:
      "Real consultation and operating-room photos help patients understand the seriousness of the journey: listening, planning, technique, and follow-up.",
    galleryNoteTitle: "Privacy note",
    galleryNoteCopy: "Clinical images should be published only with permission and with patient dignity protected.",
    galleryCaptionOne: "Personal consultation and guidance",
    galleryCaptionTwo: "Surgical focus",
    galleryCaptionThree: "Operating-room environment",
    galleryCaptionFour: "Pre-surgical planning",
    galleryCaptionFive: "Design and symmetry",
    proceduresEyebrow: "Procedures",
    proceduresTitle: "Main procedures and package starting prices",
    proceduresCopy: "Prices are shown as “from” references. Your final quote depends on your medical plan.",
    doctorEyebrow: "About the surgeon",
    doctorTitle: "Dr. Cristhian Diaz",
    doctorCopy:
      "A reconstructive and aesthetic plastic surgeon trained at Universidad El Bosque in Bogotá, physician from Universidad del Tolima, and part of the surgical teams at clinics in Ibagué.",
    credentialOne: "Face and body plastic surgery",
    credentialTwo: "Facial reconstruction",
    credentialThree: "Care in English and Spanish",
    credentialFour: "Office at Avenida Guabinal #57-15",
    doctoraliaLink: "View verified Doctoralia profile",
    doctorBadge: "patients served",
    reviewsEyebrow: "Reviews",
    reviewsTitle: "Trust built one patient at a time",
    reviewsCopy:
      "The public Doctoralia profile highlights verified reviews and notes honesty as one of the qualities patients value.",
    reviewsSummary: "180+ verified reviews",
    reviewOneTitle: "Clarity before committing",
    reviewOneCopy: "Patients value honest explanations, realistic expectations, and time to ask questions.",
    reviewTwoTitle: "Attentive guidance",
    reviewTwoCopy: "Personal follow-up and close communication help the process feel safer.",
    reviewThreeTitle: "Professional experience",
    reviewThreeCopy: "His profile highlights facial and body plastic surgery experience in Ibagué.",
    reviewNote:
      "Final testimonials should be published with doctor and patient permission. Results can vary.",
    contactEyebrow: "Contact",
    contactTitle: "Start with a free online consultation",
    contactCopy: "Tell us your goals, preferred procedure, and timeline. The coordinator will help you choose the next step.",
    callLabel: "Call",
    mapLabel: "Location",
    formTitle: "Free online consultation",
    firstName: "First name",
    lastName: "Last name",
    phoneField: "Phone with country code",
    locationField: "City / country",
    goalsField: "What are you hoping to achieve?",
    consentText: "I agree to be contacted by Dr. Diaz's team about my consultation.",
    submitButton: "Submit & Pick My Appointment Time",
    successTitle: "Your request is ready.",
    successCopy: "We opened WhatsApp with your details so the team can confirm your appointment time.",
    successButton: "Continue on WhatsApp",
    finalEyebrow: "No-obligation consultation",
    finalTitle: "Ready to take the next step?",
    finalCopy: "Start with a free online consultation and get clear answers before making plans.",
    mobileCta: "Book free consultation",
    from: "from",
    messageProcedure: "Hi, I would like information about",
    procedureCta: "Ask",
  },
};

const procedures = [
  { es: "Consulta virtual", en: "Online consultation", categoryEs: "Consulta", categoryEn: "Consultation", cop: 0 },
  { es: "Consulta de valoración", en: "In-person evaluation", categoryEs: "Consulta", categoryEn: "Consultation", cop: 150000 },
  { es: "Mamoplastia de aumento", en: "Breast augmentation", categoryEs: "Senos", categoryEn: "Breast", cop: 15000000 },
  { es: "Mastopexia", en: "Breast lift", categoryEs: "Senos", categoryEn: "Breast", cop: 16000000 },
  { es: "Mastopexia + implantes", en: "Lift + implants", categoryEs: "Senos", categoryEn: "Breast", cop: 22000000 },
  { es: "Lipoescultura", en: "Lipo 360", categoryEs: "Cuerpo", categoryEn: "Body", cop: 20000000 },
  { es: "Abdominoplastia", en: "Tummy tuck", categoryEs: "Cuerpo", categoryEn: "Body", cop: 18000000 },
  { es: "Lipoabdominoplastia", en: "Tummy tuck + lipo", categoryEs: "Cuerpo", categoryEn: "Body", cop: 28000000 },
  { es: "Gluteoplastia", en: "Brazilian butt lift", categoryEs: "Cuerpo", categoryEn: "Body", cop: 22000000 },
  { es: "Rinoplastia", en: "Rhinoplasty", categoryEs: "Rostro", categoryEn: "Face", cop: 18000000 },
  { es: "Blefaroplastia", en: "Eyelid surgery", categoryEs: "Rostro", categoryEn: "Face", cop: 12000000 },
  { es: "Lifting facial", en: "Facelift", categoryEs: "Rostro", categoryEn: "Face", cop: 30000000 },
  { es: "Mommy Makeover", en: "Mommy Makeover", categoryEs: "Paquetes", categoryEn: "Packages", cop: 38000000 },
  { es: "Curvas / Hourglass", en: "Hourglass Package", categoryEs: "Paquetes", categoryEn: "Packages", cop: 36000000 },
  { es: "Rejuvenecimiento facial", en: "Facial Rejuvenation", categoryEs: "Paquetes", categoryEn: "Packages", cop: 38000000 },
];

const currencySelect = document.querySelector("#currencySelect");
const procedureGrid = document.querySelector("#procedureGrid");
const form = document.querySelector("#consultForm");
const formSuccess = document.querySelector("#formSuccess");
const whatsappSummary = document.querySelector("#whatsappSummary");

let lang = new URLSearchParams(window.location.search).get("lang") || localStorage.getItem("language") || "es";
let currency = localStorage.getItem("currency") || (lang === "en" ? "USD" : "COP");

function setLanguage(nextLang, resetCurrency = false) {
  lang = nextLang;
  document.documentElement.lang = nextLang === "en" ? "en" : "es";
  document.body.dataset.lang = lang;
  localStorage.setItem("language", lang);

  if (resetCurrency) {
    currency = lang === "en" ? "USD" : "COP";
    localStorage.setItem("currency", currency);
  }

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[lang][node.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = copy[lang][node.dataset.i18nHtml];
  });

  const primaryCta = document.querySelector("#primaryCta");
  primaryCta.href = lang === "es" ? whatsappUrl("Hola, quiero información sobre una consulta.") : "#contact";
  document.querySelector("#mobileCta").href = lang === "es" ? whatsappUrl("Hola, quiero información sobre una consulta.") : "#contact";
  currencySelect.value = currency;
  renderProcedures();
  refreshPriceSpans();
  refreshWhatsappLinks();
}

function refreshWhatsappLinks() {
  const message =
    lang === "es"
      ? "Hola, quiero información sobre cirugía plástica con el Dr. Cristhian Diaz."
      : "Hi, I would like information about plastic surgery with Dr. Cristhian Diaz.";

  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.href = whatsappUrl(message);
  });
}

function whatsappUrl(message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function setCurrency(nextCurrency) {
  currency = nextCurrency;
  localStorage.setItem("currency", currency);
  renderProcedures();
  refreshPriceSpans();
}

function formatPrice(cop) {
  if (!cop) return lang === "es" ? "Gratis" : "Free";
  const converted = cop * (rates[currency] || fallbackRates[currency] || 1);
  const rounded = roundMarketing(converted, currency);
  const formatter = new Intl.NumberFormat(lang === "es" ? "es-CO" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });
  return `${copy[lang].from} ${formatter.format(rounded)}`;
}

function roundMarketing(value, activeCurrency) {
  if (activeCurrency === "COP") {
    const step = value < 1000000 ? 10000 : 100000;
    return Math.max(step, Math.round(value / step) * step);
  }
  if (activeCurrency === "CLP" || activeCurrency === "CRC") {
    const step = value < 100000 ? 1000 : 10000;
    return Math.max(step, Math.round(value / step) * step);
  }
  if (activeCurrency === "MXN") {
    const step = value < 2000 ? 100 : 500;
    return Math.max(step, Math.round(value / step) * step);
  }
  if (value < 100) return Math.max(10, Math.round(value / 10) * 10);
  return Math.round(value / 100) * 100;
}

function renderProcedures() {
  procedureGrid.innerHTML = procedures
    .map((procedure) => {
      const name = procedure[lang];
      const category = lang === "es" ? procedure.categoryEs : procedure.categoryEn;
      const message = `${copy[lang].messageProcedure} ${name}.`;
      return `
        <article class="procedure-card">
          <div>
            <span class="category">${category}</span>
            <h3>${name}</h3>
            <p>${lang === "es" ? "Precio de referencia sujeto a valoración médica." : "Reference price, personalized after medical review."}</p>
          </div>
          <div class="price-row">
            <strong>${formatPrice(procedure.cop)}</strong>
            <a class="mini-cta" href="${whatsappUrl(message)}" target="_blank" rel="noreferrer">${copy[lang].procedureCta}</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function refreshPriceSpans() {
  document.querySelectorAll("[data-price]").forEach((span) => {
    span.textContent = formatPrice(Number(span.dataset.price));
  });
}

async function loadRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/COP", { cache: "force-cache" });
    if (!response.ok) return;
    const data = await response.json();
    rates = {
      ...fallbackRates,
      COP: 1,
      USD: data.rates.USD || fallbackRates.USD,
      MXN: data.rates.MXN || fallbackRates.MXN,
      PEN: data.rates.PEN || fallbackRates.PEN,
      CLP: data.rates.CLP || fallbackRates.CLP,
      CRC: data.rates.CRC || fallbackRates.CRC,
    };
    renderProcedures();
    refreshPriceSpans();
  } catch {
    rates = { ...fallbackRates };
  }
}

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch, true));
});

currencySelect.addEventListener("change", (event) => setCurrency(event.target.value));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  if (formData.get("company")) return;

  const name = `${formData.get("firstName")} ${formData.get("lastName")}`.trim();
  const message =
    lang === "es"
      ? `Hola, soy ${name}. Quiero agendar una consulta virtual gratis. Email: ${formData.get("email")}. Teléfono: ${formData.get("phone")}. Ciudad/país: ${formData.get("location") || "No indicado"}. Objetivo: ${formData.get("goals") || "No indicado"}.`
      : `Hi, my name is ${name}. I would like to schedule a free online consultation. Email: ${formData.get("email")}. Phone: ${formData.get("phone")}. City/country: ${formData.get("location") || "Not provided"}. Goals: ${formData.get("goals") || "Not provided"}.`;

  const url = whatsappUrl(message);
  whatsappSummary.href = url;
  formSuccess.hidden = false;
  window.open(url, "_blank", "noopener,noreferrer");
});

setLanguage(lang, false);
loadRates();
