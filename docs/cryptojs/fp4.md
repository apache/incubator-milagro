---
id: fp4
title: FP4
sidebar_label: FP4
---

<a name="FP4"></a>

## FP4
**Kind**: global class  
**this**: <code>{FP4}</code>  

* [FP4](#FP4)
    * [new FP4()](#new_FP4_new)
    * [.reduce()](#FP4+reduce)
    * [.norm()](#FP4+norm)
    * [.iszilch()](#FP4+iszilch)
    * [.isunity()](#FP4+isunity)
    * [.cmove(g, d)](#FP4+cmove)
    * [.isreal()](#FP4+isreal)
    * [.real()](#FP4+real)
    * [.geta()](#FP4+geta)
    * [.getb()](#FP4+getb)
    * [.equals(x)](#FP4+equals)
    * [.copy(x)](#FP4+copy)
    * [.zero()](#FP4+zero)
    * [.one(x)](#FP4+one)
    * [.set(c, d)](#FP4+set)
    * [.seta(c)](#FP4+seta)
    * [.neg()](#FP4+neg)
    * [.conj()](#FP4+conj)
    * [.nconj()](#FP4+nconj)
    * [.add(x)](#FP4+add)
    * [.sub(x)](#FP4+sub)
    * [.pmul(s)](#FP4+pmul)
    * [.imul(s)](#FP4+imul)
    * [.sqr()](#FP4+sqr)
    * [.mul(y)](#FP4+mul)
    * [.toString()](#FP4+toString)
    * [.inverse()](#FP4+inverse)
    * [.times_i()](#FP4+times_i)
    * [.frob(f)](#FP4+frob)
    * [.pow(e)](#FP4+pow)
    * [.xtr_A(w, y, z)](#FP4+xtr_A)
    * [.xtr_D()](#FP4+xtr_D)
    * [.xtr_pow(n)](#FP4+xtr_pow)
    * [.xtr_pow2()](#FP4+xtr_pow2)
    * [.div2()](#FP4+div2)
    * [.div_i()](#FP4+div_i)
    * [.div_2i()](#FP4+div_2i)
    * [.qmul(s)](#FP4+qmul)
    * [.sqrt()](#FP4+sqrt)

<a name="new_FP4_new"></a>

### new FP4()
Creates an instance of FP4

<a name="FP4+reduce"></a>

### fP4.reduce()
Reduces all components of possibly unreduced FP4 mod Modulus

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+norm"></a>

### fP4.norm()
Normalises the components of an FP4

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+iszilch"></a>

### fP4.iszilch()
Tests for FP4 equal to zero

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+isunity"></a>

### fP4.isunity()
Tests for FP4 equal to unity

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+cmove"></a>

### fP4.cmove(g, d)
Conditional copy of FP4 number

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| g | FP4 instance |
| d | copy depends on this value |

<a name="FP4+isreal"></a>

### fP4.isreal()
test is w real? That is in a+ib test b is zero

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+real"></a>

### fP4.real()
extract real part a

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+geta"></a>

### fP4.geta()
extract a from this

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+getb"></a>

### fP4.getb()
extract b from this

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+equals"></a>

### fP4.equals(x)
Tests for equality of two FP4s

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| x | FP4 instance to compare |

<a name="FP4+copy"></a>

### fP4.copy(x)
Copy FP4 to another FP4

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| x | FP4 instance to be copied |

<a name="FP4+zero"></a>

### fP4.zero()
Set FP4 to zero

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+one"></a>

### fP4.one(x)
Set FP4 to unity

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| x | FP4 instance to be set to one |

<a name="FP4+set"></a>

### fP4.set(c, d)
Set FP4 from two FP2 values

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| c | FP2 instance |
| d | FP2 instance |

<a name="FP4+seta"></a>

### fP4.seta(c)
Set FP4 from one FP2 value

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| c | FP2 instance |

<a name="FP4+neg"></a>

### fP4.neg()
Negation of FP4

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+conj"></a>

### fP4.conj()
Conjugation of FP4

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+nconj"></a>

### fP4.nconj()
Negative conjugation of FP4

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+add"></a>

### fP4.add(x)
addition of two FP4s

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| x | FP4 instance |

<a name="FP4+sub"></a>

### fP4.sub(x)
subtraction of two FP4s

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| x | FP4 instance |

<a name="FP4+pmul"></a>

### fP4.pmul(s)
Multiplication of an FP4 by an FP8

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| s | FP8 instance |

<a name="FP4+imul"></a>

### fP4.imul(s)
Multiplication of an FP4 by an integer

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| s | integer multiplier |

<a name="FP4+sqr"></a>

### fP4.sqr()
Fast Squaring of an FP4

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+mul"></a>

### fP4.mul(y)
Full unconditional Multiplication of two FP4s

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| y | FP4 instance, the multiplier |

<a name="FP4+toString"></a>

### fP4.toString()
convert to hex string

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+inverse"></a>

### fP4.inverse()
Inverting an FP4

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+times_i"></a>

### fP4.times\_i()
multiplies an FP4 instance by irreducible polynomial sqrt(1+sqrt(-1))

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+frob"></a>

### fP4.frob(f)
Raises an FP4 to the power of the internal modulus p, using the Frobenius

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| f | Modulus |

<a name="FP4+pow"></a>

### fP4.pow(e)
Raises an FP4 to the power of a BIG

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| e | BIG instance exponent |

<a name="FP4+xtr_A"></a>

### fP4.xtr\_A(w, y, z)
Calculates the XTR addition function r=w*x-conj(x)*y+z

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| w | FP4 instance |
| y | FP4 instance |
| z | FP4 instance |

<a name="FP4+xtr_D"></a>

### fP4.xtr\_D()
Calculates the XTR doubling function r=x^2-2*conj(x)

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+xtr_pow"></a>

### fP4.xtr\_pow(n)
Calculates FP4 trace of an FP4 raised to the power of a BIG number

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| n | Big number |

<a name="FP4+xtr_pow2"></a>

### fP4.xtr\_pow2()
Calculates FP4 trace of c^a.d^b, where c and d are derived from FP4 traces of FP4s

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+div2"></a>

### fP4.div2()
Divide an FP4 by 2

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+div_i"></a>

### fP4.div\_i()
Divide FP4 number by QNR

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+div_2i"></a>

### fP4.div\_2i()
Divide an FP4 by QNR/2

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
<a name="FP4+qmul"></a>

### fP4.qmul(s)
Multiplication of an FP4 by an FP

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  

| Param | Description |
| --- | --- |
| s | FP multiplier |

<a name="FP4+sqrt"></a>

### fP4.sqrt()
Calculate square root of an FP4

**Kind**: instance method of [<code>FP4</code>](#FP4)  
**this**: <code>{FP4}</code>  
