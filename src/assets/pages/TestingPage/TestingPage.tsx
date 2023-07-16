import { FC, useContext, useEffect } from 'react';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';

import useAppSettings from '@hooks/useAppSettings';

import { TestingPageProps } from './TestingPage.props';

const TestingPage: FC<TestingPageProps> = ({}) => {
  const { appVersion, language } = useAppSettings();
  const { classes, registerClasses, deleteClasses } =
    useContext(BodyClassnameContext);

  useEffect(() => {
    registerClasses('test', ['testing']);

    console.log(classes);

    return () => {
      deleteClasses('test');
    };
  });

  return (
    <div>
      <p>App version: {appVersion.get()}</p>

      <p id={'lang-output'}>Language: {language.get()}</p>
      <button className={'lang-switch'} onClick={() => language.set('ru')}>
        Change lang to Russian
      </button>
      <button className={'lang-switch'} onClick={() => language.set('en')}>
        Change lang to English
      </button>
    </div>
  );
};

export default TestingPage;
