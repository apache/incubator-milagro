---
id: amcl-overview
title: Apache Milagro Crypto Library (AMCL)
sidebar_label: AMCL Overview
---
## Introduction
One of the major mysteries in the real-world of crypto is resistance to the exploitation of new research ideas. Its not that cryptographic research has failed to throw up new ideas that have the potential for commercial exploitation -- far from it. But in the real-world, 1970's crypto rules supreme, and very little happens that isn't PKI/RSA based. The reasons for this are many and varied. However one part of the puzzle might be the non-availability of easy-to-use open source cryptographic tools, that do not require in depth cryptographic expertise to deploy.

There are many crypto libraries out there. Many offer a bewildering variety of cryptographic primitives, at different levels of security. Many use extensive assembly language in order to be as fast as possible. Many are very **BIG**, even bloated. Some rely on other external libraries. Many were designed by academics for academics, and so are not really suitable for commercial use. Many are otherwise excellent, but not written in our favorite language.

The Apache Milagro Crypto Library (AMCL) is different; AMCL is completely self-contained, except for the requirement for an external entropy source for random number generation.

AMCL is portable - there is no assembly language. The original version is written in C, Java, Javascript, Go and Swift using only generic programming constructs, but AMCL is truly multi-lingual, as compatible  versions will be available in many other languages. These versions will be identical in that for the same inputs they will not only produce the same outputs, but all internal calculations will also be the same.

AMCL is fast, but does not attempt to set speed records (a particular academic obsession). There are of course contexts where speed is of the essence; for example for a server farm which must handle multiple SSL connections, and where a 10% speed increase implies the need for 10% less servers, with a a 10% saving on electricity. But in the Internet of Things we would suggest that this is less important. In general the speed is expected to be "good enough". However AMCL is small. Some libraries boast of having hundreds of thousands of lines of code - AMCL has less than 10,000. AMCL takes up the minimum of ROM/RAM resources in order to fit into the smallest possible embedded footprint, consistent with other design constraints. It is expected that this will be vital for implementations that support security in the Internet of Things. AMCL (the C version) only uses stack memory, and is thus natively multi-threaded.

The C version of AMCL is configured at compile time for 16, 32 or 64 bit processors, and for a specific elliptic curve. The Java and Javascript versions are (obviously) processor agnostic, but the same choices of elliptic curve are available.

AMCL is written with an awareness of the abilities of modern pipelined processors. In particular there was an awareness that the unpredictable program branch should be avoided at all costs, not only as it slows down the processor, but as it may open the door to side-channel attacks. The innocuous looking ```if``` statement - unless its outcome can be accurately predicted - is the enemy of quality crypto software.

In the sequel we refer to the C version of AMCL, unless otherwise specified. We emphasis that all AMCL versions are completely self-contained. No external libraries or packages are required to implement all of the supported cryptographic functionality (other than for an external entropy source).

## Library Structure

The modules that make up AMCL are shown below, with some indication of how they interact. Several example APIs will be provided to implement common protocols. Note that all interaction with the API is via machine-independent endian-indifferent arrays of bytes (a.k.a. octet strings). Therefore the underlying workings of the library are invisible to the consumer of its services.

![client](/img/clint.eps.jpg)
<figure>
  <caption><strong>Figure 1.</strong> AMCL Library  </caption>
</figure>

## Handling **BIG** Numbers

### Representation

One of the major design decisions is how to represent the 256-bit field elements required for the elliptic curve and pairing-based cryptography. Here there are two different approaches.

One is to pack the bits as tightly as possible into computer words. For example on a 64-bit computer 256-bit numbers can be stored in just 4 words. However to manipulate numbers in this form, even for simple addition, requires handling of carry bits if overflow is to be avoided, and a high-level language does not have direct access to carry flags. It is possible to emulate the flags, but this would be inefficient. In fact this approach is only really suitable for an assembly language implementation.

The alternative idea is to use extra words for the representation, and then try to offset the additional cost by taking full advantage of the "spare" bits in every word. This idea follows a "corner of the literature"[^first] which has been promoted by Bernstein and his collaborators in several publications. Refer to Figure 2, where each digit of the representation is stored as a signed integer which is the size of the processor word-length.

