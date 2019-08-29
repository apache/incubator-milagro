---
id: d-ta-overview
title: Decentralized Trust Authority Overview
sidebar_label: D-TA Overview
---

# Introduction
Milagro D-TA is a colaborative key management server

Milagro D-TA facilitates secure and auditable communication between someone who to use a key pair (the Principal) and service providers who can keep secret keys safe (Master Fiduciary). It is written in Go and uses REST services based on the GoKit microservices framework, it uses IPFS to create a shared immutable log of transactions and relies on Milagro-Crypto-C for it's crypto.

## Safeguarding Secrets 

In order to safeguard a secret using Milagro D-TA a minimum of two roles are required: a client (refered to as the Principal) and a server (refered to as a Master Fiduciary). In addition a third party can be nominated as the ultimate recipient of the secret (refered to as the Beneficiary). You can run a single D-TA to provide all three roles if you want to see it in action. See the [quick start guide](/docs/dta-details/quickstart) for instructions on how to do that.

This system can be imagined like a "network HSM". Here is a VERY simplified overview of the process:

![Figure 1](/img/dta/RC1-Overview-1.png)

## Milagro DTA Security
The **Seed** is the focus of the system - Milagro D-TA provides a method for Principals to communicate with Master Fiduciares who can secure their secret keys, it does not prescribe how the securing should be done. The most basic implementation of Milagro DTA should secure seeds in an HSM using a PKCS#11 interface. 

We hope that many custodial services will adopt Milagro D-TA as a communication protocol and that they will bring a profusion of security paradigms, by working together we can make a dynamic market place for custodial services and together make the Internet a safer place.

## The Milagro DTA Communication Protocol
Milagro DTA provides a secure, distributed method of communication between beneficiaries, principals and fiduciaries. It aims to solve the following problems:

1. How can actors in the system be identified and trusted?

    **Answer:** [Identity Documents](dta-details/identity-documents.md)
2. How can records of interactions between actors in the system be trusted and verified?

    **Answer:** [Encrypted Envelopes](dta-details/encrypted-envelope.md) via [IPFS](dta-details/ipfs.md)

3. How can different custodial services provide their own "special security sauce"?

    **Answer:** Plugins

A more complete view of the Milagro DTA ecosystem is shown below

![Figure 1](/img/dta/RC1.png)