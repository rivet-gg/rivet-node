/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const TypingStatus: core.serialization.ObjectSchema<serializers.chat.TypingStatus.Raw, Rivet.chat.TypingStatus> =
    core.serialization.object({
        idle: core.serialization.lazyObject(async () => (await import("../../../../..")).EmptyObject).optional(),
        typing: core.serialization.lazyObject(async () => (await import("../../../../..")).EmptyObject).optional(),
    });

export declare namespace TypingStatus {
    interface Raw {
        idle?: serializers.EmptyObject.Raw | null;
        typing?: serializers.EmptyObject.Raw | null;
    }
}
