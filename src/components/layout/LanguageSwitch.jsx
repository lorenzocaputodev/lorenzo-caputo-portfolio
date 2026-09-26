import { supportedLanguages } from '../../content'

export function LanguageSwitch({ language, onChange, ariaLabel, className = '' }) {
  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label={ariaLabel}>
      {supportedLanguages.map((item) => (
        <button
          key={item}
          className={language === item ? 'lang-switch__button is-active' : 'lang-switch__button'}
          type="button"
          aria-pressed={language === item}
          onClick={() => onChange(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
