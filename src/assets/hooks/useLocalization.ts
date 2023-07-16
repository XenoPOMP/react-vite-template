import { enUS } from '@locales/en-US';
import { ruRU } from '@locales/ru-RU';
import { Localization } from '@localization/Localization';

import useAppSettings from '@hooks/useAppSettings';

export const useLocalization = (): Localization => {
  const { language } = useAppSettings();

  switch (language.get()) {
    case 'en':
      return enUS;
    case 'ru':
      return ruRU;
  }
};
