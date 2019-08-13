---
id: hash256
title: HASH256
sidebar_label: HASH256
---

<a name="HASH256"></a>

## HASH256
**Kind**: global class  
**this**: <code>{HASH256}</code>  

* [HASH256](#HASH256)
    * [new HASH256()](#new_HASH256_new)
    * [.init()](#HASH256+init)
    * [.process(byt)](#HASH256+process)
    * [.process_array(b)](#HASH256+process_array)
    * [.process_num(n)](#HASH256+process_num)
    * [.hash()](#HASH256+hash) ⇒

<a name="new_HASH256_new"></a>

### new HASH256()
Creates an instance of HASH256

<a name="HASH256+init"></a>

### hasH256.init()
Initialise Hash function

**Kind**: instance method of [<code>HASH256</code>](#HASH256)  
**this**: <code>{HASH256}</code>  
<a name="HASH256+process"></a>

### hasH256.process(byt)
Process a single byte

**Kind**: instance method of [<code>HASH256</code>](#HASH256)  
**this**: <code>{HASH256}</code>  

| Param | Description |
| --- | --- |
| byt | byte to be included in hash |

<a name="HASH256+process_array"></a>

### hasH256.process\_array(b)
Process an array of bytes

**Kind**: instance method of [<code>HASH256</code>](#HASH256)  
**this**: <code>{HASH256}</code>  

| Param | Description |
| --- | --- |
| b | byte arrray to be included in hash |

<a name="HASH256+process_num"></a>

### hasH256.process\_num(n)
Process a 32-bit integer

**Kind**: instance method of [<code>HASH256</code>](#HASH256)  
**this**: <code>{HASH256}</code>  

| Param | Description |
| --- | --- |
| n | Integer to be included in hash |

<a name="HASH256+hash"></a>

### hasH256.hash() ⇒
Generate 32-byte hash

**Kind**: instance method of [<code>HASH256</code>](#HASH256)  
**Returns**: digest 32-byte hash  
**this**: <code>{HASH256}</code>  
