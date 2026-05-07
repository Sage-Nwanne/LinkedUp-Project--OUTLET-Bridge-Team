export default function OutletBridgeTeamDiagram() {
  const stages = [
    {
      title: 'Awareness',
      subtitle: 'Discovery Phase',
      goals: ['Generate curiosity', 'Lower entry barriers', 'Drive attendance'],
      sources: ['Instagram', 'TikTok', 'Friends', 'Church Announcements'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Arrival',
      subtitle: 'First Interaction',
      goals: ['Reduce awkwardness', 'Learn names', 'Prevent isolation'],
      sources: ['Greeting Team', 'Hospitality Flow', 'Introductions'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Connection',
      subtitle: 'Relationship Formation',
      goals: ['Build conversations', 'Find similarities', 'Create comfort'],
      sources: ['Bridge Team', 'Conversation Facilitation', 'Social Mapping'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Group Matching',
      subtitle: 'Bridge Phase',
      goals: ['Match personalities', 'Align schedules', 'Recommend groups'],
      sources: ['Interest Tracking', 'Compatibility Analysis', 'Leader Input'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Trial Integration',
      subtitle: 'Add/Drop Period',
      goals: ['Reduce pressure', 'Allow exploration', 'Improve fit'],
      sources: ['Follow-Ups', 'Group Visits', 'Feedback'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Retention',
      subtitle: 'Long-Term Belonging',
      goals: ['Emotional safety', 'Ownership', 'Consistency'],
      sources: ['Community', 'Relationships', 'Check-ins'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Leadership Development',
      subtitle: 'Multiplication Phase',
      goals: ['Develop volunteers', 'Create leaders', 'Reproduce system'],
      sources: ['Mentorship', 'Responsibility', 'Training'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-4">
          OUTLET Bridge Team
        </h1>

        <p className="text-orange-400 text-center text-xl mb-12">
          Relational Infrastructure & Community Integration System
        </p>

        <div className="grid lg:grid-cols-7 md:grid-cols-2 gap-4">
          {stages.map((stage, index) => (
            <div key={stage.title} className="relative">
              <div className={`bg-gradient-to-br ${stage.color} p-[1px] rounded-3xl h-full`}>
                <div className="bg-zinc-950 rounded-3xl p-5 h-full">
                  <div className="text-4xl font-black text-white/20 mb-3">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold mb-1">
                    {stage.title}
                  </h3>

                  <div className="text-orange-300 text-sm mb-4">
                    {stage.subtitle}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs uppercase text-zinc-500 mb-2">
                        Goals
                      </div>

                      <ul className="space-y-1 text-sm text-zinc-300">
                        {stage.goals.map((goal) => (
                          <li key={goal}>• {goal}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs uppercase text-zinc-500 mb-2">
                        Systems
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {stage.sources.map((source) => (
                          <span
                            key={source}
                            className="bg-zinc-800 text-xs px-2 py-1 rounded-full"
                          >
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {index !== stages.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2">
                  <div className="text-orange-400 text-3xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
