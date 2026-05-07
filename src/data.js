// Content sourced from /src/the OUTLET/*.md
// Keep this file as the single source of truth for the diagram.

export const pipeline = [
  {
    id: 'awareness',
    n: '01',
    title: 'Awareness',
    subtitle: 'Discovery Phase',
    accent: 'var(--amber)',
    summary: 'How young adults discover the OUTLET and lower their entry barriers.',
    about:
      'Awareness is how curiosity is generated before anyone walks through the door. Strong awareness reduces the social cost of showing up — when someone has already seen clips, scrolled the page, or heard a friend describe the room, the first visit feels less like a leap and more like a continuation. The Bridge Team partners with media here, but its real job at this stage is to make sure invite chains stay personal: the highest-converting source is still a friend texting a friend.',
    inputs: ['Instagram', 'TikTok', 'Flyers', 'Word of mouth', 'Church announcements', 'Campus outreach', 'Event clips', 'Existing church members'],
    goals: ['Generate curiosity', 'Lower entry barriers', 'Drive first attendance', 'Make the first visit feel safe before it happens'],
    owners: ['Media Team', 'OUTLET Bridge Team', 'Hospitality'],
    friction: ['Unclear value proposition', 'Poor reach on social', 'Weak personal invite chains', 'No clear RSVP path'],
    failStates: ['No one outside the existing circle knows it exists', 'Curious people never RSVP', 'Reach grows but attendance does not'],
    metrics: ['RSVP conversion rate', 'Reach vs attendance ratio', 'First-time visitor rate', 'Invites per existing attendee'],
  },
  {
    id: 'arrival',
    n: '02',
    title: 'Arrival',
    subtitle: 'First In-Person Touch',
    accent: 'var(--accent)',
    summary: 'The first physical interaction. This stage determines emotional openness.',
    about:
      'Arrival is the most fragile moment in the entire pipeline. A first-time attendee is making a real-time decision about whether this room is safe, whether they belong, and whether they will return. The Bridge Team must close the gap between walking in and being acknowledged to seconds, not minutes. The critical success metric is simple and binary: nobody should feel invisible. If an attendee stands alone for more than a moment, the system has failed at this stage regardless of what happens next.',
    inputs: ['Greeting station', 'Hospitality flow', 'Active name learning', 'Intentional intro pairings', 'Hosted seating'],
    goals: ['Greet every attendee within seconds', 'Learn and use names', 'Reduce awkwardness', 'Prevent isolation', 'Set emotional tone for the night'],
    owners: ['Hospitality Team', 'Bridge Team Connectors', 'Connection Coordinators'],
    friction: ['Empty greeting station', 'Standing alone', 'Cold or chaotic rooms', 'Volunteers clustered with each other'],
    failStates: ['Visitor feels invisible', 'Visitor leaves before connection', 'Visitor returns home convinced it is not for them'],
    metrics: ['First-touch within 60s', 'Solo-attendee count', 'Early-exit rate'],
  },
  {
    id: 'connection',
    n: '03',
    title: 'Connection',
    subtitle: 'Relationship Formation',
    accent: 'var(--rose)',
    summary: 'The most important stage. Whether someone returns is decided here.',
    about:
      'Connection is where the OUTLET stops being an event and starts becoming a community. This is the stage that decides whether someone returns next month. Real conversation, shared interests discovered honestly, and at least one face that an attendee can remember by name — these are the inputs that build emotional attachment. Volunteers must resist the gravity of talking only to each other; the connector\u2019s job is to break their own clique on behalf of the person standing on the edge of the room.',
    inputs: ['Conversation facilitation by Connection Coordinators', 'Shared-interest pairing', 'Social mapping notes', 'Active introductions between attendees'],
    goals: ['Spark genuine conversation', 'Identify similarities and shared ground', 'Build emotional comfort', 'Make at least one memorable connection per visit'],
    owners: ['Connection Coordinators', 'Bridge Team Members'],
    friction: ['Cliques among regulars', 'Volunteers talking only to each other', 'Conversation that stays surface-level', 'Loud rooms with no quiet pockets'],
    failStates: ['Visitor never spoken to beyond a greeting', 'No one remembers them by next event', 'Visitor leaves feeling like a guest, not a friend'],
    metrics: ['Return rate of first-time visitors', 'Names remembered week-over-week', 'Self-reported comfort after first visit', 'Number of new pairings per event'],
  },
  {
    id: 'matching',
    n: '04',
    title: 'Group Matching',
    subtitle: 'The Bridge Phase',
    accent: 'var(--violet)',
    summary: 'Identify interests, schedules, personality, spiritual goals — then recommend.',
    about:
      'Group Matching is the literal bridge in Bridge Team. Once a person is comfortable, the Bridge Team uses everything it has learned — interests, personality, availability, life stage, social comfort, spiritual goals, hobbies, relational chemistry — to recommend a Connect Group, a person, or an environment that genuinely fits. This must never feel robotic or assigned. A recommendation is an invitation. The success measure is not how many people get placed; it is how many people get placed well enough that the first-group experience feels like home.',
    inputs: ['Intake form responses', 'Conversation notes from Connection Coordinators', 'Up-to-date Connect Group catalog', 'Leader feedback on group culture'],
    goals: ['Match by interests, schedule, and personality', 'Recommend the right people, not just the right group', 'Make every recommendation feel personal'],
    owners: ['Group Match Coordinators', 'Connect Group Leaders', 'Bridge Team Lead'],
    friction: ['Random placement', 'Robotic intake forms', 'Schedule or geography mismatch', 'Recommendations made without the leader\u2019s input'],
    failStates: ['Visitor placed in a wrong-fit group on first try', 'Recommendation feels assigned, not invited', 'Person disengages before the first group meeting'],
    metrics: ['Connect Group conversion rate', 'First-group satisfaction', 'Match-to-attendance follow-through rate'],
  },
  {
    id: 'trial',
    n: '05',
    title: 'Trial Integration',
    subtitle: 'The Add / Drop Period',
    accent: 'var(--cyan)',
    summary: 'College-style add/drop. Try, switch, leave without guilt — pressure stays low.',
    about:
      'Trial Integration borrows directly from how college students approach the first weeks of a semester: try the class, see how it feels, and if it does not fit, drop it without consequence. Young adults need the same permission inside ministry. They should be allowed to try groups, switch groups, explore environments, and leave without guilt. A bad fit is not a failure — it is data. This stage exists specifically to lower social pressure so that long-term commitment is the result of genuine alignment, not obligation.',
    inputs: ['Visits to multiple Connect Groups', 'Lightweight, non-pressuring follow-ups', 'Honest feedback channels', 'Permission framing from leadership'],
    goals: ['Give explicit permission to explore', 'Give explicit permission to leave', 'Optimize for fit, not loyalty', 'Surface honest feedback about what is and is not working'],
    owners: ['Follow-Up Coordinators', 'Connect Group Leaders', 'Bridge Team Lead'],
    friction: ['Guilt-tripping language', 'Pressure to commit too early', 'No clear exit door', 'Leaders who take group-changes personally'],
    failStates: ['Person stays in a bad-fit group out of obligation', 'Person ghosts the ministry to escape social pressure', 'Honest feedback never reaches the team'],
    metrics: ['Group-switching rate (healthy when non-zero)', 'Time-to-fit', 'Honest exit-feedback response rate', 'Trial-to-committed conversion rate'],
  },
  {
    id: 'retention',
    n: '06',
    title: 'Retention',
    subtitle: 'Long-Term Belonging',
    accent: 'var(--emerald)',
    summary: 'Retention is not attendance. It is emotional safety, relationships, and ownership.',
    about:
      'Retention is the most misunderstood stage in most ministries. Retention is not the same as attendance. A person can attend for a year and still be unconnected. True retention is measured in emotional safety, recurring participation, real relationships, ownership of the community, and a sense that this place is theirs. By this stage, the Bridge Team is no longer the primary driver — Connect Group Leaders are. The Bridge Team\u2019s job becomes monitoring health, watching for quiet drop-off, and protecting the environments that produce belonging.',
    inputs: ['Recurring relational touchpoints', 'Real ownership opportunities', 'Healthy Connect Group environments', 'Friendships that exist outside scheduled meetings'],
    goals: ['Sustain recurring participation', 'Maintain emotional safety', 'Build ownership and identity inside the community', 'Detect drop-off early enough to act'],
    owners: ['Connect Group Leaders', 'Bridge Team Lead', 'Follow-Up Coordinators'],
    friction: ['Volunteer and leader burnout', 'Schedule churn', 'Unhealthy or stagnant group environments', 'Lack of visibility into who is quietly fading'],
    failStates: ['Quiet drop-off with no one noticing', 'Attendance continues without true belonging', 'A person becomes a regular but never a member'],
    metrics: ['90-day retention rate', 'Friendships reported per attendee', 'Volunteer-pipeline conversion rate', 'Re-engagement rate after a missed month'],
  },
  {
    id: 'leadership',
    n: '07',
    title: 'Leadership Multiplication',
    subtitle: 'The System Reproduces',
    accent: '#f472b6',
    summary: 'Attendees become connectors, hosts, facilitators, leaders, future Connect Group leaders.',
    about:
      'Leadership Multiplication is the highest level of the pipeline and the proof that the system actually works. The people who were once first-time visitors become the connectors, hosts, facilitators, mentors, and Connect Group leaders for the next wave of newcomers. When this stage runs healthily, the pipeline reproduces itself: every cohort produces the volunteers and leaders required to integrate the next cohort. When this stage is neglected, the ministry hits a bottleneck — the same handful of leaders carry every burden until they burn out and the entire system contracts.',
    inputs: ['Mentorship pairings', 'Structured volunteer training', 'Real responsibility delegated early', 'Pathways into Connect Group leadership'],
    goals: ['Develop volunteers intentionally', 'Raise the next generation of leaders', 'Reproduce the system without the original team', 'Make leadership accessible, accountable, and reviewable'],
    owners: ['Bridge Team Lead', 'Ministry Leadership', 'Connect Group Leaders'],
    friction: ['Untouchable or unaccountable leaders', 'No coaching loop', 'No clear succession plan', 'Volunteer roles that never grow into leadership roles'],
    failStates: ['Leadership bottleneck around a small group', 'No second generation of leaders raised', 'Burnout collapses the pipeline'],
    metrics: ['Leaders raised per quarter', 'Multiplication ratio (leaders : attendees)', 'Leader retention', 'Time from first visit to first leadership opportunity'],
  },
];

