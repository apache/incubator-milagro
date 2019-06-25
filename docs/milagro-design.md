---
id: milagro-design
title: Milagro Design
sidebar_label: Milagro Design
---
## Protocols and Technology

### Identity Based Encryption

M-Pin and Chow Choo are in the class of Identity Based Encryption protocols, which use pairings in their construction. The M-Pin Protocol is intended to replace the well-known Username/Password authentication mechanism which is widely considered to be effectively broken.

The main problem is the existence of a password file on the server, which is commonly stolen and hacked, revealing most user passwords.

The idea behind Milagro's Zero-Knowledge Proof Multi-Factor Authentication (ZKP-MFA) Server is that each registered client is issued with a secret cryptographic key derived from their identity. They then prove to the Milagro ZKP-MFA Server that they are in possession of this key using a zero-knowledge proof protocol, which can be extended to include authenticated key agreement.

This protocol design eliminates the need for any information related to clients, or their keys, to be kept on the authentication server. Should an attacker penetrate the server, it is impossible to deduct any information about end users because it doesn't exist, at least within the authentication system.

Common to both Chow-Choo and M-Pin is that the keys are issued in shares, not as whole keys, by entities called Decentralized Trust Authorities. Only the clients who receive all of the shares from the D-TA's, will ever know their completed whole keys.

Industry commentators have long advocated a multi-factor solution. The novel feature of M-Pin and Chow-Choo is that the cryptographic secrets issued to clients or peers may be safely split up into any number of independent factors.

Each of these factors has the same form; they are points on an elliptic curve. To recreate the original secret, they are simply added together again -- it's as simple as that.

One factor might be derived from a key unlocked from the biometric login (ex: FaceID) which is available as a PIN input on a successful biometric authentication. This 'biometric based' PIN is, on Apple hardware, stored in the secure element of the device (something you are). Another factor might be the remainder token securely stored in the authenticator app on a smartphone (something you have). Yet a final piece can be a PIN or passphrase (something you know), which is secure as the M-Pin client secret cannot be brute force attacked offline.

### Decentralized Identity

Milagro applications use these identity based protocols in combination with classical cryptosystems where the endpoint generates a public/private key pair and the private key never leaves the application or device.

An entity running a Milagro application attaches the public keys it has generated upon initialization to a self sovereign identity document (ID Document), that only reveals a unique account code as identifier. This ID document is signed by the Milagro and distributed over a decentralized identity system built upon IPFS[^first], so each ID Document lives on an immutable, operation-based conflict-free replicated data structure (CRDT), which is accessible to any other Milagro application.

