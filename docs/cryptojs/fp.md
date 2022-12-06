---
id: fp
title: FP
sidebar_label: FP
---
<a name="FP" />

## FP

**Kind**: global class  
**this**: <code>{"{"}FP{"}"}</code>  

-   [FP](#FP)
    -   [new FP(x)](#new_FP_new)
    -   _instance_
        -   [.zero()](#FP+zero)
        -   [.rcopy(x)](#FP+rcopy)
        -   [.bcopy(x)](#FP+bcopy)
        -   [.copy(x)](#FP+copy)
        -   [.cswap()](#FP+cswap)
        -   [.cmove(g, d)](#FP+cmove)
        -   [.nres()](#FP+nres)
        -   [.redc()](#FP+redc)
        -   [.toString()](#FP+toString)
        -   [.iszilch()](#FP+iszilch)
        -   [.reduce()](#FP+reduce)
        -   [.one()](#FP+one)
        -   [.norm()](#FP+norm)
        -   [.mul(b)](#FP+mul)
        -   [.imul(s)](#FP+imul)
        -   [.sqr()](#FP+sqr)
        -   [.neg(x)](#FP+neg)
        -   [.sub(x)](#FP+sub)
        -   [.div2()](#FP+div2)
        -   [.fpow()](#FP+fpow)
        -   [.inverse()](#FP+inverse)
        -   [.equals(x)](#FP+equals)
        -   [.pow(e)](#FP+pow)
        -   [.jacobi()](#FP+jacobi)
        -   [.sqrt()](#FP+sqrt)
    -   _static_
        -   [.mod()](#FP.mod)

<a name="new_FP_new" />

### new FP(x)

Creates an instance of FP.

| Param | Description       |
| ----- | ----------------- |
| x     | FP / BIG instance |

<a name="FP+zero" />

### fP.zero()

Set FP to zero

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+rcopy" />

### fP.rcopy(x)

copy from a ctx.BIG in ROM

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description              |
| ----- | ------------------------ |
| x     | FP instance to be copied |

<a name="FP+bcopy" />

### fP.bcopy(x)

copy from another ctx.BIG

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description              |
| ----- | ------------------------ |
| x     | FP instance to be copied |

<a name="FP+copy" />

### fP.copy(x)

Copy FP to another FP

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description              |
| ----- | ------------------------ |
| x     | FP instance to be copied |

<a name="FP+cswap" />

### fP.cswap()

Conditional constant time swap of two FP numbers

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: b FP number  
**Parameter**: d Integer  
<a name="FP+cmove" />

### fP.cmove(g, d)

Conditional copy of FP number

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description                |
| ----- | -------------------------- |
| g     | FP instance                |
| d     | copy depends on this value |

<a name="FP+nres" />

### fP.nres()

Converts from BIG integer to residue form mod Modulus

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+redc" />

### fP.redc()

Converts from residue form back to BIG integer form

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+toString" />

### fP.toString()

convert to hex string

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+iszilch" />

### fP.iszilch()

Tests for FP equal to zero

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+reduce" />

### fP.reduce()

Reduces all components of possibly unreduced FP mod Modulus

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+one" />

### fP.one()

Set FP to unity

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+norm" />

### fP.norm()

Normalises the components of an FP

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+mul" />

### fP.mul(b)

Fast Modular multiplication of two FPs, mod Modulus

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description               |
| ----- | ------------------------- |
| b     | FP number, the multiplier |

<a name="FP+imul" />

### fP.imul(s)

Multiplication of an FP by a small integer

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| s     | integer     |

<a name="FP+sqr" />

### fP.sqr()

Fast Squaring of an FP

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+neg" />

### fP.neg(x)

negate this

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description                  |
| ----- | ---------------------------- |
| x     | FP instance to be set to one |

<a name="FP+sub" />

### fP.sub(x)

subtraction of two FPs

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| x     | FP instance |

<a name="FP+div2" />

### fP.div2()

Divide an FP by 2

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+fpow" />

### fP.fpow()

return this^(p-3)/4 or this^(p-5)/8

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+inverse" />

### fP.inverse()

Inverting an FP

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+equals" />

### fP.equals(x)

Tests for equality of two FP instances

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description            |
| ----- | ---------------------- |
| x     | FP instance to compare |

<a name="FP+pow" />

### fP.pow(e)

Raises an FP to the power of a BIG

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  

| Param | Description           |
| ----- | --------------------- |
| e     | BIG instance exponent |

<a name="FP+jacobi" />

### fP.jacobi()

return jacobi symbol (this/Modulus)

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP+sqrt" />

### fP.sqrt()

Fast Modular square root of a an FP, mod Modulus

**Kind**: instance method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
<a name="FP.mod" />

### FP.mod()

reduce a ctx.DBIG to a ctx.BIG using a "special" modulus

**Kind**: static method of [<code>FP</code>](#FP)  
**this**: <code>{"{"}FP{"}"}</code>  
