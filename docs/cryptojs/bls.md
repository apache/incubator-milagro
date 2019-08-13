---
id: bls
title: BLS
sidebar_label: BLS
---

<a name="BLS"></a>

## BLS
**Kind**: global class  
**this**: <code>{BLS}</code>  

* [BLS](#BLS)
    * [new BLS()](#new_BLS_new)
    * [.bytestostring()](#BLS.bytestostring) ⇒
    * [.stringtobytes()](#BLS.stringtobytes) ⇒
    * [.bls_hashit()](#BLS.bls_hashit) ⇒
    * [.KeyPairGenerate()](#BLS.KeyPairGenerate) ⇒
    * [.sign()](#BLS.sign) ⇒
    * [.verify()](#BLS.verify) ⇒
    * [.add_G1()](#BLS.add_G1) ⇒
    * [.add_G2()](#BLS.add_G2) ⇒

<a name="new_BLS_new"></a>

### new BLS()
Creates an instance of BLS

<a name="BLS.bytestostring"></a>

### BLS.bytestostring() ⇒
Convert byte array to string

**Kind**: static method of [<code>BLS</code>](#BLS)  
**Returns**: string  
**this**: <code>{BLS}</code>  
**Parameter**: b byte array  
<a name="BLS.stringtobytes"></a>

### BLS.stringtobytes() ⇒
Convert string to byte array

**Kind**: static method of [<code>BLS</code>](#BLS)  
**Returns**: byte array  
**this**: <code>{BLS}</code>  
**Parameter**: s string  
<a name="BLS.bls_hashit"></a>

### BLS.bls\_hashit() ⇒
hash a message to an ECP point, using SHA3

**Kind**: static method of [<code>BLS</code>](#BLS)  
**Returns**: ECP point  
**this**: <code>{BLS}</code>  
**Parameter**: m message to be hashedstring  
<a name="BLS.KeyPairGenerate"></a>

### BLS.KeyPairGenerate() ⇒
Generate key pair

**Kind**: static method of [<code>BLS</code>](#BLS)  
**Returns**: Error code  
**this**: <code>{BLS}</code>  
**Parameter**: rng Cryptographically Secure Random Number Generator  
**Parameter**: S Private key  
**Parameter**: W Public key  
<a name="BLS.sign"></a>

### BLS.sign() ⇒
Sign message

**Kind**: static method of [<code>BLS</code>](#BLS)  
**Returns**: Error code  
**this**: <code>{BLS}</code>  
**Parameter**: SIG Singature  
**Parameter**: m Message to sign  
**Parameter**: S Private key  
<a name="BLS.verify"></a>

### BLS.verify() ⇒
Verify message

**Kind**: static method of [<code>BLS</code>](#BLS)  
**Returns**: Error code  
**this**: <code>{BLS}</code>  
**Parameter**: SIG Signature  
**Parameter**: m Message to sign  
**Parameter**: W Public key  
<a name="BLS.add_G1"></a>

### BLS.add\_G1() ⇒
R=R1+R2 in group G1

**Kind**: static method of [<code>BLS</code>](#BLS)  
**Returns**: Error code  
**this**: <code>{BLS}</code>  
**Parameter**: R1 G1 Point  
**Parameter**: R2 G1 Point  
**Parameter**: R G1 Point  
<a name="BLS.add_G2"></a>

### BLS.add\_G2() ⇒
W=W1+W2 in group G2

**Kind**: static method of [<code>BLS</code>](#BLS)  
**Returns**: Error code  
**this**: <code>{BLS}</code>  
**Parameter**: W1 G2 Point  
**Parameter**: W2 G2 Point  
**Parameter**: R G2 Point  
