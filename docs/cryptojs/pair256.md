---
id: pair256
title: PAIR256
sidebar_label: PAIR256
---

<a name="PAIR256"></a>

## PAIR256
**Kind**: global class  
**this**: <code>{PAIR256}</code>  

* [PAIR256](#PAIR256)
    * [new PAIR256()](#new_PAIR256_new)
    * [.line()](#PAIR256.line)
    * [.initmp()](#PAIR256.initmp)
    * [.miller(r, res)](#PAIR256.miller)
    * [.another(r, P1, Q1)](#PAIR256.another)
    * [.ate(P1, Q1)](#PAIR256.ate)
    * [.ate2(P1, Q1, R1, S1)](#PAIR256.ate2)
    * [.fexp(m)](#PAIR256.fexp)
    * [.lbits()](#PAIR256.lbits)
    * [.glv()](#PAIR256.glv)
    * [.gs()](#PAIR256.gs)
    * [.G1mul(P, e)](#PAIR256.G1mul) ⇒
    * [.G2mul(P, e)](#PAIR256.G2mul) ⇒
    * [.GTpow(d, e)](#PAIR256.GTpow) ⇒

<a name="new_PAIR256_new"></a>

### new PAIR256()
Creates an instance of PAIR256

<a name="PAIR256.line"></a>

### PAIR256.line()
Line function

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  
<a name="PAIR256.initmp"></a>

### PAIR256.initmp()
prepare for multi-pairing

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  
<a name="PAIR256.miller"></a>

### PAIR256.miller(r, res)
basic Miller loop

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  

| Param | Description |
| --- | --- |
| r | FP48 precomputed array of accumulated line functions |
| res | FP48 result |

<a name="PAIR256.another"></a>

### PAIR256.another(r, P1, Q1)
Precompute line functions for n-pairing

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  

| Param | Description |
| --- | --- |
| r | array of precomputed FP48 products of line functions |
| P1 | An element of G2 |
| Q1 | An element of G1 |

<a name="PAIR256.ate"></a>

### PAIR256.ate(P1, Q1)
Calculate Miller loop for Optimal ATE pairing e(P,Q)

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  
**Result**: r An element of GT i.e. result of the pairing calculation e(P,Q)  

| Param | Description |
| --- | --- |
| P1 | An element of G2 |
| Q1 | An element of G1 |

<a name="PAIR256.ate2"></a>

### PAIR256.ate2(P1, Q1, R1, S1)
Calculate Miller loop for Optimal ATE double-pairing e(P,Q).e(R,S)

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  
**Result**: r An element of GT i.e. result of the double pairing calculation e(P,Q).e(R,S)  

| Param | Description |
| --- | --- |
| P1 | An element of G2 |
| Q1 | An element of G1 |
| R1 | An element of G2 |
| S1 | An element of G1 |

<a name="PAIR256.fexp"></a>

### PAIR256.fexp(m)
Final exponentiation of pairing, converts output of Miller loop to element in GT

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  
**Result**: r m^((p^12-1)/r) where p is modulus and r is the group order  

| Param | Description |
| --- | --- |
| m | FP48 value |

<a name="PAIR256.lbits"></a>

### PAIR256.lbits()
prepare ate parameter, n=6u+2 (BN) or n=u (BLS), n3=3*n

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  
<a name="PAIR256.glv"></a>

### PAIR256.glv()
GLV method

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  
<a name="PAIR256.gs"></a>

### PAIR256.gs()
Galbraith & Scott Method

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**this**: <code>{PAIR256}</code>  
<a name="PAIR256.G1mul"></a>

### PAIR256.G1mul(P, e) ⇒
Fast point multiplication of a member of the group G1 by a BIG number

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**Returns**: R Member of G1 R=e.P  
**this**: <code>{PAIR256}</code>  

| Param | Description |
| --- | --- |
| P | Member of G1 |
| e | BIG multiplier |

<a name="PAIR256.G2mul"></a>

### PAIR256.G2mul(P, e) ⇒
Multiply P by e in group G2

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**Returns**: R Member of G2 R=e.P  
**this**: <code>{PAIR256}</code>  

| Param | Description |
| --- | --- |
| P | Member of G2 |
| e | BIG multiplier |

<a name="PAIR256.GTpow"></a>

### PAIR256.GTpow(d, e) ⇒
Fast raising of a member of GT to a BIG power

**Kind**: static method of [<code>PAIR256</code>](#PAIR256)  
**Returns**: r d^e  
**this**: <code>{PAIR256}</code>  

| Param | Description |
| --- | --- |
| d | Member of GT |
| e | BIG exponent |

