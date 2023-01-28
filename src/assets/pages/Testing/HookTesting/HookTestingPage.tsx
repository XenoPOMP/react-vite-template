import Page from '@components/Page/Page';
import styles from './HookTestingPage.module.scss';
import cn from 'classnames';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useRef, useState } from 'react';
import { useCookie } from '@hooks/useCookie';

const HookTestingPage = () => {
  const [localStorage, setLocalStorage] =
    useLocalStorage < number > ('testing-hooks', 12);
  const [localStorageState, setLocalStorageState] = useState(localStorage);

  const [getCookie, setCookie] = useCookie < number > ('cookie-testing', 123);

  return (
    <Page
      meta={{ pageTitle: 'Hook testing', pageDescription: '', keywords: '' }}
    >
      <div className={cn(styles.testBody)}>
        <section>
          <h2>useLocalStorage hook</h2>

          <div>
            <label>Input data: </label>
            <input
              type={'text'}
              value={localStorageState}
              onChange={(event) => {
                setLocalStorageState(parseInt(event.target.value));
              }}
            />
            <button
              onClick={() => {
                setLocalStorage(localStorageState);
              }}
            >
              Update state
            </button>
          </div>

          <div style={{ display: 'flex' }}>
            <label>Local storage content: </label>
            <div>{localStorage}</div>
          </div>
        </section>

        <section>
          <h2>useCookie hook</h2>

          <div>Value from cookie: {getCookie}</div>
        </section>
      </div>
    </Page>
  );
};

export default HookTestingPage;
