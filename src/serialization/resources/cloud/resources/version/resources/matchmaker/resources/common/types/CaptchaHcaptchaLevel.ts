/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../../../core";

export const CaptchaHcaptchaLevel: core.serialization.Schema<
    serializers.cloud.version.matchmaker.CaptchaHcaptchaLevel.Raw,
    Rivet.cloud.version.matchmaker.CaptchaHcaptchaLevel
> = core.serialization.enum_(["easy", "moderate", "difficult", "always_on"]);

export declare namespace CaptchaHcaptchaLevel {
    type Raw = "easy" | "moderate" | "difficult" | "always_on";
}
