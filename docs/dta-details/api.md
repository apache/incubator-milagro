---
id: api
title: API
sidebar_label: API
---

Open-api specifications are provided for the core "vanilla" Milagro HTTP REST services and for both the shipped plugins: Bitcoin Address and Safeguard Secret

* [Standard API](https://raw.githubusercontent.com/apache/incubator-milagro-dta/develop/open-api.yaml) Here it is in a [Swagger UI](/swagger/index.html)
* [Bitcoin Plugin API](https://raw.githubusercontent.com/apache/incubator-milagro-dta/develop/pkg/bitcoinplugin/open-api.yaml)
* [Safeguard Secret API](https://raw.githubusercontent.com/apache/incubator-milagro-dta/develop/pkg/safeguardsecret/open-api.yaml)

## Testing The API

(This assumes that your local DTA is running on port 5558 as described in the [quick start guide](/docs/dta-details/quickstart)

Instructions for installing Swagger UI can be found [here](https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/installation.md)

For example...

```
docker pull swaggerapi/swagger-ui  

docker run -p 80:8080 swaggerapi/swagger-ui

```

In your browser hit http://localhost:80

Paste the URL of one of the API docs above into the text box at the top of the screen. 

Have fun!



