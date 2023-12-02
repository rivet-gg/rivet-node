/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Rivet } from "@rivet-gg/api";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Kv {
    interface Options {
        environment?: environments.RivetEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Kv {
    constructor(private readonly options: Kv.Options) {}

    /**
     * Returns a specific key-value entry by key.
     * @throws {Rivet.InternalError}
     * @throws {Rivet.RateLimitError}
     * @throws {Rivet.ForbiddenError}
     * @throws {Rivet.UnauthorizedError}
     * @throws {Rivet.NotFoundError}
     * @throws {Rivet.BadRequestError}
     */
    public async get(request: Rivet.kv.GetOperationRequest): Promise<Rivet.kv.GetResponse> {
        const { key, watchIndex, namespaceId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("key", key);
        if (watchIndex != null) {
            _queryParams.append("watch_index", watchIndex);
        }

        if (namespaceId != null) {
            _queryParams.append("namespace_id", namespaceId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.RivetEnvironment.Production, "/kv/entries"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.kv.GetResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
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

    /**
     * Puts (sets or overwrites) a key-value entry by key.
     * @throws {Rivet.InternalError}
     * @throws {Rivet.RateLimitError}
     * @throws {Rivet.ForbiddenError}
     * @throws {Rivet.UnauthorizedError}
     * @throws {Rivet.NotFoundError}
     * @throws {Rivet.BadRequestError}
     */
    public async put(request: Rivet.kv.PutRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.RivetEnvironment.Production, "/kv/entries"),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.kv.PutRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return;
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

    /**
     * Deletes a key-value entry by key.
     * @throws {Rivet.InternalError}
     * @throws {Rivet.RateLimitError}
     * @throws {Rivet.ForbiddenError}
     * @throws {Rivet.UnauthorizedError}
     * @throws {Rivet.NotFoundError}
     * @throws {Rivet.BadRequestError}
     */
    public async delete(request: Rivet.kv.DeleteOperationRequest): Promise<void> {
        const { key, namespaceId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("key", key);
        if (namespaceId != null) {
            _queryParams.append("namespace_id", namespaceId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.RivetEnvironment.Production, "/kv/entries"),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return;
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

    /**
     * Gets multiple key-value entries by key(s).
     * @throws {Rivet.InternalError}
     * @throws {Rivet.RateLimitError}
     * @throws {Rivet.ForbiddenError}
     * @throws {Rivet.UnauthorizedError}
     * @throws {Rivet.NotFoundError}
     * @throws {Rivet.BadRequestError}
     */
    public async getBatch(request: Rivet.kv.GetBatchRequest): Promise<Rivet.kv.GetBatchResponse> {
        const { keys, watchIndex, namespaceId } = request;
        const _queryParams = new URLSearchParams();
        if (Array.isArray(keys)) {
            for (const _item of keys) {
                _queryParams.append("keys", _item);
            }
        } else {
            _queryParams.append("keys", keys);
        }

        if (watchIndex != null) {
            _queryParams.append("watch_index", watchIndex);
        }

        if (namespaceId != null) {
            _queryParams.append("namespace_id", namespaceId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.RivetEnvironment.Production, "/kv/entries/batch"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.kv.GetBatchResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
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

    /**
     * Puts (sets or overwrites) multiple key-value entries by key(s).
     * @throws {Rivet.InternalError}
     * @throws {Rivet.RateLimitError}
     * @throws {Rivet.ForbiddenError}
     * @throws {Rivet.UnauthorizedError}
     * @throws {Rivet.NotFoundError}
     * @throws {Rivet.BadRequestError}
     */
    public async putBatch(request: Rivet.kv.PutBatchRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.RivetEnvironment.Production, "/kv/entries/batch"),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.kv.PutBatchRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return;
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

    /**
     * Deletes multiple key-value entries by key(s).
     * @throws {Rivet.InternalError}
     * @throws {Rivet.RateLimitError}
     * @throws {Rivet.ForbiddenError}
     * @throws {Rivet.UnauthorizedError}
     * @throws {Rivet.NotFoundError}
     * @throws {Rivet.BadRequestError}
     */
    public async deleteBatch(request: Rivet.kv.DeleteBatchRequest): Promise<void> {
        const { keys, namespaceId } = request;
        const _queryParams = new URLSearchParams();
        if (Array.isArray(keys)) {
            for (const _item of keys) {
                _queryParams.append("keys", _item);
            }
        } else {
            _queryParams.append("keys", keys);
        }

        if (namespaceId != null) {
            _queryParams.append("namespace_id", namespaceId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.RivetEnvironment.Production, "/kv/entries/batch"),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return;
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
