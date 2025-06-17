import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'investments',
      exposes: {
        './investments-menu':
          './src/components/InvestmentsMenu/InvestmentsMenu.tsx',
        './new-investment': './src/components/NewInvestment/NewInvestment.tsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router': { singleton: true },
      },
    }),
  ],
  server: {
    port: 3004,
  },
});
