/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const PutEntry: core.serialization.ObjectSchema<serializers.kv.PutEntry.Raw, Rivet.kv.PutEntry> =
    core.serialization.object({
        key: core.serialization.string(),
    });

export declare namespace PutEntry {
    interface Raw {
        key: string;
    }
}
