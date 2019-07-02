---
id: usage
title: Using Milagro DTA
sidebar_label: Using Milagro DTA
---
Milagro DTA is designed to be built into the workflow of any organisation that needs to entrust another organisation to store the secret part of a key pair securely. It provides a [simple REST api](/swagger/index.html) "out-of-the-box" that can easily be integrated with an existing back office system or attached to a front-end application (or called from CURL, Postman, Swagger etc. if you just want to see what it does). 

The API has three parts to it:

1. _Identity Endpoints_ - that support creation and retrieval of identity documents
2. Secret Endpoints 
    1. Creates orders for new secrets
    2. Requets for existing secret keys to be revealed (redeemed)
    3. Allows orders to be searched and listed
3. Fulfilment RPC - these are the server-to-server calls that enable the Principal DTA to communicate with the Fiduciary

## Bootstrapping An Identity

In order to run a Milagro DTA Node it needs to be configured with an idenity. This is usually passed to the node via one of the [configuration options](api-details/configuration.md), however if you are running a server for the first time it will prompt you to create a new one.



