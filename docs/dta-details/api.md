---
id: api
title: API
sidebar_label: API
---

Open-API specifications are provided for the core "vanilla" Milagro D-TA HTTP REST services and for both the shipped plugins: Bitcoin Wallet Security and Safeguard Secret.

* [Standard API](https://raw.githubusercontent.com/apache/incubator-milagro-dta/develop/open-api.yaml) The [Swagger UI is available at this link.](/swagger/index.html)   
* [Bitcoin Wallet Security Plugin API](https://raw.githubusercontent.com/apache/incubator-milagro-dta/develop/pkg/bitcoinplugin/open-api.yaml)   
* [Safeguard Secret API](https://raw.githubusercontent.com/apache/incubator-milagro-dta/develop/pkg/safeguardsecret/open-api.yaml)   


## Testing The API

This assumes that your local DTA is running on port 5556 as described in the [quick start guide](/docs/dta-details/quickstart).

Instructions for installing Swagger UI can be found [here](https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/installation.md).

For example...

```
docker pull swaggerapi/swagger-ui  

docker run -p 80:8080 swaggerapi/swagger-ui

```

In your browser hit http://localhost:80

Paste the URL of one of the API docs above into the text box at the top of the screen. 

Please let us know your comments by subscribing to dev@milagro.apache.org by sending an email to dev-subscribe@milagro.apache.org.





