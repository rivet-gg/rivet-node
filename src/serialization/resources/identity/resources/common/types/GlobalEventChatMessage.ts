/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GlobalEventChatMessage: core.serialization.ObjectSchema<
    serializers.identity.GlobalEventChatMessage.Raw,
    Rivet.identity.GlobalEventChatMessage
> = core.serialization.object({
    thread: core.serialization.lazyObject(async () => (await import("../../../../..")).chat.Thread),
});

export declare namespace GlobalEventChatMessage {
    interface Raw {
        thread: serializers.chat.Thread.Raw;
    }
}
