---
id: pair192
title: PAIR192
sidebar_label: PAIR192
---

<a name="PAIR192"></a>

## PAIR192
**Kind**: global class  
**this**: <code>{PAIR192}</code>  

* [PAIR192](#PAIR192)
    * [new PAIR192()](#new_PAIR192_new)
    * [.line()](#PAIR192.line)
    * [.initmp()](#PAIR192.initmp)
    * [.miller(r, res)](#PAIR192.miller)
    * [.another(r, P1, Q1)](#PAIR192.another)
    * [.ate(P1, Q1)](#PAIR192.ate)
    * [.ate2(P1, Q1, R1, S1)](#PAIR192.ate2)
    * [.fexp(m)](#PAIR192.fexp)
    * [.lbits()](#PAIR192.lbits)
    * [.glv()](#PAIR192.glv)
    * [.gs()](#PAIR192.gs)
    * [.G1mul(P, e)](#PAIR192.G1mul) ⇒
    * [.G2mul(P, e)](#PAIR192.G2mul) ⇒
    * [.GTpow(d, e)](#PAIR192.GTpow) ⇒

<a name="new_PAIR192_new"></a>

### new PAIR192()
Creates an instance of PAIR192

<a name="PAIR192.line"></a>

### PAIR192.line()
Line function

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  
<a name="PAIR192.initmp"></a>

### PAIR192.initmp()
prepare for multi-pairing

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  
<a name="PAIR192.miller"></a>

### PAIR192.miller(r, res)
basic Miller loop

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  

| Param | Description |
| --- | --- |
| r | FP24 precomputed array of accumulated line functions |
| res | FP24 result |

<a name="PAIR192.another"></a>

### PAIR192.another(r, P1, Q1)
Precompute line functions for n-pairing

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  

| Param | Description |
| --- | --- |
| r | array of precomputed FP24 products of line functions |
| P1 | An element of G2 |
| Q1 | An element of G1 |

<a name="PAIR192.ate"></a>

### PAIR192.ate(P1, Q1)
Calculate Miller loop for Optimal ATE pairing e(P,Q)

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  
**Result**: r An element of GT i.e. result of the pairing calculation e(P,Q)  

| Param | Description |
| --- | --- |
| P1 | An element of G2 |
| Q1 | An element of G1 |

<a name="PAIR192.ate2"></a>

### PAIR192.ate2(P1, Q1, R1, S1)
Calculate Miller loop for Optimal ATE double-pairing e(P,Q).e(R,S)

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  
**Result**: r An element of GT i.e. result of the double pairing calculation e(P,Q).e(R,S)  

| Param | Description |
| --- | --- |
| P1 | An element of G2 |
| Q1 | An element of G1 |
| R1 | An element of G2 |
| S1 | An element of G1 |

<a name="PAIR192.fexp"></a>

### PAIR192.fexp(m)
Final exponentiation of pairing, converts output of Miller loop to element in GT

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  
**Result**: r m^((p^12-1)/r) where p is modulus and r is the group order  

| Param | Description |
| --- | --- |
| m | FP24 value |

<a name="PAIR192.lbits"></a>

### PAIR192.lbits()
prepare ate parameter, n=6u+2 (BN) or n=u (BLS), n3=3*n

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  
<a name="PAIR192.glv"></a>

### PAIR192.glv()
GLV method

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  
<a name="PAIR192.gs"></a>

### PAIR192.gs()
Galbraith & Scott Method

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**this**: <code>{PAIR192}</code>  
<a name="PAIR192.G1mul"></a>

### PAIR192.G1mul(P, e) ⇒
Fast point multiplication of a member of the group G1 by a BIG number

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**Returns**: R Member of G1 R=e.P  
**this**: <code>{PAIR192}</code>  

| Param | Description |
| --- | --- |
| P | Member of G1 |
| e | BIG multiplier |

<a name="PAIR192.G2mul"></a>

### PAIR192.G2mul(P, e) ⇒
Multiply P by e in group G2

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**Returns**: R Member of G2 R=e.P  
**this**: <code>{PAIR192}</code>  

| Param | Description |
| --- | --- |
| P | Member of G2 |
| e | BIG multiplier |

<a name="PAIR192.GTpow"></a>

### PAIR192.GTpow(d, e) ⇒
Fast raising of a member of GT to a BIG power

**Kind**: static method of [<code>PAIR192</code>](#PAIR192)  
**Returns**: r d^e  
**this**: <code>{PAIR192}</code>  

| Param | Description |
| --- | --- |
| d | Member of GT |
| e | BIG exponent |

