# FPL Data Interfaces Submodule

A repository containing the interfaces for the data returned by each of the FPL endpoints.

---

| Endpoints                                                                        | Description                                                                                                                   |
|----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| https://fantasy.premierleague.com/api/bootstrap-static/                          | Provides general information such as event data, teams, and player data.                                                      |
| https://fantasy.premierleague.com/api/fixtures/                                  | Provides all fixtures in the current season.                                                                                  |
| https://fantasy.premierleague.com/api/event-status/                              | Confirms when bonus points have been added.                                                                                   |
| https://fantasy.premierleague.com/api/element-summary/{element_id}/              | Provides detailed information for a player such as remaining fixtures, performances in games, and data from previous seasons. |
| https://fantasy.premierleague.com/api/event/{event_id}/live/                     | Provides a list of player data from that gameweek.                                                                            |
| https://fantasy.premierleague.com/api/entry/{manager_id}/                        | Provides general information on the manager such as total points, rank, and team name.                                        |
| https://fantasy.premierleague.com/api/entry/{manager_id}/event/{event_id}/picks/ | Provides a managers team from that gameweek and details on the team performance.                                              |
| https://fantasy.premierleague.com/api/entry/{manager_id}/history/                | Provides manager data from previous events and previous seasons.                                                              |
| https://fantasy.premierleague.com/api/dream-team/{event_id}/                     | Provides information on the highest scoring players from that gameweek.                                                       |
| https://fantasy.premierleague.com/api/team/set-piece-notes/                      | Provides information on each teams set-piece takers.                                                                          |

---
