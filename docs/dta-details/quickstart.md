---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
---
Milagro DTA is designed to be built into the workflow of any organisation that needs to trust another organisation to manage encryption keys. It provides a [simple REST api](/swagger/index.html) "out-of-the-box" that can easily be integrated with an existing back office system, called from a front-end application or called from CURL, Postman, Swagger etc.

## Install AMCL
Milagro D-TA uses the Apache Milagrio Cryptography Library, so this must installed first

```
git clone https://github.com/apache/incubator-milagro-crypto-c.git

cd incubator-milagro-crypto-c

mkdir build

cd build

brew install cmake (or apt install cmake)

cmake -D CMAKE_BUILD_TYPE=Release -D BUILD_SHARED_LIBS=ON -D AMCL_CHUNK=64 -D AMCL_CURVE="BLS383" AMCL_CURVE="BLS381" AMCL_CURVE="SECP256K1" -D AMCL_RSA="" -D BUILD_PYTHON=OFF -D BUILD_WCC=OFF -D BUILD_MPIN=ON -D BUILD_X509=OFF -D CMAKE_INSTALL_PREFIX=/usr/local ..

sudo make install

```

## Install Milagro D-TA from Source
There are two primary roles in a D-TA workflow: the Principal and the Master Fiduciary, as a quick start you can configure one D-TA to provide both roles. (Obviously for a more thorough evaluation configure two servers)

*GITLAB VERSION*

1.  Install [the latest version of Go](https://golang.org/dl/)

2.  Clone the D-TA source code and build it

```
cd ~/go/src

git clone https://gitlab.com/howardkitto/milagro-custody

./build.sh

```

3.  Initialise the config

This will put the config and data files in ~/.milagro

```
target/setvice init
```

4. Configure the D-TA

For quick start a single server is Principal and fiduciary (as described above).
[Click here to find out more about the configuration options](api-details/configuration.md)

Use an editor of your choice, I'm using nano

```
nano ~/.milagro/config.yaml

```
Give the node a name e.g. testNode by editing the following line:
```
nodeName: "testNode"

```
5. Start the node for the first time. This will generate an identity for the node
```
target/service daemon
```
6. Configure the Master Ficuciary
The D-Ta is currently running as a principal, and has also configured itself to be the master fiduciary. `masterFiduciaryServer: http://localhost:5556`.

However before it can work properly we need to configure the Master Fiduciaries NoeId to be the same as the principal's

```
nano ~/.milagro/config.yaml

copy the value of nodeID into masterFiduciaryNodeID e.g.

masterFiduciaryNodeID: QmfWg5GffUEzwahd9hkvdnqTGQs5PfusoEpx3kSDSdG4ze
nodeID: QmfWg5GffUEzwahd9hkvdnqTGQs5PfusoEpx3kSDSdG4ze
```

## Hitting the API

The API has three parts to it:

1. **Identity Endpoints** - that support creation and retrieval of [identity documents](dta-details/identity-documents.md)
2. **Secret Endpoints** 
    1. Creates orders for new secrets
    2. Requests for secret keys to be revealed (redeemed)
    3. Allows orders to be searched and listed
3. **Fulfillment RPC** - these are the server-to-server remnote procedure calls that enable the Principal DTA to communicate with the Fiduciary DTA

The details of the API can be  [seen here...](/swagger/index.html)

### Example - To create a new Identity

```
curl -X POST "http://localhost:5556/identity" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"name\":\"thisNode\"}"
```







