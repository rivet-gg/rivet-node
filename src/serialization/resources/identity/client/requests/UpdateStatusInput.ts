/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../core";

export const UpdateStatusInput: core.serialization.Schema<
    serializers.identity.UpdateStatusInput.Raw,
    Rivet.identity.UpdateStatusInput
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../..")).identity.Status),
});

export declare namespace UpdateStatusInput {
    interface Raw {
        status: serializers.identity.Status.Raw;
    }
}