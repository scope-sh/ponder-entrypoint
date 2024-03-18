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

## Roadmap

- [ ] More networks
- [ ] Transaction indexing (requires [this issue](https://github.com/ponder-sh/ponder/issues/113) to be resolved)
- [ ] More events (e.g. StakeLocked, StakeWithdrawn, etc.)

## Contributing

The best way to contribute is by:

- Testing it live
- Reporting any issues
- Extending the list of networks
