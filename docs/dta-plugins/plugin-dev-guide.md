---
id: plugin-dev-guide
title: D-TA Plugins Developers Guide
sidebar_label: Developers Guide
---
We have provided a template plugin that provides the same functionality as out-of-the-box milagro.

## Developer Notes

You need to install protobufs

If you change the portobufs definition run 

$ protoc -I=. --go_out=. ./docs.proto

To add a new endpoint to the goKit Microservices framework

1. First define the contract in milagro/pkg/milagroservice/proto.go

Add structs for http transport
Add responses to milagro/swagger/swagger.config,yaml

2. Add and endpoint definition

milagro/pkg/milagroendpoints/endpoints.go

3. Create a handler factory

**Thise instructions still aren't perfect**

1. Clone the repo and make sure that it works by following the [Quick Start](/docs/dta-details/quickstart) instructions
2. Copy the plugin template
```
cp -r pkg/plugintemplate pkg/encryptastring
```
3. Rename the package and service 
on a mac you could do this...
```
sed -i "" "s/template/encryptastring/g" pkg/encryptastring/service.go
```
4. Now create a plugin regsitration file
```
sed -i "" "s/plugintemplate/encryptastring/g" plugins/encryptastring.go
sed -i "" "s/pluginTemplate/encryptAString/g" plugins/encryptastring.go
```
5.  Update the Config File
```
nano ~/.milagro/config.yaml

update....

plugins:
  service: encryptastring

```
6. See your plugin in action!
```
go build -o target/service github.com/apache/incubator-milagro-dta/cmd/service
target/service
```
Point your browser at:
http://localhost:5555/status

you should see

