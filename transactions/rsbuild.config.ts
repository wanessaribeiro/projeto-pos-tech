import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'transactions',
      exposes: {
        './invoice': './src/presentation/components/Invoice/Invoice.tsx',
        './new-transaction':
          './src/presentation/components/NewTransaction/NewTransaction.tsx',
        './edit-transaction':
          './src/presentation/components/EditTransaction/EditTransaction.tsx',
        './transferences':
          './src/presentation/components/Transferences/Transferences.tsx',
      },
      shared: ['react', 'react-dom', 'react-router'],
    }),
  ],
  server: {
    port: 3002,
  },
});
