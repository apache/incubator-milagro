---
id: sha3
title: SHA3
sidebar_label: SHA3
---

<a name="SHA3"></a>

## SHA3
**Kind**: global class  
**this**: <code>{SHA3}</code>  

* [SHA3](#SHA3)
    * [new SHA3(olen)](#new_SHA3_new)
    * [.init(olen)](#SHA3+init)
    * [.process()](#SHA3+process)
    * [.hash(buff)](#SHA3+hash)
    * [.shake(buff, olen)](#SHA3+shake)

<a name="new_SHA3_new"></a>

### new SHA3(olen)
Creates an instance of SHA3


| Param | Description |
| --- | --- |
| olen | output length |

<a name="SHA3+init"></a>

### shA3.init(olen)
Initialise an instance of SHA3

**Kind**: instance method of [<code>SHA3</code>](#SHA3)  
**this**: <code>{SHA3}</code>  

| Param | Description |
| --- | --- |
| olen | output length |

<a name="SHA3+process"></a>

### shA3.process()
Process a byte for SHA3

**Kind**: instance method of [<code>SHA3</code>](#SHA3)  
**this**: <code>{SHA3}</code>  
**Byt**: byte of date to be processed  
<a name="SHA3+hash"></a>

### shA3.hash(buff)
Create fixed length hash output of SHA3

**Kind**: instance method of [<code>SHA3</code>](#SHA3)  
**this**: <code>{SHA3}</code>  

| Param | Description |
| --- | --- |
| buff | byte array to store hash |

<a name="SHA3+shake"></a>

### shA3.shake(buff, olen)
Create variable length hash output of SHA3

**Kind**: instance method of [<code>SHA3</code>](#SHA3)  
**this**: <code>{SHA3}</code>  

| Param | Description |
| --- | --- |
| buff | byte array to store hash |
| olen | length of the hash |

