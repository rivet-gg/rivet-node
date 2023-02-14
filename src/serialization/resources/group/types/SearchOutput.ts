/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const SearchOutput: core.serialization.ObjectSchema<
    serializers.group.SearchOutput.Raw,
    Rivet.group.SearchOutput
> = core.serialization.object({
    groups: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).group.Handle)),
    anchor: core.serialization.string().optional(),
});

export declare namespace SearchOutput {
    interface Raw {
        groups: serializers.group.Handle.Raw[];
        anchor?: string | null;
    }
}
