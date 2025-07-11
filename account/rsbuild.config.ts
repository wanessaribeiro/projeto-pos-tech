import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'account',
      exposes: {
        './balance-card':
          './src/presentation/components/BalanceCard/BalanceCard.tsx',
        './account-card':
          './src/presentation/components/AccountCard/AccountCard.tsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router': { singleton: true },
      },
    }),
  ],
  server: {
    port: 3003,
  },
});
