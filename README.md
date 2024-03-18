# Ponder EntryPoint

> Ponder backend for EntryPoint contracts

## Usage

```sh
bun i
bun run dev
```

To learn more about deploying a Ponder instance, please consult their [docs](https://ponder.sh/docs/production/deploy).

## Features

- Supports both EntryPoint 0.6 and 0.7
- Works on 30+ EVM chains
- Conditional (only indexes the chains you're providing the RPC URL for)

## Conditional indexing

### Networks

Ponder will only index the networks you've provided the RPC URL for. For example, if you only want to index the Ethereum network, you can set the `PONDER_RPC_URL_1` environment variable to the URL of your Ethereum node.

### EntryPoint versions

You can choose whether to index the EntryPoint 0.6.0, 0.7.0, or both by setting the `PONDER_ENTRYPOINT_VERSION` environment variable to `0.6`, `0.7`, or `all`. By default, Ponder will index EntryPoint v0.7.0.

## Roadmap

- [ ] More networks
- [ ] Transaction indexing (requires [this issue](https://github.com/ponder-sh/ponder/issues/113) to be resolved)
- [ ] More events (e.g. StakeLocked, StakeWithdrawn, etc.)

## Contributing

The best way to contribute is by:

- Testing it live
- Reporting any issues
- Extending the list of networks
