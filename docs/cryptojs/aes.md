---
id: aes
title: AES
sidebar_label: AES
---

<a name="AES"></a>

## AES
**Kind**: global class  
**this**: <code>{AES}</code>  

* [AES](#AES)
    * [new AES()](#new_AES_new)
    * [.reset(m, iv)](#AES+reset)
    * [.getreg()](#AES+getreg) ⇒
    * [.init(m, n, key, iv)](#AES+init)
    * [.ecb_encrypt(buff)](#AES+ecb_encrypt)
    * [.ecb_decrypt(buff)](#AES+ecb_decrypt)
    * [.encrypt(buff)](#AES+encrypt)
    * [.decrypt(buff)](#AES+decrypt)
    * [.end()](#AES+end)

<a name="new_AES_new"></a>

### new AES()
Creates an instance of AES.

<a name="AES+reset"></a>

### aeS.reset(m, iv)
Reset AES mode or IV

**Kind**: instance method of [<code>AES</code>](#AES)  
**this**: <code>{AES}</code>  

| Param | Description |
| --- | --- |
| m | The new active mode of operation (ECB, CBC, OFB, CFB etc) |
| iv | The new Initialisation Vector |

<a name="AES+getreg"></a>

### aeS.getreg() ⇒
Reset Extract chaining vector

**Kind**: instance method of [<code>AES</code>](#AES)  
**Returns**: f the extracted chaining vector  
**this**: <code>{AES}</code>  
<a name="AES+init"></a>

### aeS.init(m, n, key, iv)
Initialise an instance of AES and its mode of operation

**Kind**: instance method of [<code>AES</code>](#AES)  
**this**: <code>{AES}</code>  

| Param | Description |
| --- | --- |
| m | is the active mode of operation (ECB, CBC, OFB, CFB etc) |
| n | is the key length in bytes, 16, 24 or 32 |
| key | the AES key as an array of 16 bytes |
| iv | the Initialisation Vector |

<a name="AES+ecb_encrypt"></a>

### aeS.ecb\_encrypt(buff)
Encrypt a single 16 byte block in ECB mode

**Kind**: instance method of [<code>AES</code>](#AES)  
**this**: <code>{AES}</code>  

| Param | Type | Description |
| --- | --- | --- |
| buff | <code>string</code> | is an array of 16 plaintext bytes, on exit becomes ciphertext |

<a name="AES+ecb_decrypt"></a>

### aeS.ecb\_decrypt(buff)
Decrypt a single 16 byte block in ECB mode

**Kind**: instance method of [<code>AES</code>](#AES)  
**this**: <code>{AES}</code>  

| Param | Description |
| --- | --- |
| buff | is an array of 16 cipherext bytes, on exit becomes plaintext |

<a name="AES+encrypt"></a>

### aeS.encrypt(buff)
Encrypt using selected mode of operation

**Kind**: instance method of [<code>AES</code>](#AES)  
**this**: <code>{AES}</code>  

| Param | Type | Description |
| --- | --- | --- |
| buff | <code>string</code> | is an array of 16 plaintext bytes, on exit becomes ciphertext |

<a name="AES+decrypt"></a>

### aeS.decrypt(buff)
Decrypt using selected mode of operation

**Kind**: instance method of [<code>AES</code>](#AES)  
**this**: <code>{AES}</code>  

| Param | Type | Description |
| --- | --- | --- |
| buff | <code>string</code> | is an array of 16 cipherext bytes, on exit becomes plaintext |

<a name="AES+end"></a>

### aeS.end()
Clean up and delete left-overs

**Kind**: instance method of [<code>AES</code>](#AES)  
**this**: <code>{AES}</code>  
