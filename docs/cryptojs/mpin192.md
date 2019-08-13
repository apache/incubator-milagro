---
id: mpin192
title: MPIN192
sidebar_label: MPIN192
---

<a name="MPIN192"></a>

## MPIN192
**Kind**: global class  
**this**: <code>{MPIN192}</code>  

* [MPIN192](#MPIN192)
    * [new MPIN192()](#new_MPIN192_new)
    * [.today()](#MPIN192.today) ⇒
    * [.bytestostring(b)](#MPIN192.bytestostring) ⇒
    * [.stringtobytes(s)](#MPIN192.stringtobytes) ⇒
    * [.comparebytes(a, b)](#MPIN192.comparebytes) ⇒
    * [.mpin_hash(c, U)](#MPIN192.mpin_hash) ⇒
    * [.hashit(sha, n, B)](#MPIN192.hashit) ⇒
    * [.map(u, cb)](#MPIN192.map) ⇒
    * [.unmap(u, P)](#MPIN192.unmap) ⇒
    * [.RECOMBINE_G1(R1, R2, R)](#MPIN192.RECOMBINE_G1) ⇒
    * [.RECOMBINE_G2(W1, W2, W)](#MPIN192.RECOMBINE_G2) ⇒
    * [.HASH_ID(sha, ID)](#MPIN192.HASH_ID) ⇒
    * [.RANDOM_GENERATE(rng, S)](#MPIN192.RANDOM_GENERATE) ⇒
    * [.EXTRACT_PIN()](#MPIN192.EXTRACT_PIN) ⇒
    * [.EXTRACT_FACTOR()](#MPIN192.EXTRACT_FACTOR) ⇒
    * [.RESTORE_FACTOR()](#MPIN192.RESTORE_FACTOR) ⇒
    * [.GET_SERVER_SECRET(S, SST)](#MPIN192.GET_SERVER_SECRET) ⇒
    * [.GET_G1_MULTIPLE(type, x, G, W)](#MPIN192.GET_G1_MULTIPLE) ⇒
    * [.GET_CLIENT_SECRET(S, CID, CST)](#MPIN192.GET_CLIENT_SECRET) ⇒
    * [.GET_CLIENT_PERMIT(sha, date, S, CID, CTT)](#MPIN192.GET_CLIENT_PERMIT) ⇒
    * [.CLIENT_1(sha, date, CLIENT_ID, rng, X, pin, TOKEN, SEC, xID, xCID, PERMIT)](#MPIN192.CLIENT_1) ⇒
    * [.CLIENT_2(X, Y, SEC)](#MPIN192.CLIENT_2) ⇒
    * [.SERVER_1(sha, date, CID, HID, HTID)](#MPIN192.SERVER_1) ⇒
    * [.SERVER_2(date, HID, HTID, Y, SST, xID, xCID, mSEC, E, F, Pa)](#MPIN192.SERVER_2) ⇒
    * [.KANGAROO(E, F)](#MPIN192.KANGAROO) ⇒
    * [.GET_TIME()](#MPIN192.GET_TIME) ⇒
    * [.GET_Y(sha, TimeValue, xCID, Y)](#MPIN192.GET_Y) ⇒
    * [.CLIENT(sha, date, CLIENT_ID, rng, X, pin, TOKEN, SEC, xID, xCID, PERMIT, TimeValue, Y, Message)](#MPIN192.CLIENT) ⇒
    * [.SERVER(sha, date, HID, HTID, Y, SST, xID, xCID, mSEC, E, F, CID, TimeValue, MESSAGE, Pa)](#MPIN192.SERVER) ⇒
    * [.PRECOMPUTE(TOKEN, CID, G1, G2)](#MPIN192.PRECOMPUTE) ⇒
    * [.HASH_ALL(sha, HID, xID, xCID, SEC, Y, R, W)](#MPIN192.HASH_ALL) ⇒
    * [.CLIENT_KEY(sha, G1, G2, pin, R, X, H, wCID, CK)](#MPIN192.CLIENT_KEY) ⇒
    * [.SERVER_KEY(h, Z, SST, W, H, HID, xID, xCID, SK)](#MPIN192.SERVER_KEY) ⇒
    * [.GET_DVS_KEYPAIR(rng, Z, Pa)](#MPIN192.GET_DVS_KEYPAIR) ⇒

<a name="new_MPIN192_new"></a>

### new MPIN192()
Creates an instance of MPIN192

<a name="MPIN192.today"></a>

### MPIN192.today() ⇒
Get epoch time

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: time in slots since epoch  
**this**: <code>{MPIN192}</code>  
<a name="MPIN192.bytestostring"></a>

### MPIN192.bytestostring(b) ⇒
Convert byte array to string

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: s string  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| b | byte array |

<a name="MPIN192.stringtobytes"></a>

### MPIN192.stringtobytes(s) ⇒
Convert a string to byte array

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: b byte array  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| s | string |

<a name="MPIN192.comparebytes"></a>

### MPIN192.comparebytes(a, b) ⇒
Convert byte arrays

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: true if equal  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| a | byte array |
| b | byte array |

<a name="MPIN192.mpin_hash"></a>

### MPIN192.mpin\_hash(c, U) ⇒
Hash values

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: R hash value  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| c | FP8 instance |
| U | ECP unstancebyte array |

<a name="MPIN192.hashit"></a>

### MPIN192.hashit(sha, n, B) ⇒
General purpose hash function

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: R hash value  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| n | Integer |
| B | byte array |

<a name="MPIN192.map"></a>

### MPIN192.map(u, cb) ⇒
maps a random u to a point on the curve

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: P ECP pointhash value  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| u | BIG numberInteger |
| cb | an integer representing the "sign" of y, in fact its least significant bit. |

<a name="MPIN192.unmap"></a>

### MPIN192.unmap(u, P) ⇒
returns u derived from P. Random value in range 1 to return value should then be added to u

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: r Value that should be added to u to derive P  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| u | BIG numberInteger |
| P | ECP pointhash value |

<a name="MPIN192.RECOMBINE_G1"></a>

### MPIN192.RECOMBINE\_G1(R1, R2, R) ⇒
Add two members from the group G1

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: 0 or an error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| R1 | Input member of G1 |
| R2 | Input member of G1 |
| R | Output member of G1. R=R1+R2 |

<a name="MPIN192.RECOMBINE_G2"></a>

### MPIN192.RECOMBINE\_G2(W1, W2, W) ⇒
Add two members from the group G2

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: 0 or an error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| W1 | Input member of G2 |
| W2 | Input member of G2 |
| W | Output member of G2. W=W1+W2 |

<a name="MPIN192.HASH_ID"></a>

### MPIN192.HASH\_ID(sha, ID) ⇒
Hash the identity

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: hash value  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| ID | Identity as byte array |

<a name="MPIN192.RANDOM_GENERATE"></a>

### MPIN192.RANDOM\_GENERATE(rng, S) ⇒
Create random secret

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| rng | cryptographically secure random number generator |
| S | Random secret value |

<a name="MPIN192.EXTRACT_PIN"></a>

### MPIN192.EXTRACT\_PIN() ⇒
Extract a PIN number from a client secret

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: token  
**this**: <code>{MPIN192}</code>  
**Parameter**: sha hash type  
**Parameter**: CID Client identity  
**Parameter**: pin PIN value  
**Parameter**: TOKEN Client secret  
<a name="MPIN192.EXTRACT_FACTOR"></a>

### MPIN192.EXTRACT\_FACTOR() ⇒
Extract factor from TOKEN for identity CID

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: token  
**this**: <code>{MPIN192}</code>  
**Parameter**: sha hash type  
**Parameter**: CID Client identity  
**Parameter**: factor Value to extract  
**Parameter**: facbits Number of bits in factor  
**Parameter**: TOKEN Token value  
<a name="MPIN192.RESTORE_FACTOR"></a>

### MPIN192.RESTORE\_FACTOR() ⇒
Restore factor to TOKEN for identity CID

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: token  
**this**: <code>{MPIN192}</code>  
**Parameter**: sha hash type  
**Parameter**: CID Client identity  
**Parameter**: factor Value to extract  
**Parameter**: facbits Number of bits in factor  
**Parameter**: TOKEN Token value  
<a name="MPIN192.GET_SERVER_SECRET"></a>

### MPIN192.GET\_SERVER\_SECRET(S, SST) ⇒
Create a server secret in G2 from a master secret

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| S | Master secret |
| SST | Server secret = s.Q where Q is a fixed generator of G2 |

<a name="MPIN192.GET_G1_MULTIPLE"></a>

### MPIN192.GET\_G1\_MULTIPLE(type, x, G, W) ⇒
Find a random multiple of a point in G1

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  
**Parameter**: rng cryptographically secure random number generator  

| Param | Description |
| --- | --- |
| type | determines type of action to be taken |
| x | an output internally randomly generated if R!=NULL, otherwise must be provided as an input |
| G | if type=0 a point in G1, else an octet to be mapped to G1 |
| W | the output =x.G or x.M(G), where M(.) is a mapping |

<a name="MPIN192.GET_CLIENT_SECRET"></a>

### MPIN192.GET\_CLIENT\_SECRET(S, CID, CST) ⇒
Create a client secret in G1 from a master secret and the client ID

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| S | is an input master secret |
| CID | is the input client identity |
| CST | is the full client secret = s.H(ID) |

<a name="MPIN192.GET_CLIENT_PERMIT"></a>

### MPIN192.GET\_CLIENT\_PERMIT(sha, date, S, CID, CTT) ⇒
Create a Time Permit in G1 from a master secret and the client ID

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| date | is input date, in days since the epoch. |
| S | is an input master secret |
| CID | is the input client identity |
| CTT | is a Time Permit for the given date = s.H(d|H(ID)) |

<a name="MPIN192.CLIENT_1"></a>

### MPIN192.CLIENT\_1(sha, date, CLIENT_ID, rng, X, pin, TOKEN, SEC, xID, xCID, PERMIT) ⇒
Perform first pass of the client side of the 3-pass version of the M-Pin protocol

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| date | is input date, in days since the epoch. Set to 0 if Time permits disabled |
| CLIENT_ID | is the input client identity |
| rng | is a pointer to a cryptographically secure random number generator |
| X | an output internally randomly generated if R!=NULL, otherwise must be provided as an input |
| pin | is the input PIN number |
| TOKEN | is the input M-Pin token (the client secret with PIN portion removed) |
| SEC | is output = CS+TP, where CS=is the reconstructed client secret, and TP is the time permit |
| xID | is output = x.H(ID) |
| xCID | is output = x.(H(ID)+H(d|H(ID))) |
| PERMIT | is the input time permit |

<a name="MPIN192.CLIENT_2"></a>

### MPIN192.CLIENT\_2(X, Y, SEC) ⇒
Perform second pass of the client side of the 3-pass version of the M-Pin protocol

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| X | an input, a locally generated random number |
| Y | an input random challenge from the server |
| SEC | on output = -(x+y).V |

<a name="MPIN192.SERVER_1"></a>

### MPIN192.SERVER\_1(sha, date, CID, HID, HTID) ⇒
Perform first pass of the server side of the 3-pass version of the M-Pin protocol

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| date | is input date, in days since the epoch. Set to 0 if Time permits disabled |
| CID | is the input claimed client identity |
| HID | is output H(ID), a hash of the client ID |
| HTID | is output H(ID)+H(d|H(ID)) |

<a name="MPIN192.SERVER_2"></a>

### MPIN192.SERVER\_2(date, HID, HTID, Y, SST, xID, xCID, mSEC, E, F, Pa) ⇒
Perform third pass on the server side of the 3-pass version of the M-Pin protocol

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| date | is input date, in days since the epoch. Set to 0 if Time permits disabled |
| HID | is input H(ID), a hash of the client ID |
| HTID | is input H(ID)+H(d|H(ID)) |
| Y | is the input server's randomly generated challenge |
| SST | is the input server secret |
| xID | is input from the client = x.H(ID) |
| xCID | is input from the client= x.(H(ID)+H(d|H(ID))) |
| mSEC | is an input from the client |
| E | is an output to help the Kangaroos to find the PIN error, or NULL if not required |
| F | is an output to help the Kangaroos to find the PIN error, or NULL if not required |
| Pa | is the input public key from the client, z.Q or NULL if the client uses regular mpin |

<a name="MPIN192.KANGAROO"></a>

### MPIN192.KANGAROO(E, F) ⇒
Use Kangaroos to find PIN error

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: 0 if Kangaroos failed, or the PIN error e  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| E | a member of the group GT |
| F | a member of the group GT =  E^e |

<a name="MPIN192.GET_TIME"></a>

### MPIN192.GET\_TIME() ⇒
Time since epoch

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: time since epoch  
**this**: <code>{MPIN192}</code>  
<a name="MPIN192.GET_Y"></a>

### MPIN192.GET\_Y(sha, TimeValue, xCID, Y) ⇒
Generate Y=H(s,O), where s is epoch time, O is a byte array, and H(.) is a hash function

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| TimeValue | is epoch time in seconds |
| xCID | input bytearray is an input octet |
| Y | output value |

<a name="MPIN192.CLIENT"></a>

### MPIN192.CLIENT(sha, date, CLIENT_ID, rng, X, pin, TOKEN, SEC, xID, xCID, PERMIT, TimeValue, Y, Message) ⇒
Perform client side of the one-pass version of the M-Pin protocol

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| date | is input date, in days since the epoch. Set to 0 if Time permits disabled |
| CLIENT_ID | is the input client identity |
| rng | is a pointer to a cryptographically secure random number generator |
| X | an output internally randomly generated if R!=NULL, otherwise must be provided as an input |
| pin | is the input PIN number |
| TOKEN | is the input M-Pin token (the client secret with PIN portion removed) |
| SEC | is output = -(x+y)(CS+TP), where CS is the reconstructed client secret, and TP is the time permit |
| xID | is output = x.H(ID) |
| xCID | is output = x.(H(ID)+H(d|H(ID))) |
| PERMIT | is the input time permit |
| TimeValue | is input epoch time in seconds - a timestamp |
| Y | is output H(t|U) or H(t|UT) if Time Permits enabled |
| Message | is the message to be signed |

<a name="MPIN192.SERVER"></a>

### MPIN192.SERVER(sha, date, HID, HTID, Y, SST, xID, xCID, mSEC, E, F, CID, TimeValue, MESSAGE, Pa) ⇒
Perform server side of the one-pass version of the M-Pin protocol

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| date | is input date, in days since the epoch. Set to 0 if Time permits disabled |
| HID | is output H(ID), a hash of the client ID |
| HTID | is output H(ID)+H(d|H(ID)) |
| Y | is output H(t|U) or H(t|UT) if Time Permits enabled |
| SST | is the input server secret |
| xID | is input from the client = x.H(ID) |
| xCID | is input from the client= x.(H(ID)+H(d|H(ID))) |
| mSEC | is an input from the client |
| E | is an output to help the Kangaroos to find the PIN error, or NULL if not required |
| F | is an output to help the Kangaroos to find the PIN error, or NULL if not required |
| CID | is the input claimed client identity |
| TimeValue | is input epoch time in seconds - a timestamp |
| MESSAGE | is the message to be signed |
| Pa | is input from the client z.Q or NULL if the key-escrow less scheme is not used |

<a name="MPIN192.PRECOMPUTE"></a>

### MPIN192.PRECOMPUTE(TOKEN, CID, G1, G2) ⇒
Precompute values for use by the client side of M-Pin Full

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: O for success or else error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| TOKEN | is the input M-Pin token (the client secret with PIN portion removed) |
| CID | is the input client identity |
| G1 | precomputed output |
| G2 | precomputed output |

<a name="MPIN192.HASH_ALL"></a>

### MPIN192.HASH\_ALL(sha, HID, xID, xCID, SEC, Y, R, W) ⇒
Hash the session transcript

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: H the output is the hash of all of the above that apply  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| HID | is the hashed input client ID = H(ID) |
| xID | is the client output = x.H(ID) |
| xCID | is the client output = x.(H(ID)+H(T|H(ID))) |
| SEC | is the client part response |
| Y | is the server challenge |
| R | is the client part response |
| W | is the server part response |

<a name="MPIN192.CLIENT_KEY"></a>

### MPIN192.CLIENT\_KEY(sha, G1, G2, pin, R, X, H, wCID, CK) ⇒
Calculate Key on Client side for M-Pin Full

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: 0 or an error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| sha | is the hash type |
| G1 | precomputed input |
| G2 | precomputed input |
| pin | is the input PIN number |
| R | is an input, a locally generated random number |
| X | is an input, a locally generated random number |
| H | is an input, hash of the protocol transcript |
| wCID | is the input Server-side Diffie-Hellman component |
| CK | is the output calculated shared key |

<a name="MPIN192.SERVER_KEY"></a>

### MPIN192.SERVER\_KEY(h, Z, SST, W, H, HID, xID, xCID, SK) ⇒
Calculate Key on Server side for M-Pin Full

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: 0 or an error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| h | is the hash type |
| Z | is the input Client-side Diffie-Hellman component |
| SST | is the input server secret |
| W | is an input random number generated by the server |
| H | is an input, hash of the protocol transcript |
| HID | is the hashed input client ID = H(ID) |
| xID | is input from the client = x.H(ID) |
| xCID | is input from the client= x.(H(ID)+H(d|H(ID))) |
| SK | is the output calculated shared key |

<a name="MPIN192.GET_DVS_KEYPAIR"></a>

### MPIN192.GET\_DVS\_KEYPAIR(rng, Z, Pa) ⇒
Generates a random public key for the client z.Q

**Kind**: static method of [<code>MPIN192</code>](#MPIN192)  
**Returns**: 0 or an error code  
**this**: <code>{MPIN192}</code>  

| Param | Description |
| --- | --- |
| rng | cryptographically secure random number generator |
| Z | an output internally randomly generated if R!=NULL, otherwise it must be provided as an input |
| Pa | the output public key for the client |

