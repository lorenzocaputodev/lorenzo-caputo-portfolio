import { supportedLanguages } from '../content'

export function LanguageSwitch({ language, onChange, ariaLabel, className = '' }) {
  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label={ariaLabel}>
      {supportedLanguages.map((item) => (
        <button
          key={item}
          className={`lang-switch__button ${language === item ? 'is-active' : ''}`}
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
