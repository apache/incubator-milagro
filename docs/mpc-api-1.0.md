---
id: mpc-api-1.0
title: Multi-Party Computation (MPC) Library 1.0 (libmpc)
sidebar_label: Multi-Party Computation Library 1.0
---
Apache Milagro's Multi-Party Computation library (libmpc) is the latest addition to the project (as of June 2022), and uses the [Apache Milagro C Library](amcl-c-api-2.0.0) to implement Multi-Party Computation. It offers and API to allow for customs computations to be perfomed.

## Building and running libmpc

The preferred way to get libmpc built and tested is through the use of docker. To do so, you should install docker and ensure it runs fine:
```
docker run <helloworld> (FIXME)
```
in case you run in permission errors, on some Linux platforms you might need to add your user to the docker group:
```
sudo gpasswd -a <youruser> docker
```

Once your docker installation is correctly set-up, simply run
```sh
docker build -t libmpc .
```
to run tests and ensure all routines perform as expected, run:
```sh
docker run --cap-add SYS_PTRACE --rm libmpc
```

You can also build and run libmpc natively, for further details we suggest to check [the readme in the GitHub repository](https://github.com/apache/incubator-milagro-MPC).

## API Documentation

Doxygen support is available for Apache Milagro Multi-Party Computation (MPC) Library.

If you build libmpc, you can generate the documentation by running
```
make doc
```
in the build directory. If you use Docker, and you want the build to generate the documentation, make sure `build_doc` is set to `true`.

An online version of the Doxygen output is available for viewing in a web browser <a href="/mpcdocs/index.html" target="_blank">here</a>.


<!--
Supported admonition types are: caution, note, important, tip, warning.
-->
