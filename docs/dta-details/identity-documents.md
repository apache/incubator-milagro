---
id: identity-documents
title: Identity Documents
sidebar_label: Identity Documents
---
The first problem that Milagro-DTA aims to solve is how actors in the system can identify and trust each other. In order to participate in the Milagro DTA safeguarding process each actor must publish a set of public keys into IPFS. The IPFS hash for an identity documents is then the ID for each actor.

In order to create an identity document Milagro DTA provides the following endpoint.

[POST: /identity](http://localhost:3000/swagger/index.html#/identity/createIdentity)

The document contains public keys for signing and key encapsulation. The Milagro DTA communication protocol uses protbufs for serialisation, the defitnition of an identity document is:
```
message IDDocument {
    string AuthenticationReference  = 2 ;
    bytes SikePublicKey             = 3 ;
    bytes PicnicPublicKey           = 4 ;
    string Handle                   = 5 ;
    string Email                    = 6 ;
    string Username                 = 7 ;
    int64 Timestamp                 = 8;
}
```
Authentication reference refers to Milagro's out of the box oAuth integration

The node that is used to create an identity document will store the seed and secret keys associated with the Identity. In RC1 these are store as a JSON file in the key value store:

```
//IdentitySecrets - keys required for decryption and signing
type IdentitySecrets struct {
	Name            string `json:"name"`
	Seed            string `json:"seed"`
	SikeSecretKey   string `json:"sikeSecretKey"`
	PicnicSecretKey string `json:"picnicSecretKey"`
}
```