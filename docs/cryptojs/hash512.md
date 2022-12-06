---
id: hash512
title: HASH512
sidebar_label: HASH512
---
<a name="HASH512" />

## HASH512

**Kind**: global class  
**this**: <code>{"{"}HASH512{"}"}</code>  

-   [HASH512](#HASH512)
    -   [new HASH512()](#new_HASH512_new)
    -   [.init()](#HASH512+init)
    -   [.process(byt)](#HASH512+process)
    -   [.process_array(b)](#HASH512+process_array)
    -   [.process_num(n)](#HASH512+process_num)
    -   [.hash()](#HASH512+hash) ⇒

<a name="new_HASH512_new" />

### new HASH512()

Creates an instance of HASH512

<a name="HASH512+init" />

### hasH512.init()

Initialise Hash function

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**this**: <code>{"{"}HASH512{"}"}</code>  
<a name="HASH512+process" />

### hasH512.process(byt)

Process a single byte

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**this**: <code>{"{"}HASH512{"}"}</code>  

| Param | Description                 |
| ----- | --------------------------- |
| byt   | byte to be included in hash |

<a name="HASH512+process_array" />

### hasH512.process_array(b)

Process an array of bytes

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**this**: <code>{"{"}HASH512{"}"}</code>  

| Param | Description                        |
| ----- | ---------------------------------- |
| b     | byte arrray to be included in hash |

<a name="HASH512+process_num" />

### hasH512.process_num(n)

Process a 32-bit integer

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**this**: <code>{"{"}HASH512{"}"}</code>  

| Param | Description                    |
| ----- | ------------------------------ |
| n     | Integer to be included in hash |

<a name="HASH512+hash" />

### hasH512.hash() ⇒

Generate 32-byte hash

**Kind**: instance method of [<code>HASH512</code>](#HASH512)  
**Returns**: digest 32-byte hash  
**this**: <code>{"{"}HASH512{"}"}</code>  
