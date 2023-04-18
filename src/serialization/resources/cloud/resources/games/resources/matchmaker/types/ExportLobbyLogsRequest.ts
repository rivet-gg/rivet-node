/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const ExportLobbyLogsRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.ExportLobbyLogsRequest.Raw,
    Rivet.cloud.games.ExportLobbyLogsRequest
> = core.serialization.object({
    stream: core.serialization.lazy(async () => (await import("../../../../../../..")).cloud.games.LogStream),
});

export declare namespace ExportLobbyLogsRequest {
    interface Raw {
        stream: serializers.cloud.games.LogStream.Raw;
    }
}