/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const Timestamp: core.schemas.Schema<serializers.commons.Timestamp.Raw, RivetApi.commons.Timestamp> =
  core.schemas.string();

export declare namespace Timestamp {
  type Raw = string;
}