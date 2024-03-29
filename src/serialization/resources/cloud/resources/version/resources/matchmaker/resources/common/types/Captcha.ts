/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../../../core";

export const Captcha: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.Captcha.Raw,
    Rivet.cloud.version.matchmaker.Captcha
> = core.serialization.object({
    requestsBeforeReverify: core.serialization.property("requests_before_reverify", core.serialization.number()),
    verificationTtl: core.serialization.property("verification_ttl", core.serialization.number()),
    hcaptcha: core.serialization
        .lazyObject(async () => (await import("../../../../../../../../..")).cloud.version.matchmaker.CaptchaHcaptcha)
        .optional(),
    turnstile: core.serialization
        .lazyObject(async () => (await import("../../../../../../../../..")).cloud.version.matchmaker.CaptchaTurnstile)
        .optional(),
});

export declare namespace Captcha {
    interface Raw {
        requests_before_reverify: number;
        verification_ttl: number;
        hcaptcha?: serializers.cloud.version.matchmaker.CaptchaHcaptcha.Raw | null;
        turnstile?: serializers.cloud.version.matchmaker.CaptchaTurnstile.Raw | null;
    }
}