[^first]: [Curve41417 Karatsuba revisited](http://eprint.iacr.org/2014/526)

Note that almost all arithmetic takes place modulo a 256-bit prime number, the modulus representing the field over which the elliptic curve is defined, here denoted as \\( p \\).

On 64-bit processors, AMCL represents numbers to the base \\( 2^{56} \\) in a 5 element array, the Word Excess is 7 bits, and for a 256-bit modulus the Field Excess is 24 bits.

On 32-bit processors, AMCL represents numbers to the base \\( 2^{29} \\) in a 9 element array, the Word Excess is 2 bits, and for a 256-bit modulus the Field Excess is 5 bits.

On 16-bit processors, AMCL represents numbers to the base \\( 2^{13} \\) in a 20 element array, the Word Excess is 2 bits, and for a 256-bit modulus the Field Excess is 4 bits.

Such a representation of a 256-bit number is referred to as a **BIG**. Addition or subtraction of a pair of **BIG**s, results in another **BIG**.

The Java version uses exactly the same 32-bit representation as above.

For Javascript (where all numbers are stored as 64-bit floating point with a 52-bit mantissa, but mostly manipulated as 32-bit integers), numbers are represented to the base \\( 2^{24} \\) in an 11 element array, the Word Excess is 7 bits, and the Field Excess for a 256-bit modulus is 8 bits.

### Addition and Subtraction

The existence of a word excess means for example that multiple field elements can be added together digit by digit, without processing of carries, before overflow can occur.

Only occasionally will there be a requirement to _normalize_ these _extended_ values, that is to force them back into the original format. Note that this is independent of the modulus.

The existence of a field excess means that, independent of the word excess, multiple field elements can be added together before it is required to reduce the sum with respect to the modulus. In the literature this is referred to as lazy, or delayed, reduction. In fact we allow the modulus to be as small as 254 bits, which obviously increases the field excess.

Note that these two mechanisms associated with the word excess and the field excess (often confused in the literature) operate largely independently of each other.

AMCL has no support for negative numbers. Therefore subtraction will be implemented as field negation followed by addition. However a field element \\( x \\) can be negated by simply calculating \\( −x = e.p − x \\), where \\( e \\) is the current excess associated with \\( x \\). Therefore subtraction will be implemented as field negation followed by addition. In practice it is more convenient to round \\( e \\) up to next highest power of 2, in which case \\( e.p \\) can be calculated by a simple shift.

![client](/img/words.eps.jpg)
<figure>
  <caption><strong>Figure 2.</strong> AMCL Library</caption>
</figure>
<br>
Normalization of extended numbers requires the word excess of each digit to be shifted right by the number of base bits, and added to the next digit, working right to left. Note that when numbers are subtracted digit-by-digit individual digits may become negative. However since we are avoiding using the sign bit, due to the magic of 2's complement arithmetic, this all works fine without any conditional branches.

Final full reduction of unreduced field elements is carried out using a simple shift-and-subtract of the modulus, with one subtraction needed for every bit in the actual field excess. Such reductions will rarely be required, as they are slow and hard to do in constant time. Ideally it should only be required at the end of a complex operation like an elliptic curve point multiplication. 

So with careful programming we avoid any unpredictable program branches. Since the length of field elements is fixed at compile time, it is expected that the compiler will unroll most of the time-critical loops. In any case the conditional branch required at the foot of a fixed-size loop can be accurately predicted by modern hardware.

Worst case field excesses are easy to calculate. If two elements \\( a \\) and \\( b \\) are to be added, and if their current field excesses are \\( e_{a} \\) and \\( e_{b} \\) respectively, then clearly their sum will have a worst-case field excess of \\( e_{a}+e_{b} \\). By careful programming and choice of number base, full reductions can be largely eliminated[^second].

[^second]: [Slothful Reduction](http://eprint.iacr.org/2017/437)

### Multiplication and Reduction

To support multiplication of **BIG**s, we will require a double-length ***DBIG*** type. Also the partial products that arise in the process of long multiplication will require a double-length data type. Fortunately many popular C compilers, like Gnu GCC, always support an integer type that is double the native word-length. For Java the "int" type is 32-bits and there is a double-length "long" type which is 64-bit. Of course for Javascript a double length type is not possible, and so the partial products must be accommodated within the 52-bit mantissa.

Multiprecision multiplication is performed column by column, propagating the carries, working from right-to-left, but using the fast method described in[^third]. At the foot of each column the total is split into the sum for that column, and the carry to the next column. If the numbers are normalized prior to the multiplication, then with the word excesses that we have chosen, this will not result in overflow. The DBIG product will be automatically normalized as a result of this process. Squaring can be done in a similar fashion but at a slightly lower cost.

[^third]:[Missing a trick: Karatsuba variations](http://eprint.iacr.org/2015/1247)

The method used for full reduction of a **DBIG** back to a **BIG** depends on the form of the modulus. We choose to support three distinct types of modulus, (a) pseudo Mersenne of the form \\( 2^n-c \\) where \\( c \\) is small and $n$ is the size of the modulus in bits, (b) Montgomery-friendly of the form \\( k.2^n-1 \\), and (c) moduli of no special form. For cases (b) and (c) we convert all field elements to Montgomery's \\( n \\)-residue form, and use Montgomery's fast method for modular reduction.

In all cases the **DBIG** number to be reduced \\( y \\) must be in the range \\( 0<y<pR \\) (a requirement of Montgomery's method), and the result \\( x \\) is guaranteed to be in the range \\( 0<x<2p \\) , where \\( R=2^{256+FE} \\) for a 256-bit modulus. Note that the **BIG** result will be (nearly) fully reduced. The fact than we allow \\( x \\) to be larger than \\( p \\) means that we can avoid the notorious Montgomery "final subtraction". Independent of the method used for reduction, we have found that it is much easier to obtain reduction in constant time to a value less than \\( 2p \\), than a full reduction to less than \\( p \\).

Observe how unreduced numbers involved in complex calculations tend to be (nearly fully) reduced if they are involved in a modular multiplication. So for example if field element \\( x \\) has a large field excess, and if we calculate \\( x=x.y \\), then as long as the unreduced product is less than \\( pR \\), the result will be a nearly fully reduced \\( x \\). So in many cases there is a natural tendency for field excesses not to grow without limit, and not to overflow, without requiring explicit action on our part.

Consider now a sequence of code that adds, subtracts and multiplies field elements, as might arise in elliptic curve additions and doublings. Assume that the code has been analysed and that normalisation code has been inserted where needed. Assume that the reduction code that activates if there is a possibility of an element overflowing its field excess, while present, never in fact is triggered (due to the behaviour described above). Then we assert that once a program has initialised no unpredicted branches will occur during field arithmetic, and therefore the code will execute in constant time.

## Extension Field arithmetic

To support cryptographic pairings we will need support for extension fields. We use a towering of extensions as required for BN curves and as required for higher security BLS curves. An element of the quadratic extension field will be represented as \\( f=a+ib \\), where \\( i \\) is the square root of the quadratic non-residue -1. To add, subtract and multiply them we use the obvious methods.

However for negation we can construct \\( -f=-a-ib \\) as \\( b-(a+b)+i.(a-(a+b) \\) which requires only one base field negation. A similar idea can be used recursively for higher order extensions, so that only one base field negation is ever required.

## Elliptic Curves

Three types of Elliptic curve are supported for the implementation of Elliptic Curve Cryptography (ECC), but curves are limited to popular families that support faster implementation. Weierstrass curves are supported using the Short Weierstrass representation:

$$y^2=x^3+Ax+B$$

where \\( A=0 \\) or \\( A=-3 \\). Edwards curves are supported using both regular and twisted Edwards format:

$$Ax^2+y^2=1+Bx^2y^2$$

where \\( A=1 \\) or \\( A=-1 \\). Montgomery curves are represented as:

$$y^2=x^3+Ax^2+x$$

where \\( A \\) must be small. As mentioned in the introduction, in all cases we use exception-free formulae if available, as this facilitates constant time imple- mentation, even if this invokes a significant performance penalty.

In the particular case of elliptic curve point multiplication, there are potentially a myriad of very dangerous side-channel attacks that arise from using the classic double-and-add algorithm and its variants. Vulnerabilities arise if branches are taken that depend on secret bits, or if data is even accessed using secret values as indices. Many types of counter-measures have been suggested. The simplest solution is to use a constant-time algorithm like the Montgomery ladder, which has a very simple structure, uses very little  memory and has no key-bit-dependent branches.

If using a Montgomery representation of the elliptic curve the Montgomery ladder is in fact the optimal algorithm for point multiplication. For other representations we use a fixed-sized signed window method. 

AMCL has built-in support for most standardised elliptic curves, along with many curves that have been proposed for standardisation. Specifically it supports the NIST256 curve, the well known Curve25519, the 256-bit Brain- pool curve, the ANSSI curve, and six NUMS (Nothing-Up-My-Sleeve) curves proposed by Bos et al. At higher levels of security the NIST384 and NIST521 curves are supported, also Curve41417 as well as the Goldilocks curve, and our own HiFive curve.
Some of these proposals support only a Weierstrass representation, but many also allow an Edwards or Montgomery form. Tools are provided to allow easy integration of more curves.

## Support for classic Finite Field Methods

Before Elliptic Curves, cryptography depended on methods based on simple finite fields. The most famous of these would be the well known RSA method. These methods have the advantage of being effectively parameterless, and therefore the issue of trust in parameters that arises for elliptic curves, is not an issue.

However these methods are subject to index calculus based methods of cryptanalysis, and so fields and keys are typically much larger. So how to support for example a 2048-bit implementation of RSA based on a library designed for optimized 256-bit operations? The idea is simple; use AMCL as a virtual 256-bit machine, and build 2048-bit arithmetic on top of that.

And to claw back some decent performance use the Karatsuba method so that for example 2048-bit multiplication recurses efficiently right down to 256-bit operations. Of course the downside of the Karatsuba method is that while it saves on multiplications, the number of additions and subtractions is greatly increased.  However the existence of generous word excesses in our representation makes this less of a problem, as most additions can be carried out without normalization.

Secret key operations like RSA decryption use the Montgomery ladder to achieve side-channel-attack resistance.

The implementation can currently support \\( 1024.2^n \\) bit fields, so for example 2048-bit RSA can be used to get reasonably close to the AES-128-bit level of security, and if desired 4096 bit RSA can be used to comfortably exceed it.

Note that this code is supported independently of the elliptic curve code. So for example RSA and ECC can be run together within a single application.

However we regard these methods as "legacy" as in our view ECC based methods are a much better fit for the IoT.

## Multi-Lingual support

It is a **BIG** ask to develop and maintain multiple versions of a crypto library written in radically different languages such as C, Java, Javascript, Go and Swift. This has discouraged the use of language specific methods (which are in any case of little relevance here), and strongly encouraged the use of simple, generic computer language constructs.

This approach brings a surprising bonus: AMCL can be automatically converted to many other languages using available translator tools. For example Tangible Software Solutions market a Java to C# converter. This generated an efficient fully functional C# version of AMCL within minutes. The same company market a Java to Visual Basic converter.

Google have a Java to Objective C converter specifically designed to convert Android apps developed in Java, to iOS apps written in Objective C.

Of course not all languages can be supported in this way, so support for some will be developed manually. In particular a Rust version is currently under development.

## Discussion

We found in our code that, with few exceptions, reductions due to possible overflow of the field excess of a **BIG** were very rare, especially for the 64-bit version of the library. Similarly normalization was rarely needed for the 64-bit code. This is due to the much greater excesses that apply in the 64-bit representation. In some experiments we calculated thousands of random pairings, and reduction due to field excess overflow detection never happened.

In general in developing AMCL we tried to use optimal methods, without going to what we (very subjectively) regarded as extremes in order to maximize performance.  Algorithms that require less memory were generally preferred if the impact on performance was not large. Some optimizations, while perfectly valid, are hard to implement without having a significant impact on program readability and maintainability. Deciding which optimizations to use and which to reject (on the grounds of code size and negative impact on code
readability and maintainability) is admittedly rather arbitrary!

One notable omission from AMCL is the use of pre-computation on fixed parameters in order to speed up certain calculations. We try to justify this, rather unconvincingly, by pointing out that pre-computation must of necessity increase code size. Furthermore such methods are more sensitive to side-channel attacks and much of their speed advantage will be lost if they are to be fully side-channel protected. Also pre-computation on secret values clearly increases the amount of secret data that needs to be protected.

However the development roadmap view might change in later versions depending on the project supporters in-the-field experiences of using AMCL.

---

:::note See an error in this documentation? 
Submit a pull request on the development branch of [Milagro Website Repo](https://github.com/apache/incubator-milagro).
:::

<!--
Supported admonition types are: caution, note, important, tip, warning.
-->