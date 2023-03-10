/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GlobalEventChatRead: core.serialization.ObjectSchema<
    serializers.identity.GlobalEventChatRead.Raw,
    Rivet.identity.GlobalEventChatRead
> = core.serialization.object({
    threadId: core.serialization.property("thread_id", core.serialization.string()),
    readTs: core.serialization.property(
        "read_ts",
        core.serialization.lazy(async () => (await import("../../../../..")).Timestamp)
    ),
});

export declare namespace GlobalEventChatRead {
    interface Raw {
        thread_id: string;
        read_ts: serializers.Timestamp.Raw;
    }
}
