---
id: d-ta-overview
title: Decentralized Trust Authority Overview
sidebar_label: D-TA Node Overview
---

# Introduction

Apache Milagro Distributed Trust Authority is a server application that enables you to generate and secure secret keys using the Milagro Cryptographic libraries. Securing of secret keys (Safeguarding)  is enabled in RC1 - and is the focus of this documentation. In future releases we aim to enable a wide range of keys to be generated including Type-3 Pairing Keys that can authorise MPIN authentication servers and can be used as client secrets.

## Safeguarding Secrets 

In order to safeguard a secret, a pair of Milagro DTA servers is required: a client (refered to as the Principal) and a server (refered to as a Fiduciary). In addition a third party can be nominated as the ultimate recipient of the secret (refered to as the Beneficiary). This system can be imagined like a "network HSM". Here is a VERY simplified overview of the process:

![Figure 1](/img/dta/RC1-Overview-1.png)

## Milagro DTA Security
The key seed is the focus of the system - Milagro DTA aims to provide a method for communicating with organisations who provide services for securing seeds (Custodians), it does not prescribe how the securing should be done. We hope that many custodial services will adopt Milagro as a communication protocol and that they will bring a proffusion of security paradigms: working together we can make the Internet a safer place. The most basic implementation of Milagro DTA should secure seeds in an HSM using a PKCS#11 interface. (We aim to publish a PKCS11 driver in a subsequent release)

## The Milagro DTA Communication Protocol
Milagro DTA provides a secure, distributed method of communication between beneficiaries, principals and fiduciaries. It aims to solve the following problems:

1. How can actors in the system be identified and trusted?

    **Answer:** [Identity Documents](dta-details/identity-documents.md)
2. How can records of interactions between actors in the system be trusted and verified?

    **Answer:** [Encrypted Envelopes](dta-details/encrypted-envelope.md) via [IPFS](dta-details/why-ipfs.md)
3. How can conditions for revealing or using secrets be specified? 

    **Answer:** Redemption Policies
4. How can different custodial services provide their own "special security sauce"?

    **Answer:** Plugins

A more complete view of the Milagro DTA ecosystem is shown below

![Figure 1](/img/dta/RC1-Ecosystem.png)