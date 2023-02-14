/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const ExportMatchmakerLobbyHistoryOutput: core.serialization.ObjectSchema<
    serializers.cloud.games.ExportMatchmakerLobbyHistoryOutput.Raw,
    Rivet.cloud.games.ExportMatchmakerLobbyHistoryOutput
> = core.serialization.object({
    url: core.serialization.string(),
});

export declare namespace ExportMatchmakerLobbyHistoryOutput {
    interface Raw {
        url: string;
    }
}