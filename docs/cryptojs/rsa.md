---
id: rsa
title: RSA
sidebar_label: RSA
---

## Classes

<dl>
<dt><a href="#RSA">RSA</a></dt>
<dd></dd>
<dt><a href="#rsa_private_key">rsa_private_key</a></dt>
<dd></dd>
<dt><a href="#rsa_public_key">rsa_public_key</a></dt>
<dd></dd>
</dl>

<a name="RSA"></a>

## RSA
**Kind**: global class  
**this**: <code>{RSA}</code>  

* [RSA](#RSA)
    * [new RSA()](#new_RSA_new)
    * [.bytestohex(b)](#RSA.bytestohex) ⇒
    * [.bytestostring(b)](#RSA.bytestostring) ⇒
    * [.stringtobytes(s)](#RSA.stringtobytes) ⇒
    * [.hashit(sha, A, n)](#RSA.hashit) ⇒
    * [.KEY_PAIR(rng, e, PRIV, PUB)](#RSA.KEY_PAIR)
    * [.PKCS15(rng, e, PRIV, PUB)](#RSA.PKCS15) ⇒
    * [.OAEP_ENCODE(sha, m, rng, P)](#RSA.OAEP_ENCODE) ⇒
    * [.OAEP_DECODE(sha, P, f)](#RSA.OAEP_DECODE) ⇒
    * [.PRIVATE_KEY_KILL(PRIV)](#RSA.PRIVATE_KEY_KILL)
    * [.ENCRYPT(PUB, F, G)](#RSA.ENCRYPT)
    * [.DECRYPT(PRIV, G, F)](#RSA.DECRYPT)

<a name="new_RSA_new"></a>

### new RSA()
Creates an instance of RSA

<a name="RSA.bytestohex"></a>

### RSA.bytestohex(b) ⇒
Convert byte array to hex string

**Kind**: static method of [<code>RSA</code>](#RSA)  
**Returns**: s hex string  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| b | byte array |

<a name="RSA.bytestostring"></a>

### RSA.bytestostring(b) ⇒
Convert byte array to string

**Kind**: static method of [<code>RSA</code>](#RSA)  
**Returns**: s string  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| b | byte array |

<a name="RSA.stringtobytes"></a>

### RSA.stringtobytes(s) ⇒
Convert a string to byte array

**Kind**: static method of [<code>RSA</code>](#RSA)  
**Returns**: b byte array  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| s | string |

<a name="RSA.hashit"></a>

### RSA.hashit(sha, A, n) ⇒
General purpose hash function

**Kind**: static method of [<code>RSA</code>](#RSA)  
**Returns**: R hash value  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| A | byte array |
| n | Integer |

<a name="RSA.KEY_PAIR"></a>

### RSA.KEY\_PAIR(rng, e, PRIV, PUB)
RSA Key Pair Generator

**Kind**: static method of [<code>RSA</code>](#RSA)  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| rng | is a pointer to a cryptographically secure random number generator |
| e | the encryption exponent |
| PRIV | the output RSA private key |
| PUB | the output RSA public key |

<a name="RSA.PKCS15"></a>

### RSA.PKCS15(rng, e, PRIV, PUB) ⇒
PKCS V1.5 padding of a message prior to RSA signature

**Kind**: static method of [<code>RSA</code>](#RSA)  
**Returns**: true or false  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| rng | is a pointer to a cryptographically secure random number generator |
| e | the encryption exponent |
| PRIV | the output RSA private key |
| PUB | the output RSA public key |

<a name="RSA.OAEP_ENCODE"></a>

### RSA.OAEP\_ENCODE(sha, m, rng, P) ⇒
OAEP padding of a message prior to RSA encryption

**Kind**: static method of [<code>RSA</code>](#RSA)  
**Returns**: f is the output encoding, ready for RSA encryption  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| m | is the input message |
| rng | is a pointer to a cryptographically secure random number generator |
| P | are input encoding parameter string (could be NULL) |

<a name="RSA.OAEP_DECODE"></a>

### RSA.OAEP\_DECODE(sha, P, f) ⇒
OAEP unpadding of a message after RSA decryption

**Kind**: static method of [<code>RSA</code>](#RSA)  
**Returns**: r is the unpadded message  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| P | are input encoding parameter string (could be NULL) |
| f | is the padded message |

<a name="RSA.PRIVATE_KEY_KILL"></a>

### RSA.PRIVATE\_KEY\_KILL(PRIV)
Destroy an RSA private Key

**Kind**: static method of [<code>RSA</code>](#RSA)  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| PRIV | the input RSA private key. Destroyed on output. |

<a name="RSA.ENCRYPT"></a>

### RSA.ENCRYPT(PUB, F, G)
RSA encryption of suitably padded plaintext

**Kind**: static method of [<code>RSA</code>](#RSA)  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| PUB | the input RSA public key |
| F | is input padded message |
| G | is the output ciphertext |

<a name="RSA.DECRYPT"></a>

### RSA.DECRYPT(PRIV, G, F)
RSA decryption of ciphertext

**Kind**: static method of [<code>RSA</code>](#RSA)  
**this**: <code>{RSA}</code>  

| Param | Description |
| --- | --- |
| PRIV | the input RSA private key |
| G | is the input ciphertext |
| F | is output plaintext (requires unpadding) |

<a name="rsa_private_key"></a>

## rsa\_private\_key
**Kind**: global class  
**this**: <code>{rsa\_private\_key}</code>  
<a name="new_rsa_private_key_new"></a>

### new rsa\_private\_key(n)
Creates an instance of rsa_private_key


| Param | Description |
| --- | --- |
| n | FF length |

<a name="rsa_public_key"></a>

## rsa\_public\_key
**Kind**: global class  
**this**: <code>{rsa\_private\_key}</code>  
<a name="new_rsa_public_key_new"></a>

### new rsa\_public\_key(m)
Creates an instance of rsa_public_key


| Param | Description |
| --- | --- |
| m | FF length |

