import { useEffect, useRef, useState } from 'react';

import useBoolean from '@hooks/useBoolean';

type WorkerFunction<R extends any> = (...args: any[]) => R;

const workerHandler = <R>(func: WorkerFunction<R>) => {
  onmessage = event => {
    postMessage(func(event.data));
  };
};

export const useWebWorker = <Result>(
  func: WorkerFunction<Result>
): {
  result?: Result;
  isLoading: boolean;
  run: (...args: Parameters<typeof func>) => void;
  terminate: () => void;
} => {
  const [result, setResult] = useState<ReturnType<typeof func>>();
  const [isLoading, toggleIsLoading, setIsLoading] = useBoolean(false);

  const workerRef = useRef<Worker | null>(null);

  const run: ReturnType<typeof useWebWorker>['run'] = args => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([`(${workerHandler})(${func})`]))
    );
    workerRef.current = worker;
    setIsLoading(true);

    worker.onmessage = ev => {
      setResult(ev.data);
      setIsLoading(false);
      worker.terminate();
    };

    worker.postMessage(args);
  };

  const terminate = () => {
    setIsLoading(false);
    return workerRef.current?.terminate();
  };

  return {
    result,
    isLoading,
    run,
    terminate,
  };
};
