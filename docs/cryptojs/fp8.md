---
id: fp8
title: FP8
sidebar_label: FP8
---

<a name="FP8"></a>

## FP8
**Kind**: global class  
**this**: <code>{FP4}</code>  

* [FP8](#FP8)
    * [new FP8(c, d)](#new_FP8_new)
    * [.reduce()](#FP8+reduce)
    * [.norm()](#FP8+norm)
    * [.iszilch()](#FP8+iszilch)
    * [.isunity()](#FP8+isunity)
    * [.cmove(g, d)](#FP8+cmove)
    * [.isreal()](#FP8+isreal)
    * [.real()](#FP8+real)
    * [.geta()](#FP8+geta)
    * [.getb()](#FP8+getb)
    * [.equals(x)](#FP8+equals)
    * [.copy(x)](#FP8+copy)
    * [.zero()](#FP8+zero)
    * [.one(x)](#FP8+one)
    * [.set(c, d)](#FP8+set)
    * [.seta(c)](#FP8+seta)
    * [.neg()](#FP8+neg)
    * [.conj()](#FP8+conj)
    * [.nconj()](#FP8+nconj)
    * [.add(x)](#FP8+add)
    * [.sub(x)](#FP8+sub)
    * [.pmul(s)](#FP8+pmul)
    * [.imul(s)](#FP8+imul)
    * [.sqr()](#FP8+sqr)
    * [.mul(y)](#FP8+mul)
    * [.toString()](#FP8+toString)
    * [.inverse()](#FP8+inverse)
    * [.times_i()](#FP8+times_i)
    * [.times_i2()](#FP8+times_i2)
    * [.frob(f)](#FP8+frob)
    * [.pow(e)](#FP8+pow)
    * [.xtr_A(w, y, z)](#FP8+xtr_A)
    * [.xtr_D()](#FP8+xtr_D)
    * [.xtr_pow(n)](#FP8+xtr_pow)
    * [.xtr_pow2()](#FP8+xtr_pow2)
    * [.div2()](#FP8+div2)
    * [.div_i()](#FP8+div_i)
    * [.div_i2()](#FP8+div_i2)
    * [.div_2i()](#FP8+div_2i)
    * [.qmul(s)](#FP8+qmul)
    * [.tmul(s)](#FP8+tmul)
    * [.sqrt()](#FP8+sqrt)

<a name="new_FP8_new"></a>

### new FP8(c, d)
Creates an instance of FP8


| Param | Description |
| --- | --- |
| c | FP8 / FP4 instance |
| d | FP4 instance |

<a name="FP8+reduce"></a>

### fP8.reduce()
Reduces all components of possibly unreduced FP8 mod Modulus

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+norm"></a>

### fP8.norm()
Normalises the components of an FP8

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+iszilch"></a>

### fP8.iszilch()
Tests for FP8 equal to zero

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+isunity"></a>

### fP8.isunity()
Tests for FP8 equal to unity

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+cmove"></a>

### fP8.cmove(g, d)
Conditional copy of FP8 number

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| g | FP8 instance |
| d | copy depends on this value |

<a name="FP8+isreal"></a>

### fP8.isreal()
test is w real? That is in a+ib test b is zero

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+real"></a>

### fP8.real()
extract real part a

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+geta"></a>

### fP8.geta()
extract a from this

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+getb"></a>

### fP8.getb()
extract b from this

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+equals"></a>

### fP8.equals(x)
Tests for equality of two FP8s

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| x | FP8 instance to compare |

<a name="FP8+copy"></a>

### fP8.copy(x)
Copy FP8 to another FP8

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| x | FP8 instance to be copied |

<a name="FP8+zero"></a>

### fP8.zero()
Set FP8 to zero

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+one"></a>

### fP8.one(x)
Set FP8 to unity

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| x | FP8 instance to be set to one |

<a name="FP8+set"></a>

### fP8.set(c, d)
Set FP8 from two FP4 values

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| c | FP4 instance |
| d | FP4 instance |

<a name="FP8+seta"></a>

### fP8.seta(c)
Set FP8 from one FP4 value

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| c | FP4 instance |

<a name="FP8+neg"></a>

### fP8.neg()
Negation of FP8

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+conj"></a>

### fP8.conj()
Conjugation of FP8

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+nconj"></a>

### fP8.nconj()
Negative conjugation of FP8

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+add"></a>

### fP8.add(x)
addition of two FP8s

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| x | FP8 instance |

<a name="FP8+sub"></a>

### fP8.sub(x)
subtraction of two FP8s

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| x | FP8 instance |

<a name="FP8+pmul"></a>

### fP8.pmul(s)
Multiplication of an FP8 by an FP8

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| s | FP8 instance |

<a name="FP8+imul"></a>

### fP8.imul(s)
Multiplication of an FP8 by a small integer

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| s | integer |

<a name="FP8+sqr"></a>

### fP8.sqr()
Fast Squaring of an FP8

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+mul"></a>

### fP8.mul(y)
Full unconditional Multiplication of two FP8s

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| y | FP8 instance, the multiplier |

<a name="FP8+toString"></a>

### fP8.toString()
convert to hex string

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+inverse"></a>

### fP8.inverse()
Inverting an FP8

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+times_i"></a>

### fP8.times\_i()
multiplies an FP8 instance by irreducible polynomial sqrt(1+sqrt(-1))

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+times_i2"></a>

### fP8.times\_i2()
multiplies an FP8 instance by irreducible polynomial (1+sqrt(-1))

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+frob"></a>

### fP8.frob(f)
Raises an FP8 to the power of the internal modulus p, using the Frobenius

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| f | Modulus |

<a name="FP8+pow"></a>

### fP8.pow(e)
Raises an FP8 to the power of a BIG

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| e | BIG instance exponent |

<a name="FP8+xtr_A"></a>

### fP8.xtr\_A(w, y, z)
Calculates the XTR addition function r=w*x-conj(x)*y+z

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| w | FP8 instance |
| y | FP8 instance |
| z | FP8 instance |

<a name="FP8+xtr_D"></a>

### fP8.xtr\_D()
Calculates the XTR doubling function r=x^2-2*conj(x)

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+xtr_pow"></a>

### fP8.xtr\_pow(n)
Calculates FP8 trace of an FP8 raised to the power of a BIG number

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| n | Big number |

<a name="FP8+xtr_pow2"></a>

### fP8.xtr\_pow2()
Calculates FP8 trace of c^a.d^b, where c and d are derived from FP8 traces of FP8s

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+div2"></a>

### fP8.div2()
Divide an FP8 by 2

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+div_i"></a>

### fP8.div\_i()
Divide FP8 number by QNR

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+div_i2"></a>

### fP8.div\_i2()
Divide an FP8 by QNR twice

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+div_2i"></a>

### fP8.div\_2i()
Divide an FP8 by QNR/2

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
<a name="FP8+qmul"></a>

### fP8.qmul(s)
Multiplication of an FP8 by an FP2

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| s | FP2 multiplier |

<a name="FP8+tmul"></a>

### fP8.tmul(s)
Multiplication of an FP8 by an FP

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  

| Param | Description |
| --- | --- |
| s | FP multiplier |

<a name="FP8+sqrt"></a>

### fP8.sqrt()
Calculate square root of an FP8

**Kind**: instance method of [<code>FP8</code>](#FP8)  
**this**: <code>{FP8}</code>  
