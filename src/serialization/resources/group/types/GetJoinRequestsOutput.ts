/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const GetJoinRequestsOutput: core.serialization.ObjectSchema<
    serializers.group.GetJoinRequestsOutput.Raw,
    Rivet.group.GetJoinRequestsOutput
> = core.serialization.object({
    joinRequests: core.serialization.property(
        "join_requests",
        core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).group.JoinRequest))
    ),
    anchor: core.serialization.string().optional(),
    watch: core.serialization.lazyObject(async () => (await import("../../..")).WatchResponse),
});

export declare namespace GetJoinRequestsOutput {
    interface Raw {
        join_requests: serializers.group.JoinRequest.Raw[];
        anchor?: string | null;
        watch: serializers.WatchResponse.Raw;
    }
}
