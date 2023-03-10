/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const CreateCloudTokenOutput: core.serialization.ObjectSchema<
    serializers.cloud.games.CreateCloudTokenOutput.Raw,
    Rivet.cloud.games.CreateCloudTokenOutput
> = core.serialization.object({
    token: core.serialization.string(),
});

export declare namespace CreateCloudTokenOutput {
    interface Raw {
        token: string;
    }
}
