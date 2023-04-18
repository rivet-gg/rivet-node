/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Key: core.serialization.Schema<serializers.kv.Key.Raw, Rivet.kv.Key> = core.serialization.string();

export declare namespace Key {
    type Raw = string;
}