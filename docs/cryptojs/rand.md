---
id: rand
title: RAND
sidebar_label: RAND
---

<a name="RAND"></a>

## RAND
**Kind**: global class  
**this**: <code>{RAND}</code>  

* [RAND](#RAND)
    * [new RAND()](#new_RAND_new)
    * _instance_
        * [.clean()](#RAND+clean)
        * [.sbrand()](#RAND+sbrand)
        * [.seed(rawlen, raw)](#RAND+seed)
        * [.getByte()](#RAND+getByte)
    * _static_
        * [.pack()](#RAND.pack)

<a name="new_RAND_new"></a>

### new RAND()
Creates an instance of RAND

<a name="RAND+clean"></a>

### ranD.clean()
Delete all internal state of a random number generator

**Kind**: instance method of [<code>RAND</code>](#RAND)  
**this**: <code>{RAND}</code>  
<a name="RAND+sbrand"></a>

### ranD.sbrand()
Marsaglia & Zaman random number generator

**Kind**: instance method of [<code>RAND</code>](#RAND)  
**this**: <code>{RAND}</code>  
<a name="RAND+seed"></a>

### ranD.seed(rawlen, raw)
Initialize RNG with some real entropy from some external source

**Kind**: instance method of [<code>RAND</code>](#RAND)  
**this**: <code>{RAND}</code>  

| Param | Description |
| --- | --- |
| rawlen | the number of seed bytes provided |
| raw | an array of seed bytes |

<a name="RAND+getByte"></a>

### ranD.getByte()
Get random byte

**Kind**: instance method of [<code>RAND</code>](#RAND)  
**this**: <code>{RAND}</code>  
<a name="RAND.pack"></a>

### RAND.pack()
Pack 4 bytes into a 32-bit Word

**Kind**: static method of [<code>RAND</code>](#RAND)  
**this**: <code>{RAND}</code>  
