import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ensino IFBA',
  tagline: 'Materiais de aula organizados por disciplina',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://felipegustavo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ensino-ifba/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'felipegustavo', // Usually your GitHub org/user name.
  projectName: 'ensino-ifba', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/felipegustavo/ensino-ifba/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ensino IFBA',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'disciplinasSidebar',
          position: 'left',
          label: 'Disciplinas',
        },
        {
          href: 'https://github.com/felipegustavo/ensino-ifba',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Materiais de aula',
          items: [
            {
              label: 'Todas as disciplinas',
              to: '/',
            },
          ],
        },
        {
          title: 'Repositório',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/felipegustavo/ensino-ifba',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ensino IFBA. Materiais de aula.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
