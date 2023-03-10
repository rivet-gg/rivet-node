/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Entry: core.serialization.ObjectSchema<serializers.kv.Entry.Raw, Rivet.kv.Entry> =
    core.serialization.object({
        key: core.serialization.list(core.serialization.string()),
        deleted: core.serialization.boolean().optional(),
    });

export declare namespace Entry {
    interface Raw {
        key: string[];
        deleted?: boolean | null;
    }
}
