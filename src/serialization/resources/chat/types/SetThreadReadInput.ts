/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const SetThreadReadInput: core.serialization.ObjectSchema<
    serializers.chat.SetThreadReadInput.Raw,
    Rivet.chat.SetThreadReadInput
> = core.serialization.object({
    lastReadTs: core.serialization.property("last_read_ts", core.serialization.string()),
});

export declare namespace SetThreadReadInput {
    interface Raw {
        last_read_ts: string;
    }
}
