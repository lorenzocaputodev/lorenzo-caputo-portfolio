import { languagePath, supportedLanguages } from '../../content'
import { storeLang } from '../../utils/language'

/** Each language lives at its own URL, so switching is a plain link to the other prerendered page. */
export function LanguageSwitch({ language, ariaLabel, className = '' }) {
  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label={ariaLabel}>
      {supportedLanguages.map((item) => (
        <a
          key={item}
          className={language === item ? 'lang-switch__button is-active' : 'lang-switch__button'}
          href={languagePath(item)}
          hrefLang={item}
          lang={item}
          aria-current={language === item ? 'true' : undefined}
          onClick={() => storeLang(item)}
        >
          {item.toUpperCase()}
        </a>
      ))}
    </div>
  )
}
