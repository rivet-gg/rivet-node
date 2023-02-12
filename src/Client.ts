/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as AuthClient } from "./api/resources/auth/client/Client";
import { Client as ChatClient } from "./api/resources/chat/client/Client";
import { Client as KvClient } from "./api/resources/kv/client/Client";
import { Client as MatchmakerClient } from "./api/resources/matchmaker/client/Client";
import { Client as PartyClient } from "./api/resources/party/client/Client";
import { Client as IdentityClient } from "./api/resources/identity/client/Client";

export declare namespace RivetClient {
    interface Options {
        environment?: environments.RivetEnvironment | environments.RivetEnvironmentUrls;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class RivetClient {
    constructor(private readonly options: RivetClient.Options) {}

    #auth: AuthClient | undefined;

    public get auth(): AuthClient {
        return (this.#auth ??= new AuthClient(this.options));
    }

    #chat: ChatClient | undefined;

    public get chat(): ChatClient {
        return (this.#chat ??= new ChatClient(this.options));
    }

    #kv: KvClient | undefined;

    public get kv(): KvClient {
        return (this.#kv ??= new KvClient(this.options));
    }

    #matchmaker: MatchmakerClient | undefined;

    public get matchmaker(): MatchmakerClient {
        return (this.#matchmaker ??= new MatchmakerClient(this.options));
    }

    #party: PartyClient | undefined;

    public get party(): PartyClient {
        return (this.#party ??= new PartyClient(this.options));
    }

    #identity: IdentityClient | undefined;

    public get identity(): IdentityClient {
        return (this.#identity ??= new IdentityClient(this.options));
    }
}
