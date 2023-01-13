/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetApi } from "@fern-api/rivet";

export type PartyMemberState =
  /**
   * A party member state denoting that the member is idle. */
  | RivetApi.commons.PartyMemberState.Idle
  /**
   * A party member state denoting that the member is currently waiting to start matchmaking. */
  | RivetApi.commons.PartyMemberState.MatchmakerPending
  /**
   * A party member state denoting that the member is currently searching for a lobby. */
  | RivetApi.commons.PartyMemberState.MatchmakerFindingLobby
  | RivetApi.commons.PartyMemberState.MatchmakerLobby
  | RivetApi.commons.PartyMemberState._Unknown;

export declare namespace PartyMemberState {
  interface Idle extends _Utils {
    type: "idle";
  }

  interface MatchmakerPending extends _Utils {
    type: "matchmaker_pending";
  }

  interface MatchmakerFindingLobby extends _Utils {
    type: "matchmaker_finding_lobby";
  }

  interface MatchmakerLobby extends RivetApi.commons.PartyMemberStateMatchmakerLobby, _Utils {
    type: "matchmaker_lobby";
  }

  interface _Unknown extends _Utils {
    type: void;
  }

  interface _Utils {
    _visit: <_Result>(visitor: RivetApi.commons.PartyMemberState._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    idle: () => _Result;
    matchmakerPending: () => _Result;
    matchmakerFindingLobby: () => _Result;
    matchmakerLobby: (value: RivetApi.commons.PartyMemberStateMatchmakerLobby) => _Result;
    _other: (value: { type: string }) => _Result;
  }
}

export const PartyMemberState = {
  idle: (): RivetApi.commons.PartyMemberState.Idle => {
    return {
      type: "idle",
      _visit: function <_Result>(
        this: RivetApi.commons.PartyMemberState.Idle,
        visitor: RivetApi.commons.PartyMemberState._Visitor<_Result>
      ) {
        return RivetApi.commons.PartyMemberState._visit(this, visitor);
      },
    };
  },

  matchmakerPending: (): RivetApi.commons.PartyMemberState.MatchmakerPending => {
    return {
      type: "matchmaker_pending",
      _visit: function <_Result>(
        this: RivetApi.commons.PartyMemberState.MatchmakerPending,
        visitor: RivetApi.commons.PartyMemberState._Visitor<_Result>
      ) {
        return RivetApi.commons.PartyMemberState._visit(this, visitor);
      },
    };
  },

  matchmakerFindingLobby: (): RivetApi.commons.PartyMemberState.MatchmakerFindingLobby => {
    return {
      type: "matchmaker_finding_lobby",
      _visit: function <_Result>(
        this: RivetApi.commons.PartyMemberState.MatchmakerFindingLobby,
        visitor: RivetApi.commons.PartyMemberState._Visitor<_Result>
      ) {
        return RivetApi.commons.PartyMemberState._visit(this, visitor);
      },
    };
  },

  matchmakerLobby: (
    value: RivetApi.commons.PartyMemberStateMatchmakerLobby
  ): RivetApi.commons.PartyMemberState.MatchmakerLobby => {
    return {
      ...value,
      type: "matchmaker_lobby",
      _visit: function <_Result>(
        this: RivetApi.commons.PartyMemberState.MatchmakerLobby,
        visitor: RivetApi.commons.PartyMemberState._Visitor<_Result>
      ) {
        return RivetApi.commons.PartyMemberState._visit(this, visitor);
      },
    };
  },

  _unknown: (value: { type: string }): RivetApi.commons.PartyMemberState._Unknown => {
    return {
      ...(value as any),
      _visit: function <_Result>(
        this: RivetApi.commons.PartyMemberState._Unknown,
        visitor: RivetApi.commons.PartyMemberState._Visitor<_Result>
      ) {
        return RivetApi.commons.PartyMemberState._visit(this, visitor);
      },
    };
  },

  _visit: <_Result>(
    value: RivetApi.commons.PartyMemberState,
    visitor: RivetApi.commons.PartyMemberState._Visitor<_Result>
  ): _Result => {
    switch (value.type) {
      case "idle":
        return visitor.idle();
      case "matchmaker_pending":
        return visitor.matchmakerPending();
      case "matchmaker_finding_lobby":
        return visitor.matchmakerFindingLobby();
      case "matchmaker_lobby":
        return visitor.matchmakerLobby(value);
      default:
        return visitor._other(value as any);
    }
  },
} as const;