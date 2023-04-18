/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface NamespaceAnalyticsDataSet {
    matchmakerOverview?: Rivet.cloud.MatchmakerOverviewDataSet;
    playerCount?: Rivet.cloud.PlayerCountDataSet;
    playerCountByRegion?: Rivet.cloud.PlayerCountByRegionDataSet;
    playerCountByGameMode?: Rivet.cloud.PlayerCountByGameModeDataSet;
    lobbyCount?: Rivet.cloud.LobbyCountDataSet;
    lobbyCountByRegion?: Rivet.cloud.LobbyCountByRegionDataSet;
    lobbyCountByGameMode?: Rivet.cloud.LobbyCountByGameModeDataSet;
    avgPlayDuration?: Rivet.cloud.AvgPlayDurationDataSet;
    avgPlayDurationByRegion?: Rivet.cloud.AvgPlayDurationByRegionDataSet;
    avgPlayDurationByGameMode?: Rivet.cloud.AvgPlayDurationByGameModeDataSet;
    newPlayersPerSecond?: Rivet.cloud.NewPlayersPerSecondDataSet;
    newLobbiesPerSecond?: Rivet.cloud.NewLobbiesPerSecondDataSet;
    destroyedLobbiesByFailure?: Rivet.cloud.DestroyedLobbiesByFailureDataSet;
    destroyedLobbiesByExitCode?: Rivet.cloud.DestroyedLobbiesByExitCodeDataSet;
    failedLobbies?: Rivet.cloud.FailedLobbiesDataSet;
    lobbyReadyTime?: Rivet.cloud.LobbyReadyTimeDataSet;
    identityAccounts?: Rivet.cloud.IdentityAccountsDataSet;
}