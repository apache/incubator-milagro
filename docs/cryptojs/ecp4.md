---
id: ecp4
title: ECP4
sidebar_label: ECP4
---
<a name="ECP4" />

## ECP4

**Kind**: global class  
**this**: <code>{"{"}ECP4{"}"}</code>  

-   [ECP4](#ECP4)
    -   [new ECP4()](#new_ECP4_new)
    -   _instance_
        -   [.is_infinity(1)](#ECP4+is_infinity)
        -   [.copy(P)](#ECP4+copy)
        -   [.inf()](#ECP4+inf)
        -   [.cmove()](#ECP4+cmove)
        -   [.select()](#ECP4+select)
        -   [.equals(Q)](#ECP4+equals)
        -   [.neg()](#ECP4+neg)
        -   [.affine()](#ECP4+affine)
        -   [.getX()](#ECP4+getX)
        -   [.getY()](#ECP4+getY)
        -   [.getx()](#ECP4+getx)
        -   [.gety()](#ECP4+gety)
        -   [.getz()](#ECP4+getz)
        -   [.toBytes(b)](#ECP4+toBytes)
        -   [.toString()](#ECP4+toString) ⇒
        -   [.setxy(ix, iy)](#ECP4+setxy)
        -   [.setx(ix)](#ECP4+setx)
        -   [.frob()](#ECP4+frob)
        -   [.dbl()](#ECP4+dbl)
        -   [.add()](#ECP4+add)
        -   [.sub(Q)](#ECP4+sub)
        -   [.mul(e)](#ECP4+mul)
    -   _static_
        -   [.generator()](#ECP4.generator)
        -   [.fromBytes(b)](#ECP4.fromBytes)
        -   [.RHS(x)](#ECP4.RHS)
        -   [.mul8()](#ECP4.mul8)

<a name="new_ECP4_new" />

### new ECP4()

Creates an instance of ECP4

<a name="ECP4+is_infinity" />

### ecP4.is_infinity(1)

Tests for ECP4 point equal to infinity

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description                 |
| ----- | --------------------------- |
| 1     | if infinity, else returns 0 |

<a name="ECP4+copy" />

### ecP4.copy(P)

Copy ECP4 point to another ECP4 point

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description   |
| ----- | ------------- |
| P     | ECP4 instance |

<a name="ECP4+inf" />

### ecP4.inf()

conditional move of Q to P dependant on d

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+cmove" />

### ecP4.cmove()

conditional move of Q to P dependant on d

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+select" />

### ecP4.select()

Constant time select from pre-computed table

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+equals" />

### ecP4.equals(Q)

Test P == Q

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description   |
| ----- | ------------- |
| Q     | ECP4 instance |

<a name="ECP4+neg" />

### ecP4.neg()

set this=-this

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+affine" />

### ecP4.affine()

convert this to affine, from (x,y,z) to (x,y)

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+getX" />

### ecP4.getX()

extract affine x as ctx.FP2

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+getY" />

### ecP4.getY()

extract affine y as ctx.FP2

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+getx" />

### ecP4.getx()

extract projective x

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+gety" />

### ecP4.gety()

extract projective y

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+getz" />

### ecP4.getz()

extract projective z

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+toBytes" />

### ecP4.toBytes(b)

convert this to byte arrayextract projective x

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description       |
| ----- | ----------------- |
| b     | byte array output |

<a name="ECP4+toString" />

### ecP4.toString() ⇒

convert this to hex string

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**Returns**: hex string  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+setxy" />

### ecP4.setxy(ix, iy)

set this=(x,y)

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| ix    | x-value     |
| iy    | y-value     |

<a name="ECP4+setx" />

### ecP4.setx(ix)

set this=(x,.)

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| ix    | x-value     |

<a name="ECP4+frob" />

### ecP4.frob()

set this\*=q, where q is Modulus, using Frobenius

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+dbl" />

### ecP4.dbl()

this+=this

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+add" />

### ecP4.add()

Adds ECP4 instances

param Q ECP4 instance

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4+sub" />

### ecP4.sub(Q)

Subtracts ECP instance Q  from this

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description   |
| ----- | ------------- |
| Q     | ECP4 instance |

<a name="ECP4+mul" />

### ecP4.mul(e)

Multiplies an ECP4 instance P by a BIG, side-channel resistant

**Kind**: instance method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description           |
| ----- | --------------------- |
| e     | BIG number multiplier |

<a name="ECP4.generator" />

### ECP4.generator()

Set group generator

**Kind**: static method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
<a name="ECP4.fromBytes" />

### ECP4.fromBytes(b)

convert from byte array to point

**Kind**: static method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description      |
| ----- | ---------------- |
| b     | input byte array |

<a name="ECP4.RHS" />

### ECP4.RHS(x)

Calculate RHS of curve equation x^3+B

**Kind**: static method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| x     | x-value     |

<a name="ECP4.mul8" />

### ECP4.mul8()

Calculate P=u0.Q0+u1_Q1+u2_Q2+u3\*Q3...

**Kind**: static method of [<code>ECP4</code>](#ECP4)  
**this**: <code>{"{"}ECP4{"}"}</code>  
