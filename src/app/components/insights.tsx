import { GitBranch, GitCommit, GitPullRequest, Star, Clock, ExternalLink, Code2, Loader2, PlusCircle, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface GithubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload: any;
}

export function Insights() {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recent events (activities) from GitHub API
    fetch("https://api.github.com/users/vinipx/events?per_page=12")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter to show distinct events or just the latest 6
          setEvents(data.slice(0, 6));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch events", err);
        setLoading(false);
      });
  }, []);

  const getEventDetails = (event: GithubEvent) => {
    const repoName = event.repo.name;
    const repoUrl = `https://github.com/${repoName}`;
    const date = new Date(event.created_at).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });

    let icon = <GitCommit className="w-5 h-5 text-cyan-400" />;
    let actionText = "Interacted with";

    switch (event.type) {
      case "PushEvent":
        icon = <GitCommit className="w-5 h-5 text-emerald-400" />;
        actionText = `Pushed ${event.payload.size || ''} commit(s) to`;
        break;
      case "CreateEvent":
        icon = <PlusCircle className="w-5 h-5 text-green-400" />;
        actionText = `Created ${event.payload.ref_type} at`;
        break;
      case "PullRequestEvent":
        icon = <GitPullRequest className="w-5 h-5 text-purple-400" />;
        actionText = `${event.payload.action === 'opened' ? 'Opened' : 'Updated'} PR in`;
        break;
      case "WatchEvent":
        icon = <Star className="w-5 h-5 text-yellow-400" />;
        actionText = "Starred repository";
        break;
      case "IssueCommentEvent":
      case "IssuesEvent":
        icon = <MessageSquare className="w-5 h-5 text-blue-400" />;
        actionText = "Commented/Opened issue in";
        break;
      case "ForkEvent":
        icon = <GitBranch className="w-5 h-5 text-orange-400" />;
        actionText = "Forked repository";
        break;
    }

    return { repoName, repoUrl, date, icon, actionText };
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Recent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Live updates of my latest contributions, commits, and open-source interactions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Header row with icon */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <GitBranch className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100">
              GitHub Feed
            </h3>
          </motion.div>

          {/* GitHub Events Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => {
                const { repoName, repoUrl, date, icon, actionText } = getEventDetails(event);
                
                return (
                  <motion.a
                    key={event.id}
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-zinc-800/80 rounded-lg border border-zinc-700/50 group-hover:border-zinc-600 transition-colors">
                          {icon}
                        </div>
                        <div>
                          <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1">{actionText}</p>
                          <h4 className="text-zinc-100 font-semibold text-sm md:text-base group-hover:text-cyan-400 transition-colors truncate max-w-[200px]" title={repoName}>
                            {repoName}
                          </h4>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    
                    {event.type === 'PushEvent' && event.payload.commits && event.payload.commits[0] && (
                      <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-2 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/50 font-mono text-xs">
                        "{event.payload.commits[0].message}"
                      </p>
                    )}
                    
                    {!event.payload.commits && (
                       <div className="flex-grow"></div>
                    )}
                    
                    <div className="flex items-center justify-between text-xs pt-4 border-t border-zinc-800/50 text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {date}
                      </div>
                      <span className="px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 border border-zinc-700/50">{event.type.replace('Event', '')}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          )}

          {/* View Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/vinipx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 rounded-lg transition-all border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-sm"
            >
              <GitBranch className="w-5 h-5" />
              Explore full GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
