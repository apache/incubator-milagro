import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '258'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'ab4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '76d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e6e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0c7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '501'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '639'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c97'),
    exact: true
  },
  {
    path: '/blog/2019/06/10/miss-me',
    component: ComponentCreator('/blog/2019/06/10/miss-me', 'c3b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'bb4'),
    exact: true
  },
  {
    path: '/help',
    component: ComponentCreator('/help', 'bc4'),
    exact: true
  },
  {
    path: '/index.js-old',
    component: ComponentCreator('/index.js-old', '7d9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '5ed'),
    routes: [
      {
        path: '/docs/amcl-c-api-2.0.0',
        component: ComponentCreator('/docs/amcl-c-api-2.0.0', 'cc2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/amcl-javascript-api',
        component: ComponentCreator('/docs/amcl-javascript-api', '0fd'),
        exact: true
      },
      {
        path: '/docs/amcl-overview',
        component: ComponentCreator('/docs/amcl-overview', 'f59'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/contributor-guide',
        component: ComponentCreator('/docs/contributor-guide', '44a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/aes',
        component: ComponentCreator('/docs/cryptojs/aes', 'f56'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/amcl-javascript-api',
        component: ComponentCreator('/docs/cryptojs/amcl-javascript-api', '7ae'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/big',
        component: ComponentCreator('/docs/cryptojs/big', '0d7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/bls',
        component: ComponentCreator('/docs/cryptojs/bls', '96d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/bls192',
        component: ComponentCreator('/docs/cryptojs/bls192', 'd4a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/bls256',
        component: ComponentCreator('/docs/cryptojs/bls256', '5b3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/dbig',
        component: ComponentCreator('/docs/cryptojs/dbig', '946'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/ecdh',
        component: ComponentCreator('/docs/cryptojs/ecdh', '337'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/ecp',
        component: ComponentCreator('/docs/cryptojs/ecp', '267'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/ecp2',
        component: ComponentCreator('/docs/cryptojs/ecp2', '2f4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/ecp4',
        component: ComponentCreator('/docs/cryptojs/ecp4', 'eb9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/ecp8',
        component: ComponentCreator('/docs/cryptojs/ecp8', 'f14'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/ff',
        component: ComponentCreator('/docs/cryptojs/ff', '0ec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/fp',
        component: ComponentCreator('/docs/cryptojs/fp', '452'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/fp12',
        component: ComponentCreator('/docs/cryptojs/fp12', '524'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/fp16',
        component: ComponentCreator('/docs/cryptojs/fp16', '273'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/fp2',
        component: ComponentCreator('/docs/cryptojs/fp2', '986'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/fp24',
        component: ComponentCreator('/docs/cryptojs/fp24', '919'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/fp4',
        component: ComponentCreator('/docs/cryptojs/fp4', 'b32'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/fp48',
        component: ComponentCreator('/docs/cryptojs/fp48', '90d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/fp8',
        component: ComponentCreator('/docs/cryptojs/fp8', '49e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/gcm',
        component: ComponentCreator('/docs/cryptojs/gcm', '864'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/hash256',
        component: ComponentCreator('/docs/cryptojs/hash256', 'a81'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/hash384',
        component: ComponentCreator('/docs/cryptojs/hash384', '47c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/hash512',
        component: ComponentCreator('/docs/cryptojs/hash512', '78f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/mpin',
        component: ComponentCreator('/docs/cryptojs/mpin', '7df'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/mpin192',
        component: ComponentCreator('/docs/cryptojs/mpin192', 'd7b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/mpin256',
        component: ComponentCreator('/docs/cryptojs/mpin256', '432'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/pair',
        component: ComponentCreator('/docs/cryptojs/pair', '6dd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/pair192',
        component: ComponentCreator('/docs/cryptojs/pair192', 'ea5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/pair256',
        component: ComponentCreator('/docs/cryptojs/pair256', 'f49'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/rand',
        component: ComponentCreator('/docs/cryptojs/rand', 'aa0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/rsa',
        component: ComponentCreator('/docs/cryptojs/rsa', '340'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/sha3',
        component: ComponentCreator('/docs/cryptojs/sha3', '054'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cryptojs/unit64',
        component: ComponentCreator('/docs/cryptojs/unit64', '662'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/d-ta-api',
        component: ComponentCreator('/docs/d-ta-api', '5fc'),
        exact: true
      },
      {
        path: '/docs/d-ta-overview',
        component: ComponentCreator('/docs/d-ta-overview', '0a9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/downloads',
        component: ComponentCreator('/docs/downloads', 'aff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/dta-details/api',
        component: ComponentCreator('/docs/dta-details/api', '8e4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/dta-details/authentication',
        component: ComponentCreator('/docs/dta-details/authentication', 'ebe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/dta-details/configuration',
        component: ComponentCreator('/docs/dta-details/configuration', '084'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/dta-details/encrypted-envelope',
        component: ComponentCreator('/docs/dta-details/encrypted-envelope', '055'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/dta-details/identity-documents',
        component: ComponentCreator('/docs/dta-details/identity-documents', 'd77'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/dta-details/ipfs',
        component: ComponentCreator('/docs/dta-details/ipfs', '5f1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/dta-details/plugin-dev-guide',
        component: ComponentCreator('/docs/dta-details/plugin-dev-guide', '8fe'),
        exact: true
      },
      {
        path: '/docs/dta-details/plugins-overview',
        component: ComponentCreator('/docs/dta-details/plugins-overview', 'd97'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/dta-details/quickstart',
        component: ComponentCreator('/docs/dta-details/quickstart', '932'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/milagro-crypto',
        component: ComponentCreator('/docs/milagro-crypto', '834'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/milagro-design',
        component: ComponentCreator('/docs/milagro-design', 'bde'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/milagro-intro',
        component: ComponentCreator('/docs/milagro-intro', '183'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/milagro-protocols',
        component: ComponentCreator('/docs/milagro-protocols', 'bdb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/mpc-api-0.1',
        component: ComponentCreator('/docs/mpc-api-0.1', 'e9b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/support',
        component: ComponentCreator('/docs/support', 'a1f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/zkp-mfa-api',
        component: ComponentCreator('/docs/zkp-mfa-api', '8e2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/zkp-mfa-overview',
        component: ComponentCreator('/docs/zkp-mfa-overview', 'd7e'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ddd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
