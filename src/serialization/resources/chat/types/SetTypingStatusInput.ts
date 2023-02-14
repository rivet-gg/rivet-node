/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const SetTypingStatusInput: core.serialization.ObjectSchema<
    serializers.chat.SetTypingStatusInput.Raw,
    Rivet.chat.SetTypingStatusInput
> = core.serialization.object({
    status: core.serialization.lazyObject(async () => (await import("../../..")).chat.TypingStatus),
});

export declare namespace SetTypingStatusInput {
    interface Raw {
        status: serializers.chat.TypingStatus.Raw;
    }
}