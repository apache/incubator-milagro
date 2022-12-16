---
id: big
title: BIG
sidebar_label: BIG
---
<a name="BIG" />

## BIG

**Kind**: global class  
**this**: <code>{"{"}BIG{"}"}</code>  

-   [BIG](#BIG)
    -   [new BIG()](#new_BIG_new)
    -   _instance_
        -   [.zero()](#BIG+zero) ⇒
        -   [.one()](#BIG+one) ⇒
        -   [.iszilch()](#BIG+iszilch) ⇒
        -   [.isunity()](#BIG+isunity) ⇒
        -   [.cswap()](#BIG+cswap)
        -   [.cmove()](#BIG+cmove)
        -   [.copy()](#BIG+copy) ⇒
        -   [.hcopy()](#BIG+hcopy) ⇒
        -   [.rcopy()](#BIG+rcopy) ⇒
        -   [.norm()](#BIG+norm) ⇒
        -   [.fshr()](#BIG+fshr) ⇒
        -   [.shr()](#BIG+shr) ⇒
        -   [.fshl()](#BIG+fshl) ⇒
        -   [.shl()](#BIG+shl) ⇒
        -   [.nbits()](#BIG+nbits) ⇒
        -   [.toString()](#BIG+toString) ⇒
        -   [.add()](#BIG+add) ⇒
        -   [.or()](#BIG+or) ⇒
        -   [.plus()](#BIG+plus) ⇒
        -   [.inc()](#BIG+inc) ⇒
        -   [.sub()](#BIG+sub) ⇒
        -   [.rsub()](#BIG+rsub) ⇒
        -   [.dec()](#BIG+dec) ⇒
        -   [.minus()](#BIG+minus) ⇒
        -   [.imul()](#BIG+imul) ⇒
        -   [.tobytearray()](#BIG+tobytearray)
        -   [.toBytes()](#BIG+toBytes)
        -   [.muladd()](#BIG+muladd)
        -   [.pmul()](#BIG+pmul) ⇒
        -   [.pxmul()](#BIG+pxmul) ⇒
        -   [.div3()](#BIG+div3) ⇒
        -   [.mod2m()](#BIG+mod2m) ⇒
        -   [.invmod2m()](#BIG+invmod2m) ⇒
        -   [.mod()](#BIG+mod) ⇒
        -   [.div()](#BIG+div) ⇒
        -   [.parity()](#BIG+parity) ⇒
        -   [.bit()](#BIG+bit) ⇒
        -   [.lastbits()](#BIG+lastbits) ⇒
        -   [.jacobi()](#BIG+jacobi) ⇒
        -   [.invmodp()](#BIG+invmodp) ⇒
        -   [.powmod()](#BIG+powmod) ⇒
    -   _static_
        -   [.frombytearray()](#BIG.frombytearray) ⇒
        -   [.smul()](#BIG.smul) ⇒
        -   [.comp()](#BIG.comp) ⇒
        -   [.random()](#BIG.random) ⇒
        -   [.randomnum()](#BIG.randomnum) ⇒
        -   [.mul()](#BIG.mul) ⇒
        -   [.sqr()](#BIG.sqr) ⇒
        -   [.modmul()](#BIG.modmul) ⇒
        -   [.modsqr()](#BIG.modsqr) ⇒
        -   [.modneg()](#BIG.modneg) ⇒
        -   [.invmod256()](#BIG.invmod256) ⇒

<a name="new_BIG_new" />

### new BIG()

General purpose Constructor

<a name="BIG+zero" />

### biG.zero() ⇒

set to zero

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+one" />

### biG.one() ⇒

set to one

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+iszilch" />

### biG.iszilch() ⇒

test for zero

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: True if zero  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+isunity" />

### biG.isunity() ⇒

test for unity

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: True if one  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+cswap" />

### biG.cswap()

Conditional swap of two BIGs depending on d using XOR - no branches

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: b BIG number  
**Parameter**: d BIG number  
<a name="BIG+cmove" />

### biG.cmove()

Conditional move of BIG depending on d using XOR - no branches

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: b BIG number  
**Parameter**: d BIG number  
<a name="BIG+copy" />

### biG.copy() ⇒

Copy from another BIG

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: The BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: y BIG number  
<a name="BIG+hcopy" />

### biG.hcopy() ⇒

copy from bottom half of ctx.DBIG

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: The new BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: y BIG number  
<a name="BIG+rcopy" />

### biG.rcopy() ⇒

copy from ROM

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: The BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: y BIG number in ROM  
<a name="BIG+norm" />

### biG.norm() ⇒

normalise BIG - force all digits &lt; 2^BASEBITS

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+fshr" />

### biG.fshr() ⇒

Quick Fast shifts a BIG right by a small number of bits - input must be normalised, output will be normalised

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: r The shifted out part  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: k Number of bits to shift  
<a name="BIG+shr" />

### biG.shr() ⇒

General shift right by k bits

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: k Number of bits to shift  
<a name="BIG+fshl" />

### biG.fshl() ⇒

Fast shifts a BIG left by a small number of bits - input must be normalised, output will be normalised

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: r The shifted out part  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: k Number of bits to shift  
<a name="BIG+shl" />

### biG.shl() ⇒

General shift left by k bits

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: k Number of bits to shift  
<a name="BIG+nbits" />

### biG.nbits() ⇒

length in bits

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: The number of bigs in BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+toString" />

### biG.toString() ⇒

Convert to string

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: string representation of a BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+add" />

### biG.add() ⇒

Sum two BIG mumbers

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: this+=y  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: y BIG object  
<a name="BIG+or" />

### biG.or() ⇒

OR two BIG mumbers

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: this|=y  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: y BIG object  
<a name="BIG+plus" />

### biG.plus() ⇒

Sum two BIG mumbers

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: this+x  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: x BIG object  
<a name="BIG+inc" />

### biG.inc() ⇒

Sum BIG and integer

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: this+=i  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: i Integer to add  
<a name="BIG+sub" />

### biG.sub() ⇒

Subtract BIG from one another

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: this-=y  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: y BIG object  
<a name="BIG+rsub" />

### biG.rsub() ⇒

Reverse subtract BIG from one another

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: this=x-this  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: x BIG object  
<a name="BIG+dec" />

### biG.dec() ⇒

Subtract integer from BIG

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: this-=i  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: i Integer to subtract  
<a name="BIG+minus" />

### biG.minus() ⇒

Subtract BIG

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: New BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: x BIG object  
<a name="BIG+imul" />

### biG.imul() ⇒

Multiply by small integer

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: this\*c  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: c small integer  
<a name="BIG+tobytearray" />

### biG.tobytearray()

convert this BIG to byte array

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+toBytes" />

### biG.toBytes()

convert this to byte array

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+muladd" />

### biG.muladd()

this[i]+=x\*y+c, and return high part

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+pmul" />

### biG.pmul() ⇒

multiply by larger int

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: carry value  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: c large integer  
<a name="BIG+pxmul" />

### biG.pxmul() ⇒

multiply by still larger int - results requires a DBIG

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: DBIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: c large integer  
<a name="BIG+div3" />

### biG.div3() ⇒

divide by 3

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: carry value  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+mod2m" />

### biG.mod2m() ⇒

set x = x mod 2^m

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: m Exponent  
<a name="BIG+invmod2m" />

### biG.invmod2m() ⇒

a=1/a mod 2^256. This is very fast!

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+mod" />

### biG.mod() ⇒

reduce this mod m

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+div" />

### biG.div() ⇒

this/=m1

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Paramter**: m1 divisor  
<a name="BIG+parity" />

### biG.parity() ⇒

return parity of this

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
<a name="BIG+bit" />

### biG.bit() ⇒

return n-th bit of this

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: bit value  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: nth bit to return  
<a name="BIG+lastbits" />

### biG.lastbits() ⇒

return last n bits of this

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: bit values  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: n bits to return  
<a name="BIG+jacobi" />

### biG.jacobi() ⇒

Jacobi Symbol (this/p)

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: 0, 1 or -1  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: p BIG number  
<a name="BIG+invmodp" />

### biG.invmodp() ⇒

this=1/this mod p. Binary method

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: p The BIG Modulus  
<a name="BIG+powmod" />

### biG.powmod() ⇒

Exponentation modulo m

**Kind**: instance method of [<code>BIG</code>](#BIG)  
**Returns**: this^e mod m  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: e1 BIG number  
**Parameter**: m  The BIG Modulus  
<a name="BIG.frombytearray" />

### BIG.frombytearray() ⇒

convert from byte array to BIG

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: BIG object  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: b Bytearray  
<a name="BIG.smul" />

### BIG.smul() ⇒

return a\*b where product fits a BIG

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: a\*b  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: a BIG number  
**Parameter**: b BIG number  
<a name="BIG.comp" />

### BIG.comp() ⇒

Compare a and b

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: 0 if a==b, -1 if a&lt;b, +1 if a&gt;b  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: a BIG number (normalised)  
**Parameter**: b BIG number (normalised  
<a name="BIG.random" />

### BIG.random() ⇒

Get 8\*MODBYTES size random number

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: rng Cryptographically Secure Random Number Generator  
<a name="BIG.randomnum" />

### BIG.randomnum() ⇒

Create random BIG in portable way, one bit at a time

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: rng Cryptographically Secure Random Number Generator  
**Parameter**: q The BIG Modulus  
<a name="BIG.mul" />

### BIG.mul() ⇒

Multiple two BIG numbers

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: a\*b as a DBIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: a BIG number  
**Parameter**: b BIG number  
<a name="BIG.sqr" />

### BIG.sqr() ⇒

Square two BIG numbers

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: a\*2 as a DBIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: a BIG number  
<a name="BIG.modmul" />

### BIG.modmul() ⇒

Multiple two BIG numbers modulo m

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: a1\*b1 mod m  as a BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: a1 BIG number  
**Parameter**: b1 BIG number  
**Parameter**: m The BIG Modulus  
<a name="BIG.modsqr" />

### BIG.modsqr() ⇒

Square a BIG number modulo m

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: a\*2 mod m  as a BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: a1 BIG number  
**Parameter**: m The BIG Modulus  
<a name="BIG.modneg" />

### BIG.modneg() ⇒

Inversion

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: -a1 mod m  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: a1 BIG number  
**Parameter**: m The BIG Modulus  
<a name="BIG.invmod256" />

### BIG.invmod256() ⇒

Arazi and Qi inversion mod 256

**Kind**: static method of [<code>BIG</code>](#BIG)  
**Returns**: BIG number  
**this**: <code>{"{"}BIG{"}"}</code>  
**Parameter**: a BIG number  
