/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const NewPlayersPerSecondDataSet: core.serialization.ObjectSchema<
    serializers.cloud.NewPlayersPerSecondDataSet.Raw,
    Rivet.cloud.NewPlayersPerSecondDataSet
> = core.serialization.object({
    ts: core.serialization.list(core.serialization.number()),
    newPlayerCount: core.serialization.property(
        "new_player_count",
        core.serialization.list(core.serialization.number())
    ),
});

export declare namespace NewPlayersPerSecondDataSet {
    interface Raw {
        ts: number[];
        new_player_count: number[];
    }
}
