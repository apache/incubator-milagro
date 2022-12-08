---
id: milagro-crypto
title: Milagro Crypto
sidebar_label: Milagro Crypto
---
One of the critical points about information security is to give access to resources only to authorized entities and deny access to unauthorized ones.
Preventing unauthorized access very often comes down to making it **_almost impossible_**, i.e., tough, expensive, complicated, and time-consuming for the unauthorized entities to get access to resources.

The same principles apply to cryptography. In most cases, a suitable encryption mechanism satisfies at least two basic requirements:

1.  It is possible to give easy access to encrypted, cryptographically protected content to authorized entities.
2.  It is possible to make it extremely challenging for unauthorized entities to access encrypted (ditto) content.

Using the above, we can define an operation: Encryption that is tough to reverse without possessing a particular parameter, for example, a decryption key.
In RSA-based encryption two prime numbers, the private key, are multiplied to generate a public key, so that it is almost impossible to reverse the operation and retrieve the original prime numbers.

Multiple sources are available online to read more on the topic. We recommend this short paper from [Cal Berkeley at this link](https://math.berkeley.edu/~kpmann/encryption.pdf).

As noted in the mentioned paper, with RSA, we need enormous prime numbers to make it **_almost impossible_** to break the encryption, hence to find the two big prime numbers.
On elliptic curves, multiplication of a point by a number can be defined so that much shorter numbers than in the big prime number case are needed to reach the same level of **_almost impossibility_**.

## Elliptic Curve Cryptography

Elliptic curves are another way to do encryption. Elliptic curves are mathematical structures, on which operations like addition and multiplications of points are easily defined.
In particular, multiplication of a point by a number is a relatively easy operation to compute, while it is **_almost impossible_** to reverse the process, that is, to determine
the multiplier knowing the result of the multiplication.

The problem of reversing the multiplication is known as the Discrete Logarithm Problem on elliptic curves (ECDLP).
The difference in computational complexity (between performing the multiplication and reversing the result to retrieve the multiplier) is one of the essential cornerstones of elliptic curve cryptography.

## Pairing Based Cryptography

Using elliptic curves we can now define on some elliptic curve a bilinear function called a **_pairing_**, which enables a mapping from two points on the same curve (or points on two related curves) into a different mathematical structure called a finite field. The bilinearity of the pairing is the key characteristic that makes pairing interesting and widely used in cryptography.

A **_bilinear pairing_** $e$ maps a pair of points (hence the name pairing) on an elliptic curve $E$, defined over some field $F_{q}$ to an element of the multiplicative group of a finite extension of ${F}_{q^k}$.

$$ e(mA+B, nP + Q) = e(A,P)^{mn} e(B, Q) $$

The elements $P$ and $Q$ lie in two different groups, respectively $G_{1}$ and $G_{2}$. The choice of those two different group determines a different **_types_** of pairing.

Let $E$ an ordinary elliptic curve, take $G_{1} \neq G_{2}$, and if there is not an efficiently computable isomorphism $\phi:G_{1}\to G_{2}$ then the pairing is said to be of **_Type$-3$_**.

Currently, most of the state-of-the-art implementations of pairings take place on ordinary curves that assume the **_Type$-3$_** scenario for reasons of efficiency and secure implementation.

## Identity Based Encryption

Pairing-based cryptography builds on elliptic curve-based cryptography, but the extra functionality of the pairing enables us to design schemes which would otherwise be impossible to realize, or would be prohibitively expensive to do using RSA-based cryptosystems.

Identity-based encryption (IBE) is one such scheme that has received a large of amount of attention from the crypto community, and where commercially available products have been on the market for some time and are in wide use today.

IBE is similar to classical asymmetric key cryptography, in that each user has a public key for encryption and a private key for decryption. But there are many differences:

1.  IBE allows public keys to be set to the value of a pre-existing identifier, such as an email address, while in PKI the public key does not contain the notion of an identity, and the association with an identifier is created by a certificate signed by a third party (Certification Authority).
2.  Clients or individual users do not generate private keys, but must instead download them from a trusted third party known as the Trust Authority (TA).
3.  In IBE, to encrypt messages, the sender must obtain public “system parameters” from the Trust Authority (TA). These system parameters are used in combination with the intended recipient’s identity string (e.g. email address) to generate an encrypted message.

## Post-Quantum Cryptography

"Post-quantum cryptography (sometimes referred to as quantum-proof, quantum-safe or quantum-resistant) refers to cryptographic algorithms (usually public-key algorithms) that are thought to be secure against an attack by a quantum computer. As of 2018, this is not true for the most popular public-key algorithms, which can be efficiently broken by a sufficiently strong hypothetical quantum computer. 

The problem with currently popular algorithms is that their security relies on one of three hard mathematical problems: the integer factorization problem, the discrete logarithm problem or the elliptic-curve discrete logarithm problem. All of these problems can be easily solved on a sufficiently powerful quantum computer running Shor's algorithm. 

Even though current, publicly known, experimental quantum computers lack processing power to break any real cryptographic algorithm, many cryptographers are designing new algorithms to prepare for a time when quantum computing becomes a threat."[^first]

[^first]: [Wikipedia article](https://en.wikipedia.org/wiki/Post-quantum_cryptography)

## Zero Knowledge Proof

"In cryptography, a **zero-knowledge proof** or **zero-knowledge protocol** is a method by which one party (the _prover_) can prove to another party (the _verifier_) that a given statement is true, without conveying any information apart from the fact that the statement is indeed true.

If proving the statement requires knowledge of some secret information on the part of the prover, the definition implies that the verifier will not be able to prove the statement in turn to anyone else, since the verifier does not possess the secret information.

Notice that the statement being proved must include the assertion that the prover has such knowledge (otherwise, the statement would not be proved in zero-knowledge, since at the end of the protocol the verifier would gain the additional information that the prover has knowledge of the required secret information).

If the statement consists _only_ of the fact that the prover possesses the secret information, it is a special case known as _zero-knowledge proof of knowledge_, and it nicely illustrates the essence of the notion of zero-knowledge proofs: proving that one has knowledge of certain information is trivial if one is allowed to simply reveal that information; the challenge is proving that one has such knowledge without revealing the secret information or anything else."[^second]

[^second]: [Wikipedia article](https://en.wikipedia.org/wiki/Zero-knowledge_proof)

## Summary

**Elliptic curve cryptography** is an attractive alternative to conventional public key cryptography for implementation on constrained devices, where the significant computational resources i.e. speed, memory are limited and low-power wireless communication protocols is essential. It attains the same security levels as traditional cryptosystems using smaller parameter sizes.

**Pairing-based cryptography** builds on elliptic curve-based cryptography, but the extra functionality of the pairing enables us to design schemes which would otherwise be impossible to realize, or would be prohibitively expensive. Examples include identity-based encryption, group signatures and non-interactive zero-knowledge proofs.

**Identity-based encryption** doesn’t require certificates and certificate authorities. A trusted third party generates all the private keys, but all the public keys can be derived knowing the identity of the public key owner, for example, an email address.  That means that no certificate is needed to bind a public key to its owner.  Typically, it is up to the application to verify the owner possesses access to the unique identity attribute during the enrollment process in which a client obtains a private key.

**Post-quantum cryptography** Post-quantum cryptography are cryptosystems which can be run on a classical computer, but are secure even if an adversary possesses a quantum computer. For data that must be private, but has the potential to be long lived and publicly available, using post-quantum secure algorithms like AES 256-bit for encryption and SIKE for encapsulation of encryption keys is essential. 

**Zero-knowledge proof** is a method by which one party (the prover) can prove to another party (the verifier) that a given statement is true, without conveying any information apart from the fact that the statement is indeed true.

For an in-depth dive into the cryptographic protocols in use within the Milagro framework, see the next section [Milagro Protocols](/docs/milagro-protocols).

* * *

:::note See an error in this documentation? 
Submit a pull request on the development branch of [Milagro Website Repo](https://github.com/apache/incubator-milagro).
:::


Supported admonition types are: caution, note, important, tip, warning.

