/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const SearchOutput: core.serialization.ObjectSchema<
    serializers.identity.SearchOutput.Raw,
    Rivet.identity.SearchOutput
> = core.serialization.object({
    identities: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).identity.Handle)
    ),
    anchor: core.serialization.string(),
});

export declare namespace SearchOutput {
    interface Raw {
        identities: serializers.identity.Handle.Raw[];
        anchor: string;
    }
}