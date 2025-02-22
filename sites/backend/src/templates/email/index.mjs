import { emailchange, translations as emailchangeTranslations } from './emailchange/index.mjs'
import { goodbye, translations as goodbyeTranslations } from './goodbye/index.mjs'
import { signinlink, translations as signinlinkTranslations } from './signinlink/index.mjs'
import { newslettersub, translations as newslettersubTranslations } from './newslettersub/index.mjs'
import { passwordreset, translations as passwordresetTranslations } from './passwordreset/index.mjs'
import { signup, translations as signupTranslations } from './signup/index.mjs'
import { signupaea, translations as signupaeaTranslations } from './signup-aea/index.mjs'
import { signupaed, translations as signupaedTranslations } from './signup-aed/index.mjs'
import { transinvite, translations as transinviteTranslations } from './transinvite/index.mjs'
import { langsuggest } from './langsuggest/index.mjs'
// Shared translations
import en from '../../../public/locales/en/shared.json' assert { type: 'json' }
import de from '../../../public/locales/de/shared.json' assert { type: 'json' }
import es from '../../../public/locales/es/shared.json' assert { type: 'json' }
import fr from '../../../public/locales/fr/shared.json' assert { type: 'json' }
import nl from '../../../public/locales/nl/shared.json' assert { type: 'json' }

/*
 * Everything is kept lowercase here because these key names are used in URLS
 */
export const templates = {
  emailchange,
  goodbye,
  signinlink,
  newslettersub,
  passwordreset,
  signup,
  'signup-aea': signupaea,
  'signup-aed': signupaed,
  transinvite,
  langsuggest,
}

/*
 * Not all emails need translation
 */
const noTranslations = {
  en: {},
  de: {},
  es: {},
  fr: {},
  nl: {},
  uk: {},
}

export const translations = {
  emailchange: emailchangeTranslations,
  goodbye: goodbyeTranslations,
  signinlink: signinlinkTranslations,
  newslettersub: newslettersubTranslations,
  passwordreset: passwordresetTranslations,
  signup: signupTranslations,
  'signup-aea': signupaeaTranslations,
  'signup-aed': signupaedTranslations,
  transinvite: transinviteTranslations,
  langsuggest: noTranslations,
  shared: { en, de, es, fr, nl },
}
