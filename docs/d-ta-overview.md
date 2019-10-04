---
id: d-ta-overview
title: Decentralized Trust Authority Overview
sidebar_label: D-TA Overview
---
### VERSION: ALPHA RELEASE 0.1.0

:::important The Alpha Release of the D-TA is not for production use.
:::

#### Release Schedule:

Beta Release: Q4 2019

RC1 Release: Q1 2020

# Introduction
The Apache Milagro (Incubating) Decentralized Trust Authority (D-TA) is a collaborative key management server. It has two primary functions. 

1. **Issue** shares of identity-based Type-3 pairing secrets for initializing zero-knowledge proof multi-factor authentication (ZKP-MFA) networks of clients and authentication servers.
2. **Safeguards** shares of generic secrets, acting independently but in conjunction with other D-TA nodes, for the benefit of other D-TA nodes. 

In the use case where it issues shares, the D-TA holds nothing except for its Master Secret and acts as a distributed private key generation server. In the use case where it is safeguarding shares of secrets, it is up to the application developer to implement back-end application logic to hold those shares securely. Examples include using Hardware Security Modules (HSMs) via an on-board PKCS#11 implementation to create a realm of key encryption keys, or multi-party computation through BLS signature aggregation.

# Roles

Operators of Decentralized Trust Authorities are segmented into three roles.

1. **Principals** - These entities operate a Milagro D-TA node to securely communicate with other D-TA nodes (Fiduciaries), employing them to issues shares of secrets or safeguard shares of secrets.

2. **Fiduciaries** - These entities operate \\( 1 + n \\) Milagro D-TAs to issue shares of secrets or safeguard shares of secrets.

3. **Beneficiaries** - These entities receive shares of secrets from Fiduciaries.

A D-TA facilitates secure and auditable communication between entities and service providers who can keep shares of secret keys safe (Fiduciaries). The D-TA is written in Go and uses REST services based on the GoKit microservices framework. The D-TA uses IPFS to create a shared immutable log of transactions and relies on Milagro-Crypto-C for it's crypto. Future release candidates will incorporate Tendermint for consensus protocol.

# Safeguarding Secrets 

In order to safeguard a secret using the D-TA a minimum of two roles are required: a client (Principal) and a server (Fiduciary). In addition a third party can be nominated as the ultimate recipient of the secret (Beneficiary). You can run a single D-TA to provide all three roles if you want to see it in action. See the [quick start guide](/docs/dta-details/quickstart) for instructions on how to do that.

This system can be imagined like a "network HSM". Below is a VERY simplified overview of the process:

![Figure 1](/img/dta/RC1-Overview-1.png)

## Milagro D-TA Security
The **Seed** is the focus of the system - the D-TA provides a method for Principals to communicate with Fiduciaries who can secure their secrets, it does not prescribe how the securing should be done. The most basic implementation of a D-TA should secure seeds in an HSM using a PKCS#11 interface. 

We hope that many custodial services will adopt the Milagro D-TA as a communication protocol and that they will bring a profusion of security paradigms, by working together we can make a dynamic market place for custodial services and together make the Internet a safer place.

## The Milagro D-TA Communication Protocol
The D-TA provides a secure, distributed method of communication between Beneficiaries, Principals and Fiduciaries. It aims to solve the following problems:

1. How can actors in the system be identified and trusted?

    **Answer:** [Identity Documents](dta-details/identity-documents.md)
2. How can records of interactions between actors in the system be trusted and verified?

    **Answer:** [Encrypted Envelopes](dta-details/encrypted-envelope.md) via [IPFS](dta-details/ipfs.md)

3. How can different custodial services provide their own "special security sauce"?

    **Answer:** [Plugins](dta-details/d-ta-plugins.md)

A more complete view of the Milagro D-TA ecosystem is shown below

![Figure 1](/img/dta/RC1.png)