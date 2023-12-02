/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../../../environments";
import * as core from "../../../../../../../../../../core";
import { Rivet } from "@rivet-gg/api";
import urlJoin from "url-join";
import * as serializers from "../../../../../../../../../../serialization";
import * as errors from "../../../../../../../../../../errors";

export declare namespace Analytics {
    interface Options {
        environment?: environments.RivetEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Analytics {
    constructor(private readonly options: Analytics.Options) {}

    /**
     * Returns live information about all active lobbies for a given namespace.
     * @throws {Rivet.InternalError}
     * @throws {Rivet.RateLimitError}
     * @throws {Rivet.ForbiddenError}
     * @throws {Rivet.UnauthorizedError}
     * @throws {Rivet.NotFoundError}
     * @throws {Rivet.BadRequestError}
     */
    public async getAnalyticsMatchmakerLive(
        gameId: string,
        namespaceId: string
    ): Promise<Rivet.cloud.games.namespaces.GetAnalyticsMatchmakerLiveResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.RivetEnvironment.Production,
                `/cloud/games/${gameId}/namespaces/${namespaceId}/analytics/matchmaker/live`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.cloud.games.namespaces.GetAnalyticsMatchmakerLiveResponse.parseOrThrow(
                _response.body,
                {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                }
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Rivet.InternalError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new Rivet.RateLimitError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new Rivet.ForbiddenError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 408:
                    throw new Rivet.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new Rivet.NotFoundError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 400:
                    throw new Rivet.BadRequestError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.RivetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetTimeoutError();
            case "unknown":
                throw new errors.RivetError({
                    message: _response.error.errorMessage,
                });
        }
    }

    private async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
