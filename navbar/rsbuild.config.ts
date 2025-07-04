import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'navbar',
      exposes: {
        './navbar': './src/presentation/components/NavBar/NavBar.tsx',
        './header': './src/presentation/components/Header/Header.tsx',
      },
      shared: ['react', 'react-dom', 'react-router'],
    }),
  ],
  server: {
    port: 3001,
  },
});
