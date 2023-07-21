const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guia DevOps Brasil',
  tagline: 'Aprenda com a comunidade.',
  url: 'https://guiadevopsbrasil.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    'docusaurus-theme-openapi-docs',
    'docusaurus-plugin-image-zoom',
  ],

  plugins: [
    '@gracefullight/docusaurus-plugin-vercel-analytics',
    'docusaurus-plugin-image-zoom',
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  themes: [
    'docusaurus-theme-openapi-docs',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          },
          scrollOffset: 300,
        },
      },
      navbar: {
        logo: {
          alt: 'Guia DevOps Brasil',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            label: 'O que é DevOps?',
            docId: 'introducao',
            position: 'left',
            className: 'navbar-text',
          },
          {
            type: 'doc',
            label: 'Comece aqui',
            docId: 'niveis/niveis',
            position: 'left',
            className: 'navbar-text',
          },    
          {
            href: 'https://github.com/waltenne/guiadevopsbrasil',
            label: 'Guia DevOps Brasil on Github',
            position: 'right',
          },          
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Guia DevOps Brasil, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
