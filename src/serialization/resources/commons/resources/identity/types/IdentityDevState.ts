/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const IdentityDevState: core.schemas.Schema<
  serializers.commons.IdentityDevState.Raw,
  RivetApi.commons.IdentityDevState
> = core.schemas.enum_(["inactive", "pending", "accepted"]);

export declare namespace IdentityDevState {
  type Raw = "inactive" | "pending" | "accepted";
}