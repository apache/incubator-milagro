---
id: configuration
title: Configuration
sidebar_label: Configuration
---
The Milagro D-TA can be configured either by editing its configuration file or using command line flags.   

:::important running a D-TA as a principal with an external master fiduciary (as described below) is not currently supported but will be in the next release.
:::

## Configuration File
The config file is located in `~/.milagro/config.yaml`

:::important this configuration method is not yet supported when running in Docker.  Please use the command line flags described below.
:::

The default values are shown below with some explanatory comments:
```json
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

// IPFS - by default D-TA connects to private IPFS network
  connector: embedded
  bootstrap:
  - /ip4/34.252.47.231/tcp/4001/ipfs/QmcEPkctfqQs6vbvTD8EdJmzy4zouAtrV8AwjLbGhbURep
  listenAddress: /ip4/0.0.0.0/tcp/4001
  apiAddress: http://localhost:5001

// Define the plugin to be used.  Default is "milagro".  Currently available alternative plugins are "bitcoinwallet" and "safeguardsecret"
plugins:
  service: milagro
```
## Command Line Flags

To view available service commands:

```json
 ./milagro
Milagro DTA
USAGE
	milagro <command> [options]
	
COMMANDS
	init	Initialize configuration
	daemon	Starts the milagro daemon
```

To view the available initialization option flags, use the `-help` flag:

### INIT

```json
./milagro init -help
Usage of init:
  -interactive
    	Interactive setup
  -masterfiduciarynode string
    	Master fiduciary node
  -nodename string
    	Node name
  -service string
    	Service plugin (default "milagro")
```  

* **masterfiduciarynode** - if you want to use an external master fiduciary, use this flag to set its identity (nodeID) and endpoint separated with a comma. For example:
```json
QmR7JfvEwTbSkBZuRLdDcRTpZik2ZAuHnn9BA7giX7oJNK,http://123.456.789.1:5556
```
:::note By default a D-TA will be both a principal and master fiduciary. 
:::  
* **nodename** - set your DT-A node name (nodeName) here.  By default, a random name with be generated if none is specified.   
* **service** - use this flag to set which plugin to use.  Default is "milagro".  Currently available plugins are "bitcoinwallet" and "safeguardsecret".
* **interactive** - use this flag to prompt for values for the other flags.  For example, to set the name (nodeName) of this DT-A to "alice", the identity (nodeID) of the external fiduciary to "QmR7JfvEwTbSkBZuRLdDcRTpZik2ZAuHnn9BA7giX7oJNK", the endpoint of the master fiduciary to "http://123.456.789.1:5556" and to use the "bitcoinwallet" plugin: 
 
```json
./milagro init -interactive
What is your node name?. Leave blank to generate a random name: alice 
What is your Master Fiduciary DTA’s node name? Leave blank to use this DTA as the Master Fiduciary: QmR7JfvEwTbSkBZuRLdDcRTpZik2ZAuHnn9BA7giX7oJNK   
What is your Master Fiduciary DTA’s address?: http://123.456.789.1:5556   
What plugin do you want to install? (B)itcoin wallet address generator or (S)afeguard secret. Leave blank for no plugin: B
```

### DAEMON
```json
./milagro daemon -help
Usage of daemon:
  -service string
    	Service plugin (default "bitcoinwallet")
```
* **service** - use this flag to set which plugin to use.  Default is "milagro".  Currently available plugins are "bitcoinwallet" and "safeguardsecret".

