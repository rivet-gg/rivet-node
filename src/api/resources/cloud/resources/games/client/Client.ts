/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { Client as AvatarsClient } from "../resources/avatars/client/Client";
import { Client as BuildsClient } from "../resources/builds/client/Client";
import { Client as CdnClient } from "../resources/cdn/client/Client";
import { Client as GamesClient } from "../resources/games/client/Client";
import { Client as MatchmakerClient } from "../resources/matchmaker/client/Client";
import { Client as NamespacesClient } from "../resources/namespaces/client/Client";
import { Client as TokensClient } from "../resources/tokens/client/Client";
import { Client as VersionsClient } from "../resources/versions/client/Client";

export declare namespace Client {
    interface Options {
        environment?: environments.RivetEnvironment | environments.RivetEnvironmentUrls;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    #avatars: AvatarsClient | undefined;

    public get avatars(): AvatarsClient {
        return (this.#avatars ??= new AvatarsClient(this.options));
    }

    #builds: BuildsClient | undefined;

    public get builds(): BuildsClient {
        return (this.#builds ??= new BuildsClient(this.options));
    }

    #cdn: CdnClient | undefined;

    public get cdn(): CdnClient {
        return (this.#cdn ??= new CdnClient(this.options));
    }

    #games: GamesClient | undefined;

    public get games(): GamesClient {
        return (this.#games ??= new GamesClient(this.options));
    }

    #matchmaker: MatchmakerClient | undefined;

    public get matchmaker(): MatchmakerClient {
        return (this.#matchmaker ??= new MatchmakerClient(this.options));
    }

    #namespaces: NamespacesClient | undefined;

    public get namespaces(): NamespacesClient {
        return (this.#namespaces ??= new NamespacesClient(this.options));
    }

    #tokens: TokensClient | undefined;

    public get tokens(): TokensClient {
        return (this.#tokens ??= new TokensClient(this.options));
    }

    #versions: VersionsClient | undefined;

    public get versions(): VersionsClient {
        return (this.#versions ??= new VersionsClient(this.options));
    }
}