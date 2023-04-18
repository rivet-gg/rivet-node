/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const FailedLobbiesDataSet: core.serialization.ObjectSchema<
    serializers.cloud.FailedLobbiesDataSet.Raw,
    Rivet.cloud.FailedLobbiesDataSet
> = core.serialization.object({
    ts: core.serialization.list(core.serialization.number()),
    destroyedLobbyCount: core.serialization.property(
        "destroyed_lobby_count",
        core.serialization.list(core.serialization.number())
    ),
});

export declare namespace FailedLobbiesDataSet {
    interface Raw {
        ts: number[];
        destroyed_lobby_count: number[];
    }
}
