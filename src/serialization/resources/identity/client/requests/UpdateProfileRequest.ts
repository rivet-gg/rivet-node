/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../core";

export const UpdateProfileRequest: core.serialization.Schema<
    serializers.identity.UpdateProfileRequest.Raw,
    Rivet.identity.UpdateProfileRequest
> = core.serialization.object({
    displayName: core.serialization.property(
        "display_name",
        core.serialization.lazy(async () => (await import("../../../..")).DisplayName).optional()
    ),
    accountNumber: core.serialization.property(
        "account_number",
        core.serialization.lazy(async () => (await import("../../../..")).AccountNumber).optional()
    ),
    bio: core.serialization.lazy(async () => (await import("../../../..")).Bio).optional(),
});

export declare namespace UpdateProfileRequest {
    interface Raw {
        display_name?: serializers.DisplayName.Raw | null;
        account_number?: serializers.AccountNumber.Raw | null;
        bio?: serializers.Bio.Raw | null;
    }
}
