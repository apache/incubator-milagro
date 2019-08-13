---
id: hash384
title: HASH384
sidebar_label: HASH384
---

<a name="HASH384"></a>

## HASH384
**Kind**: global class  
**this**: <code>{HASH384}</code>  

* [HASH384](#HASH384)
    * [new HASH384()](#new_HASH384_new)
    * [.init()](#HASH384+init)
    * [.process(byt)](#HASH384+process)
    * [.process_array(b)](#HASH384+process_array)
    * [.process_num(n)](#HASH384+process_num)
    * [.hash()](#HASH384+hash) ⇒

<a name="new_HASH384_new"></a>

### new HASH384()
Creates an instance of HASH384

<a name="HASH384+init"></a>

### hasH384.init()
Initialise Hash function

**Kind**: instance method of [<code>HASH384</code>](#HASH384)  
**this**: <code>{HASH384}</code>  
<a name="HASH384+process"></a>

### hasH384.process(byt)
Process a single byte

**Kind**: instance method of [<code>HASH384</code>](#HASH384)  
**this**: <code>{HASH384}</code>  

| Param | Description |
| --- | --- |
| byt | byte to be included in hash |

<a name="HASH384+process_array"></a>

### hasH384.process\_array(b)
Process an array of bytes

**Kind**: instance method of [<code>HASH384</code>](#HASH384)  
**this**: <code>{HASH384}</code>  

| Param | Description |
| --- | --- |
| b | byte arrray to be included in hash |

<a name="HASH384+process_num"></a>

### hasH384.process\_num(n)
Process a 32-bit integer

**Kind**: instance method of [<code>HASH384</code>](#HASH384)  
**this**: <code>{HASH384}</code>  

| Param | Description |
| --- | --- |
| n | Integer to be included in hash |

<a name="HASH384+hash"></a>

### hasH384.hash() ⇒
Generate 32-byte hash

**Kind**: instance method of [<code>HASH384</code>](#HASH384)  
**Returns**: digest 32-byte hash  
**this**: <code>{HASH384}</code>  
