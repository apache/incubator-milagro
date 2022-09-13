/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
 const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/MILAGRO_emblem.svg',
    infoLink: 'https://milagro.apache.org',
    pinned: true,
  },
];

const siteConfig = {
  separateCss: ['/cdocs', '/swagger', '/mpcdocs'],
  title: 'Apache Milagro', // Title for your website.
  tagline: 'Core security infrastructure for decentralized networks',
  url: 'https://milagro.apache.org', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'incubator-milagro',
  organizationName: 'apache',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'milagro-intro', label: 'Docs'},
    {doc: 'support', label: 'Support'},
    {doc: 'contributor-guide', label: 'Contributing'},
	  {doc: 'downloads', label: 'Downloads'},
    {blog: true, label: 'Status'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/milagro.svg',
  footerIcon: 'img/milagro.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#2E8B57',
    secondaryColor: '#228B22',
  },

  /* Custom fonts for website */
  
  fonts: {
    myFont: [
      "Open Sans",
      "Roboto"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()}  The Apache Software Foundation. Apache Milagro, Milagro, Apache, the Apache feather, and the Apache Milagro project logo are either registered trademarks or trademarks of the Apache Software Foundation.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  
  // make side bar collapsible
  docsSideNavCollapsible: true,


  // Open Graph and Twitter card images.
  // ogImage: 'img/undraw_online.svg',
  // twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/apache/incubator-milagro',

    // ...
    markdownPlugins: [
      
      // Highlight admonitions.
      require('remarkable-admonitions')({ icon: 'svg-inline' })
    ]
// ...
   // markdownPlugins: [
   //   require('remarkable-plantuml')(md, { base_path: './static' })
   // ]
};

module.exports = siteConfig;
