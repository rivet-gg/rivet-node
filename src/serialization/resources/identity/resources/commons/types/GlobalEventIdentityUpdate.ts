/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const GlobalEventIdentityUpdate: core.schemas.ObjectSchema<
  serializers.identity.GlobalEventIdentityUpdate.Raw,
  RivetApi.identity.GlobalEventIdentityUpdate
> = core.schemas.object({
  identity: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.IdentityProfile),
});

export declare namespace GlobalEventIdentityUpdate {
  interface Raw {
    identity: serializers.commons.IdentityProfile.Raw;
  }
}