/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetApi } from "@fern-api/rivet";

export interface PartyHandle {
  partyId: string;
  createTs: Date;
  activity: RivetApi.commons.PartyActivity;
  external: RivetApi.commons.PartyExternalLinks;
}