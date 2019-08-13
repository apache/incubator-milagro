---
id: fp2
title: FP2
sidebar_label: FP2
---

<a name="FP2"></a>

## FP2
**Kind**: global class  
**this**: <code>{FP2}</code>  

* [FP2](#FP2)
    * [new FP2()](#new_FP2_new)
    * [.reduce()](#FP2+reduce)
    * [.norm()](#FP2+norm)
    * [.iszilch()](#FP2+iszilch)
    * [.isunity()](#FP2+isunity)
    * [.cmove(g, d)](#FP2+cmove)
    * [.equals(x)](#FP2+equals)
    * [.getA()](#FP2+getA)
    * [.getB()](#FP2+getB)
    * [.set(c, d)](#FP2+set)
    * [.seta(c)](#FP2+seta)
    * [.bset(c, d)](#FP2+bset)
    * [.bseta(c)](#FP2+bseta)
    * [.copy(x)](#FP2+copy)
    * [.zero()](#FP2+zero)
    * [.one(x)](#FP2+one)
    * [.neg(x)](#FP2+neg)
    * [.conj()](#FP2+conj)
    * [.add(x)](#FP2+add)
    * [.sub(x)](#FP2+sub)
    * [.pmul(s)](#FP2+pmul)
    * [.imul(s)](#FP2+imul)
    * [.sqr()](#FP2+sqr)
    * [.mul(y)](#FP2+mul)
    * [.sqrt()](#FP2+sqrt) ⇒
    * [.toString()](#FP2+toString)
    * [.inverse()](#FP2+inverse)
    * [.div2()](#FP2+div2)
    * [.times_i()](#FP2+times_i)
    * [.mul_ip()](#FP2+mul_ip)
    * [.div_ip2()](#FP2+div_ip2)
    * [.div_ip()](#FP2+div_ip)
    * [.pow(e)](#FP2+pow)

<a name="new_FP2_new"></a>

### new FP2()
Creates an instance of FP2.

<a name="FP2+reduce"></a>

### fP2.reduce()
Reduces all components of possibly unreduced FP2 mod Modulus

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+norm"></a>

### fP2.norm()
Normalises the components of an FP2

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+iszilch"></a>

### fP2.iszilch()
Tests for FP2 equal to zero

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+isunity"></a>

### fP2.isunity()
Tests for FP2 equal to unity

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+cmove"></a>

### fP2.cmove(g, d)
Conditional copy of FP2 number

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| g | FP2 instance |
| d | copy depends on this value |

<a name="FP2+equals"></a>

### fP2.equals(x)
Tests for equality of two FP2 instances

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| x | FP2 instance to compare |

<a name="FP2+getA"></a>

### fP2.getA()
extract a from this

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+getB"></a>

### fP2.getB()
extract b from this

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+set"></a>

### fP2.set(c, d)
Set FP2 from two FP values

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| c | FP instance |
| d | FP instance |

<a name="FP2+seta"></a>

### fP2.seta(c)
Set FP2 from one FP value

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| c | FP instance |

<a name="FP2+bset"></a>

### fP2.bset(c, d)
Set FP2 from two BIG values

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| c | BIG instance |
| d | BIG instance |

<a name="FP2+bseta"></a>

### fP2.bseta(c)
Set FP2 from one BIG value

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| c | BIG instance |

<a name="FP2+copy"></a>

### fP2.copy(x)
Copy FP2 to another FP2

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| x | FP2 instance to be copied |

<a name="FP2+zero"></a>

### fP2.zero()
Set FP2 to zero

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+one"></a>

### fP2.one(x)
Set FP2 to unity

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| x | FP2 instance to be set to one |

<a name="FP2+neg"></a>

### fP2.neg(x)
negate this

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| x | FP2 instance to be set to one |

<a name="FP2+conj"></a>

### fP2.conj()
Conjugation of FP2

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+add"></a>

### fP2.add(x)
addition of two FP2s

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| x | FP2 instance |

<a name="FP2+sub"></a>

### fP2.sub(x)
subtraction of two FP2s

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| x | FP2 instance |

<a name="FP2+pmul"></a>

### fP2.pmul(s)
Multiplication of an FP2 by an FP8

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| s | FP8 instance |

<a name="FP2+imul"></a>

### fP2.imul(s)
Multiplication of an FP2 by a small integer

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| s | integer |

<a name="FP2+sqr"></a>

### fP2.sqr()
Fast Squaring of an FP2

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+mul"></a>

### fP2.mul(y)
Full unconditional Multiplication of two FP2s

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| y | FP2 instance, the multiplier |

<a name="FP2+sqrt"></a>

### fP2.sqrt() ⇒
sqrt(a+ib) = sqrt(a+sqrt(a*a-n*b*b)/2)+ib/(2*sqrt(a+sqrt(a*a-n*b*b)/2))

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**Returns**: true if this is QR  
**this**: <code>{FP2}</code>  
<a name="FP2+toString"></a>

### fP2.toString()
convert this to hex string

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+inverse"></a>

### fP2.inverse()
Inverting an FP2

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+div2"></a>

### fP2.div2()
Divide an FP2 by 2

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+times_i"></a>

### fP2.times\_i()
Multiply an FP2 by sqrt(-1)

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+mul_ip"></a>

### fP2.mul\_ip()
Multiply an FP2 by (1+sqrt(-1))

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+div_ip2"></a>

### fP2.div\_ip2()
Divide an FP2 by (1+sqrt(-1))/2

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+div_ip"></a>

### fP2.div\_ip()
Divide an FP2 by (1+sqrt(-1))

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  
<a name="FP2+pow"></a>

### fP2.pow(e)
Raises an FP2 to the power of a BIG

**Kind**: instance method of [<code>FP2</code>](#FP2)  
**this**: <code>{FP2}</code>  

| Param | Description |
| --- | --- |
| e | BIG instance exponent |

