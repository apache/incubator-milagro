---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
---

## Docker
The easiest way to see a D-TA in action is to run it in a Docker container. The default settings will run a single D-TA that acts as Principal, Master Fiduciary and Beneficiary.

```
git clone https://github.com/apache/incubator-milagro-dta.git

cd incubator-milagro-dta

docker build -t milagrodta .

docker run -it -p 5558:5556 milagrodta

```

Now you can test if the D-TA is running by hitting `http://localhost:8888/v1/status`

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

## Hitting the API

The details of the API can be  [seen here...](/swagger/index.html)

Milagro D-TA can easily be integrated with an existing back office system, called from a front-end application or called from CURL, Postman, Swagger etc.

The API has three parts to it:

1. **Identity Endpoints** - that support creation and retrieval of [identity documents](dta-details/identity-documents.md)
2. **Order Endpoints** 
    1. Creates orders for new public keys
    2. Requests for secret keys to be revealed (redeemed)
    3. Allows orders to be searched and listed
3. **Fulfillment RPC** - these are the server-to-server remnote procedure calls that enable a Principal D-TA to communicate with a Master Fiduciary D-TA


### Example - To create a new Identity

```
curl -X POST "http://localhost:8888/v1/identity" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"name\":\"thisNode\"}"
```







