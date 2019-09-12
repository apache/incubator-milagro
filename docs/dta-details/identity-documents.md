---
id: identity-documents
title: Identity Documents
sidebar_label: Identity Documents
---
The first problem that a Milagro D-TA aims to solve is how entities in the system can identify and trust each other. In order to participate in the Milagro D-TA ecosystem each entity must publish a set of public keys into IPFS. The IPFS hash for an identity documents is then the ID for each entity running a D-TA.

In order to create an identity document Milagro D-TA provides the following endpoint.

[POST: /identity](http://localhost:3000/swagger/index.html#/identity/createIdentity) - An Identity Document contains public keys for signing and key encapsulation. 

:::note The Milagro DTA communication protocol uses protobufs for serialization. 
[Click here for more information about Protocol Buffers](https://developers.google.com/protocol-buffers/).
:::

The definition of an identity document is:
```json
message IDDocument {
    string IDDocumentCID			= 2 ;
    string AuthenticationReference  = 3 ;
    string BeneficiaryECPublicKey   = 4 ;    
    string SikePublicKey            = 5 ;
	string BlsPublicKey 			= 6 ;
    int64 Timestamp                 = 7 ;
}

```

* `AuthenticationReference` refers to Milagro's out of the box [oAuth integration](authentication.md).

The node that is used to create an Identity Document will store the seed and secret keys associated with the Identity. In the RC1 release these will be stored as a JSON file in the key value store:

```json
//IdentitySecrets - keys required for decryption and signing
type IdentitySecrets struct {
	Name            string `json:"name"`
	Seed            string `json:"seed"`
	SikeSecretKey   string `json:"sikeSecretKey"`
	BlsSecretKey 	string `json:"BlsSecretKey"`
}
```