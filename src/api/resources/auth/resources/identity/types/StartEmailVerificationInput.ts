/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface StartEmailVerificationInput {
    email: string;
    captcha: Rivet.captcha.Config;
    /** A universally unique identifier. */
    gameId?: string;
}
