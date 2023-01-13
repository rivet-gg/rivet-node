/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetApi } from "@fern-api/rivet";

/**
 * A game statistic summary.
 */
export interface GameStatSummary {
  game: RivetApi.commons.GameHandle;
  stats: RivetApi.commons.GameStat[];
}