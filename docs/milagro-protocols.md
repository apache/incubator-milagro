---
id: milagro-protocols
title: Milagro Protocols
sidebar_label: Milagro Protocols
---
The Apache Milagro crypto libraries contain an (almost) overwhelming choice of algorithms and cryptographic primitives for robust and rapid application development. This section focuses specifically on a few protocols that are used extensively as key building blocks within the Milagro Zero-Knowledge Proof Multi-Factor Authentication (ZKP-MFA) server and clients, and Milagro Decentralized Trust Authority (D-TA) applications. Both applications implement these protocols using the Milagro crypto libraries.

## M-Pin Protocol - Introduction

The genesis of the M-Pin Protocol was first put forward in a research paper by [Dr. Michael Scott](https://scholar.google.com/citations?user=GsM-aeEAAAAJ&hl=en) in 2002[^first].

The M-Pin Protocol has been iterated on several times over the years since, to develop three distinct modes, which will be explored in the following sections.

[^first]: [M-Pin protocol](https://eprint.iacr.org/2002/164)

 As noted in [Milagro Crypto](milagro-crypto.html), the M-Pin Protocol is of these classifications and exploits the features of:

-   Elliptic Curve Cryptography
-   Pairing Based Cryptography
-   Identity Based Encryption
-   Zero Knowledge Proof

Because of the characteristics that M-Pin inherits from the four techniques above, the M-Pin Protocol and its variants are able to deliver:

-   Multi-factor authentication (MFA) using Zero Knowledge Proof
-   Authenticated Key Agreement
-   Distribution, or splitting, of Trust Authorities
-   [Subliminal Channel Communication](https://en.wikipedia.org/wiki/Subliminal_channel)[^second]

[^second]: [The Carnac protocol -- or how to read the contents of a sealed envelope](https://eprint.iacr.org/2015/576)

The three modes of operation of the M-Pin Protocol are as follows:

-   **M-Pin 1-pass**: Client to server authentication via digital signature, this mode implements a _non-interactive_ zero knowledge proof and is resistant to [MITM (man in the middle)](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) attacks.
-   **M-Pin 2-pass**: Client to server authentication via a _interactive_ zero knowledge proof, resistant to [MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) and [KCI (Key Compromise Impersonation)](https://kcitls.org) attacks.
-   **M-Pin FULL**: Mutual client to server authentication via a _interactive_ zero knowledge proof, resistant to MITM and KCI attacks and able to drive an Authenticated [Key Agreement](https://en.wikipedia.org/wiki/Key-agreement_protocol) between client and server, resulting in 128 bit shared secret key.

Note that the M-Pin Full Authenticated Key Agreement possesses the quality of [perfect forward secrecy (PFS)](https://en.wikipedia.org/wiki/Forward_secrecy), meaning, even if the client and server long term keys are compromised, the past session keys (used to encrypt TLS traffic, for example) are not compromised.

## Chow-Choo Protocol - Introduction

The Chow-Choo Protocol was developed by Sherman S.M. Chow and Kim-Kwang Raymond Choo and published in 2007 via a research paper titled Strongly-Secure Identity-based Key Agreement[^third].  The Chow-Choo Protocol can be technically described as an identity-based key agreement protocol.

[^third]: [Strongly-Secure Identity-based Key Agreement and Anonymous Extension](https://eprint.iacr.org/2007/018.pdf)

The Chow-Choo Protocol is of these classifications and exploits the features of:

-   Elliptic Curve Cryptography
-   Pairing Based Cryptography
-   Identity Based Encryption

Because of the characteristics that Chow-Choo inherits from the three techniques above, the Chow-Choo Protocol can deliver:

-   Authenticated Key Agreement
-   Distribution, or splitting, of Trust Authorities

Note that the Chow-Choo Protocol is not a Zero Knowledge Proof protocol.

## BLS Signatures - Introduction

The BLS signature (Boneh-Lynn-Schacham) scheme[^fourth] uses a bilinear pairing for verification, and signatures are elements of an elliptic curve group. Working in an elliptic curve group provides some defense against index calculus attacks (with the caveat that such attacks are still possible in the target group \\( G\_{"{"}T{"}"} \\) of the pairing), allowing shorter signatures than other systems for similar levels of security. 

[^fourth]: [Short Signatures from the Weil Pairing](https://www.iacr.org/archive/asiacrypt2001/22480516.pdf)

BLS signatures have become the subject of much work as they are seen as being a possible way forward to solve privacy issues within cryptocurrencies through a process of signature aggregation. Apache Milagro uses signature aggregation and key splitting, and further aggregation of signatures from those split keys, as a key component of the Milagro Custody Node digital asset safekeeping protocol.

## Supersingular Isogeny Key Encapsulation - Introduction

Supersingular isogeny Diffie–Hellman key exchange (SIDH) and the key encapsulation protocol, SIKE[^fifth] \(derived from SIDH), are post-quantum cryptographic algorithms used to establish a secret key between two parties over an otherwise insecure communications channel. SIKE boasts one of the smallest key sizes of all post-quantum key encapsulations; with compression, SIKE uses 2688-bit public keys at a 128-bit quantum security level. 

[^fifth]: [Supersingular isogeny key encapsulation - NIST Submission](https://sike.org/)

SIKE also distinguishes itself from similar systems such as NTRU and Ring-LWE by supporting perfect forward secrecy, a property that prevents compromised long-term keys from compromising the confidentiality of old communication sessions. These properties make SIKE a natural candidate to replace Diffie–Hellman (DHE and elliptic curve Diffie–Hellman (ECDHE), which are widely used in Internet communication.

Since it is the only post-quantum cryptography protocol which is constructed on elliptic curves, hybrid cryptography protocols can be derived from SIKE and classical elliptic curve cryptography (ECC) to make the transition towards post-quantum cryptography more convenient and practical.

Milagro Custody Node implements SIKE for key encapsulation within Milagro's encrypted envelope format.

* * *

| Protocols                                                   | Use Cases                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| M-Pin 1-Pass                                                | Digital signature authentication in battery or bandwidth constrained environments such as IoT devices, embedded applications and mobile apps. <br />This should be considered the default implementation for client to server authentication suitable for almost all use cases.                                                                                                              |
| M-Pin 1-Pass + <br />M-Pin 2-Pass                             | Digital signature and client to server authentication in smartphones apps, desktop browsers and software applications.                                                                                                                                                                                                                                                                     |
| M-Pin 2-Pass                                                | Client to server authentication in smartphone apps, desktop browsers and software applications.                                                                                                                                                                                                                                                                                            |
| M-Pin FULL                                                  | Mutual client and server authentication with authenticated key agreement for use in smartphone apps, hardware and software applications. <br />Authenticated Key Agreement with PFS can be used as the basis for TLS sessions between clients and servers.                                                                                                                                   |
| Chow-Choo                                                   | Mutual peer to peer authentication with authenticated key agreement for use in smartphone apps, hardware and software applications. <br />Authenticated Key Agreement with PFS can be used as the basis for TLS sessions between clients and servers and peer to peer.                                                                                                                       |
| BLS Signing + <br />Key Splitting + <br />Signature Aggregation | A simple approach for splitting keys and aggregating many BLS signatures (from the shares of keys acting as signing keys) on a common message. Public keys are not needed for verifying the multi-signature. <br />An important property of the construction is that the scheme is secure against a rogue public-key attack without requiring users to prove knowledge of their secret keys. |
| SIKE (Key Encapsulation)                                    | SIKE is a family of post-quantum key encapsulation mechanisms based on the Supersingular Isogeny Diffie-Hellman (SIDH) key exchange protocol. <br />The algorithms use arithmetic operations on elliptic curves defined over finite fields and compute maps, so-called isogenies, between such curves. <br />SIKE can also delivery perfect forward secrecy.                                   |

* * *

## Protocols In Depth

### M-Pin 1-Pass

As opposed to Chow-Choo, which can be used in a client to server as well as a peer to peer setting, M-Pin is strictly a client-server protocol.

To embellish the security of the client-server protocol, it is important that client and server secrets should be kept distinct.

A simple way to do this is to exploit the structure of a Type-3 pairing and put client secrets in \\( G_1 \\) and the server secret in \\( G_2 \\) as previously noted in the preceding section.

For a Type-3 pairing there is assumed to be no computable isomorphism between these groups, even though both are of the same order.

In the original implementation, the client was supplied with a challenge by the server as part of the second step within the protocol, after the first step whereby the client announced her identity to the server.

In a later proposal, it was realised that an M-Pin 1-Pass Protocol could be obtained if the client itself derived the challenge as \\( y \\) as \\( y=H(U|T) \\) where \\( T \\) is a time-stamp transmitted by the Client along her claimed identity, \\( U \\) and \\( V \\).

The protocol could then be reduced in an obvious way to a secure 1-pass protocol. However, this assumes that the Server checks the accuracy of the time-stamp before completing the protocol.

This all works thanks to the pairing function \\( e(.,.) \\) and its remarkable bilinearity property \\( e(aP,Q) = e(P,aQ) = e(P,Q)^{"{"}a{"}"} \\).

* * *

|              Alice - identity \\( ID_a \\)              |                   Server                   |
| :-----------------------------------------------------: | :----------------------------------------: |
|             Generates random \\( x&lt;q \\)             |                                            |
|                    \\( A=H(ID_a) \\)                    |                                            |
|                      \\( U=x{"{"}A{"}"} \\)                     |                                            |
|                \\( ID_a \\), \\( U\~~ \\)               |                                            |
|               \\( y=H(U \\) \| \\( T) \\)               |                                            |
| \\( V=-(x+y){"{"}((s-\\alpha)A+\\alpha A){"}"} \\rightarrow \\) |                                            |
|                                                         |              \\( A=H(ID_a) \\)             |
|                                                         |         \\( g=e(V,Q).e(U+yA,sQ) \\)        |
|                                                         | if \\( g \\ne 1 \\), reject the connection |

<figure>
  <strong>Figure 1.</strong> M-Pin 1-Pass
</figure>
---

### M-Pin 2-Pass

As you can see below in Fig 2., M-Pin in the two pass operation operates in a challenge (from the Server) to client, who responds to challenge. This implementation obviates the any risk of Key Compromise Impersonation attack vector, at the cost of of a full roundtrip.

* * *

|              Alice - identity \\( ID_a \\)              |                   Server                   |
| :-----------------------------------------------------: | :----------------------------------------: |
|             Generates random \\( x&lt;q \\)             |       Generates random \\( y&lt;q \\)      |
|                    \\( A=H(ID_a) \\)                    |                                            |
|                      \\( U=x{"{"}A{"}"} \\)                     |                                            |
|            \\( ID_a$, $U\~~ \\rightarrow  \\)           |                                            |
|                                                         |            \\( \\leftarrow y \\)           |
| \\( V=-(x+y){"{"}((s-\\alpha)A+\\alpha A){"}"} \\rightarrow \\) |                                            |
|                                                         |              \\( A=H(ID_a) \\)             |
|                                                         |         \\( g=e(V,Q).e(U+yA,sQ) \\)        |
|                                                         | if \\( g \\ne 1 \\), reject the connection |

<figure>
  <strong>Figure 2.</strong> M-Pin 2-Pass
</figure>
---

### M-Pin FULL

This more elaborate protocol not only replaces Username/Password, but replaces the functionality of digital certificates being utilised to drive key agreement for TLS or VPN protocols as well.

Our starting point is the M-Pin protocol as described above.

The idea is to run it first (to authenticate the client to the server), and then proceed to authenticate the server to the client via an authenticated key exchange, which also establishes the agreed key of 128 bits.

The first thing to note is that both the client and the server can already calculate a mutual authenticated encryption key!

This protocol requires another general hash function \\( H_g(.) \\) which serializes, and hashes its input to a 256-bit value. Both sides can then extract a key from this value \\( K \\).

It is left as a simple exercise for the reader to confirm that both client and server end up with the same key.

Note that since the first part of the protocol is just the original M-Pin protocol, all of its features and extensions still apply.

* * *

|                Alice - identity \\( ID_a \\)                |                    Server                    |
| :---------------------------------------------------------: | :------------------------------------------: |
|               Generates random \\( x&lt;q \\)               |        Generates random \\( y&lt;q \\)       |
|                      \\( A=H(ID_a) \\)                      |                                              |
|                        \\( U=x{"{"}A{"}"} \\)                       |                                              |
|              \\( ID_a$, $U\~~ \\rightarrow  \\)             |                                              |
|                                                             |             \\( \\leftarrow y \\)            |
|   \\( V=-(x+y){"{"}((s-\\alpha)A+\\alpha A){"}"} \\rightarrow \\)   |                                              |
|                                                             |               \\( A=H(ID_a) \\)              |
|                                                             |          \\( g=e(V,Q).e(U+yA,sQ) \\)         |
|                                                             |  if \\( g \\ne 1 \\), reject the connection  |
|                 \\( R=r{"{"}A{"}"} \\rightarrow \\)                 |          \\( \\leftarrow W=w{"{"}A{"}"} \\)          |
|                   \\( h=H(A,U,y,V,R,W) \\)                  |           \\( h=H(A,U,y,V,R,W) \\)           |
| \\( K=H_g((g_1.{"{"}g_2{"}"}^\\alpha)^{"{"}r+h{"}"} \\ \\) \| \\( x{"{"}W{"}"}) \\) | \\( K=H_g(e(R+hA,sQ) \\ \\) \| \\( w{"{"}U{"}"}) \\) |

<figure>
  <strong>Figure 3.</strong> M-Pin FULL
</figure>

* * *

Note that the transmission of \\( R \\) from the client to the server can be done at the same time as \\( V \\) is transmitted, and the transmission of \\( W \\) from the server to the client can be done at the same time as  \\( y \\) is transmitted, to avoid introducing any extra flows into the protocol.

### Chow-Choo Protocol

As initially proposed, the Chow-Choo Protocol was based on a type-1 pairing. Note that in the Milagro framework, the Chow-Choo Protocol is made to work in a Type-3 setting.

Pairings are usually written as functions of the form \\( g=e(A,B) \\), where \\( A \\in G_1 \\), \\( g \\in G_T \\), and for a Type-1 pairing \\( B \\in G_1 \\) and for Type-3 \\( B \\in G_2 \\).

Consider now an application of this protocol to an imagined Internet of Things (IoT) setting.

Each 'Thing' is issued with a serial number and its own Chow-Choo key (which can double as an M-Pin Key) based on that serial number as an identity.

These keys may be embedded at the time of manufacture, by the manufacturer acting as a naturally trusted authority.

When a Thing needs to communicate with another Thing, an action which requires knowing only the identity of the other, both parties can activate the Chow-Choo Protocol to calculate the same key to encrypt their communication.

For both sending and receiving, Alice is issued with \\( sA_1 \\) and \\( sA_2 \\), where \\( A_1=H_1 \\) and \\( A_2=H_2 \\) both in the \\( ID = Alice \\).

Similarly Bob is issued with \\( sB_1 \\) and \\( sB_2 \\). Now if Alice initiates and Bob responds, Alice calculates the key as \\( e(sA_1,B_2) \\) and Bob can calculate the same key as \\( e(A_1,sB_2) \\), where by convention the initiator uses their _sender_ key and the responder uses their _receiver_ key.

One thing we can exploit -- in any communication context there is an initiator and a responder, or a _sender_ and _receiver_, if you will.

In the above example, Alice and Bob both were issued _sender_ and _receiver_ keys respectively, as this describes where they can appear in the pairing.

An obvious advantage is to issue each Thing with two keys, one in \\( G_1 \\) and the other in \\( G_2 \\), **if** the Thing is approved to send and receive.

However, the capability exists to cryptographically bound Things to only receiving information, or only sending information, based upon whether or not a Thing has been issued a sender and / or a receiver key.

This capability is exploited in the Milagro framework to enable peer to peer authenticated key agreement.

* * *

- This is the Chow Choo protocol in a Mathml table / frame because redering in Math LaTex equations exposes a bug in MathJax. It's just one equation that has this bug!  -

<figure>
	
	<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
			mtable
			
		
			
				
			
			
				
					
						
							SENDER
						
						
							RECEIVER
						
					
					
						
							x
							∈
							
								ℤ
								q
								*
							
						
						
						
					
					
						
							A
							G
							1
							:
							=
							
								H
								1
							
							
								(
								I
								ⅆ
								A
								)
							
						
						
						
					
					
						
							P
							a
							
								G
								1
							
							:
							=
							x
							⋅
							A
							
								G
								1
							
						
						
						
					
					
						
							I
							ⅆ
							A
							,
							P
							a
							
								G
								1
							
							⟶
						
						
						
					
					
						
						
						
							y
							,
							w
							∈
							
								ℤ
								q
								*
							
						
					
					
						
						
						
							A
							
								G
								1
							
							:
							=
							
								H
								1
							
							
								(
								I
								ⅆ
								A
								)
							
						
					
					
						
						
						
							B
							
								G
								2
							
							:
							=
							
								H
								2
							
							
								(
								I
								ⅆ
								B
								)
							
						
					
					
						
						
						
							P
							b
							
								G
								2
							
							:
							=
							y
							⋅
							B
							
								G
								2
							
						
					
					
						
						
						
							P
							g
							
								G
								1
							
							:
							=
							w
							⋅
							A
							
								G
								1
							
						
					
					
						
						
						
							pia
							:
							=
							
								H
								q
							
							
								(
								P
								a
								
									G
									1
								
								‖
								P
								b
								
									G
									2
								
								‖
								P
								g
								
									G
									1
								
								‖
								I
								ⅆ
								B
								)
							
						
					
					
						
						
						
							pib
							:
							=
							
								H
								q
							
							
								(
								P
								b
								
									G
									2
								
								‖
								P
								a
								
									G
									1
								
								‖
								P
								g
								
									G
									1
								
								‖
								I
								ⅆ
								A
								)
							
						
					
					
						
						
						
							k
							:
							=
							e
							
								(
								pia
								⋅
								A
								
									G
									1
								
								+
								P
								a
								
									G
									1
								
								,
								(
								y
								+
								pib
								)
								⋯
								⋅
								B
								
									G
									2
								
								)
							
						
					
					
						
						
						
							K
							:
							=
							H
							
								(
								k
								,
								w
								⋅
								P
								a
								
									G
									1
								
								)
							
						
					
					
						
						
						
							⟵
							I
							ⅆ
							B
							,
							P
							g
							
								G
								1
							
							,
							P
							b
							
								G
								2
							
						
					
					
						
							B
							
								G
								2
							
							:
							=
							
								H
								2
							
							
								(
								I
								ⅆ
								B
								)
							
						
						
						
					
					
						
							pia
							:
							=
							
								H
								q
							
							
								(
								P
								a
								
									G
									1
								
								‖
								P
								b
								
									G
									2
								
								‖
								P
								g
								
									G
									1
								
								‖
								I
								ⅆ
								B
								)
							
						
						
						
					
					
						
							pib
							:
							=
							
								H
								q
							
							
								(
								P
								b
								
									G
									2
								
								‖
								P
								a
								
									G
									1
								
								‖
								P
								g
								
									G
									1
								
								‖
								I
								ⅆ
								A
								)
							
						
						
						
					
					
						
							k
							:
							=
							e
							
								(
								(
								x
								+
								p
								i
								a
								)
								⋯
								⋅
								A
								
									G
									1
								
								,
								pib
								⋅
								B
								
									G
									2
								
								+
								P
								b
								
									G
									2
								
								)
							
						
						
						
					
					
						
							K
							:
							=
							H
							
								(
								k
								,
								x
								⋅
								P
								g
								
									G
									1
								
								)
							
						
						
						
					
				
			
		
	
	</math>
	
</figure>
<figure>
  <strong>Figure 4.</strong> Chow-Choo Protocol
</figure>

* * *

**Notes on Chow-Choo Protocol:**

-   \\( G_1 \\): a \\( r \\)-order cyclic subgroup of \\( E(F_p) \\).
-   \\( G_2 \\): a subgroup of \\( E(F_{"{"}p^k{"}"}) \\), where \\( k \\) is the embedding degree of the Curve.
-   \\( H1 \\): Maps string value to a point on the curve in \\( G_1 \\).
-   \\( H2 \\): Maps string value to a point on the curve in \\( G_2 \\).
-   \\( Hq \\): Hashes inputs to an integer modulo the curve order \\( q \\).When run in the simple SIDH 
-   H(): Hash function.
-   \\( || \\): denotes the concatenation of messages.

* * *

### Secret Revocation

We introduce Time Permits to handle the revocation issue. Normally in Identity-Based Encryption the problem of client revocation is solved by date-stamping identities so that the private key issued for an identity becomes useless once the time period expires. Now a new private key must be issued, and we will simply not issue one to a revoked client.

Milagro achieves a much more immediate revocation capability through the use of Time Permits. The D-TA that is controlled by the application owner is envisioned to be the controlling D-TA to issue Time Permits at the point where a client needs to authenticate to a server, or create an authenticated key agreement between client and server or peer to peer.

The idea is that the server includes an explicitly described time slot in its construction of Alice's hashed identity. Unless Alice has a corresponding "Time permit" for the same time slot, she cannot complete the protocol.

In the protocol above we instead calculate \\( H(ID_a) + H_T(T_i|ID_a) \\) on both sides of the protocol where \\( T_i \\) is a textual description of the \\( i \\)-th time slot and \\( H_T(.) \\) is a hash function distinct from \\( H(.) \\).

For the protocol to work correctly Alice must be issued by the Trusted Authority with a permit \\( s.H_T(T_i|ID_a) \\) which gets added to her combined PIN-plus-token secret \\( s.H(ID_a) \\).

Observe that the permit is of no use to any other party, and hence can be issued publicly, uploaded to a public cloud data store (AWS S3), or delivered via the server directly.

A proof of security for this idea in the context of Boneh and Franklin IBE can be found in Tseng[^ninth] et al.

[^ninth]: [A brief review of revocable ID-based public key cryptosystem](https://reader.elsevier.com/reader/sd/pii/S2213020915000592?token=5C2E08C17803B9549FB79F3A91A1ED2382360D3E840087C8C065BD06EFCABB55C4A5A300566388A2920786DCC63E631E)

* * *

### BLS Subgroup Multi-Signatures

Dan Boneh, Ben Lynn and Hovav Schacham introduced their paper entitled "Short Signatures from the Weil Pairing" in 2001[^fourth]. The paper described a short signature scheme based on the computational Diffie-Hellman assumption on certain elliptic and hyper-elliptic curves. 

In a simple instantiation, given a secret key \\( sk \\), a public key \\( p k=g^{"{"}S k{"}"} \\), a message \\( m \\), a hashing-into-the-curve function \\( H \\), and a bilinear pairing \\( e \\):

-   Key Generation: \\( sk \\) is a random integer over the field, \\( p k=g^{"{"}S k{"}"} \\)
-   Signature: \\( S=H(m)^{"{"}s k{"}"} \\)
-   Verify: \\( e(H(m), p k)=e(S, g) \\)

Biliniarity is on display as the signature 

$$ \\begin{"{"}array{"}"}{"{"}c{"}"}{"{"}e(H(m), p k)=e\\left(H(m), g^{"{"}s k{"}"}\\right)=e(H(m), g)^{"{"}s k{"}"}={"}"} \\ {"{"}=e\\left(H(m)^{"{"}s k{"}"}, g\\right)=e(S, g){"}"}\\end{"{"}array{"}"} $$

but is also unique and deterministic, something missing from ECDSA. 

In June of 2018 Dan Boneh, Manu Drijvers and Gregory Neven released research that constructs the first practical, short accountable-subgroup multi-signature (ASM) scheme based on BLS signatures[^sixth].

[^sixth]: [Compact Multi-Signatures for Smaller Blockchains](https://eprint.iacr.org/2018/483)

An ASM scheme enables any subset \\( S \\) of a set of \\( n \\) parties to sign a message \\( m \\) so that a valid signature discloses which subset generated the signature (hence the subset \\( S \\) is accountable for signing \\( m \\)).

In addition to the ASM scheme, Milagro exploits a unique property of BLS signatures: Signing Keys can be split using Shamir's Secret Sharing[^seventh] in which the 'shares' of the keys, when distributed to signers, themselves become signing keys. By using a 'key splitter' and 'signature aggregator' role who also performs the Shamir Secret Sharing (SSS) dealer function, several benefits emerge.

Thresholds can be set on the distribution of key shares just as in a normal SSS routine. So once the shares of the original signing key are distributed, the original signing key can be securely deleted, and is never re-created again. Instead, signatures derived from the shares of the original signing key are created. Again, the properties of BLS enable these shares of signature keys to be themselves used a signature keys. The object of the exercise is for the signature aggregator, who is collecting the signatures created from these shares, to complete the threshold and achieve the signature that the original signature would have created, which can be validated by its original public key component.

In other words, if the aggregator takes m-of-n of these signature shares, and perform the same polynomial interpolation as one would usually do with the secret shares, you’ll recover a complete signature which is identical to what would have been created if the original complete private key would have been used.

[^seventh]: [How to Share a Secret](https://cs.jhu.edu/~sdoshi/crypto/papers/shamirturing.pdf)

In this context, signing is a single round protocol and is non-interactive.

* * *

### Supersingular Isogeny Key Encapsulation (SIKE)

A key encapsulation mechanism (KEM) is a set of three algorithms.

-   key generation (KeyGen)
-   encapsulation (Encaps)
-   decapsulation (Decaps)

and a defined key space, where

-   KeyGen(): returns a public and a secret key \\( (pk, sk) \\).
-   Encaps\\( (pk) \\): takes pk as input and outputs ciphertext \\( c \\) and a key \\( K \\) from the key space.
-   Decaps\\( (sk, c) \\): takes \\( sk \\) and \\( c \\) as input, and returns a key \\( K \\) or ERROR. \\( K \\) is called the session key.

SIKE uses Hofheinz transformation on SIDH to achieve CCA security. Let \\( p=2^{"{"}e_{"{"}A{"}"}{"}"} 3^{"{"}e_{"{"}3{"}"}{"}"}-1 \\), and let \\( E \\) be a supersingular elliptic curve defined over a field of characteristic \\( p \\). \\( E \\) can also be defined over \\( \\mathbb{"{"}F{"}"}\_{"{"}p^{"{"}2{"}"}{"}"} \\) up to its isomorphism. An isogeny \\( \\phi : E \\rightarrow E^{"{"}\\prime{"}"} \\) is a non-constant map from \\( E \\) to \\( E^{"{"}\\prime{"}"} \\) which translates the identity into the identity. 

An isogeny map is defined by its degree and kernel. The degree of an isogeny is its degree as morphism. An isogeny with degree \\( \\ell \\) map is called \\( \\ell \\)-isogeny. Let \\( G \\) be a subgroup of points on \\( E \\) which contains \\( \\ell \\) + 1 cyclic subgroups of order \\( \\ell \\). This subgroup is the torsion group \\( E[\ell] \\) and each element of this group is corresponding to an isogeny of degree \\( \\ell \\); accordingly, an isogeny also can be identified by \\( G \\), i.e., the kernel of isogeny.

This section provides a brief presentation of the SIKE protocol. We refer readers to [^eighth] and [^fifth] for more detailed explanation of the supersignular isogeny problem and the base key-exchange protocol which the SIKE is constructed upon.

## [^eighth]: [Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies](https://eprint.iacr.org/2011/506.pdf)

:::note See an error in this documentation? 
Submit a pull request on the development branch of [Milagro Website Repo](https://github.com/apache/incubator-milagro).
:::


Supported admonition types are: caution, note, important, tip, warning.

