import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'transactions',
      exposes: {
        './invoice': './src/components/Invoice/Invoice.tsx',
        './new-transaction': './src/components/NewTransaction/NewTransaction.tsx'
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3002,
  },
});