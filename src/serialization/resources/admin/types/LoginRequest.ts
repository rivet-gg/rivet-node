/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const LoginRequest: core.serialization.ObjectSchema<
    serializers.admin.LoginRequest.Raw,
    Rivet.admin.LoginRequest
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace LoginRequest {
    interface Raw {
        name: string;
    }
}
