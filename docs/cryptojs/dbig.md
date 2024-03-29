---
id: dbig
title: DBIG
sidebar_label: DBIG
---
<a name="DBIG" />

## DBIG

**Kind**: global class  
**this**: <code>{"{"}DBIG{"}"}</code>  

-   [DBIG](#DBIG)
    -   [new DBIG()](#new_DBIG_new)
    -   _instance_
        -   [.zero()](#DBIG+zero) ⇒
        -   [.copy()](#DBIG+copy) ⇒
        -   [.hcopy()](#DBIG+hcopy) ⇒
        -   [.norm()](#DBIG+norm) ⇒
        -   [.muladd()](#DBIG+muladd)
        -   [.shr()](#DBIG+shr) ⇒
        -   [.shl()](#DBIG+shl) ⇒
        -   [.cmove()](#DBIG+cmove)
        -   [.add()](#DBIG+add) ⇒
        -   [.sub()](#DBIG+sub) ⇒
        -   [.nbits()](#DBIG+nbits) ⇒
        -   [.toString()](#DBIG+toString) ⇒
        -   [.mod()](#DBIG+mod) ⇒
        -   [.div()](#DBIG+div) ⇒
        -   [.split()](#DBIG+split) ⇒
    -   _static_
        -   [.comp()](#DBIG.comp) ⇒

<a name="new_DBIG_new" />

### new DBIG()

General purpose Constructor

<a name="DBIG+zero" />

### dbiG.zero() ⇒

set to zero

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: BIG number  
**this**: <code>{"{"}DBIG{"}"}</code>  
<a name="DBIG+copy" />

### dbiG.copy() ⇒

set to b

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: DBIG number  
**this**: <code>{"{"}DBIG{"}"}</code>  
**Parameter**: b DBIG number  
<a name="DBIG+hcopy" />

### dbiG.hcopy() ⇒

copy from ctx.BIG

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: DBIG number  
**this**: <code>{"{"}DBIG{"}"}</code>  
**Parameter**: b BIG number  
<a name="DBIG+norm" />

### dbiG.norm() ⇒

normalise DBIG - force all digits &lt; 2^BASEBITS

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: DBIG number  
**this**: <code>{"{"}DBIG{"}"}</code>  
<a name="DBIG+muladd" />

### dbiG.muladd()

this[i]+=x\*y+c, and return high part

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**this**: <code>{"{"}DBIG{"}"}</code>  
<a name="DBIG+shr" />

### dbiG.shr() ⇒

General shift right by k bits

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: BIG number  
**this**: <code>{"{"}DBIG{"}"}</code>  
**Parameter**: k Number of bits to shift  
<a name="DBIG+shl" />

### dbiG.shl() ⇒

General shift left by k bits

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: k Number of bits to shift  
<a name="DBIG+cmove" />

### dbiG.cmove()

Conditional move of BIG depending on d using XOR - no branches

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**this**: <code>{"{"}DBIG{"}"}</code>  
**Parameter**: b DBIG number  
**Parameter**: d DBIG number  
<a name="DBIG+add" />

### dbiG.add() ⇒

Sum two DBIG mumbers

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: this+=x  
**this**: <code>{"{"}DBIG{"}"}</code>  
**Parameter**: x DBIG object  
<a name="DBIG+sub" />

### dbiG.sub() ⇒

Subtract DBIG from one another

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: this-=x  
**this**: <code>{"{"}DBIG{"}"}</code>  
**Parameter**: x BIG object  
<a name="DBIG+nbits" />

### dbiG.nbits() ⇒

length in bits

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: The number of bigs in DBIG object  
**this**: <code>{"{"}DBIG{"}"}</code>  
<a name="DBIG+toString" />

### dbiG.toString() ⇒

Convert to string

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: string representation of a BIG number  
**this**: <code>{"{"}DBIG{"}"}</code>  
<a name="DBIG+mod" />

### dbiG.mod() ⇒

reduces this DBIG mod a ctx.BIG, and returns the ctx.BIG

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: BIG object  
**this**: <code>{"{"}DBIG{"}"}</code>  
<a name="DBIG+div" />

### dbiG.div() ⇒

this/=c

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: DBIG number  
**this**: <code>{"{"}DBIG{"}"}</code>  
**Paramter**: c divisor  
<a name="DBIG+split" />

### dbiG.split() ⇒

split this DBIG at position n, return higher half, keep lower half

**Kind**: instance method of [<code>DBIG</code>](#DBIG)  
**Returns**: lower half BIG number  
**this**: <code>{"{"}DBIG{"}"}</code>  
**Paramter**: n Position to splitdivisor  
<a name="DBIG.comp" />

### DBIG.comp() ⇒

Compare a and b

**Kind**: static method of [<code>DBIG</code>](#DBIG)  
**Returns**: 0 if a==b, -1 if a&lt;b, +1 if a&gt;b  
**this**: <code>{"{"}DBIG{"}"}</code>  
**Parameter**: a DBIG number (normalised)  
**Parameter**: b DBIG number (normalised  
