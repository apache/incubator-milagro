---
id: ecdh
title: ECDH
sidebar_label: ECDH
---

<a name="ECDH"></a>

## ECDH
**Kind**: global class  
**this**: <code>{ECDH}</code>  

* [ECDH](#ECDH)
    * [new ECDH()](#new_ECDH_new)
    * [.inttobytes()](#ECDH.inttobytes) ⇒
    * [.bytestostring()](#ECDH.bytestostring) ⇒
    * [.stringtobytes()](#ECDH.stringtobytes) ⇒
    * [.hashit()](#ECDH.hashit) ⇒
    * [.KDF2()](#ECDH.KDF2) ⇒
    * [.PBKDF2()](#ECDH.PBKDF2) ⇒
    * [.HMAC()](#ECDH.HMAC) ⇒
    * [.AES_CBC_IV0_ENCRYPT()](#ECDH.AES_CBC_IV0_ENCRYPT) ⇒
    * [.AES_CBC_IV0_DECRYPT()](#ECDH.AES_CBC_IV0_DECRYPT) ⇒
    * [.KEY_PAIR_GENERATE()](#ECDH.KEY_PAIR_GENERATE) ⇒
    * [.PUBLIC_KEY_VALIDATE()](#ECDH.PUBLIC_KEY_VALIDATE) ⇒
    * [.ECPSVDP_DH()](#ECDH.ECPSVDP_DH) ⇒
    * [.ECPSP_DSA()](#ECDH.ECPSP_DSA) ⇒
    * [.ECPVP_DSA()](#ECDH.ECPVP_DSA) ⇒
    * [.ECIES_ENCRYPT()](#ECDH.ECIES_ENCRYPT) ⇒
    * [.ECIES_DECRYPT()](#ECDH.ECIES_DECRYPT) ⇒

<a name="new_ECDH_new"></a>

### new ECDH()
Creates an instance of ECDH

<a name="ECDH.inttobytes"></a>

### ECDH.inttobytes() ⇒
Convert Integer to n-byte array

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: byte array  
**this**: <code>{ECDH}</code>  
**Parameter**: n integer  
**Parameter**: len integer length  
<a name="ECDH.bytestostring"></a>

### ECDH.bytestostring() ⇒
Convert byte array to string

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: string  
**this**: <code>{ECDH}</code>  
**Parameter**: b byte array  
<a name="ECDH.stringtobytes"></a>

### ECDH.stringtobytes() ⇒
Convert string to byte array

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: byte array  
**this**: <code>{ECDH}</code>  
**Parameter**: s string  
<a name="ECDH.hashit"></a>

### ECDH.hashit() ⇒
general purpose hash function w=hash(B|n)

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: w output  
**this**: <code>{ECDH}</code>  
**Parameter**: sha is the hash type  
**Parameter**: A byte array involved in the hash  
**Parameter**: n integer involved in the hash  
**Parameter**: pad padding  
<a name="ECDH.KDF2"></a>

### ECDH.KDF2() ⇒
IEEE-1363 Key Derivation Function - generates key K from inputs Z and P

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: K derived key  
**this**: <code>{ECDH}</code>  
**Parameter**: sha is the hash type  
**Parameter**: Z input byte array  
**Parameter**: P input key derivation parameters - can be NULL  
**Parameter**: 0len is output desired length of key  
<a name="ECDH.PBKDF2"></a>

### ECDH.PBKDF2() ⇒
Password Based Key Derivation Function - generates key K from password, salt and repeat counter

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: key derived key  
**this**: <code>{ECDH}</code>  
**Parameter**: sha is the hash type  
**Parameter**: Pass input password  
**Parameter**: Salt salt value  
**Parameter**: rep Number of times to be iterated.  
**Parameter**: 0len is output desired length of key  
<a name="ECDH.HMAC"></a>

### ECDH.HMAC() ⇒
HMAC of message M using key K to create tag of length tag.length

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: error code  
**this**: <code>{ECDH}</code>  
**Parameter**: sha is the hash type  
**Parameter**: M input message  
**Parameter**: K input encryption key  
**Parameter**: tag is the output HMAC  
<a name="ECDH.AES_CBC_IV0_ENCRYPT"></a>

### ECDH.AES\_CBC\_IV0\_ENCRYPT() ⇒
AES encrypts a plaintext to a ciphtertext

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: C Ciphertext  
**this**: <code>{ECDH}</code>  
**Parameter**: M input message  
**Parameter**: K AES key  
<a name="ECDH.AES_CBC_IV0_DECRYPT"></a>

### ECDH.AES\_CBC\_IV0\_DECRYPT() ⇒
AES encrypts a plaintext to a ciphtertext

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: P Plaintext  
**this**: <code>{ECDH}</code>  
**Parameter**: C Ciphertext  
**Parameter**: K AES key  
<a name="ECDH.KEY_PAIR_GENERATE"></a>

### ECDH.KEY\_PAIR\_GENERATE() ⇒
Generate an ECC public/private key pair

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: 0 or an error code  
**this**: <code>{ECDH}</code>  
**Parameter**: rng Cryptographically Secure Random Number Generator  
**Parameter**: S the private key  
**Parameter**: W the output public key, which is s.G, where G is a fixed generator  
<a name="ECDH.PUBLIC_KEY_VALIDATE"></a>

### ECDH.PUBLIC\_KEY\_VALIDATE() ⇒
Generate an ECC public/private key pair

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: 0 or an error code  
**this**: <code>{ECDH}</code>  
**Parameter**: W the input public key to be validated  
<a name="ECDH.ECPSVDP_DH"></a>

### ECDH.ECPSVDP\_DH() ⇒
Generate Diffie-Hellman shared key

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: 0 or an error code  
**this**: <code>{ECDH}</code>  
**Parameter**: S the private key  
**Parameter**: W the output public key, which is s.G, where G is a fixed generator  
**Parameter**: K the output shared key, in fact the x-coordinate of s.W  
<a name="ECDH.ECPSP_DSA"></a>

### ECDH.ECPSP\_DSA() ⇒
ECDSA Signature

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: 0 or an error code  
**this**: <code>{ECDH}</code>  
**Parameter**: sha is the hash type  
**Parameter**: RNG Cryptographically Secure Random Number Generator  
**Parameter**: S the private key  
**Parameter**: F the input message to be signed  
**Parameter**: C component of the output signature  
**Parameter**: D component of the output signature  
<a name="ECDH.ECPVP_DSA"></a>

### ECDH.ECPVP\_DSA() ⇒
ECDSA Signature Verification

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: 0 or an error code  
**this**: <code>{ECDH}</code>  
**Parameter**: sha is the hash type  
**Parameter**: W the public key  
**Parameter**: F the input message to be signed  
**Parameter**: C component of the output signature  
**Parameter**: D component of the output signature  
<a name="ECDH.ECIES_ENCRYPT"></a>

### ECDH.ECIES\_ENCRYPT() ⇒
ECIES Encryption

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: C ciphertext  
**this**: <code>{ECDH}</code>  
**Parameter**: sha is the hash type  
**Parameter**: P1 input Key Derivation parameters  
**Parameter**: P2 input Encoding parameters  
**Parameter**: RNG Cryptographically Secure Random Number Generator  
**Parameter**: W the public key  
**Parameter**: M the input message to be encrypted  
**Parameter**: V component of the output ciphertext  
**Parameter**: T the output HMAC tag, part of the ciphertext  
<a name="ECDH.ECIES_DECRYPT"></a>

### ECDH.ECIES\_DECRYPT() ⇒
ECIES Encryption

**Kind**: static method of [<code>ECDH</code>](#ECDH)  
**Returns**: M plaintext  
**this**: <code>{ECDH}</code>  
**Parameter**: sha is the hash type  
**Parameter**: P1 input Key Derivation parameters  
**Parameter**: P2 input Encoding parameters  
**Parameter**: V component of the output ciphertext  
**Parameter**: C Ciphertext  
**Parameter**: T the output HMAC tag, part of the ciphertext  
**Parameter**: U the private key  
