/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Publicity: core.serialization.ObjectSchema<serializers.party.Publicity.Raw, Rivet.party.Publicity> =
    core.serialization.object({
        public: core.serialization.lazy(async () => (await import("../../../../..")).party.PublicityLevel),
        mutualFollowers: core.serialization.property(
            "mutual_followers",
            core.serialization.lazy(async () => (await import("../../../../..")).party.PublicityLevel)
        ),
        groups: core.serialization.lazy(async () => (await import("../../../../..")).party.PublicityLevel),
    });

export declare namespace Publicity {
    interface Raw {
        public: serializers.party.PublicityLevel.Raw;
        mutual_followers: serializers.party.PublicityLevel.Raw;
        groups: serializers.party.PublicityLevel.Raw;
    }
}
