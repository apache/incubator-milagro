---
id: ff
title: FF
sidebar_label: FF
---
<a name="FF" />

## FF

**Kind**: global class  
**this**: <code>{"{"}FF{"}"}</code>  

-   [FF](#FF)
    -   [new FF()](#new_FF_new)
    -   _instance_
        -   [.set(m)](#FF+set)
        -   [.copy(b)](#FF+copy)
        -   [.rcopy(b)](#FF+rcopy)
        -   [.dsucopy()](#FF+dsucopy)
        -   [.dscopy()](#FF+dscopy)
        -   [.sducopy()](#FF+sducopy)
        -   [.iszilch()](#FF+iszilch)
        -   [.shrw()](#FF+shrw)
        -   [.shlw()](#FF+shlw)
        -   [.parity()](#FF+parity)
        -   [.radd()](#FF+radd)
        -   [.rinc()](#FF+rinc)
        -   [.rsub()](#FF+rsub)
        -   [.rdec()](#FF+rdec)
        -   [.add()](#FF+add)
        -   [.sub()](#FF+sub)
        -   [.revsub()](#FF+revsub)
        -   [.inc()](#FF+inc)
        -   [.rnorm()](#FF+rnorm)
        -   [.shl()](#FF+shl)
        -   [.shr()](#FF+shr)
        -   [.toString()](#FF+toString)
        -   [.toBytes()](#FF+toBytes)
        -   [.karmul()](#FF+karmul)
        -   [.lmul()](#FF+lmul)
        -   [.mod()](#FF+mod)
        -   [.reduce(N, ND)](#FF+reduce) ⇒
        -   [.dmod(b)](#FF+dmod) ⇒
        -   [.invmodp()](#FF+invmodp)
        -   [.nres()](#FF+nres)
        -   [.invmod2m()](#FF+invmod2m)
        -   [.randomnum()](#FF+randomnum)
        -   [.modmul()](#FF+modmul)
        -   [.modsqr()](#FF+modsqr)
        -   [.skpow(e, p)](#FF+skpow)
        -   [.skspow(e, p)](#FF+skspow)
        -   [.power(e, p)](#FF+power)
        -   [.pow(e, p)](#FF+pow)
        -   [.pow2(e, y, f, p)](#FF+pow2)
        -   [.cfactor(s)](#FF+cfactor) ⇒
    -   _static_
        -   [.comp(a, b)](#FF.comp) ⇒
        -   [.cswap()](#FF.cswap)
        -   [.mul()](#FF.mul)
        -   [.sqr()](#FF.sqr)
        -   [.prime(p, rmg)](#FF.prime)

<a name="new_FF_new" />

### new FF()

Creates an instance of FF.

<a name="FF+set" />

### fF.set(m)

set to integer

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description                |
| ----- | -------------------------- |
| m     | Integer value to be set to |

<a name="FF+copy" />

### fF.copy(b)

copy from FF b

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description             |
| ----- | ----------------------- |
| b     | FF element to copy from |

<a name="FF+rcopy" />

### fF.rcopy(b)

copy from FF b

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description             |
| ----- | ----------------------- |
| b     | FF element to copy from |

<a name="FF+dsucopy" />

### fF.dsucopy()

x=y&lt;&lt;n

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+dscopy" />

### fF.dscopy()

x=y

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+sducopy" />

### fF.sducopy()

x=y&gt;&gt;n

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+iszilch" />

### fF.iszilch()

test equals 0

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+shrw" />

### fF.shrw()

shift right by BIGBITS-bit words

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+shlw" />

### fF.shlw()

shift left by BIGBITS-bit words

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+parity" />

### fF.parity()

extract last bit

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+radd" />

### fF.radd()

recursive add

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+rinc" />

### fF.rinc()

recursive inc

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+rsub" />

### fF.rsub()

recursive sub

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+rdec" />

### fF.rdec()

recursive dec

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+add" />

### fF.add()

simple add

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+sub" />

### fF.sub()

simple sub

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+revsub" />

### fF.revsub()

reverse sub

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+inc" />

### fF.inc()

increment/decrement by a small integer

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+rnorm" />

### fF.rnorm()

normalise - but hold any overflow in top part unless n&lt;0

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+shl" />

### fF.shl()

shift left by one bit

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+shr" />

### fF.shr()

shift right by one bit

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+toString" />

### fF.toString()

Convert to Hex String

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+toBytes" />

### fF.toBytes()

Convert FFs to/from byte arrays

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+karmul" />

### fF.karmul()

z=x\*y, t is workspace

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+lmul" />

### fF.lmul()

return low part of product this\*y

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+mod" />

### fF.mod()

Set b=b mod c

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+reduce" />

### fF.reduce(N, ND) ⇒

return this mod modulus

**Kind**: instance method of [<code>FF</code>](#FF)  
**Returns**: this mod N  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description         |
| ----- | ------------------- |
| N     | Mmodulus            |
| ND    | Montgomery Constant |

<a name="FF+dmod" />

### fF.dmod(b) ⇒

Reduces a double-length FF with respect to a given modulus

**Kind**: instance method of [<code>FF</code>](#FF)  
**Returns**: this mod N  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| b     | Mmodulus    |

<a name="FF+invmodp" />

### fF.invmodp()

Set return=1/this mod p. Binary method - a&lt;p on entry

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+nres" />

### fF.nres()

nresidue mod m

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+invmod2m" />

### fF.invmod2m()

U=1/a mod 2^m - Arazi & Qi

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+randomnum" />

### fF.randomnum()

generate random x

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+modmul" />

### fF.modmul()

this\*=y mod p

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+modsqr" />

### fF.modsqr()

this\*=y mod p

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF+skpow" />

### fF.skpow(e, p)

this=this^e mod p using side-channel resistant Montgomery Ladder, for large e

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| e     | exponent    |
| p     | modulus     |

<a name="FF+skspow" />

### fF.skspow(e, p)

this=this^e mod p using side-channel resistant Montgomery Ladder, for short e

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| e     | exponent    |
| p     | modulus     |

<a name="FF+power" />

### fF.power(e, p)

raise to an integer power - right-to-left method

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| e     | exponent    |
| p     | modulus     |

<a name="FF+pow" />

### fF.pow(e, p)

this=this^e mod p, faster but not side channel resistant

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| e     | exponent    |
| p     | modulus     |

<a name="FF+pow2" />

### fF.pow2(e, y, f, p)

double exponentiation r=x^e.y^f mod p

**Kind**: instance method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| e     | exponent    |
| y     | FF instance |
| f     | exponent    |
| p     | modulus     |

<a name="FF+cfactor" />

### fF.cfactor(s) ⇒

Test if an FF has factor in common with integer s

**Kind**: instance method of [<code>FF</code>](#FF)  
**Returns**: true or false  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description     |
| ----- | --------------- |
| s     | integerexponent |

<a name="FF.comp" />

### FF.comp(a, b) ⇒

compare a and b - must be normalised, and of same length

**Kind**: static method of [<code>FF</code>](#FF)  
**Returns**: zero of error codetrue or false  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| a     | FF number   |
| b     | FF number   |

<a name="FF.cswap" />

### FF.cswap()

in-place swapping using xor - side channel resistant - lengths must be the same

**Kind**: static method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF.mul" />

### FF.mul()

z=x\*y. Assumes x and y are of same length.

**Kind**: static method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF.sqr" />

### FF.sqr()

z=x^2

**Kind**: static method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  
<a name="FF.prime" />

### FF.prime(p, rmg)

Miller-Rabin test for primality.

**Kind**: static method of [<code>FF</code>](#FF)  
**this**: <code>{"{"}FF{"}"}</code>  

| Param | Description                                                       |
| ----- | ----------------------------------------------------------------- |
| p     | FF instance to be tested                                          |
| rmg   | an instance of a Cryptographically Secure Random Number Generator |