export const principles = [
  { k: 'People', v: 'over metrics' },
  { k: 'Relationships', v: 'over attendance' },
  { k: 'Belonging', v: 'over performance' },
  { k: 'Humanity', v: 'over optimization' },
];


export const teamRoles = [
  {
    id: 'lead',
    title: 'Bridge Team Lead',
    blurb: 'Pipeline oversight, volunteer coordination, escalation handling.',
    duties: ['Owns the pipeline end-to-end', 'Coordinates volunteers', 'Runs operational reviews', 'Handles escalations'],
  },
  {
    id: 'connection',
    title: 'Connection Coordinators',
    blurb: 'The frontline of relationship formation at every event.',
    duties: ['Introduce attendees to each other', 'Spot isolated individuals', 'Facilitate natural conversation'],
  },
  {
    id: 'followup',
    title: 'Follow-Up Coordinators',
    blurb: 'Relational continuity between events.',
    duties: ['Personal text check-ins', 'Mid-week conversations', 'Recommend Connect Groups', 'Flag drop-off risk'],
  },
  {
    id: 'match',
    title: 'Group Match Coordinators',
    blurb: 'Get the right person into the right room.',
    duties: ['Run compatibility analysis', 'Map interests + schedules to groups', 'Liaise with Connect Group Leaders'],
  },
  {
    id: 'ops',
    title: 'Operations Coordinators',
    blurb: 'The data + systems backbone.',
    duties: ['Maintain intake forms + CRM', 'Track attendance', 'Build reporting dashboards', 'Refine workflows'],
  },
  {
    id: 'hospitality',
    title: 'Hospitality Team',
    blurb: 'First impressions, seating flow, social comfort.',
    duties: ['Greet at the door', 'Manage seating flow', 'Reduce social awkwardness'],
  },
  {
    id: 'cgl',
    title: 'Connect Group Leaders',
    blurb: 'Where the community actually lives.',
    duties: ['Build healthy environments', 'Maintain consistency', 'Communicate, retain, disciple'],
  },
];

