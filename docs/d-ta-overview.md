---
id: d-ta-overview
title: Decentralized Trust Authority Overview
sidebar_label: D-TA Overview
---
# Introduction
The Apache Milagro (Incubating) Decentralized Trust Authority (D-TA) is a collaborative key management server. It has two primary functions. 

1. **Issue** shares of identity-based Type-3 pairing secrets for initializing zero-knowledge proof multi-factor authentication (ZKP-MFA) networks of clients and authentication servers.
2. **Safeguard** shares of generic secrets, acting independently but in conjunction with other D-TA nodes, for the benefit of other D-TA nodes. 

In the use case where it issues shares, the D-TA holds nothing except for its Master Secret and acts as a distributed private key generation server. In the use case where it is safeguarding shares of secrets, it is up to the application developer to implement back-end application logic to hold those shares securely. Examples can include using Hardware Security Modules (HSMs) via an on-board PKCS#11 implementation to create a realm of key encryption keys.

## Roles

Operators of Decentralized Trust Authorities 

A D-TA facilitates secure and auditable communication between someone who wants to use a key pair (the Principal) and service providers who can keep secret keys safe (Master Fiduciary). It is written in Go and uses REST services based on the GoKit microservices framework, it uses IPFS to create a shared immutable log of transactions and relies on Milagro-Crypto-C for it's crypto.

# Safeguarding Secrets 

In order to safeguard a secret using the D-TA a minimum of two roles are required: a client (refered to as the Principal) and a server (refered to as a Master Fiduciary). In addition a third party can be nominated as the ultimate recipient of the secret (refered to as the Beneficiary). You can run a single D-TA to provide all three roles if you want to see it in action. See the [quick start guide](/docs/dta-details/quickstart) for instructions on how to do that.

This system can be imagined like a "network HSM". Here is a VERY simplified overview of the process:

![Figure 1](/img/dta/RC1-Overview-1.png)

## Milagro D-TA Security
The **Seed** is the focus of the system - the D-TA provides a method for Principals to communicate with Master Fiduciares who can secure their secret keys, it does not prescribe how the securing should be done. The most basic implementation of a D-TA should secure seeds in an HSM using a PKCS#11 interface. 

We hope that many custodial services will adopt the Milagro D-TA as a communication protocol and that they will bring a profusion of security paradigms, by working together we can make a dynamic market place for custodial services and together make the Internet a safer place.

## The Milagro D-TA Communication Protocol
The D-TA provides a secure, distributed method of communication between beneficiaries, principals and fiduciaries. It aims to solve the following problems:

1. How can actors in the system be identified and trusted?

    **Answer:** [Identity Documents](dta-details/identity-documents.md)
2. How can records of interactions between actors in the system be trusted and verified?

    **Answer:** [Encrypted Envelopes](dta-details/encrypted-envelope.md) via [IPFS](dta-details/ipfs.md)

3. How can different custodial services provide their own "special security sauce"?

    **Answer:** [Plugins](dta-details/d-ta-plugins.md)

A more complete view of the Milagro D-TA ecosystem is shown below

![Figure 1](/img/dta/RC1.png)