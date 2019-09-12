---
id: ipfs
title: IPFS
sidebar_label: IPFS
---

The Milagro D-TA aims to provide an auditable record of all interactions between actors in the system. It is vital that all the actors in the system can refer to an agreed record of these transactions in case of dispute or in response to requests from third parties such as law enforcement, audit or compliance organizations.  The Milagro D-TA creates immutable, secure and attributable records of every interaction that occurs in the lifecycle of entities and their dealings with secrets. We do this using the Inter Planetary File System - [IPFS](https://ipfs.io/).

IPFS is a globally distributed peer-to-peer file system - think GitHub meets BitTorrent. When a file is written (SET) into your local IPFS node a hash of the document is returned, you can then GET the document using that address. If somebody else who is running an IPFS tries to GET the same hash address the file will be pulled from your node to theirs. If the document is changed in way the hash will change. In this way, an immutability and peer-to-peer consensus is achieved.

:::note We appreciate feedback regarding this approach.
For more complex consensus requirements, the Milagro D-TA will be implementing [Tendermint](https://tendermint.com/) in following releases.
:::
