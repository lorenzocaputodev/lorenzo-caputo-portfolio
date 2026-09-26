// ===== Selettore di lingua =====
import { languagePath, supportedLanguages } from '../../content'
import { storeLang } from '../../utils/language'

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
