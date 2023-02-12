# Rivet Node Library

[![npm shield](https://img.shields.io/npm/v/@rivet-gg/api)](https://www.npmjs.com/package/@fern-api/rivet)

The Rivet Node.js library provides access to the Rivet API from JavaScript/TypeScript.

## Documentation

API documentation is available at <https://docs.rivet.gg/docs/api/>.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-rr1yzn?file=app.ts&view=editor)

```typescript
import { RivetApiClient } from '@rivet-gg/api';

void main();

async function main() {
  const client = new RivetApiClient({
    environment: 'https://identity.api.rivet.gg/v1',
    token: 'MY_TOKEN',
  });

  const followResponse = await client.identity.follow('identity-id');

  console.log(
    'Received response from Rivet!',
    JSON.stringify(followResponse, undefined, 4)
  );
}

```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-rivet/rivet-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
