/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const WatchThreadOutput: core.serialization.ObjectSchema<
    serializers.chat.WatchThreadOutput.Raw,
    Rivet.chat.WatchThreadOutput
> = core.serialization.object({
    chatMessages: core.serialization.property(
        "chat_messages",
        core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).chat.Message))
    ),
    typingStatuses: core.serialization.property(
        "typing_statuses",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).chat.IdentityTypingStatus))
            .optional()
    ),
    watch: core.serialization.lazyObject(async () => (await import("../../..")).WatchResponse),
});

export declare namespace WatchThreadOutput {
    interface Raw {
        chat_messages: serializers.chat.Message.Raw[];
        typing_statuses?: serializers.chat.IdentityTypingStatus.Raw[] | null;
        watch: serializers.WatchResponse.Raw;
    }
}