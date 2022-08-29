# FPL Data

This repository contains the resolvers and schemas for a GraphQL endpoint which fetches data from the FPL API.

The data from 11 of the FPL endpoints (listed below) can be queried from this GraphQL endpoint.

---

## How to open the GraphQL playground

1) Clone this repository.
```bash
# With HTTPS:
$ git clone https://github.com/JackRogers9/fpl-data.git

# With SSH:
$ git clone git@github.com:JackRogers9/fpl-data.git
```

2) Initialize and update submodules.
```bash
$ git submodule init

$ git submodule update
```

3) Install dependencies.
```bash
$ npm install
```

4) Run the server.
```bash
$ npm run server
```

5) Navigate to [`http://localhost:9000/`](http://localhost:9000/).

---

| Endpoints                                                                        | Description                                                                                                                   |
|----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| https://fantasy.premierleague.com/api/bootstrap-static/                          | Provides general information such as event data, teams, and player data.                                                      |
| https://fantasy.premierleague.com/api/fixtures/                                  | Provides all fixtures in the current season.                                                                                  |
| https://fantasy.premierleague.com/api/event-status/                              | Confirms when bonus points have been added.                                                                                   |
| https://fantasy.premierleague.com/api/element-summary/{element_id}/              | Provides detailed information for a player such as remaining fixtures, performances in games, and data from previous seasons. |
| https://fantasy.premierleague.com/api/event/{event_id}/live/                     | Provides a list of player data from that gameweek.                                                                            |
| https://fantasy.premierleague.com/api/entry/{manager_id}/                        | Provides general information on the manager such as total points, rank, and team name.                                        |
| https://fantasy.premierleague.com/api/entry/{manager_id}/event/{event_id}/picks/ | Provides a manager's team from that gameweek and details on the team performance.                                              |
| https://fantasy.premierleague.com/api/entry/{manager_id}/history/                | Provides manager data from previous events and previous seasons.                                                              |
| https://fantasy.premierleague.com/api/entry/{manager_id}/transfers/              | Provides information on the transfers a manager has made in the current season.                                               |
| https://fantasy.premierleague.com/api/dream-team/{event_id}/                     | Provides information on the highest scoring players from that gameweek.                                                       |
| https://fantasy.premierleague.com/api/team/set-piece-notes/                      | Provides information on each team's set-piece takers.                                                                          |

---