export const escalation = [
  { level: 'Minor Issue', from: 'Volunteer', to: 'Coordinator', tone: 'var(--emerald)' },
  { level: 'Operational Issue', from: 'Coordinator', to: 'Bridge Team Lead', tone: 'var(--cyan)' },
  { level: 'Sensitive / Pastoral', from: 'Bridge Team Lead', to: 'Ministry Leadership', tone: 'var(--rose)' },
];

export const eventChain = ['Attendee', 'Volunteer', 'Connection Coordinator', 'Bridge Team Lead', 'Ministry Leadership'];


export const protocolTabs = [
  {
    id: 'behavior',
    label: 'Behavior',
    intro: 'How every Bridge Team member is expected to show up. Connectors, never gatekeepers.',
    sections: [
      { h: 'Welcoming', p: 'People should feel safe approaching volunteers.' },
      { h: 'Observant', p: 'Actively notice isolation, awkwardness, discomfort, disengagement.' },
      { h: 'Invitational', p: 'No attendee should feel like they are intruding.' },
      { h: 'Non-Cliquish', p: 'Avoid exclusive social circles, insider language, visible favoritism.' },
      { h: 'Emotionally Intelligent', p: 'Read social energy, recognize discomfort, adapt.' },
      { h: 'Human', p: 'Conversations should feel authentic and natural — never robotic.' },
    ],
  },
  {
    id: 'policies',
    label: 'Policies',
    intro: 'Operational standards that protect consistency, trust, and emotional safety.',
    sections: [
      { h: 'Greeting', p: 'Every attendee acknowledged and welcomed intentionally. First-timers never stand alone unnoticed.' },
      { h: 'Name Retention', p: 'Actively learn names, reintroduce, reinforce familiarity. Names build trust.' },
      { h: 'Isolation Prevention', p: 'If someone is alone, leaving early, or disengaged — a Bridge Team member checks in.' },
      { h: 'Conversation Conduct', p: 'Open-ended questions. No dominating, no jokes at others\u2019 expense.' },
      { h: 'Follow-Up', p: 'Thoughtful and personal. Never transactional, automated, or pressuring.' },
      { h: 'Group Recommendation', p: 'Invitations, not assignments. Based on compatibility, comfort, and goals.' },
      { h: 'Privacy & Data', p: 'Attendees are not metrics. Sensitive info stays confidential. No psychological profiling.' },
      { h: 'Gossip Prevention', p: 'Never weaponize private info. Trust is foundational.' },
    ],
  },
  {
    id: 'failsafes',
    label: 'Failsafes',
    intro: 'Checks and balances that keep the system human-centered.',
    sections: [
      { h: 'Human Review Layer', p: 'All major decisions require human discernment, empathy, and leadership context.' },
      { h: 'Multi-Person Verification', p: 'No single person controls group placement, conflict decisions, or attendee assessments.' },
      { h: 'Social Safety Monitoring', p: 'Watch for exclusion, favoritism, burnout, gossip, unsafe leadership, clique formation.' },
      { h: 'New-Attendee Protection', p: 'First-timers are emotionally vulnerable. Protocols prevent social invisibility.' },
      { h: 'Leadership Accountability', p: 'No leadership position is untouchable. Leaders remain reviewable and coachable.' },
      { h: 'Clique Formation Protocol', p: 'When exclusive circles form, leadership intervenes and rebuilds bridges.' },
      { h: 'Burnout Protocol', p: 'Rotate responsibilities. Burned-out volunteers create unhealthy environments.' },
      { h: 'Ghosting Protocol', p: 'Respectful follow-up only. Care, never retention at all costs.' },
    ],
  },
  {
    id: 'dialogue',
    label: 'Dialogue Routes',
    kind: 'dialogue',
    intro:
      'Concrete sample scripts for the moments the Bridge Team runs into most often. These are starting points, not lines to recite. Adapt to the person in front of you and to your own voice.',
    sections: [
      {
        h: 'Greeting a first-time visitor',
        when: 'Someone walks in who you do not recognize.',
        lines: [
          { who: 'You', text: '\u201cHey, I do not think we have met \u2014 I\u2019m [name]. First time at OUTLET?\u201d' },
          { who: 'After they answer', text: '\u201cGlad you came. Let me grab you a seat and introduce you to a couple people. Who do you usually come to things like this with?\u201d' },
        ],
        avoid: 'Do not lead with church questions. Lead with them as a person.',
      },
      {
        h: 'Approaching someone standing alone',
        when: 'Mid-event, someone is on the edge of the room and not in conversation.',
        lines: [
          { who: 'You', text: '\u201cMind if I stand with you for a sec? I\u2019m [name] \u2014 what brought you out tonight?\u201d' },
          { who: 'Bridging into a group', text: '\u201cHey, come meet [name] \u2014 they were just telling me about [shared interest]. You two should talk.\u201d' },
        ],
        avoid: 'Do not abandon them right after the introduction. Stay until the conversation is actually warm.',
      },
      {
        h: 'Same-night follow-up text',
        when: 'Within a few hours of the event ending. Sent by a Connection Coordinator to every first-time visitor.',
        lines: [
          { who: 'Text', text: '\u201cHey [name], it was really good meeting you tonight. Glad you came out. No pressure at all \u2014 the next one is [date] if you ever want to come back. Either way, hope your week is good.\u201d' },
        ],
        avoid: 'No mass-text energy. Use their name. Reference something real from the conversation if you can.',
      },
      {
        h: 'Mid-week check-in text',
        when: 'Two to four days after a first visit. Sent by a Follow-Up Coordinator.',
        lines: [
          { who: 'Text', text: '\u201cHey [name], checking in \u2014 how has your week been? No agenda, just wanted to say it was good having you Saturday.\u201d' },
          { who: 'If they reply warmly', text: '\u201cThat\u2019s great. Random question \u2014 when you have a sec, would you be open to me sending you 1\u20132 Connect Group options I think might fit you? Totally no pressure, just want to make it easy if you wanted to try one.\u201d' },
        ],
        avoid: 'Do not pitch the Connect Group in the first message. Care first, recommend second.',
      },
      {
        h: 'Connect Group invitation',
        when: 'After the mid-week check-in, once a recommendation is ready.',
        lines: [
          { who: 'Text', text: '\u201cBased on what you mentioned about [interest / schedule / vibe], I think [Group name] would actually be a really natural fit. They meet [day/time] at [location]. The leader is [name] \u2014 really good person. Want me to introduce you?\u201d' },
        ],
        avoid: 'Never send a generic group list. The recommendation should clearly reflect what the person told you.',
      },
      {
        h: 'Re-engaging someone who has not returned',
        when: 'Someone who came once or twice and has not been back in 3\u20135 weeks.',
        lines: [
          { who: 'Text', text: '\u201cHey [name], you\u2019ve been on my mind \u2014 no pressure to come back to anything, just genuinely wanted to check on you. How are you actually doing?\u201d' },
        ],
        avoid: 'Do not lead with attendance. Lead with the person. Drop-off is usually about life, not us.',
      },
      {
        h: 'When someone wants to leave a Connect Group',
        when: 'A person tells a leader or coordinator that the group is not the right fit.',
        lines: [
          { who: 'You', text: '\u201cTotally good \u2014 I\u2019d rather you be in a group that actually fits than stay in one that doesn\u2019t. Can I ask what felt off about it? It helps me recommend better next time.\u201d' },
          { who: 'Hand-off', text: '\u201cI\u2019ll check with [Group Match Coordinator] on a couple other options and send them to you this week. Take your time.\u201d' },
        ],
        avoid: 'No guilt, no pushback, no implication that leaving is failure. The Trial Integration stage exists for exactly this reason.',
      },
      {
        h: 'Escalating a sensitive situation',
        when: 'A volunteer encounters something pastoral, conflict-oriented, or beyond their role.',
        lines: [
          { who: 'To the attendee', text: '\u201cI really appreciate you trusting me with that. I want to make sure you get someone who can actually help with this \u2014 would it be okay if I looped in [Bridge Team Lead] so we can support you well?\u201d' },
          { who: 'Internal hand-off', text: '\u201cHey [Lead], I had a conversation tonight with [name] about [brief, neutral context]. They\u2019ve given me permission to loop you in. Can you take it from here?\u201d' },
        ],
        avoid: 'Do not handle pastoral or safety issues alone. Do not share details beyond what is needed for the hand-off.',
      },
    ],
  },
];

