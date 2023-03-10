/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Rivet } from "@rivet-gg/api";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";
import { Client as IdentityClient } from "../resources/identity/client/Client";

export declare namespace Client {
    interface Options {
        environment?: environments.RivetEnvironment | environments.RivetEnvironmentUrls;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Sends a chat message to a given topic.
     */
    public async sendMessage(request: Rivet.chat.SendMessageInput): Promise<Rivet.chat.SendMessageOutput> {
        const _response = await core.fetcher({
            url: urlJoin((this.options.environment ?? environments.RivetEnvironment.Production).chat, "messages"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.chat.SendMessageInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.chat.SendMessageOutput.parseOrThrow(
                _response.body as serializers.chat.SendMessageOutput.Raw,
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
     * Returns message history for a given thread in a certain direction.
     * Defaults to querying messages before ts.
     */
    public async getThreadHistory(
        threadId: string,
        request: Rivet.chat.GetThreadHistoryInput
    ): Promise<Rivet.chat.GetThreadHistoryOutput> {
        const { ts, count, queryDirection } = request;
        const _queryParams = new URLSearchParams();
        if (ts != null) {
            _queryParams.append("ts", ts.toISOString());
        }

        _queryParams.append("count", count.toString());
        if (queryDirection != null) {
            _queryParams.append("query_direction", queryDirection);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).chat,
                `threads/${threadId}/history`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.chat.GetThreadHistoryOutput.parseOrThrow(
                _response.body as serializers.chat.GetThreadHistoryOutput.Raw,
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
     * Fetches all relevant changes from a thread that have happened since the
     * given watch index.
     */
    public async watchThread(
        threadId: string,
        request: Rivet.chat.WatchThreadInput = {}
    ): Promise<Rivet.chat.WatchThreadOutput> {
        const { watchIndex } = request;
        const _queryParams = new URLSearchParams();
        if (watchIndex != null) {
            _queryParams.append("watch_index", watchIndex);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).chat,
                `threads/${threadId}/live`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.chat.WatchThreadOutput.parseOrThrow(
                _response.body as serializers.chat.WatchThreadOutput.Raw,
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
     * Updates the current identity's last read timestamp in the given thread.
     */
    public async setThreadRead(threadId: string, request: Rivet.chat.SetThreadReadInput): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).chat,
                `threads/${threadId}/read`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.chat.SetThreadReadInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
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
     * Fetches the topic of a thread.
     */
    public async getThreadTopic(threadId: string): Promise<Rivet.chat.GetThreadTopicOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).chat,
                `threads/${threadId}/topic`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.chat.GetThreadTopicOutput.parseOrThrow(
                _response.body as serializers.chat.GetThreadTopicOutput.Raw,
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
     * Updates the current identity's typing status in the given thread.
     */
    public async setTypingStatus(threadId: string, request: Rivet.chat.SetTypingStatusInput): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).chat,
                `threads/${threadId}/typing-status`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.chat.SetTypingStatusInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
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

    private _identity: IdentityClient | undefined;

    public get identity(): IdentityClient {
        return (this._identity ??= new IdentityClient(this.options));
    }
}
