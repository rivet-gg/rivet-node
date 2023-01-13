/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../core";

export const Response: core.schemas.Schema<
  serializers.identity.getIdentitySummaries.Response.Raw,
  RivetApi.GetIdentitySummariesOutput
> = core.schemas.lazyObject(async () => (await import("../../..")).GetIdentitySummariesOutput);

export declare namespace Response {
  type Raw = serializers.GetIdentitySummariesOutput.Raw;
}