export const cicd = [
  { step: 'Event', detail: 'Run the gathering. Every interaction, every greeting, every conversation becomes a data point in the system.', icon: 'calendar' },
  { step: 'Observe', detail: 'During and after the event, capture who returned, who isolated themselves, which leaders excelled, and where social friction occurred.', icon: 'eye' },
  { step: 'Analyze', detail: 'Weekly reviews examine retention trends, follow-up response rates, Connect Group health, and attendee feedback patterns.', icon: 'chart' },
  { step: 'Refine', detail: 'Update workflows, greeting scripts, onboarding language, intake forms, and volunteer flow based on what the data and the team observed.', icon: 'wrench' },
  { step: 'Re-deploy', detail: 'The next event runs the improved protocol. Nothing is ever \u201cdone\u201d \u2014 the system gets cleaner, more relational, and more human with every cycle.', icon: 'rocket' },
];

export const metrics = [
  'First-time visitor return rate',
  'Connect Group conversion rate',
  'Volunteer retention',
  'Attendee engagement depth',
  'Leadership multiplication ratio',
  'Follow-up response rate',
];

export const techStack = {
  Communication: ['Discord', 'Slack', 'WhatsApp', 'GroupMe'],
  'Data Tracking': ['Airtable', 'Notion', 'Google Sheets'],
  Forms: ['Google Forms', 'Airtable Forms', 'Typeform'],
  Analytics: ['Attendance', 'Retention', 'Follow-up rates', 'Conversion'],
};


