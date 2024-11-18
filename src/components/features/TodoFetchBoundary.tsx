"use client";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { PropsWithChildren, Suspense } from "react";

export default function TodoFetchBoundary({ children }: PropsWithChildren) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              서버 에러가 발생했습니다.
              <button onClick={() => resetErrorBoundary()}>
                다시 실행해주세요.
              </button>
            </div>
          )}
        >
          <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
