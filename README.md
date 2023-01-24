# Sensirion HDLC Node

![Build lint test](https://github.com/mytosbio/sensirion-hdlc-node/workflows/Build%20lint%20test/badge.svg)
![Publish to GitHub Pages](https://github.com/mytosbio/sensirion-hdlc-node/workflows/Publish%20to%20GitHub%20Pages/badge.svg)

Node driver for Sensirion HDLC devices. This package is largely modeled after
[Sensirion/python-shdlc-driver: Python Driver for Sensirion SHDLC Devices](https://github.com/Sensirion/python-shdlc-driver).

> Please note Mytos Bio has no affiliation with Sensirion.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Documentation](#documentation)
- [Limitations](#limitations)
- [Usage](#usage)
  - [Installation](#installation)
  - [Working example](#working-example)
- [Development](#development)
  - [Running tests](#running-tests)
  - [Building documentation](#building-documentation)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Documentation

For basic module documentation please see
[Sensirion HDLC Node Documentation](https://mytosbio.github.io/sensirion-hdlc-node/).
This documentation is automatically generated code is committed to the main
branch.

## Limitations

Currently this package only includes commands to communicate with the Liquid
Flow Sensor using the Sensirion RS485 and USB Sensor Cable. For more information
on either of the products this package is designed to work with please refer to
the following links.

- [Liquid Flow Sensor SLF3x | Sensirion](https://www.sensirion.com/en/flow-sensors/liquid-flow-meters/page/next-generation-liquid-flow-sensor-for-life-science-and-analytical-instruments/)
- [Sensirion_Liquid_Flow_Meters_SCC1-RS485_Sensor_Cable_Datasheet.pdf](https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/4_Liquid_Flow_Meters/Liquid_Flow/Sensirion_Liquid_Flow_Meters_SCC1-RS485_Sensor_Cable_Datasheet.pdf)

## Usage

### Installation

Install using npm or yarn.

```
npm install @mytosbio/kern-communications
yarn add @mytosbio/kern-communications
```

### Working example

Include a basic example to connect with and configure a Kern balance.

```typescript
// TODO: Add example of using kern-communications
```

## Development

Please feel free to fork and modify this code. We have attempted to add some
basic code quality checks to the process. When creating commits the Typescript
files are built and linted to check they conform to the correct standards. If
using VSCode then we highly recommend installing the prettier and eslint
extensions.

For more details on how to contribute to this project please see
[Contributing][contributing.md] guidelines.

### Running tests

There are extensive tests to assert correct functionality. The test runner used
is `jest` which accepts a number of arguments to watch the test files and filter
tests based on filename. The following command will run all the tests for the
repository.

```
yarn run test
```

### Building documentation

Documentation can be built using typedoc.

```
yarn run typedoc
```

## License

Please see [LICENSE](LICENSE).
