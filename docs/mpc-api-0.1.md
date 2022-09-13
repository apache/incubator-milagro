---
id: mpc-api-0.1
title: Multi-Party Computation (MPC) Library 0.1 (libmpc)
sidebar_label: Multi-Party Computation Library 0.1
---
Apache Milagro's Multi-Party Computation library (libmpc) is the latest addition to the project (as of June 2022), and uses the [Apache Milagro C Library](/docs/amcl-c-api-2.0.0) to implement Multi-Party Computation. It offers and API to allow for customs computations to be perfomed.

## Building and running libmpc

The preferred way to get libmpc built and tested is through the use of docker.

Once your docker installation is correctly set-up, simply run:
```
 git clone https://github.com/apache/incubator-milagro-MPC.git && cd incubator-milagro-MPC
```
```
 docker build -t libmpc .
```

If you want to run tests and ensure all routines perform as expected, run:
```
docker run --cap-add SYS_PTRACE --rm libmpc
```

This procedure has been tested on all major platforms (Linux, Mac OS, Windows) on arm64 and x86_64 platforms. If your build or execution fails, please open a bug.

You can also build and run libmpc natively, and you can build the docker image for multiple platforms. To know more, check out [the readme in the GitHub repository](https://github.com/apache/incubator-milagro-MPC).

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
