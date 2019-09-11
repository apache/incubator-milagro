---
id: authentication
title: Authentication
sidebar_label: Authentication
---
When you first install a Milagro D-TA, the API endpoints are not authenticated by default. In other words, any simple CURL command will elicit the expected response. Milagro D-TAs support the [oAuth bearer token authentication](https://tools.ietf.org/html/rfc6750) out of the box.

:::caution
We strong recommend that you ***do not*** run a Milagro D-TA instance without authentication.
:::

To configure authentication all that is required is a standard OAuth 2.0 service. If you do not have an OAuth service currently running in your own infrastructure, we recommend any of these fine service providers who will be able to authenticate your API users.
* [AWS Cognito](https://aws.amazon.com/cognito/)
* [Azure Active Directory](https://azure.microsoft.com/en-gb/services/active-directory/)
* [AuthO](https://auth0.com/)

## Configuration

Please see [Configuration](configuration.md) for details on how to configure config.yaml to support OAuth.





