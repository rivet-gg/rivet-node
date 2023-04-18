/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const SendMessageResponse: core.serialization.ObjectSchema<
    serializers.chat.SendMessageResponse.Raw,
    Rivet.chat.SendMessageResponse
> = core.serialization.object({
    chatMessageId: core.serialization.property("chat_message_id", core.serialization.string()),
});

export declare namespace SendMessageResponse {
    interface Raw {
        chat_message_id: string;
    }
}