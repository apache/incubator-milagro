---
id: authentication
title: Authentication
sidebar_label: Authentication
---
When you first install Milagro DTA the API endpoints are not authenticated by default. In otherwords any simple CURL command will ellicit the expected reposnse. Milagro DTA supports oAth bearer token authentication our of the box

:::caution
We strong recommend that you ***do not*** run Milagro DTA server without authentication
:::

To configure authentication all that is required is a standard oAuth 2.0 service. If you do not have an oAuth service currently running in your own infrastructure we recommend any of these fine service providers who will be able to authenticate your API users.
* [AWS Cognito](https://aws.amazon.com/cognito/)
* [Azure Active Directory](https://azure.microsoft.com/en-gb/services/active-directory/)
* [AuthO](https://auth0.com/)

## Configuration

```
config.yaml





