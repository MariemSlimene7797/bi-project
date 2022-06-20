import React, { createContext, Suspense, useContext } from 'react';
import { withTolgee } from '@tolgee/i18next';
import i18n from 'i18next';
import ICU from 'i18next-icu';
import { initReactI18next } from 'react-i18next';
import Spinner from '../../components/Spinner';

const SUPORTED_LANGUAGES = ['en', 'fr'];

withTolgee(i18n, {
  apiUrl: process.env.REACT_APP_TOLGEE_API_URL,
  apiKey: process.env.REACT_APP_TOLGEE_API_KEY,
  staticData: {
    en: () => import('../../i18n/en.json'),
    fr: () => import('../../i18n/fr.json')
  }
})
  .use(ICU)
  .use(initReactI18next)
  .init({
    lng: 'en',
    supportedLngs: SUPORTED_LANGUAGES
  });

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ILanguageContext {
  supportedLangauges: string[];
  // changeLanguage: (language: string) => void;
}

const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);
const LanguageContextProvider: React.FC = ({ children }) => {
  // const [selectedLanguage, setSelectedLanguage] = useState<string>('fr');
  // const { t, i18n } = useTranslation();
  // const changeLanguage = (language: string) => {
  //   setSelectedLanguage(language);
  //   i18n.changeLanguage(language);
  // };
  return (
    <LanguageContext.Provider value={{ supportedLangauges: SUPORTED_LANGUAGES }}>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): ILanguageContext => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageContextProvider');
  }
  return context;
};
export default LanguageContextProvider;
