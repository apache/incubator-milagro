---
id: encrypted-envelope
title: Encrypted Envelope
sidebar_label: Encrypted Envelope
---

The Milagro D-TA enables Principals (who required secrets to be safeguarded) to communicate with Fiduciaries (who provide a Custodial servce). To facilitate this transaction communication between the parties must be secure i.e. can only be read by the intended recipient and attibutable i.e. can be cryptographically verified to have been signed by known actors. The Milagro D-TA provides a this mechansim using an "encrypted envelope" format.

:::tip The Milagro D-TA Encrypted Evelope format is conceptually similar to S/Mime
For more information about S/MIME[click here](https://en.wikipedia.org/wiki/S/MIME)
:::

## Overview

1. The message consists of a header and body
2. The message body can be plain text or encrypted with an aes key.
3. The aes key for decrypting cyphertext is "encapsulated" i.e. encrypted using each recipient's public key
4. The sender signs the message
5. The meassge header contains a list of each recipient's encrypted version of the key
6. The message is pushed to IPFS and the IPFS address hash is sent to the recipients
7. The recipients read the message and verify the signature
7. Only recipients with the matching secret keys can decrypt the aes key and use it to read the encrypted message bodies

![Figure 3](/img/dta/Envelope.png)

:::note Post Quantum Cryptography
At the time of writing the Milagro D-TA uses a cryptography library from the [NIST Post-Quantum Cryptography Standardisation Project](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography/Round-2-Submissions).
* [SIKE](https://sike.org/) - key encapsulation
However this are currently under review
:::

:::note digital signatures
Currently, the Milagro D-TA uses [BLS signatures](https://en.wikipedia.org/wiki/Boneh–Lynn–Shacham) to sign encrypted envelopes.
:::

## Multpart Messages
The Milagro DTA encrypted envelope is designed to facilitate a dialogue between the Principal and Fiduciary. Requests and responses are appended to the original document and published back to IPFS wich returns new HASH address. In this way an immutable copy of each transaction is maintained, but the intended recipients can view the entire history of the transaction (if they have the required decryption keys) can be seen within each update, providing additional assurance and verification and reducing round trips to IPFS. 



