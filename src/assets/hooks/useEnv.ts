export type TestingMode = 'FRONTEND' | 'BACKEND' | 'FULLSTACK';

export type Env = {
  API_URL?: string,
  TESTING_MODE?: TestingMode,
};

const useEnv = (): Env => {
  const env = import.meta.env;

  const fetchFromEnv = (item: any): string => {
    const result = JSON.stringify(item);

    // prettier-ignore
    return result
      .replace(/^"/i, '')
      .replace(/"$/i, '');
  };

  return {
    API_URL: fetchFromEnv(env.VITE_API_URL),
    // @ts-ignore
    TESTING_MODE: fetchFromEnv(env.VITE_TESTING_MODE),
  };
};

export default useEnv;
