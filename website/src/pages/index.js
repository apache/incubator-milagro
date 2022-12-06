/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = {
  Container: props => <div {...props}></div>,
  GridBlock: props => <div {...props}></div>,
  MarkdownBlock: props => <div {...props}></div>
};

import Layout from "@theme/Layout";
import { textSpanContainsPosition } from "typescript";

const Container = CompLibrary.Container;

class Index extends React.Component {
  render() {
    return (
      <div className="mainContainer" style={{ display: 'flex', alignItems: 'center', height: '60vh' , justifyContent: 'center'}}>
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="prose" style={{alignItems: 'center', justifyContent: 'center', margin: 'auto'}}>
              <img src='img/milagro_logo.svg' alt="Apache Milagro logo" style={{ margin: 'auto',  alignItems: 'center',  display: 'flex' }} />
              <br /><br />
              {/* <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto'}}>Apache Milagro</h1> */}
              <br /><br />
              <p>Core security infrastructure for decentralized networks and distributed systems</p>
            </div>
            <p> </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default props => <Layout><Index {...props} /></Layout>;
