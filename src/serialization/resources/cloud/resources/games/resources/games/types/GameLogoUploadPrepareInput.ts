/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const GameLogoUploadPrepareInput: core.serialization.ObjectSchema<
    serializers.cloud.games.GameLogoUploadPrepareInput.Raw,
    Rivet.cloud.games.GameLogoUploadPrepareInput
> = core.serialization.object({
    path: core.serialization.string(),
    mime: core.serialization.string().optional(),
    contentLength: core.serialization.property("content_length", core.serialization.number()),
});

export declare namespace GameLogoUploadPrepareInput {
    interface Raw {
        path: string;
        mime?: string | null;
        content_length: number;
    }
}
