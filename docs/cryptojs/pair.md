---
id: pair
title: PAIR
sidebar_label: PAIR
---

<a name="PAIR"></a>

## PAIR
**Kind**: global class  
**this**: <code>{PAIR}</code>  

* [PAIR](#PAIR)
    * [new PAIR()](#new_PAIR_new)
    * [.line()](#PAIR.line)
    * [.initmp()](#PAIR.initmp)
    * [.miller(r, res)](#PAIR.miller)
    * [.another(r, P1, Q1)](#PAIR.another)
    * [.ate(P1, Q1)](#PAIR.ate)
    * [.ate2(P1, Q1, R1, S1)](#PAIR.ate2)
    * [.fexp(m)](#PAIR.fexp)
    * [.lbits()](#PAIR.lbits)
    * [.glv()](#PAIR.glv)
    * [.gs()](#PAIR.gs)
    * [.G1mul(P, e)](#PAIR.G1mul) ⇒
    * [.G2mul(P, e)](#PAIR.G2mul) ⇒
    * [.GTpow(d, e)](#PAIR.GTpow) ⇒

<a name="new_PAIR_new"></a>

### new PAIR()
Creates an instance of PAIR

<a name="PAIR.line"></a>

### PAIR.line()
Line function

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  
<a name="PAIR.initmp"></a>

### PAIR.initmp()
prepare for multi-pairing

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  
<a name="PAIR.miller"></a>

### PAIR.miller(r, res)
basic Miller loop

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  

| Param | Description |
| --- | --- |
| r | FP12 precomputed array of accumulated line functions |
| res | FP12 result |

<a name="PAIR.another"></a>

### PAIR.another(r, P1, Q1)
Precompute line functions for n-pairing

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  

| Param | Description |
| --- | --- |
| r | array of precomputed FP48 products of line functions |
| P1 | An element of G2 |
| Q1 | An element of G1 |

<a name="PAIR.ate"></a>

### PAIR.ate(P1, Q1)
Calculate Miller loop for Optimal ATE pairing e(P,Q)

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  
**Result**: r An element of GT i.e. result of the pairing calculation e(P,Q)  

| Param | Description |
| --- | --- |
| P1 | An element of G2 |
| Q1 | An element of G1 |

<a name="PAIR.ate2"></a>

### PAIR.ate2(P1, Q1, R1, S1)
Calculate Miller loop for Optimal ATE double-pairing e(P,Q).e(R,S)

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  
**Result**: r An element of GT i.e. result of the double pairing calculation e(P,Q).e(R,S)  

| Param | Description |
| --- | --- |
| P1 | An element of G2 |
| Q1 | An element of G1 |
| R1 | An element of G2 |
| S1 | An element of G1 |

<a name="PAIR.fexp"></a>

### PAIR.fexp(m)
Final exponentiation of pairing, converts output of Miller loop to element in GT

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  
**Result**: r m^((p^12-1)/r) where p is modulus and r is the group order  

| Param | Description |
| --- | --- |
| m | FP12 value |

<a name="PAIR.lbits"></a>

### PAIR.lbits()
prepare ate parameter, n=6u+2 (BN) or n=u (BLS), n3=3*n

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  
<a name="PAIR.glv"></a>

### PAIR.glv()
GLV method

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  
<a name="PAIR.gs"></a>

### PAIR.gs()
Galbraith & Scott Method

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**this**: <code>{PAIR}</code>  
<a name="PAIR.G1mul"></a>

### PAIR.G1mul(P, e) ⇒
Fast point multiplication of a member of the group G1 by a BIG number

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**Returns**: R Member of G1 R=e.P  
**this**: <code>{PAIR}</code>  

| Param | Description |
| --- | --- |
| P | Member of G1 |
| e | BIG multiplier |

<a name="PAIR.G2mul"></a>

### PAIR.G2mul(P, e) ⇒
Multiply P by e in group G2

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**Returns**: R Member of G2 R=e.P  
**this**: <code>{PAIR}</code>  

| Param | Description |
| --- | --- |
| P | Member of G2 |
| e | BIG multiplier |

<a name="PAIR.GTpow"></a>

### PAIR.GTpow(d, e) ⇒
Fast raising of a member of GT to a BIG power

**Kind**: static method of [<code>PAIR</code>](#PAIR)  
**Returns**: r d^e  
**this**: <code>{PAIR}</code>  

| Param | Description |
| --- | --- |
| d | Member of GT |
| e | BIG exponent |

