---
id: configuration
title: Configuration
sidebar_label: Configuration
---
Milagro DTA can be passed options at start-up either via the congif.yaml file, by command line arguments or environment variables. Thesefull list of options are defined in milagro/service/flags/flags.go. But the minimum configuration is:
```
config.yaml

listen_type: http
listen_addr: :port
kvstore: ***local*** NOTE: CHANGE THIS!
cors-allow: http://localhost:port - if you are hitting the API from a browser


cli

./milagro-dta -listen-addr=http://localhost:port


```