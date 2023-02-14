/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const AccountNumber: core.serialization.Schema<serializers.AccountNumber.Raw, Rivet.AccountNumber> =
    core.serialization.number();

export declare namespace AccountNumber {
    type Raw = number;
}