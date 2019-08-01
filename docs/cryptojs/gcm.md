---
id: gcm
title: GCM
sidebar_label: GCM
---

<a name="GCM"></a>

## GCM
**Kind**: global class  
**this**: <code>{GCM}</code>  

* [GCM](#GCM)
    * [new GCM()](#new_GCM_new)
    * [.init(nk, key, niv, iv)](#GCM+init)
    * [.add_header(header, len)](#GCM+add_header)
    * [.add_plain(plain, len)](#GCM+add_plain) ⇒
    * [.add_cipher(cipher, len)](#GCM+add_cipher) ⇒

<a name="new_GCM_new"></a>

### new GCM()
Creates an instance of GCM

<a name="GCM+init"></a>

### gcM.init(nk, key, niv, iv)
Initialize GCM mode

**Kind**: instance method of [<code>GCM</code>](#GCM)  
**this**: <code>{GCM}</code>  

| Param | Description |
| --- | --- |
| nk | is the key length in bytes, 16, 24 or 32 |
| key | the AES key as an array of 16 bytes |
| niv | the number of bytes in the Initialisation Vector (IV) |
| iv | the IV |

<a name="GCM+add_header"></a>

### gcM.add\_header(header, len)
Add header (material to be authenticated but not encrypted)

**Kind**: instance method of [<code>GCM</code>](#GCM)  
**this**: <code>{GCM}</code>  

| Param | Description |
| --- | --- |
| header | is the header material to be added |
| len | the number of bytes in the header |

<a name="GCM+add_plain"></a>

### gcM.add\_plain(plain, len) ⇒
Add plaintext and extract ciphertext

**Kind**: instance method of [<code>GCM</code>](#GCM)  
**Returns**: cipher is the ciphertext generated  
**this**: <code>{GCM}</code>  

| Param | Description |
| --- | --- |
| plain | is the plaintext material to be added |
| len | the number of bytes in the plaintext |

<a name="GCM+add_cipher"></a>

### gcM.add\_cipher(cipher, len) ⇒
Add Ciphertext - decrypts to plaintext

**Kind**: instance method of [<code>GCM</code>](#GCM)  
**Returns**: plain is the plaintext material generated  
**this**: <code>{GCM}</code>  

| Param | Description |
| --- | --- |
| cipher | is the ciphertext to be added |
| len | the number of bytes in the plaintext |

