const math = require('remark-math');
const katex = require('rehype-katex');


module.exports={
  "title": "Apache Milagro",
  "tagline": "Core security infrastructure for decentralized networks",
  "url": "https://milagro.apache.org",
  "baseUrl": "/",
  "organizationName": "apache",
  "projectName": "incubator-milagro",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "separateCss": [
      "/cdocs",
      "/swagger",
      "/mpcdocs"
    ],
    "users": [
      {
        "caption": "User1",
        "image": "/img/MILAGRO_emblem.svg",
        "infoLink": "https://milagro.apache.org",
        "pinned": true
      }
    ],
    "fonts": {
      "myFont": [
        "Open Sans",
        "Roboto"
      ],
      "myOtherFont": [
        "-apple-system",
        "system-ui"
      ]
    },
    "repoUrl": "https://github.com/apache/incubator-milagro",
    "markdownPlugins": [
      null
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "sidebars.json",
          "remarkPlugins": [math],
          "rehypePlugins": [katex]
        },
        "blog": {
          "path": "blog",
          "id": "blog"
        },
        "theme": {
          "customCss": "src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Apache Milagro",
      "logo": {
        "src": "img/milagro.svg"
      },
      "items": [
        {
          "to": "docs/milagro-intro",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "docs/support",
          "label": "Support",
          "position": "left"
        },
        {
          "to": "docs/contributor-guide",
          "label": "Contributing",
          "position": "left"
        },
        {
          "to": "docs/downloads",
          "label": "Downloads",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2022  The Apache Software Foundation. Apache Milagro, Milagro, Apache, the Apache feather, and the Apache Milagro project logo are either registered trademarks or trademarks of the Apache Software Foundation.",
      "logo": {
        "src": "img/milagro.svg"
      }
    }
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
}