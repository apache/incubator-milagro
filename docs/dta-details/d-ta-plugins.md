---
id: plugins-overview
title: D-TA Plugins Overview
sidebar_label: Plugins Overview
---

The out-of-the-box Milagro D-TA doesn't do much: a Principal's D-TA gets a public key from a Fiduciary's D-TA, and at a later date, can request the corresponding secret key. It is simple conceptually, but the core operation does this in a hard-to-hack, and fully auditable way. 

However, this basic capability unlocks a huge range of potential uses cases. Some use cases relate to the Principal i.e. what the keys can be used for, and some relate to the Fiduciary i.e. how the secret key is kept safe (a.k.a. custody). 

The open source "vanilla" Milagro is an attempt to engage a wider community to make the communication between these parties as robust as possible, and the plugin framework enables developers to extend the Milagro D-TA's core capability and apply it to solve real world problems.

Out of the box the Milagro D-TA comes with two plugins:
1. **Safeguard Secret** - allows the Principal to use a public key obtained from the Fiduciary's D-TA to encrypt a string using ECIES, then obtain the secret key back from the Fiduciary's D-TA to decrypt the same string.

2. **Bitcoin Wallet Security** - uses the public key to generate a Bitcoin address and then constructs the corresponding secret key only when it is needed (this is a neat trick using elliptic curve magic).

***A Note About Security***

The point of these plugins is to show you how the framework works and encourage you to develop your own. They do not (out of the box) provide a secure way to store your secret keys. The key pair seed is stored only in the Fiduciary's onboard database - this is not how you should be doing it in production. Future releases will provide guidance on securing these seeds via PKCS#11 integrations and tie-ins to service providers.

## Approach
The Milagro D-TA plugin framework has been designed with following assumptions:

* **Compile-Time**

    Milagro D-TA plugins are compiled into the Milagro D-TA - to include one you simply clone the plugin into to the pkg directory and pass a reference to the plugin as a build directive like this...
    ```
    go build -tags "plugin encryptAThing" -o target/service github.com/apache/incubator-milagro-dta/cmd/service
    ```
    We considered run-time plugins using shared objects via the [Go Plugin Package](https://golang.org/pkg/plugin/) however this presented significant security challenges. We would very much like explore this idea further with the developer community.

* **One-at-a-Time**

   Each Milagro D-TA server can only run one plugin at a time. We considered how to allow multiple plugins to interoperate but this produces significant operational and security concerns. Of course if you run a pair of servers, (example: as Principal and Fiduciary) then they can each run different plugins.
* **No New Endpoints**

    You can only write plugins to support the [Standard Endpoints](http://localhost:3000/swagger/). This probably seems quite restrictive but we think it is important that Milagro D-TA operates within a defined scope and in a predictable way. The Milagro D-TA is about the distributed management of key pairs, we are concerned that if the plugin framework allowed developers to add endpoints such as *GET fastfood/burger?orderby=mostTasty* then Milagro would just become a cool implementation of [Go kit](https://gokit.io/) and it would become impossible for users and integrators to predict what it will do. **However...**
    * **Let's Talk**: As a community we're excited to add new features to the Milagro D-TA. Propose your new endpoint as a feature (or even submit a PR) and we'll collectively consider adding it.
    * **Let's Fork**: Go ahead and fork the Milagro D-TA. (But remember that the Milagro D-TA is basically a communication protocol so keep it compatible with other Milagro users).

* **Extensions** 

   Although we restrict what endpoints Milagro provides we give you a highly flexible way to define what data each endpoint accepts and returns via the **extensions** JSON prop. For example the Safeguard Secret plugin extends the POST /order endpoint like this:
   ```
    POST /order
    
    Request    
    {
        "beneficiaryIDDocumentCID" : "IPFSAddress",
        "extensions" : {
            "plainText":"encryptme"
            }
    }

    Response
    {
    	"orderPart1CID" : "IPFSAddress",
	    "orderPart2CID" : "IPFSAddress",
	    "commitment"    : "IPFSAddress",
	    "createdAt"     : 1563982017,
        "extensions" : {
            "cypherText":"iAmEncrypted"
        }	    
    }
   ```

