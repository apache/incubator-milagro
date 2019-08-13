---
id: ecp
title: ECP
sidebar_label: ECP
---

<a name="ECP"></a>

## ECP
**Kind**: global class  
**this**: <code>{ECP}</code>  

* [ECP](#ECP)
    * [new ECP()](#new_ECP_new)
    * _instance_
        * [.is_infinity(1)](#ECP+is_infinity)
        * [.cswap()](#ECP+cswap)
        * [.cmove()](#ECP+cmove)
        * [.select()](#ECP+select)
        * [.copy(P)](#ECP+copy)
        * [.neg()](#ECP+neg)
        * [.inf()](#ECP+inf)
        * [.setxy(ix, iy)](#ECP+setxy)
        * [.setxi(ix, s)](#ECP+setxi)
        * [.setx(ix)](#ECP+setx)
        * [.affine()](#ECP+affine)
        * [.getX()](#ECP+getX)
        * [.getY()](#ECP+getY)
        * [.getS()](#ECP+getS)
        * [.getx()](#ECP+getx)
        * [.gety()](#ECP+gety)
        * [.getz()](#ECP+getz)
        * [.toBytes(b)](#ECP+toBytes)
        * [.toString()](#ECP+toString) ⇒
        * [.dbl()](#ECP+dbl)
        * [.add()](#ECP+add)
        * [.sub(Q)](#ECP+sub)
        * [.pinmul(e, bts)](#ECP+pinmul)
        * [.cfp()](#ECP+cfp)
        * [.mul(e)](#ECP+mul)
        * [.mul2(e, Q, f)](#ECP+mul2)
    * _static_
        * [.generator()](#ECP.generator)
        * [.fromBytes(b)](#ECP.fromBytes)
        * [.RHS(x)](#ECP.RHS)

<a name="new_ECP_new"></a>

### new ECP()
Creates an instance of ECP

<a name="ECP+is_infinity"></a>

### ecP.is\_infinity(1)
Tests for ECP point equal to infinity

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| 1 | if infinity, else returns 0 |

<a name="ECP+cswap"></a>

### ecP.cswap()
conditional swap of this and Q dependant on dCopy ECP point to another ECP point

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+cmove"></a>

### ecP.cmove()
conditional move of Q to P dependant on d

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+select"></a>

### ecP.select()
Constant time select from pre-computed table

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+copy"></a>

### ecP.copy(P)
Copy ECP point to another ECP point

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| P | ECP instance |

<a name="ECP+neg"></a>

### ecP.neg()
set this=-this

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+inf"></a>

### ecP.inf()
Set ECP to point-at-infinity

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+setxy"></a>

### ecP.setxy(ix, iy)
set this=(x,y)

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| ix | x-value |
| iy | y-value |

<a name="ECP+setxi"></a>

### ecP.setxi(ix, s)
set this=x, where x is ctx.BIG, y is derived from sign s

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| ix | x-value |
| s | sign to derive y |

<a name="ECP+setx"></a>

### ecP.setx(ix)
set this=x, y calculated from curve equation

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| ix | x-value |

<a name="ECP+affine"></a>

### ecP.affine()
convert this to affine, from (x,y,z) to (x,y)

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+getX"></a>

### ecP.getX()
extract affine x as ctx.FP2

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+getY"></a>

### ecP.getY()
extract affine y as ctx.FP2

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+getS"></a>

### ecP.getS()
get sign of Y

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+getx"></a>

### ecP.getx()
extract x as ctx.FP

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+gety"></a>

### ecP.gety()
extract y as ctx.FP

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+getz"></a>

### ecP.getz()
extract z as ctx.FP

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+toBytes"></a>

### ecP.toBytes(b)
convert this to byte arrayextract projective x

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| b | byte array output |

<a name="ECP+toString"></a>

### ecP.toString() ⇒
convert this to hex string

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**Returns**: hex string  
**this**: <code>{ECP}</code>  
<a name="ECP+dbl"></a>

### ecP.dbl()
this+=this

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+add"></a>

### ecP.add()
Adds ECP instances

param Q ECP instance

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+sub"></a>

### ecP.sub(Q)
Subtracts ECP instance Q  from this

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| Q | ECP instance |

<a name="ECP+pinmul"></a>

### ecP.pinmul(e, bts)
constant time multiply by small integer of length bts - use ladder

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| e | small integer |
| bts | e bit length |

<a name="ECP+cfp"></a>

### ecP.cfp()
multiply this by the curves cofactor

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP+mul"></a>

### ecP.mul(e)
Multiplies an ECP instance P by a BIG, side-channel resistant

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| e | BIG number multiplier |

<a name="ECP+mul2"></a>

### ecP.mul2(e, Q, f)
Return e.this+f.Q

**Kind**: instance method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| e | BIG number multiplier |
| Q | ECP instance |
| f | BIG number multiplier |

<a name="ECP.generator"></a>

### ECP.generator()
Set group generator

**Kind**: static method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  
<a name="ECP.fromBytes"></a>

### ECP.fromBytes(b)
convert from byte array to point

**Kind**: static method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| b | input byte array |

<a name="ECP.RHS"></a>

### ECP.RHS(x)
Calculate RHS of the curve equation

**Kind**: static method of [<code>ECP</code>](#ECP)  
**this**: <code>{ECP}</code>  

| Param | Description |
| --- | --- |
| x | x-value |

