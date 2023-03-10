/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A game summary.
 */
export interface GameSummary {
    /** A universally unique identifier. */
    gameId: string;
    /** RFC3339 timestamp. */
    createTs: Date;
    /** A human readable short identifier used to references resources. Different than a `rivet.common#Uuid` because this is intended to be human readable. Different than `rivet.common#DisplayName` because this should not include special characters and be short. */
    nameId: string;
    /** Represent a resource's readable display name. */
    displayName: string;
    /** A universally unique identifier. */
    developerGroupId: string;
    /** Unsigned 32 bit integer. */
    totalPlayerCount?: number;
    /** The URL of this game's logo image. */
    logoUrl?: string;
    /** The URL of this game's banner image. */
    bannerUrl?: string;
}
