---
id: configuration
title: Configuration
sidebar_label: Configuration
---
Milagro D-TA can by configured by editing it's config file which is located in `~/.milagro/config.yaml`

The default values are shown below with some explanatory comments:
```
// http ports
http:
  listenAddr: :5556
  metricsAddr: :5557

// You can secure the endpoints with an oAuth 2.0 compatible identity provider
  oidcProvider: ""
  oidcClientID: ""
  oidcClientKey: ""

// If the endpoints are accessed from a web app put address here
  corsAllow: http://localhost:3000

node:

// D-TA can be "principal", "master fiduciary" or "multi" 
  nodeType: multi

// If D-TA is running as principal tell it where its Master Fiduciary is 
// (if nodeType is "multi" use localhost on same port)
  masterFiduciaryServer: http://localhost:5556

// IPFS Hash Address of Master Fiduciary's Identity document 
// (if nodeType is "multi"use nodeID (see below))
  masterFiduciaryNodeID: QmfZkZ8WR9N2nVg8rktbR2n7hBFN3HmYuFJeVuS3gcT3Mz

// IPFS Hash Address of this node's identity document
// (created and logged to stdout on startup)
  nodeID: QmfZkZ8WR9N2nVg8rktbR2n7hBFN3HmYuFJeVuS3gcT3Mz

// String used to refer to this node
  nodeName: 17c9f630d2e098e4

// Uses embedded "bolt" DB by defaultD-TA 
// (In productiion you should use external highly available database)
  dataStore: embedded

// configure logs
log:
  format: text
  level: info

// IPFS - by default D-TA connects to public network - NOT RECOMMENDED FOR PRODUCTION
ipfs:
  connector: embedded
  bootstrap:
  - /dnsaddr/bootstrap.libp2p.io/ipfs/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN
  - /dnsaddr/bootstrap.libp2p.io/ipfs/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa
  - /dnsaddr/bootstrap.libp2p.io/ipfs/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb
  - /dnsaddr/bootstrap.libp2p.io/ipfs/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt
  - /ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
  - /ip4/104.236.179.241/tcp/4001/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
  - /ip4/128.199.219.111/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
  - /ip4/104.236.76.40/tcp/4001/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
  - /ip4/178.62.158.247/tcp/4001/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
  - /ip6/2604:a880:1:20::203:d001/tcp/4001/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
  - /ip6/2400:6180:0:d0::151:6001/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
  - /ip6/2604:a880:800:10::4a:5001/tcp/4001/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
  - /ip6/2a03:b0c0:0:1010::23:1001/tcp/4001/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
  listenAddress: /ip4/0.0.0.0/tcp/4001
  apiAddress: http://localhost:5001

// load plugin
plugins:
  service: milagro
```