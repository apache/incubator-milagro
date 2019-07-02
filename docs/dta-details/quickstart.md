---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
---
Milagro DTA is designed to be built into the workflow of any organisation that needs to entrust another organisation to store the secret part of a key pair securely. It provides a [simple REST api](/swagger/index.html) "out-of-the-box" that can easily be integrated with an existing back office system, called from a front-end application or called from CURL, Postman, Swagger etc.

## Configure a Pair
In order to see Milagro in action you need a pair of servers: a Principal and Fiduciary. 

1. Download and install the Milagro DTA by following these instructions...TBD
2. By default the server will startup on port 5555, start one node on using this default port, this will be the Fiduciary (custody server)

`./milagrodta`

3. We will change the config for the Principal (client) node. [Click here to find out more about the configuration options](api-details/configuration.md) If you are building from source the easiest way to change the config is via the configuration file e.g.

```
/cmd/service/flags.go

listen_addr : 5556 /* Choose a port for this server*/

custody_server: http://localhost:5556 /*Point to the Fiduciary (custody) server*/

```
Or use command line options like this...
```
$ ./milagro-dta -listen-addr :5556 -custody-server http://localhost:5555
```

## Bootstrapping An Identity

In order to run a Milagro DTA Node it needs to be configured with an identity. This is usually passed to the node via one of the [configuration options](api-details/configuration.md), however if you are running a server for the first time it will prompt you to create a new one by entering a name string.

![Init ID](/img/dta/initID.png)

(If the server is being restarted it will allow you to select a previously created ID)

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







