import { useReducer } from "react";
import {
    Knockout,
    Sixteen,
    Quarter,
    Semifinals,
    Final,
    Playoffs,
    Match,
    MatchHeader,
    Group,
    GroupName,
    Groups,
    Main,
    Teams,
    Header,
    ShareButton,
} from "./App.styled";

import Team, { EmptyTeam } from "./Team";

import data, { TEAMS } from "./data";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    font-weight: 200;
    background-color: #f8f8f8;
  }
`;

type State = Record<string, number>;

const reducer = (state: State, action: { type: string; payload: any }) => {
    let newState = state;
    switch (action.type) {
        case "setTeam":
            const { group, i } = action.payload;
            const firstTeam = state[`${group}1`];
            const secondTeam = state[`${group}2`];
            if (firstTeam === i) {
                newState = {
                    ...state,
                    [`${group}1`]: undefined,
                } as State;
            } else if (secondTeam === i) {
                newState = {
                    ...state,
                    [`${group}2`]: undefined,
                } as State;
            } else if (typeof firstTeam === "undefined") {
                newState = {
                    ...state,
                    [`${group}1`]: i,
                };
            } else if (typeof secondTeam === "undefined") {
                newState = {
                    ...state,
                    [`${group}2`]: i,
                };
            }
            break;
        case "set":
            const { key, team } = action.payload;
            newState = {
                ...state,
                [key]: team,
            };
            break;
        default:
            throw new Error("Unrecognised type");
    }
    window.location.hash = encodeURIComponent(JSON.stringify(newState));
    return newState;
};

const initialState: State = window.location.hash
    ? JSON.parse(decodeURIComponent(window.location.hash.replace(/^#/, "")))
    : {};

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProps = (stage: string, i: number, stateKey: string, loserKey?: string) => {
        const key = `${stage}${i + 1}`;
        const team = state[stateKey];
        return {
            onClick: () => {
                dispatch({
                    type: "set",
                    payload: { key, team },
                });
                if (loserKey) {
                    dispatch({
                        type: "set",
                        payload: { key: `${stage}${i + 3}`, team: state[loserKey] },
                    });
                }
            },
            selected: state[key] === team,
        };
    };

    return (
        <Main>
            <GlobalStyle />
            <Header>Group Stage</Header>
            <Groups>
                {Object.entries(data.groups).map(([group, teams]) => (
                    <Group key={group}>
                        <GroupName>Group {group}</GroupName>
                        <Teams>
                            {teams.map((i) => (
                                <Team
                                    key={TEAMS[i].name}
                                    team={TEAMS[i]}
                                    selected={state[`${group}1`] === i}
                                    selected2={state[`${group}2`] === i}
                                    onClick={() =>
                                        dispatch({
                                            type: "setTeam",
                                            payload: { group, i },
                                        })
                                    }
                                    isGroup
                                />
                            ))}
                        </Teams>
                    </Group>
                ))}
            </Groups>
            <Header>Knockoff Stage</Header>
            <Knockout>
                <Sixteen>
                    {data.knockout.sixteen.map((match, i) => {
                        const team1 = TEAMS[state[match[0]]];
                        const team2 = TEAMS[state[match[1]]];
                        return (
                            <Match key={match[0] + match[1]}>
                                <MatchHeader>Round of 16 {i}</MatchHeader>
                                {team1 ? (
                                    <Team team={team1} {...getProps("sixteen", i, match[0])} />
                                ) : (
                                    <EmptyTeam name={match[0]} />
                                )}
                                {team2 ? (
                                    <Team team={team2} {...getProps("sixteen", i, match[1])} />
                                ) : (
                                    <EmptyTeam name={match[1]} />
                                )}
                            </Match>
                        );
                    })}
                </Sixteen>
                <Quarter>
                    {data.knockout.quarter.map((match, i) => {
                        const team1 = TEAMS[state[match[0]]];
                        const team2 = TEAMS[state[match[1]]];
                        return (
                            <Match key={match[0] + match[1]}>
                                <MatchHeader>Quarter-final {i}</MatchHeader>
                                {team1 ? (
                                    <Team team={team1} {...getProps("quarter", i, match[0])} />
                                ) : (
                                    <EmptyTeam name={match[0]} />
                                )}
                                {team2 ? (
                                    <Team team={team2} {...getProps("quarter", i, match[1])} />
                                ) : (
                                    <EmptyTeam name={match[1]} />
                                )}
                            </Match>
                        );
                    })}
                </Quarter>
                <Semifinals>
                    {data.knockout.semifinal.map((match, i) => {
                        const team1 = TEAMS[state[match[0]]];
                        const team2 = TEAMS[state[match[1]]];
                        return (
                            <Match key={match[0] + match[1]}>
                                <MatchHeader>Semi-final {i}</MatchHeader>
                                {team1 ? (
                                    <Team team={team1} {...getProps("semifinal", i, match[0], match[1])} />
                                ) : (
                                    <EmptyTeam name={match[0]} />
                                )}
                                {team2 ? (
                                    <Team team={team2} {...getProps("semifinal", i, match[1], match[0])} />
                                ) : (
                                    <EmptyTeam name={match[1]} />
                                )}
                            </Match>
                        );
                    })}
                </Semifinals>
                <Final>
                    <Playoffs>
                        {data.knockout.playoff.map((match, i) => {
                            const team1 = TEAMS[state[match[0]]];
                            const team2 = TEAMS[state[match[1]]];
                            return (
                                <Match key={match[0] + match[1]}>
                                    <MatchHeader>3rd & 4th</MatchHeader>
                                    {team1 ? (
                                        <Team team={team1} {...getProps("playoff", i, match[0])} />
                                    ) : (
                                        <EmptyTeam name={match[0]} />
                                    )}
                                    {team2 ? (
                                        <Team team={team2} {...getProps("playoff", i, match[1])} />
                                    ) : (
                                        <EmptyTeam name={match[1]} />
                                    )}
                                </Match>
                            );
                        })}
                    </Playoffs>
                    {data.knockout.final.map((match, i) => {
                        const team1 = TEAMS[state[match[0]]];
                        const team2 = TEAMS[state[match[1]]];
                        return (
                            <Match key={match[0] + match[1]}>
                                <MatchHeader>Final</MatchHeader>
                                {team1 ? (
                                    <Team team={team1} {...getProps("final", i, match[0])} />
                                ) : (
                                    <EmptyTeam name={match[0]} />
                                )}
                                {team2 ? (
                                    <Team team={team2} {...getProps("final", i, match[1])} />
                                ) : (
                                    <EmptyTeam name={match[1]} />
                                )}
                            </Match>
                        );
                    })}
                </Final>
            </Knockout>
            <ShareButton onClick={() => navigator.clipboard.writeText(window.location.href)}>Share</ShareButton>
        </Main>
    );
};

export default App;
