/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const AvgPlayDurationDataSet: core.serialization.ObjectSchema<
    serializers.cloud.AvgPlayDurationDataSet.Raw,
    Rivet.cloud.AvgPlayDurationDataSet
> = core.serialization.object({
    ts: core.serialization.list(core.serialization.number()),
    duration: core.serialization.list(core.serialization.number()),
});

export declare namespace AvgPlayDurationDataSet {
    interface Raw {
        ts: number[];
        duration: number[];
    }
}