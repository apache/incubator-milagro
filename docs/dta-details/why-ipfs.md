---
id: why-ipfs
title: Why IPFS?
sidebar_label: Why IPFS?
---

Milagro DTA aims to provide and auditable record of all interactions between actors in the system. It is vital that all the actors in the system can refer to an agreed record of these transactions in case of dispute or in response to requests from third parties such as law enforcement, audit or compliance.  Milagro creates immutable, secure and attributable records of every interaction that occurs in the lifecycle of the actors and their dealings with secrets. We do this using the Inter Planetary File System - [IPFS](https://ipfs.io/).

IPFS is a globally distributed peer-to-peer file system - think GitHub meets BitTorrent. When a file is written (SET) into your local IPFS node a hash of the document is returned, you can then GET the document using that address. If somebody else who is running an IPFS tries to GET the same hash address the file will be pulled from your node to theirs. If the document is changed in way the hash will change. In this way a immutability and peer-to-peer consensus is achieved.

:::note We appreciate feedback regarding this approach
If more complex multi-party consensus is required we could implement something like [Paxos](https://understandingpaxos.wordpress.com/), [Raft](https://raft.github.io/), [Tendermint](https://tendermint.com/)
:::
