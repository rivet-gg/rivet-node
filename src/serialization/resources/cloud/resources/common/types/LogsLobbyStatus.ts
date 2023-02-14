/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const LogsLobbyStatus: core.serialization.ObjectSchema<
    serializers.cloud.LogsLobbyStatus.Raw,
    Rivet.cloud.LogsLobbyStatus
> = core.serialization.object({
    running: core.serialization.lazyObject(async () => (await import("../../../../..")).EmptyObject),
    stopped: core.serialization
        .lazyObject(async () => (await import("../../../../..")).cloud.LogsLobbyStatusStopped)
        .optional(),
});

export declare namespace LogsLobbyStatus {
    interface Raw {
        running: serializers.EmptyObject.Raw;
        stopped?: serializers.cloud.LogsLobbyStatusStopped.Raw | null;
    }
}
