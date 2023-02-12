/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const ExternalLinks: core.serialization.ObjectSchema<
    serializers.party.ExternalLinks.Raw,
    Rivet.party.ExternalLinks
> = core.serialization.object({
    chat: core.serialization.string(),
});

export declare namespace ExternalLinks {
    interface Raw {
        chat: string;
    }
}
