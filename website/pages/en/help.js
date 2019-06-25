/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more about Milagro. [Read the docs.](${docUrl(
        'milagro-intro.html',
      )})`,
      title: 'Milagro Overview',
    },
    {
      content: `Join us. [Become a contributor.](${docUrl(
        'contributor-guide.html',
      )})`,
      title: 'Like cutting-edge crypto?',
    },
    {
      content: `We blog. [No, really.](${docUrl(
        '../blog/',
      )})`,
      title: 'Need Status?',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Get involved.</h1>
          </header>
          <p>Send an email to <a href="mailto:dev-subscribe@milagro.apache.org?Subject=Subscribe" target="_top">dev-subscribe @ milagro.apache.org</a> to join our mailing list.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
