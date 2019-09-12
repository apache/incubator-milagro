---
id: encrypted-envelope
title: Encrypted Envelope
sidebar_label: Encrypted Envelope
---

The Milagro D-TA enables Principals (who require secrets to be safeguarded) to communicate with Fiduciaries who provide custodian services for those secrets. To facilitate these transactions communication between the parties must be secure i.e., must have privacy, authentication, non-repudiation and message integrity. The Milagro D-TA delivers this using its "Encrypted Envelope" messaging format.

:::tip The Milagro D-TA Encrypted Envelope format is conceptually similar to S/MIME and its cryptographic message format.
For more information about [S/MIME, click here](https://en.wikipedia.org/wiki/S/MIME).
:::

## Overview

1. The message consists of a header and body.
2. The message body is encrypted with an AES key.
3. The AES key for decrypting ciphertext is "encapsulated" i.e. encrypted using each recipient's public key.
4. The sender signs the message.
5. The message header contains a list of each recipient's encrypted version of the key.
6. The message is pushed to IPFS and the IPFS address hash is sent to the recipients.
7. The recipients verify the signature and then read the message.
7. Only recipients with the matching secret keys can decrypt the AES key and use it to read the encrypted message bodies.

![Figure 3](/img/dta/Envelope.png)

:::note Post Quantum Cryptography
At the time of writing the Milagro D-TA implements cryptographic routines from the [NIST Post-Quantum Cryptography Standardization Project](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography/Round-2-Submissions).
* [SIKE](https://sike.org/) - key encapsulation
This implementation is currently under review.
:::

:::note digital signatures
Milagro D-TAs use [BLS signatures](https://en.wikipedia.org/wiki/Boneh–Lynn–Shacham) to sign encrypted envelopes.
:::

## Multipart Messages
The Milagro D-TA's Encrypted Envelopes are designed to facilitate a dialogue between the Principal, Fiduciary and Beneficiaries. Requests and responses are appended to the original document and published back to IPFS which returns new HASH address. 

In this way, an immutable copy of each transaction is maintained, but the intended recipients can view the entire history of the transaction if they have the required decryption keys. Each message can be seen within each update, providing additional assurance and verification and reducing round trips to IPFS. 