[^first]: [IPFS](https://github.com/ipfs/ipfs)

_For further detail, please see the format specification for ID Documents._

### Encrypted Envelope

ID Documents enable messages, called Encrypted Envelopes, containing secrets to be sent between endpoints running Milagro software. This can include clients, servers and peers and Milagro ZKP-MFA Servers, ZKP-MFA clients and Decentralized Trust Authorities. The ID Documents of recipients are available to any endpoint, so their public keys can be used to secure secrets in transit. In the case of digital asset custody, these messages need to be part of a permanent record, available in a decentralized, immutable data structure (like a blockchain). Given the permanence of this data, the privacy design of these immutable records need to account for advances in quantum cryptography. 

Messages and immutable records are encrypted with AES-GCM at a 256-bit level with parameters anticipating quantum cryptography. It is necessary to know the recipient's public key, obtained via the ID Document, in order to encapsulate the encryption key for each recipient of the message or entity who has access to the Immutable Record.

SIKE keys pairs are generated locally by endpoints running Milagro software, are not received in shares from D-TAs. SIKE public keys are used by the sender of a message to encapsulate the AES 256-bit key used to create the Encrypted Envelope. An encapsulation takes place once for every recipient and is affixed to the Encrypted Envelope.

BLS signatures handle two jobs. Like SIKE key pairs, BLS signature key pairs are generated locally by endpoints running Milagro software, are not received in shares from D-TAs. The signatures these keys generate enable the non-repudiation of Encrypted Envelopes between endpoints and stored long term as immutable records. This is a classic use case of digital signatures, like PGP signatures over email.

_For further detail, please see the format specification for Encrypted Envelopes._

The other use of BLS signatures is more complex. As described previously, BLS signatures have unique properties. Milagro leverages its own Encrypted Envelope format to enable the BLS ability of splitting signing keys by with a secure mechanism to securely distribute the split BLS signing keys. When delivered securely to the right entities, these part shares of BLS signing keys themselves become signature keys. The thresholds of these signatures can be aggregated securely to produce an aggregated single signature which would have been produced by the original whole signing key prior to the original key being split. This signature can be verified by an aggregated public key.

Another capability is for a public key to be aggregated from multiple public keys in advance of aggregating signatures created by the corresponding private keys. These private keys are generated locally, and never leave the device, vs the method described previously. Signatures made from these keys can themselves be aggregated into a complete signature, verified by the aggregated public key.

These capabilities are well suited to safeguarding secrets with an example in the following section.

## Decentralized Trust Authorities: D-TA

The Milagro framework protocols rely on Decentralized Trust Authorities for two jobs: Issuing shares of secrets, or safeguarding shares of secrets.

D-TAs can issue shares, or fractions, of Type-3 Pairing private keys to Milagro Applications, such as the Milagro ZKP-MFA Servers or clients or to other D-TAs, which can be any software or hardware applications that have embedded some Milagro code in order derive the functional capabilities.

These clients or peers become the only entities that know the completed whole keys assembled from shares issued by different Decentralized Trust Authorities.

Type-3 pairings were selected as they are the most efficient pairing and will work with non-supersingular pairing-friendly curves.

These operate as \\( G_1 \\) x \\( G_2 \rightarrow G_T \\), where \\( G_2 \\) is a particular group of points, again of the order \\( q \\), but on a twisted elliptic curve defined over an extension which is a divisor of \\( k \\).

These curves can be constructed to be a near perfect fit at any required level of security. The pairing protocols within the Milagro framework all work on a Type-3 pairing.

One of the novel aspects of pairing-based cryptography is that deployed secrets are commonly represented as points on an elliptic curve, which are the result of multiplying a known point by a master secret \\( s \\).

So for example a secret might be of the form \\( sP \\), where \\( P \\) is known.

There are a number of interesting things we can do with secrets that have this form, that are not possible with the secrets that arise when using other cryptographic technologies.

For example they can be split into two, into \\( s_1P \\) and \\( s_2P \\) where \\( s=s_1+s_2 \\) and \\( sP = s_1P +s_2P \\).

In fact they can be just as easily split into multiple parts, just like chopping up a cucumber.

We can also add extra components to create a secret of the form \\( s(P_1+P_2) = sP_1+sP_2 \\).

It is the flexibility that arises from this form of the secret that allows us to introduce the idea of chopping off a tiny sliver of the secret to support a PIN number.

It also facilitates the concept of *Time Permits* as discussed in a later section.

Lastly, it enables Decentralized Trust.

### Issuing Secrets

A Trusted Authority will be in possession of a master secret \\( s \\), a random element of \\( F_q \\).

A client secret is of the form \\( s.H(ID) \\), where ID is the client identity and \\( H(.) \\) a hash function which maps to a point on \\( G_1 \\).

From prior art, we assume that \\( H \\) is modeled as a random oracle where \\( H(ID) = r_{ID}.P \\)

where \\( r_{ID} \in F_q \\) is random and \\( P \\) is a fixed generator of \\( G_1 \\).

A Milagro ZKP-MFA Server will be issued with \\( sQ \\), where \\( Q \\) is a fixed generator of \\( G_2 \\).

Note that this will be the only multiple of \\( s \\) in \\( G_2 \\) ever provided by the TA. Servers will always be associated with their own unique master secrets.

Note that the TA functionality can be trivially decentralized and distributed using a secret sharing scheme, to remove from the overall system a single point of compromise or coercion.

In the simplest possible case there may be two Decentralized Trusted Authorities (D-TAs), each of which independently maintains their own share of the master key.

So \\( s=s_1+s_2 \\), and each D-TA issues a part-client key to the client \\( s_1 H(ID) \\) and \\( s_2 H(ID) \\), which the client, after receiving the shares, adds together to form their full key.

Now even if one D-TA is compromised, the client key is still safe.

In the age of self sovereign identity, any entity can be a Decentralized Trust Authority as long as its Beneficiary trusts it to securely issue shares of secrets, or hold them for safekeeping.

### Safekeeping Secrets

A D-TA may act as a Fiduciary over secrets where it can participate in a process to enable a Beneficiary to recover the secret. Using aggregated BLS signatures in a simple example, an entity running Milagro software may engage multiple D-TAs to act as Fiduciaries over its seed value used to generate and back up a cryptocurrency HD Wallet.

As described in[^first] the first step is for each D-TA to generate a key pair by choosing \\( s k \stackrel{s}{\leftarrow} \mathbb{Z}_{q} \\) to compute:

$$ p k \leftarrow g_{2}^{s k}$$

which outputs the \\( (p k, s k) \\).

The Beneficiary would select which D-TA service providers (acting in concert) it would use to help it generate a secret. Assume a Beneficiary is also a participant in this protocol, it also runs a D-TA and acts as the designated combiner in the protocol.

[^first]: [Compact Multi-Signatures for Smaller Blockchains](https://eprint.iacr.org/2018/483)

In advance of creating the HD Wallet seed, a Beneficiary would elicit the services of Decentralized Trust Authorities to act as Fiduciaries in a decentralized secret recovery protocol. The Beneficiary's next step calculates the aggregate public key by running protocol \\( \text { KAg }\\)({\\( p k_{1}, \ldots, p k_{n} \\)}) using the D-TA's known public keys as input (who have agreed to act as Fiduciaries to this process) and also its own public key.

The Beneficiary then requests a signature \\( \sigma \\) on a message \\( m \\) from each of the D-TAs acting as Fiduciaries, including itself. For each D-TA, singing is a single round protocol.

To finalize setup, each D-TA transmits its signature \\( \sigma \\) to the Beneficiary (acting as designated combiner). The Beneficiary generates its own signature and combines it with the received D-TA signatures for the final aggregated signature of \\( \sigma \leftarrow \prod_{j=1}^{n} s_{j} \\).

The final signature is verified against the aggregated public key if the verifier function outputs 1. Assuming so, the setup completes by hashing the aggregated signature where \\( H(\tilde{\sigma}) \\) is the seed of the HD Wallet.

Assuming the Beneficiary has backed up their BLS signature key, recovering the HD Wallet seed from multiple Fiduciaries becomes as simple as re-running the setup protocol again. It is easy to envision Fiduciary services running D-TAs, responding and authenticating requests for recovering secrets.

## Summary

### Pairing and PQ Cryptography
Milagro leverages a combination of pairing and post-quantum algorithms to distribute cryptographic operations and split cryptographic parameters, providing a level of security and functionality that is a step forward in when compared to the certificate backed cryptosystems in service today. With pairing cryptography, security systems such as multi-factor authentication using zero knowledge protocols, certificate-less authenticated key agreement with perfect forward secrecy and decentralized secret recovery can be deployed in real world scenarios. AES-256 bit encryption and post-quantum key encapsulation ensure that long-lived data is safe from intrusion, even in the face of a post-quantum adversary.

### Decentralized Cryptosystem
Bitcoin's blockchain provides an alternative distributed approach to managing a currency without the need for a central bank. With bitcoin, the ledger is distributed, not centralized. Milagro's cryptosystem is decentralized to create the same advantages as a distributed ledger. While architecturally different to the blockchain, Milagro's cryptosystem and the applications built on it are compatible with and can add significant value to cryptocurrencies and other decentralized networks. 

Milagro envisions a new class of cryptographic service providers called Decentralized Trust Authorities, or D-TAs for short. The purpose of a D-TA is to independently issue shares, or fractions, of cryptographic keys to Milagro clients and servers and application endpoints which have embedded Milagro cryptographic libraries. D-TA's also operate as 'Fiduciaries', to enable their 'Beneficiaries' to recover secrets in a decentralized manner, without keeping a share of the secret itself. D-TAs operate independently from each other, are isolated in totality, and completely unaware of the existence of other D-TAs.

### No Single Point of Compromise
Milagro entities receive issued shares cryptographic keys or signatures and combine them to create the whole completed key or signature, thus becoming the only audience who possess knowledge of the entire key or signature. If D-TAs are under separate organizational controls, current root key compromises and key escrow threats inherent in PKI systems are an order of magnitude harder to achieve in a Milagro cryptosystem.  An attacker would need to subvert all independent parties.

In other words, all D-TAs used to generate shares, or fractions, of keys for Milagro clients and servers must be compromised to create the equivalent of a PKI root key compromise. All D-TAs under the threshold needed to recreate a signature would need to be compromised (including the Beneficiary) in order to generate a final signature.

---

:::note See an error in this documentation? 
Submit a pull request on the development branch of [Milagro Website Repo](https://github.com/apache/incubator-milagro).
:::

<!--
Supported admonition types are: caution, note, important, tip, warning.
-->