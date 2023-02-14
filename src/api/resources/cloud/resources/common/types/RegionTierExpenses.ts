/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Region tier expenses.
 */
export interface RegionTierExpenses {
    /** A universally unique identifier. */
    namespaceId: string;
    /** A universally unique identifier. */
    regionId: string;
    /** A human readable short identifier used to references resources. Different than a `rivet.common#Uuid` because this is intended to be human readable. Different than `rivet.common#DisplayName` because this should not include special characters and be short. */
    tierNameId: string;
    /** A human readable short identifier used to references resources. Different than a `rivet.common#Uuid` because this is intended to be human readable. Different than `rivet.common#DisplayName` because this should not include special characters and be short. */
    lobbyGroupNameId: string;
    /** How long a region tier has been active (in milliseconds). */
    uptime: number;
    /** Amount of expenses for this region tier (in hundred-thousandths USD, 100,000 = $1.00). */
    expenses: number;
}
