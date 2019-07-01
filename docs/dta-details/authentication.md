---
id: authentication
title: Authentication
sidebar_label: Authentication
---
Just testing

Milagro DTA's endpoints are "in the clear" by default but if you set these flags you can have the endpoints authenticate against your oAuth provider of choice.

This will secure the REST API endpoints /identity and /order

The RPC endpoints /fulfill are protected using the Milagro communication protocol (oAuth is not required)

```
config.yaml

oidc_provider: URL for oAuth endpoint
oidc_client_id: _your server secret_

```