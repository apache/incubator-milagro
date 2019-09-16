/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="50"
                height="100"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('milagro-intro.html', this.props.language)}>
              Milagro Intro
            </a>
            <a href={this.docUrl('amcl-overview.html', this.props.language)}>
              Apache Milagro Crypto Library
            </a>
            <a href={this.docUrl('d-ta-overview.html', this.props.language)}>
              Decentralized Trust Authority
            </a>
            <a href={this.docUrl('zkp-mfa-overview.html', this.props.language)}>
              Zero Knowledge Proof MFA
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="../docs/support">
              Support
            </a>
            <a
              href="../docs/contributor-guide">
              Contributing
            </a>
            <a
              href="https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=115529045"
              target="_blank"
              rel="noreferrer noopener">
              Developer Wiki
            </a>
            <a
              href="https://twitter.com/apachemilagro?lang=en"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Status</a>
            <a href="https://github.com/apache/incubator-milagro-crypto-c">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/apache/incubator-milagro-crypto/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://apache.org"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Apache Incubator"
            width="170"
            height="45"
          />
        </a>
		
		<section className="copyright"><div>Apache Milagro is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</div></section>
		
		<p></p>
		
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
