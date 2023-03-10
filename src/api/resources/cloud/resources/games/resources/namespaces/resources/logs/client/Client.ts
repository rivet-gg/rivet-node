/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../../../environments";
import * as core from "../../../../../../../../../../core";
import { Rivet } from "@rivet-gg/api";
import urlJoin from "url-join";
import * as serializers from "../../../../../../../../../../serialization";
import * as errors from "../../../../../../../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.RivetEnvironment | environments.RivetEnvironmentUrls;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Returns a list of lobbies for the given game namespace.
     */
    public async listNamespaceLobbies(
        gameId: string,
        namespaceId: string,
        request: Rivet.cloud.games.namespaces.ListNamespaceLobbiesInput = {}
    ): Promise<Rivet.cloud.games.namespaces.ListNamespaceLobbiesOutput> {
        const { beforeCreateTs } = request;
        const _queryParams = new URLSearchParams();
        if (beforeCreateTs != null) {
            _queryParams.append("before_create_ts", beforeCreateTs);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/games/${gameId}/namespaces/${namespaceId}/logs/lobbies`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.cloud.games.namespaces.ListNamespaceLobbiesOutput.parseOrThrow(
                _response.body as serializers.cloud.games.namespaces.ListNamespaceLobbiesOutput.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RivetError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    /**
     * Returns a lobby from the given game namespace.
     */
    public async getNamespaceLobby(
        gameId: string,
        namespaceId: string,
        lobbyId: string
    ): Promise<Rivet.cloud.games.namespaces.GetNamespaceLobbyOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/games/${gameId}/namespaces/${namespaceId}/logs/lobbies/${lobbyId}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.cloud.games.namespaces.GetNamespaceLobbyOutput.parseOrThrow(
                _response.body as serializers.cloud.games.namespaces.GetNamespaceLobbyOutput.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RivetError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
}
