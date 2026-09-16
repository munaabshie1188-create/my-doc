// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clinical Data Management Portal',
  tagline: 'Technical documentation, REST API references, and diagnostic workflows for clinical data systems.',
  favicon: 'img/favicon.ico',

  // Production URL & GitHub Pages deployment config
  url: 'https://munaabshie1188-create.github.io',
  baseUrl: '/my-doc/',
  organizationName: 'munaabshie1188-create',
  projectName: 'my-doc',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/munaabshie1188-create/my-doc/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/munaabshie1188-create/my-doc/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'clinical data management, CDM, REST API, healthcare IT, LIMS, clinical trials, data validation, lab informatics'},
        {name: 'description', content: 'Comprehensive documentation resource covering clinical data management, API integration, and laboratory workflows.'},
      ],
      navbar: {
        title: 'CDM Documentation',
        logo: {
          alt: 'CDM Portal Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/munaabshie1188-create/my-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/api-reference',
              },
              {
                label: 'Patient Requisition Tutorial',
                to: '/docs/patient-registration-tutorial',
              },
            ],
          },
          {
            title: 'Architecture & Rules',
            items: [
              {
                label: 'System Architecture',
                to: '/docs/system-architecture',
              },
              {
                label: 'Data Quality & Validation',
                to: '/docs/data-quality',
              },
              {
                label: 'Key CDM Tools',
                to: '/docs/cdm-tools',
              },
            ],
          },
          {
            title: 'Resources & Code',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub Repository',
                href: 'https://github.com/munaabshie1188-create/my-doc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Clinical Data Management Portal. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;