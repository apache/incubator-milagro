---
id: ecp2
title: ECP2
sidebar_label: ECP2
---
<a name="ECP2" />

## ECP2

**Kind**: global class  
**this**: <code>{"{"}ECP2{"}"}</code>  

-   [ECP2](#ECP2)
    -   [new ECP2()](#new_ECP2_new)
    -   _instance_
        -   [.is_infinity(1)](#ECP2+is_infinity)
        -   [.copy(P)](#ECP2+copy)
        -   [.inf()](#ECP2+inf)
        -   [.cmove()](#ECP2+cmove)
        -   [.select()](#ECP2+select)
        -   [.equals(Q)](#ECP2+equals)
        -   [.neg()](#ECP2+neg)
        -   [.affine()](#ECP2+affine)
        -   [.getX()](#ECP2+getX)
        -   [.getY()](#ECP2+getY)
        -   [.getx()](#ECP2+getx)
        -   [.gety()](#ECP2+gety)
        -   [.getz()](#ECP2+getz)
        -   [.toBytes(b)](#ECP2+toBytes)
        -   [.toString()](#ECP2+toString) ⇒
        -   [.setxy(ix, iy)](#ECP2+setxy)
        -   [.setx(ix)](#ECP2+setx)
        -   [.frob()](#ECP2+frob)
        -   [.dbl()](#ECP2+dbl)
        -   [.add()](#ECP2+add)
        -   [.sub(Q)](#ECP2+sub)
        -   [.mul(e)](#ECP2+mul)
    -   _static_
        -   [.generator()](#ECP2.generator)
        -   [.fromBytes(b)](#ECP2.fromBytes)
        -   [.RHS(x)](#ECP2.RHS)
        -   [.mul4()](#ECP2.mul4)

<a name="new_ECP2_new" />

### new ECP2()

Creates an instance of ECP2

<a name="ECP2+is_infinity" />

### ecP2.is_infinity(1)

Tests for ECP2 point equal to infinity

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description                 |
| ----- | --------------------------- |
| 1     | if infinity, else returns 0 |

<a name="ECP2+copy" />

### ecP2.copy(P)

Copy ECP2 point to another ECP2 point

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description   |
| ----- | ------------- |
| P     | ECP2 instance |

<a name="ECP2+inf" />

### ecP2.inf()

Set ECP2 to point-at-infinity

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+cmove" />

### ecP2.cmove()

conditional move of Q to P dependant on d

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+select" />

### ecP2.select()

Constant time select from pre-computed table

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+equals" />

### ecP2.equals(Q)

Test P == Q

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description   |
| ----- | ------------- |
| Q     | ECP2 instance |

<a name="ECP2+neg" />

### ecP2.neg()

set this=-this

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+affine" />

### ecP2.affine()

convert this to affine, from (x,y,z) to (x,y)

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+getX" />

### ecP2.getX()

extract affine x as ctx.FP2

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+getY" />

### ecP2.getY()

extract affine y as ctx.FP2

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+getx" />

### ecP2.getx()

extract projective x

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+gety" />

### ecP2.gety()

extract projective y

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+getz" />

### ecP2.getz()

extract projective z

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+toBytes" />

### ecP2.toBytes(b)

convert this to byte arrayextract projective x

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description       |
| ----- | ----------------- |
| b     | byte array output |

<a name="ECP2+toString" />

### ecP2.toString() ⇒

convert this to hex string

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**Returns**: hex string  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+setxy" />

### ecP2.setxy(ix, iy)

set this=(x,y)

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| ix    | x-value     |
| iy    | y-value     |

<a name="ECP2+setx" />

### ecP2.setx(ix)

set this=(x,.)

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| ix    | x-value     |

<a name="ECP2+frob" />

### ecP2.frob()

set this\*=q, where q is Modulus, using Frobenius

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+dbl" />

### ecP2.dbl()

this+=this

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+add" />

### ecP2.add()

Adds ECP2 instances

param Q ECP2 instance

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2+sub" />

### ecP2.sub(Q)

Subtracts ECP instance Q  from this

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description   |
| ----- | ------------- |
| Q     | ECP2 instance |

<a name="ECP2+mul" />

### ecP2.mul(e)

Multiplies an ECP2 instance P by a BIG, side-channel resistant

**Kind**: instance method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description           |
| ----- | --------------------- |
| e     | BIG number multiplier |

<a name="ECP2.generator" />

### ECP2.generator()

Set group generator

**Kind**: static method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
<a name="ECP2.fromBytes" />

### ECP2.fromBytes(b)

convert from byte array to point

**Kind**: static method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description      |
| ----- | ---------------- |
| b     | input byte array |

<a name="ECP2.RHS" />

### ECP2.RHS(x)

Calculate RHS of curve equation x^3+B

**Kind**: static method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  

| Param | Description |
| ----- | ----------- |
| x     | x-value     |

<a name="ECP2.mul4" />

### ECP2.mul4()

Calculate P=u0.Q0+u1_Q1+u2_Q2+u3\*Q3

**Kind**: static method of [<code>ECP2</code>](#ECP2)  
**this**: <code>{"{"}ECP2{"}"}</code>  
