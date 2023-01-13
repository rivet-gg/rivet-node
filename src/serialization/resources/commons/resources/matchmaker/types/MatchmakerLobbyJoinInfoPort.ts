/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const MatchmakerLobbyJoinInfoPort: core.schemas.ObjectSchema<
  serializers.commons.MatchmakerLobbyJoinInfoPort.Raw,
  RivetApi.commons.MatchmakerLobbyJoinInfoPort
> = core.schemas.object({
  host: core.schemas.string().optional(),
  hostname: core.schemas.string(),
  port: core.schemas.number().optional(),
  portRange: core.schemas.property(
    "port_range",
    core.schemas.lazyObject(async () => (await import("../../../../..")).commons.MatchmakerLobbyJoinInfoPortRange)
  ),
  isTls: core.schemas.property("is_tls", core.schemas.boolean()),
});

export declare namespace MatchmakerLobbyJoinInfoPort {
  interface Raw {
    host?: string | null;
    hostname: string;
    port?: number | null;
    port_range: serializers.commons.MatchmakerLobbyJoinInfoPortRange.Raw;
    is_tls: boolean;
  }
}