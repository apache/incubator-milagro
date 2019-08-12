---
id: ecp8
title: ECP8
sidebar_label: ECP8
---

<a name="ECP8"></a>

## ECP8
**Kind**: global class  
**this**: <code>{ECP8}</code>  

* [ECP8](#ECP8)
    * [new ECP8()](#new_ECP8_new)
    * _instance_
        * [.is_infinity(1)](#ECP8+is_infinity)
        * [.copy(P)](#ECP8+copy)
        * [.inf()](#ECP8+inf)
        * [.cmove()](#ECP8+cmove)
        * [.select()](#ECP8+select)
        * [.equals(Q)](#ECP8+equals)
        * [.neg()](#ECP8+neg)
        * [.affine()](#ECP8+affine)
        * [.getX()](#ECP8+getX)
        * [.getY()](#ECP8+getY)
        * [.getx()](#ECP8+getx)
        * [.gety()](#ECP8+gety)
        * [.getz()](#ECP8+getz)
        * [.toBytes(b)](#ECP8+toBytes)
        * [.toString()](#ECP8+toString) ⇒
        * [.setxy(ix, iy)](#ECP8+setxy)
        * [.setx(ix)](#ECP8+setx)
        * [.frob()](#ECP8+frob)
        * [.dbl()](#ECP8+dbl)
        * [.add()](#ECP8+add)
        * [.sub(Q)](#ECP8+sub)
        * [.mul(e)](#ECP8+mul)
    * _static_
        * [.generator()](#ECP8.generator)
        * [.fromBytes(b)](#ECP8.fromBytes)
        * [.RHS(x)](#ECP8.RHS)
        * [.mul16()](#ECP8.mul16)

<a name="new_ECP8_new"></a>

### new ECP8()
Creates an instance of ECP8

<a name="ECP8+is_infinity"></a>

### ecP8.is\_infinity(1)
Tests for ECP8 point equal to infinity

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| 1 | if infinity, else returns 0 |

<a name="ECP8+copy"></a>

### ecP8.copy(P)
Copy ECP8 point to another ECP8 point

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| P | ECP8 instance |

<a name="ECP8+inf"></a>

### ecP8.inf()
Set ECP8 to point-at-infinity

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+cmove"></a>

### ecP8.cmove()
conditional move of Q to P dependant on d

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+select"></a>

### ecP8.select()
Constant time select from pre-computed table

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+equals"></a>

### ecP8.equals(Q)
Test P == Q

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| Q | ECP8 instance |

<a name="ECP8+neg"></a>

### ecP8.neg()
set this=-this

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+affine"></a>

### ecP8.affine()
convert this to affine, from (x,y,z) to (x,y)

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+getX"></a>

### ecP8.getX()
extract affine x as ctx.FP2

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+getY"></a>

### ecP8.getY()
extract affine y as ctx.FP2

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+getx"></a>

### ecP8.getx()
extract projective x

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+gety"></a>

### ecP8.gety()
extract projective y

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+getz"></a>

### ecP8.getz()
extract projective z

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+toBytes"></a>

### ecP8.toBytes(b)
convert this to byte arrayextract projective x

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| b | byte array output |

<a name="ECP8+toString"></a>

### ecP8.toString() ⇒
convert this to hex string

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**Returns**: hex string  
**this**: <code>{ECP8}</code>  
<a name="ECP8+setxy"></a>

### ecP8.setxy(ix, iy)
set this=(x,y)

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| ix | x-value |
| iy | y-value |

<a name="ECP8+setx"></a>

### ecP8.setx(ix)
set this=(x,.)

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| ix | x-value |

<a name="ECP8+frob"></a>

### ecP8.frob()
set this*=q, where q is Modulus, using Frobenius

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+dbl"></a>

### ecP8.dbl()
this+=this

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+add"></a>

### ecP8.add()
Adds ECP8 instances

param Q ECP8 instance

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8+sub"></a>

### ecP8.sub(Q)
Subtracts ECP instance Q  from this

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| Q | ECP8 instance |

<a name="ECP8+mul"></a>

### ecP8.mul(e)
Multiplies an ECP8 instance P by a BIG, side-channel resistant

**Kind**: instance method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| e | BIG number multiplier |

<a name="ECP8.generator"></a>

### ECP8.generator()
Set group generator

**Kind**: static method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
<a name="ECP8.fromBytes"></a>

### ECP8.fromBytes(b)
convert from byte array to point

**Kind**: static method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| b | input byte array |

<a name="ECP8.RHS"></a>

### ECP8.RHS(x)
Calculate RHS of curve equation x^3+B

**Kind**: static method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  

| Param | Description |
| --- | --- |
| x | x-value |

<a name="ECP8.mul16"></a>

### ECP8.mul16()
Calculate P=u0.Q0+u1*Q1+u2*Q2+u3*Q3...

**Kind**: static method of [<code>ECP8</code>](#ECP8)  
**this**: <code>{ECP8}</code>  