// What problem the Bridge Team exists to solve, drawn from the Project Handoff.
export const problemStatement = {
  headline: 'The OUTLET attracts. What it lacks is the infrastructure that connects.',
  body: [
    'LinkedUP Church\u2019s OUTLET ministry has a strong front-end attraction system. Young adults attend. They enjoy the events. Many come back. But there is currently limited infrastructure for tracking recurring attendees, understanding interests, mapping people to Connect Groups, conducting intentional follow-up, onboarding new community members, and sustaining long-term retention.',
    'This creates operational leakage: people can attend repeatedly without ever becoming connected. Events create excitement; community creates longevity. Without infrastructure, attendance becomes temporary and ministry impact stays surface-level. The real question is not "How many people attended?" but "How many people became connected?"',
  ],
  gaps: [
    { h: 'Member Tracking', p: 'No centralized visibility into who attends repeatedly, who expressed interest, who followed through, or who quietly disappeared.' },
    { h: 'Connect Group Mapping', p: 'No intelligent matching process based on interests, schedules, personality, location, or comfort level.' },
    { h: 'Follow-Up Infrastructure', p: 'No standardized texting workflows, check-ins, reminder systems, onboarding flows, or re-engagement systems.' },
    { h: 'Volunteer Coordination', p: 'No clearly defined ownership, communication hierarchy, or accountability structure across the team.' },
    { h: 'Data Systems', p: 'No consistent CRM, spreadsheet structure, pipeline dashboard, or operational reporting.' },
  ],
};

