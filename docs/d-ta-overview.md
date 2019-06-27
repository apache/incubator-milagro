---
id: d-ta-overview
title: Decentralized Trust Authority Overview
sidebar_label: D-TA Node Overview
---

## Introduction

Apache Milagro Distributed Trust Authority is a server application that enables you to generate and secure secret keys using the Milagro Cryptographic libraries. In future releases we aim to enable a wide range of keys to be generated including type 3 pairing keys that can be used to authorise MPIN authentication servers and as client secrets. Securing of keys is enabled in RC1 - and is the focus of this documentation. 

## Safeguarding Secrets 

Inorder to safeguard a secret a pair of Milagro DTA servers is required, a client (refered to as the Principal) and a server (refered to as a Fiduciary) in addition the third party can be nominated at the ultimate recipient of the secret (refered to as the Beneficiary). This can be imagined like a "network HSM". Here is a VERY simplified version of the process:

![alt text](/img/dta/Figure1.png)





:::tip WE NEED HELP DOCUMENTING!
Interested in becoming a contributor? Milagro is looking for you.
[CONTRIBUTOR'S GUIDE](/docs/contributor-guide.html).
:::

<!--
Supported admonition types are: caution, note, important, tip, warning.
-->