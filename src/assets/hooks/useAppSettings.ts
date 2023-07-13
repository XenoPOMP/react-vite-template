import { useSelector } from 'react-redux';
import { useAppSelector } from '@redux/hooks';
import { AppSettings } from '@redux/reducers/appSettingsSlice';

type SettingController<T> = {
  get: () => T;
  set: (newValue: T) => void;
} & (T extends boolean
  ? {
      toggle: () => void;
    }
  : {});

interface IUseAppSettings {
  appVersion: Omit<SettingController<AppSettings['appVersion']>, 'set'>;
  appName: Omit<SettingController<AppSettings['appName']>, 'set'>;
}

const useAppSettings = (): IUseAppSettings => {
  const { appVersion, appName }: AppSettings = useAppSelector(
    state => state.appSettings,
  );

  return {
    appVersion: {
      get: () => appVersion,
    },

    appName: {
      get: () => appName,
    },
  };
};

export default useAppSettings;
