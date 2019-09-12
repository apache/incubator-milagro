---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
---

## Docker
The easiest way to see a D-TA in action is to run it in a Docker container. The default settings will run a single D-TA that acts as Principal, Fiduciary and Beneficiary. The default settings include an embedded IPFS node connected to a private IPFS network and an embedded "Bolt" database. This will get you up and running quickly but is **not for production use!**

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

The Milagro D-TA comes with two additional plugins out-of-the box, which are intended to demonstrate how it can be extended.

### Safeguard Secret

The Safeguard Secret plugin encrypts a string with the public key using [ECIES](https://medium.com/asecuritysite-when-bob-met-alice/generating-an-encryption-key-without-a-pass-phrase-meet-ecies-bbea1787d846) and decrypts it when the Fiduciary's D-TA returns the secret key.

**To Run Safeguard Secret**
```
docker run -it -p 5556:5556 milagrodta -service safeguardsecret
```
### Bitcoin Wallet Security

A Bitcoin Wallet uses a public key (derived from a private key) to create a Bitcoin address. To spend funds from that address, the private key is needed. Insufficient security of private keys has let to billions of dollars in theft. The Principal's Bitcoin Wallet Security plugin receives one half of the public key from the Fiduciary to ultimately create the wallet address. To spend the funds, the Fiduciary D-TA returns a secret to the Beneficiary's D-TA. A process adds this secret to one that is resident within the Principal's D-TA to materialize the wallet's private key.

**To Run Bitcoin Wallet Security**
```
docker run -it -p 5556:5556 milagrodta -service bitcoinwallet
```

You can confirm that the plugins have loaded by hitting [http://localhost:5556/v1/status](http://localhost:5556/v1/status)

## D-TA API

A Swagger description of the API is accessed [via this link.](/swagger/index.html)

The Milagro D-TA can easily be integrated with an existing back office system, called from a front-end application or called from CURL, Postman, Swagger etc.

The API has three parts to it:

1. **Identity Endpoints** - that support creation and retrieval of [identity documents](dta-details/identity-documents.md)
2. **Order Endpoints** 
    1. Creates orders for new public keys
    2. Requests for secret keys to be transferred
    3. Allows orders to be searched and listed
3. **Fulfillment RPC** - these are the server-to-server remote procedure calls that enable a Principal D-TA to communicate with a Master Fiduciary D-TA

### Example - To create a new Identity

```
curl -X POST "http://localhost:5556/v1/identity" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"name\":\"thisNode\"}"
```







