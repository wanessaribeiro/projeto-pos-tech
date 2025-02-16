import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'account',
      exposes: {
        './balancecard': './src/components/BalanceCard/BalanceCard.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3003,
  },
});