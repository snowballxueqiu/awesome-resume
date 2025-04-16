'use client';

import { ColorSchemeScript, MantineProvider as Provider } from '@mantine/core';
import { theme } from '@/theme/theme';

export function MantineProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorSchemeScript />
      <Provider theme={theme}>
        {children}
      </Provider>
    </>
  );
}