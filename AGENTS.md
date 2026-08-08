# Causality

Causality is a realtime coordination platform for teams building software with AI.

The product helps teams go from:

idea → architecture → starter project → collaborative development → impact detection → synchronization.

## Product surfaces

### Web App

The web app allows the team to:

- describe their idea
- generate an initial plan
- review architecture
- define tasks
- define shared contracts
- generate the starter project
- view the live project control room

### Project Generator

The generator creates the initial project structure.

MVP support:

- React
- Node.js
- TypeScript
- REST APIs
- one repository

It can generate:

- folders
- initial files
- API contracts
- frontend API client stubs
- backend route stubs
- mock data
- causality.json
- README

The generator creates structure and boundaries, not complete business logic.

### VS Code Extension

The extension is the developer-facing part of Causality.

It should eventually:

- connect a workspace to a Causality project
- show the current user
- show the current task
- show team presence
- observe workspace file changes
- send relevant change information to the Causality backend
- display impact alerts
- show project synchronization state
- eventually provide team chat

Developers may use any coding assistant:

- GitHub Copilot
- Claude
- Gemini
- Cursor
- other AI tools
- manual coding

Causality does not control these tools.

Causality observes the resulting project changes.

### Backend

The backend is responsible for:

- project state
- users
- team members
- tasks
- components
- contracts
- dependencies
- workspace state
- file change events
- diff analysis
- dependency graph
- impact matching
- contract verification

### Portal

Portal is the realtime layer.

Use Portal for:

- presence
- project events
- live project state
- targeted impact notifications
- synchronization between clients

Do not replace Portal with:

- Socket.io
- Firebase Realtime
- Pusher
- custom WebSocket infrastructure

Portal should carry meaningful realtime events and state, not the entire source code.

## MVP scope

Focus on:

- TypeScript
- React
- Node.js
- REST APIs
- one repository
- 2-4 developers

Do NOT implement yet:

- GitHub integration inside Causality
- multi-repository support
- multi-language analysis
- automatic Git merging
- full CI/CD
- custom IDE
- autonomous Causality coding agent
- complex enterprise authentication

GitHub is used as the development and hackathon repository.

## Core concept

Causality maintains a living understanding of the project.

Dependencies have three states:

PLANNED → OBSERVED → VERIFIED

Example:

ResultsPage
    ↓
RecommendationAPI

PLANNED:
The relationship comes from the project architecture.

OBSERVED:
The actual code demonstrates the relationship.

VERIFIED:
A contract or test confirms compatibility.

The original plan is not always correct. Causality should combine planned information with observed information.

## Planned information

- architecture
- tasks
- contracts
- intended dependencies

## Observed information

- changed files
- imports
- API calls
- routes
- schemas
- actual dependencies

## Core realtime flow

developer changes code
→ Causality analyzes the change
→ determines affected components/users
→ Portal publishes the relevant event
→ affected developers receive the update
→ project state changes
→ team becomes synchronized again

Example:

Martin changes RecommendationAPI.

Causality determines that Laura's current task depends on RecommendationAPI.

Portal sends Laura:

"Your current work is affected."

This is a core product interaction.

## Architecture principles

Keep the architecture simple and understandable.

Prefer small, testable implementations.

Avoid premature abstractions.

Do not add technologies without a clear reason.

Do not implement features that are not requested.

Do not make major architectural changes without explaining them.

Every feature should have clear acceptance criteria.

Run tests, typechecks and builds before declaring work complete.

Never hide build or test failures.

The hackathon demo is a priority.

The final experience should be understandable within seconds.