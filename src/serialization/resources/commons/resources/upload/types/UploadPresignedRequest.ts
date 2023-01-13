/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const UploadPresignedRequest: core.schemas.ObjectSchema<
  serializers.commons.UploadPresignedRequest.Raw,
  RivetApi.commons.UploadPresignedRequest
> = core.schemas.object({
  path: core.schemas.string(),
  url: core.schemas.string(),
});

export declare namespace UploadPresignedRequest {
  interface Raw {
    path: string;
    url: string;
  }
}