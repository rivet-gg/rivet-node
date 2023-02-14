/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const ExternalLinks: core.serialization.ObjectSchema<
    serializers.group.ExternalLinks.Raw,
    Rivet.group.ExternalLinks
> = core.serialization.object({
    profile: core.serialization.string(),
    chat: core.serialization.string(),
});

export declare namespace ExternalLinks {
    interface Raw {
        profile: string;
        chat: string;
    }
}