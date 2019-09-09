---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
---

## Docker
The easiest way to see a D-TA in action is to run it in a Docker container. The default settings will run a single D-TA that acts as Principal, Master Fiduciary and Beneficiary. The default settings include an embeded IPFS node connected to a private IPFS network and an embedded "Bolt" database. This will get you up and running quickly but is **not recommended for production use!**

Please see the repo's [README](https://github.com/apache/incubator-milagro-dta) for alternative build instructions.

```
git clone https://github.com/apache/incubator-milagro-dta.git

cd incubator-milagro-dta

docker build -t milagrodta .

docker run -it -p 5556:5556 milagrodta

```

Now you can test if the D-TA is running by hitting [http://localhost:5556/v1/status](http://localhost:5556/v1/status)

You should see something like...

```
{
"application": "Milagro Distributed Trust",
"timeStamp": "2019-08-29T11:11:15.9089824Z",
"apiVersion": "v1",
"nodeCID": "QmckgCeQRenUk7WHPcD5fxjLxScxyKp5QY1P7GW69NZnR1",
"extensionVendor": "Milagro",
"plugin": "milagro"
}

```

## Plugins

The Milagro D-TA comes with two aditional plugins out-of-the box, which are intended to demonstrate how it can be extended.

**To Run Safeguard Secret**

The Safeguard Secret plugin encrypts a string with the public key and decrypts it when the Master Fiducuiary returns the secret key.

```
docker run -it -p 5556:5556 milagrodta -service safeguardsecret
```

**To Run Bitcoin Wallet**

Bitcon Wallet uses the public key to create a Bitcoin address. When you want to spend your bitcoins you can get the secret key from the Master Fiduciary
```
docker run -it -p 5556:5556 milagrodta -service bitcoinwallet
```

You can confirm that the plugins have loaded by hitting [http://localhost:5556/v1/status](http://localhost:5556/v1/status)

## Hitting the API

The details of the API can be  [seen here...](/swagger/index.html)

The Milagro D-TA can easily be integrated with an existing back office system, called from a front-end application or called from CURL, Postman, Swagger etc.

The API has three parts to it:

1. **Identity Endpoints** - that support creation and retrieval of [identity documents](dta-details/identity-documents.md)
2. **Order Endpoints** 
    1. Creates orders for new public keys
    2. Requests for secret keys to be revealed (redeemed)
    3. Allows orders to be searched and listed
3. **Fulfillment RPC** - these are the server-to-server remote procedure calls that enable a Principal D-TA to communicate with a Master Fiduciary D-TA


### Example - To create a new Identity

```
curl -X POST "http://localhost:5556/v1/identity" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"name\":\"thisNode\"}"
```







