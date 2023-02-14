/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const ListGameBuildsOutput: core.serialization.ObjectSchema<
    serializers.cloud.games.ListGameBuildsOutput.Raw,
    Rivet.cloud.games.ListGameBuildsOutput
> = core.serialization.object({
    builds: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../../../..")).cloud.BuildSummary)
    ),
});

export declare namespace ListGameBuildsOutput {
    interface Raw {
        builds: serializers.cloud.BuildSummary.Raw[];
    }
}