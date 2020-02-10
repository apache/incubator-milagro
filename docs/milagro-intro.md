---
id: milagro-intro
title: Milagro Introduction
sidebar_label: Milagro Introduction
---

Apache Milagro is a set of core security infrastructure and crypto libraries purpose-built for decentralized networks and distributed systems, while also providing value to cloud-connected app-centric software and IoT devices that require Internet scale.

Milagro's purpose is to provide a secure and positive open source alternative to centralized and proprietary monolithic trust providers such as commercial certificate authorities and the certificate backed cryptosystems that rely on them.

## Pairing Cryptography

Over the last decade, pairings on elliptic curves have been a very active area of research in cryptography, particularly within decentralized networks and distributed systems.

A pairing is a kind of the bilinear map defined over an elliptic curve. Examples include Weil pairing, Tate pairing, optimal Ate pairing and so on.  

Pairings map pairs of points on an elliptic curve into the multiplicative group of a finite field. Their unique properties have enabled many new cryptographic protocols that had not previously been feasible.

[Pairing-Based Cryptography (PBC)](https://en.wikipedia.org/wiki/Pairing-based_cryptography) is emerging as a solution to complex problems that proved intractable to the standard mathematics of Public-Key Cryptography such as Identity-Based Encryption (IBE), whereby the identity of a client can be used as their public key.

In certain use cases, this removes the need for a PKI infrastructure, since the main reason to issue certificates is to bind a public / private key pair to an identity - a function not required when using IBE.

Removing the certificate management burden enables the identity management and key lifecycle to take place within the decentralized cryptosystem itself.

As a result, Milagro's decentralized cryptosystem design goals seek to deliver products that are easier to scale and manage than traditional PKI, eliminate root key 'single point of compromise' weaknesses and are a seamless fit for today's decentralized networks and distributed systems.

## Pairings Go Mainstream

Pairings are key building blocks in Apache Milagro's crypto libraries and products. As examples, BLS signatures feature prominently in Milagro Decentralized Trust Authorities (D-TA), while the M-Pin protocol used in the Milagro ZKP-MFA clients and servers.

[BLS signatures](https://en.wikipedia.org/wiki/Boneh-Lynn-Shacham) are widely recognized within the cryptocurrency space for their signature aggregation abilities. BLS signatures are now going through an IETF submission review[^first] standardization process.

[^first]: [IETF BLS Signature Internet Draft](https://datatracker.ietf.org/doc/draft-boneh-bls-signature/)

The [M-Pin protocol](https://eprint.iacr.org/2002/164)[^second], which is a multi-factor authentication protocol built upon zero-knowledge proofs, is widely deployed across cloud infrastructures and in public facing deployments by the UK Government[^third]. 

[^second]: [IETF M-Pin Informational Draft](https://tools.ietf.org/html/draft-scott-mpin-00)

[^third]: [UK Government selects M-Pin protocol based authentication provider](https://www.computerweekly.com/news/4500260479/Experian-chooses-UK-authentication-startup-for-GovUK-Verify)

Zcash implements their own zero-knowledge proof algorithm named zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge)[^fourth]. zk-SNARKs is used for protecting privacy of transactions of Zcash. Pairings are a key ingredient for constructing zk-SNARKS.

[^fourth]: [Lindemann, R., "What are zk-SNARKs?", July 2018](https://z.cash/technology/zksnarks.html)

Cloudflare introduced Geo Key Manager[^fifth] to restrict distribution of customers' private keys to the subset of their data centers. To achieve this functionality, attribute-based encryption is used and pairings again are a key building block.

[^fifth]: [Geo Key Manager: How It Works](https://blog.cloudflare.com/geo-key-manager-how-it-works)

The Trusted Computing Group (TCG) specifies ECDAA (Elliptic Curve Direct Anonymous Attestation) in the specification of Trusted Platform Module[^sixth]. ECDAA is a protocol for proving the attestation held by a Trusted Platform Module (TPM) to a verifier without revealing the attestation held by that TPM. Pairing cryptography is used for constructing ECDAA. FIDO Alliance[^seventh] and W3C[^eighth] have also published ECDAA algorithms similar to TCG.

[^sixth]: [TPM 2.0 Library Specification", September 2016](https://trustedcomputinggroup.org/resource/tpm-library-specification/)

[^seventh]: [FIDO ECDAA Algorithm - FIDO Alliance Review Draft 02](https://fidoalliance.org/specs/fido-v2.0-rd-20180702/fido-ecdaa-algorithm-v2.0-rd-20180702.html)

[^eighth]: [Web Authentication: An API for accessing Public Key Credentials Level 1 - W3C Candidate Recommendation](https://www.w3.org/TR/webauthn)

In 2015, NIST [(***the 'post-NSA' NIST***)](http://www.theregister.co.uk/2014/05/26/congress_divorces_nist_from_nsa/) goes so far as to recommend standardization of pairing based cryptography in their publication, [Report on Pairing-Based Cryptography](http://nvlpubs.nist.gov/nistpubs/jres/120/jres.120.002.pdf).

> "Based on the study, the report suggests an approach for including pairing-based cryptography schemes in the NIST cryptographic toolkit. As we have seen, pairing-based cryptography has much to offer. Pairing-based schemes, such as IBE, provide special properties which cannot be provided through traditional PKI in a straightforward way. Therefore, pairing-based cryptographic schemes would make a nice addition to NIST’s cryptographic toolkit. In particular, we have focused attention on IBE. IBE simplifies key management procedures of certificate-based public key infrastructures. IBE also offers interesting features arising from the possibility of encoding additional information into a user’s identity.  It has been a decade since the first IBE schemes were proposed. These schemes have received sufficient attention from the cryptographic community and no weakness has been identified."
>
>      --- NIST, Report on Pairing-Based Cryptography

## The Move to Post-Quantum

The security of almost all public-key cryptosystems in use today rely on computational assumptions such as the Integer Factorization (IF) and Discrete Logarithm (DL) problems as the foundation of their security. These are problems that today's classical computers cannot solve. In 1994, Shor[^ninth] showed that both IF and DL problems are easy to solve on a quantum computer, based on the laws of quantum physics. As a consequence, almost all currently deployed public-key cryptosystems will become completely insecure if quantum computers become a practical reality.

[^ninth]: [Algorithms for quantum computation: discrete logarithms and factoring](https://pdfs.semanticscholar.org/6902/cb196ec032852ff31cc178ca822a5f67b2f2.pdf)

According to NIST in its Report on Post-Quantum Cryptography[^tenth], "It will take significant effort to ensure a smooth and secure migration from the current widely used cryptosystems to their quantum computing resistant counterparts. Therefore, regardless of whether we can estimate the exact time of the arrival of the quantum computing era, we must begin now to prepare our information security systems to be able to resist quantum computing."

[^tenth]: [Report on post-quantum cryptography](https://nvlpubs.nist.gov/nistpubs/ir/2016/NIST.IR.8105.pdf)

Most experts have a range of quantum computing being strong enough to crack today's cryptosystems being on the horizon anywhere from five to twenty years. It should also be stated that quantum computation only speeds up a brute-force keysearch by a factor of a square root, so any symmetric algorithm can be made secure against a quantum computer by doubling the key length, i.e., take AES from 128 bits to 256.

Milagro has begun implementing post-quantum algorithms into its code base, beginning with the Supersingular Isogeny Key Encapsulation[^eleventh] protocol. Why? 

[^eleventh]: [SIKE](https://sike.org/)

Obviously, data that is transient and that does not retain a long term value doesn't require a level of protection against a post-quantum adversary. It becomes an issue when data is retained for the long term. If data is harvested and stored, and has retained value even after decades, then it should be protected to a post-quantum degree. In short, you are protecting the data for the day _WHEN_ a working quantum computer comes online.

---

**It is hoped that Apache Milagro will become a safe, IPR free island of innovation for cryptographers interested in pairing protocols that deliver much needed core security infrastructure for the advancement of decentralized networks and distributed systems.**

**We hope you join us and become part of this journey.**

---

:::note See an error in this documentation? 
Submit a pull request on the development branch of [Milagro Website Repo](https://github.com/apache/incubator-milagro).
:::

<!--
Supported admonition types are: caution, note, important, tip, warning.
-->