// What the Bridge Team is putting in place in its first iteration.
export const mvp = {
  intro:
    'The first iteration of the OUTLET Bridge Team is intentionally small. The goal is not to stand up every system in this document at once. The goal is to put the minimum honest infrastructure in place so the pipeline starts producing real data, the team starts running weekly reviews, and the OPP can begin its first real cycle. Everything else is staged behind that.',
  shipping: [
    { h: 'Defined roles + ownership', p: 'Bridge Team Lead, Connection Coordinators, Follow-Up Coordinators, and Operations Coordinator named and onboarded. Clear responsibility per role.' },
    { h: 'Greeting + arrival protocol', p: 'Hospitality flow with a named greeting station, intentional intro pairings, and an isolation-prevention pass during every event.' },
    { h: 'Lightweight intake form', p: 'A QR-code intake (Google Form or Airtable) capturing name, contact, interests, schedule, and group preference \u2014 enough to make a first recommendation.' },
    { h: 'Centralized attendee log', p: 'A single source of truth (Airtable or a structured Google Sheet) tracking attendance, follow-up status, group recommendation, and notes.' },
    { h: 'Personal follow-up cadence', p: 'Same-night text from a Connection Coordinator, mid-week check-in from a Follow-Up Coordinator, and a Connect Group recommendation within 7 days.' },
    { h: 'Weekly Bridge Team review', p: 'A 30-minute standing meeting after every event: who returned, who isolated, who needs follow-up, what friction occurred, what to change next time.' },
    { h: 'Escalation chain in writing', p: 'Volunteer \u2192 Coordinator \u2192 Bridge Team Lead \u2192 Ministry Leadership, documented and shared with every volunteer.' },
  ],
  successCriteria: [
    'Every first-time visitor in the first 90 days is greeted, logged, and contacted within 7 days.',
    'A weekly review meeting happens after every event without exception.',
    'At least one round of protocol refinement happens per month based on review findings.',
    'The Bridge Team can answer, on demand: who returned, who is at risk of drop-off, and who is ready for a Connect Group.',
  ],
};
