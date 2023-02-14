/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const CdnNamespaceDomainVerificationMethod: core.serialization.ObjectSchema<
    serializers.cloud.CdnNamespaceDomainVerificationMethod.Raw,
    Rivet.cloud.CdnNamespaceDomainVerificationMethod
> = core.serialization.object({
    invalid: core.serialization.lazyObject(async () => (await import("../../../../..")).EmptyObject).optional(),
    http: core.serialization
        .lazyObject(async () => (await import("../../../../..")).cloud.CdnNamespaceDomainVerificationMethodHttp)
        .optional(),
});

export declare namespace CdnNamespaceDomainVerificationMethod {
    interface Raw {
        invalid?: serializers.EmptyObject.Raw | null;
        http?: serializers.cloud.CdnNamespaceDomainVerificationMethodHttp.Raw | null;
    }
}
