/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Topic: core.serialization.ObjectSchema<serializers.chat.Topic.Raw, Rivet.chat.Topic> =
    core.serialization.object({
        group: core.serialization.lazyObject(async () => (await import("../../../../..")).chat.TopicGroup).optional(),
        party: core.serialization.lazyObject(async () => (await import("../../../../..")).chat.TopicParty).optional(),
        direct: core.serialization.lazyObject(async () => (await import("../../../../..")).chat.TopicDirect).optional(),
    });

export declare namespace Topic {
    interface Raw {
        group?: serializers.chat.TopicGroup.Raw | null;
        party?: serializers.chat.TopicParty.Raw | null;
        direct?: serializers.chat.TopicDirect.Raw | null;
    }
}
