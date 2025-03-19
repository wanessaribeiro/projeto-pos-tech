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
        './new-transaction': './src/components/NewTransaction/NewTransaction.tsx',
        './edit-transaction': './src/components/EditTransaction/EditTransaction.tsx',
        './transferences': './src/components/Transferences/Transferences.tsx'
      },
      shared: ['react', 'react-dom', 'react-router'],
    }),
  ],
  server: {
    port: 3002,
  },
});