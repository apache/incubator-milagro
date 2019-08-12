---
id: hash512
title: HASH512
sidebar_label: HASH512
---

<a name="HASH512"></a>

## HASH512
**Kind**: global class  
**this**: <code>{HASH512}</code>  

* [HASH512](#HASH512)
    * [new HASH512()](#new_HASH512_new)
    * [.init()](#HASH512+init)
    * [.process(byt)](#HASH512+process)
    * [.process_array(b)](#HASH512+process_array)
    * [.process_num(n)](#HASH512+process_num)
    * [.hash()](#HASH512+hash) ⇒

<a name="new_HASH512_new"></a>

### new HASH512()
Creates an instance of HASH512

<a name="HASH512+init"></a>

### hasH512.init()
Initialise Hash function

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**this**: <code>{HASH512}</code>  
<a name="HASH512+process"></a>

### hasH512.process(byt)
Process a single byte

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**this**: <code>{HASH512}</code>  

| Param | Description |
| --- | --- |
| byt | byte to be included in hash |

<a name="HASH512+process_array"></a>

### hasH512.process\_array(b)
Process an array of bytes

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**this**: <code>{HASH512}</code>  

| Param | Description |
| --- | --- |
| b | byte arrray to be included in hash |

<a name="HASH512+process_num"></a>

### hasH512.process\_num(n)
Process a 32-bit integer

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**this**: <code>{HASH512}</code>  

| Param | Description |
| --- | --- |
| n | Integer to be included in hash |

<a name="HASH512+hash"></a>

### hasH512.hash() ⇒
Generate 32-byte hash

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**Returns**: digest 32-byte hash  
**this**: <code>{HASH512}</code>  
