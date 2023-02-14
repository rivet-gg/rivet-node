/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const JoinPortRange: core.serialization.ObjectSchema<
    serializers.matchmaker.JoinPortRange.Raw,
    Rivet.matchmaker.JoinPortRange
> = core.serialization.object({
    min: core.serialization.number(),
    max: core.serialization.number(),
});

export declare namespace JoinPortRange {
    interface Raw {
        min: number;
        max: number;
    }
}