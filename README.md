# Rivet Node Library

[![npm shield](https://img.shields.io/npm/v/@rivet-gg/api)](https://www.npmjs.com/package/@fern-api/rivet)

The Rivet Node.js library provides access to the Rivet API from JavaScript/TypeScript.

## Documentation

API documentation is available at <https://rivet.gg/docs>.

## Usage

```typescript
import { RivetClient } from '@rivet-gg/api';
let rivet = new RivetClient({ token: process.env.RIVET_TOKEN });

// Find a lobby (a new lobby will automatically be created on demand if needed)
let res = await rivet.matchmaker.lobbies.find({ gameModes: ['default'] });

// Connect to the lobby (Rivet automatically manages your SSL)
let ws = new WebSocket(`wss://${res.ports['default'].host}/?token=${res.player.token}`);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-rivet/rivet-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
