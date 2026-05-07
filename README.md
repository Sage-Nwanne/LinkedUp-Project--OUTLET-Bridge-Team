# OUTLET Bridge Team — Infrastructure Diagram

**LinkedUP Church · Young Adult Ministry**

> **Just want to read it?** Open the link below in any browser — no account, no download, no setup required.
>
> **[→ View the live site](https://sage-nwanne.github.io/LinkedUp-Project--OUTLET-Bridge-Team/)**

---

## What this is

This is an interactive reference diagram for the OUTLET Bridge Team — the relational infrastructure layer inside LinkedUP Church's young adult ministry.

The OUTLET successfully brings people through the door. The Bridge Team is the system responsible for making sure those people don't just attend, but actually become connected. That means intentional follow-up, intelligent Connect Group matching, a weekly review loop, defined roles, and a clear escalation chain — all working together.

This site visualizes that entire system: the pipeline, the team structure, the operational protocol, the policies, and the concrete dialogue scripts the team uses in the field.

---

## Who this is for

| Reader | What to do |
|--------|-----------|
| **Ministry leadership** | Open the link. Read the Mission, Problem, and Pipeline sections. The Protocol tab has the full OPP. |
| **Bridge Team volunteers** | Open the link. The Protocol → Dialogue Routes tab has word-for-word scripts for the situations you'll run into. |
| **Connect Group leaders** | Open the link. Team and Communication sections explain how handoffs from the Bridge Team work. |
| **New team members being onboarded** | Read the site top to bottom, then open the hamburger menu (top-right) to read the full source documentation. |

---

## What the site covers

### The Pipeline
Seven stages every attendee moves through — from the first time they hear about the OUTLET to becoming a long-term connected member or future leader.

`Awareness → Arrival → Connection → Group Matching → Trial Integration → Retention → Leadership Development`

Each stage has a goal, a responsible team, and defined systems for what happens when it works and when it doesn't.

### The Problem
Why this infrastructure exists. The OUTLET already has strong attraction. What it has lacked is the operational layer that turns recurring attendance into real community.

### Mission & Team
The Bridge Team's mandate, core philosophy, and the four roles that carry the work: Bridge Team Lead, Connection Coordinators, Follow-Up Coordinators, and Operations Coordinator.

### Communication
How information flows during and after events. Who talks to whom, who owns each step, and the escalation chain from volunteer to pastoral leadership.

### Protocol (OPP)
The Operational Pipeline Protocol — the standard the team runs against at every event. Five areas:

- **Onboarding** — how new attendees are received and logged
- **Conduct** — behavioral standards for every team member
- **Escalation** — what to do when something goes wrong, and how to hand it off correctly
- **Failsafes** — checks that keep the system human-centered and prevent clique formation or manipulation
- **Dialogue Routes** — concrete sample scripts for the most common situations: greeting a first-time visitor, approaching someone standing alone, same-night follow-up text, mid-week check-in, Connect Group invitation, re-engaging someone who has drifted, handling a group that isn't the right fit, and escalating a sensitive situation

### The Improvement Loop
The cycle the team runs after every event — Observe → Analyze → Refine → Re-deploy. The system is designed to improve with every iteration.

### First Iteration
What is actually being put in place now: roles, arrival protocol, intake form, attendee log, follow-up cadence, weekly review meeting, and the escalation chain in writing.

---

## Source documentation

The hamburger menu (top-right corner of the site) opens a full documentation drawer with all four source files verbatim:

- **Project Handoff** — mission, philosophy, full member journey, and long-term vision
- **Infrastructure Guide** — pipeline detail, human and technical infrastructure, team responsibilities
- **OUTLET Pipeline Protocol (OPP)** — the operational intelligence system
- **Policies & Behavior Framework** — operational standards, conduct, governance, and failsafes

---

## For developers (making changes)

You only need this section if you are updating the site. Readers do not need to touch the code.

**Requirements:** Node.js 18+, npm

```bash
# Clone and run locally
git clone https://github.com/Sage-Nwanne/LinkedUp-Project--OUTLET-Bridge-Team.git
cd LinkedUp-Project--OUTLET-Bridge-Team
npm install
npm run dev
# Open http://localhost:5173
```

```bash
# Publish changes
git add -A
git commit -m "describe what you changed"
git push
# GitHub Actions redeploys the site automatically within ~2 minutes
```

Almost all text content lives in `src/data.js`. Pipeline stages, team roles, protocol tabs, dialogue scripts, MVP scope — if you need to update what the site says, start there.

---

## Repository structure

```
src/
├── data.js                   # All site content
├── sections/                 # One file per page section
│   ├── Hero.jsx, Mission.jsx, Problem.jsx
│   ├── Pipeline.jsx, Team.jsx, Communication.jsx
│   ├── Protocol.jsx, Loop.jsx, Mvp.jsx
├── components/
│   ├── DocsDrawer.jsx        # Hamburger documentation drawer
│   ├── Markdown.jsx          # Lightweight markdown renderer
│   └── Icons.jsx             # SVG icon set
└── the OUTLET/               # Source documentation (markdown)
    ├── OUTLET_Bridge_Team_Project_Handoff.md
    ├── OUTLET_Bridge_Team_Infrastructure_Guide.md
    ├── OPP_OUTLET_Pipeline_Protocol.md
    └── OPP_Policies_and_Behavior_Framework.md
```

**Tech:** React 19 · Vite 8 · Custom CSS · GitHub Actions → GitHub Pages

---

*OUTLET Bridge Team · LinkedUP Church Young Adults*

