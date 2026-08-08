export type Article = {
  slug: string;
  title: string;
  category:
    | "Strategy"
    | "Transformation"
    | "Productivity"
    | "Leadership"
    | "Career"
    | "Business Analysis";
  description: string;
  date: string;
  readingTime: string;
  featured?: boolean;
  body: string[];
};

// Real posts, repurposed from Tola's LinkedIn writing. Dates are estimated
// (spaced out, most recent first) — swap in the actual publish dates
// whenever they're available.
export const articles: Article[] = [
  {
    slug: "why-most-strategies-fail-and-it-isnt-the-plan",
    title: "Why Most Strategies Fail (And It Isn't the Plan)",
    category: "Strategy",
    description:
      "A simple explanation for why so many strategies fail: disconnect — between leaders and teams, goals and resources, vision and culture.",
    date: "2026-08-01",
    readingTime: "1 min read",
    featured: true,
    body: [
      "Everyone talks about strategy. Fewer people talk about execution. Almost no one talks about alignment.",
      "After watching enough strategies rise and fall inside organizations, I've landed on a simple explanation for why so many of them fail. It usually comes down to one word: disconnect.",
      "Disconnect between leaders and teams",
      "Disconnect between goals and the resources meant to support them",
      "Disconnect between the stated vision and the actual culture",
      "A strategy written in isolation is just a document. A strategy that gets embedded in how people actually work becomes something closer to a movement.",
      "Three things tend to separate the two:",
      "Co-create the strategy with the people who will execute it, not just senior leadership.",
      "Communicate it consistently, through stories and actions, not just slides.",
      "Cascade it into everyday decisions, not just annual reviews.",
      "Strategy rarely fails in the boardroom. It fails in the breakroom, in the small decisions people make when no one from leadership is watching. Closing that gap is the real work of strategy.",
    ],
  },
  {
    slug: "innovation-isnt-a-department-its-a-discipline",
    title: "Innovation Isn't a Department. It's a Discipline.",
    category: "Leadership",
    description:
      "Real innovation doesn't live in one department. It lives in a culture where people across the business feel empowered to solve problems and test ideas.",
    date: "2026-07-18",
    readingTime: "1 min read",
    body: [
      "If innovation only lives inside one team, it quietly dies everywhere else.",
      "Real innovation rarely comes from a lab or a fancy title. It comes from ordinary people across the business who feel empowered to solve problems, test ideas, and improve how value gets created.",
      "The problem is that many organizations still treat innovation as a side project. A pet initiative. A word on a wall. It works best when it becomes part of the culture, when people are encouraged to speak up with better ideas, try things and fail without fear, and learn quickly enough to adjust.",
      "Here's how I've seen organizations shift from treating innovation as a department to treating it as a discipline:",
      "Decentralize decision-making so teams can act instead of only escalating.",
      "Fund experiments with the same seriousness you fund operations.",
      "Train people to be agile, not just efficient.",
      "The most powerful innovations rarely start in the boardroom. They usually start on the frontline, with someone bold enough to ask, \"Can this be done better?\"",
    ],
  },
  {
    slug: "three-strategy-pitfalls-that-quietly-kill-execution",
    title: "3 Strategy Pitfalls That Quietly Kill Execution",
    category: "Strategy",
    description:
      "Three quiet execution killers I see most often, and what actually fixes each one.",
    date: "2026-07-04",
    readingTime: "1 min read",
    body: [
      "Most strategies don't fail because they're wrong. They fail because they're incomplete.",
      "It's easy to build a good-looking plan. The hard part is making it work in the real world, with all its mess, momentum, and moving parts.",
      "Here are three pitfalls I see most often in execution, and what actually fixes them.",
      "1. The strategy stays too high-level.",
      "Saying \"drive innovation\" or \"go digital\" isn't a plan. Translate the big picture into what teams should do differently on Monday morning, and define what success looks like at every level of the organization.",
      "2. There's no shared understanding.",
      "If only ten people understand the strategy, a thousand people won't be able to execute it. Co-create the plan and communicate it repeatedly until it's both understood and owned.",
      "3. There's no rhythm of follow-through.",
      "Execution isn't a one-time rollout. It's a weekly conversation that needs scoreboards, nudges, and leaders who model the behavior they want to see.",
      "Great strategy isn't only about the what. It's about the how, and especially about the who.",
      "Which of these three gaps do you think causes the most damage in organizations today?",
    ],
  },
  {
    slug: "the-biggest-mistake-i-made-early-in-my-career",
    title: "The Biggest Mistake I Made Early in My Career",
    category: "Career",
    description:
      "Doing good work was never the whole job. Visibility and relationships matter just as much as performance.",
    date: "2026-06-20",
    readingTime: "1 min read",
    body: [
      "I once believed that doing good work was enough.",
      "So I kept my head down, focused on delivering, avoided office politics, and assumed someone would eventually notice.",
      "They didn't. And it wasn't because they were blind to my talent. It was because visibility, relationships, and communication matter just as much as performance, especially in complex organizations.",
      "Here's what I've learned since:",
      "Your work should speak for you, but it shouldn't have to speak alone.",
      "Build real relationships, not just transactional networks.",
      "Learn to talk about your wins without it feeling like bragging. It's a skill worth practicing.",
      "Don't assume your manager or leadership already knows everything you're doing.",
      "I still believe in excellence. I just also believe in advocating for that excellence, connecting with the people around you, and building influence alongside output.",
    ],
  },
  {
    slug: "three-small-habits-that-changed-how-i-work",
    title: "Three Small Habits That Changed How I Work",
    category: "Productivity",
    description:
      "Three small daily shifts that made a bigger difference than any elaborate productivity system.",
    date: "2026-06-06",
    readingTime: "1 min read",
    body: [
      "Productivity used to feel overwhelming, like it required a two-hour morning routine, five apps, and a life coach just to stay on top of things.",
      "In reality, it was a few small shifts that made the biggest difference. Here are three habits that quietly changed how I work.",
      "Start each day by writing your top three priorities.",
      "No fancy planner required, just a sticky note or a notebook. It keeps me focused on what actually matters instead of what's simply urgent.",
      "Use fifteen-minute time blocks.",
      "Instead of waiting for a perfect two-hour window to do deep work, I started tackling tasks in short bursts. It beats procrastination almost every time.",
      "Close the laptop at the same time every evening.",
      "This one surprised me the most. That boundary helps me rest better, think more clearly, and show up stronger the next day.",
      "None of these habits feel dramatic on their own. But stay consistent for a few months, and you'll notice something has genuinely shifted.",
    ],
  },
  {
    slug: "would-you-hire-you",
    title: "Would You Hire You?",
    category: "Leadership",
    description:
      "Five hard reminders from Matt Adolphe's Would You Hire You? on what actually makes someone worth hiring.",
    date: "2026-05-23",
    readingTime: "1 min read",
    body: [
      "I recently read Would You Hire You? by Matt Adolphe, and I didn't expect it to hit as hard as it did.",
      "The book is short and simple, but the questions it raises are not. Here are five reminders I walked away with.",
      "Show up with solutions, not just problems. Pointing out what's wrong is easy. Suggesting what's next is leadership.",
      "Be the kind of person others want on their team. Competence matters, but so does attitude, ownership, and how you treat people when no one's watching.",
      "Be self-aware enough to fix your blind spots. Feedback isn't criticism. It's a growth tool, and it's wasted if you don't use it.",
      "Consistency builds trust faster than charisma. No one hires your best day. They hire your every day.",
      "You're always being interviewed, even when you're not. Your daily actions are your personal brand, and people notice more than you'd think.",
      "It's a simple book, but taken seriously, it changes how you show up at work, on teams, and even outside of work.",
      "Would you hire you?",
    ],
  },
  {
    slug: "three-more-habits-worth-stealing",
    title: "Three More Habits Worth Stealing",
    category: "Productivity",
    description:
      "Three more small habits worth adopting, from a three-line to-do list to a ten-minute rule for beating procrastination.",
    date: "2026-05-09",
    readingTime: "1 min read",
    body: [
      "For a long time I thought productivity required a complex system. It turns out the tiny habits, the ones that feel too small to matter, made the biggest difference.",
      "Here are three that changed the game for me.",
      "Starting the day with a three-line to-do list.",
      "I used to overload my task list and feel defeated by mid-afternoon. Now I pick three high-impact tasks each morning and win the day before lunch.",
      "Using the ten-minute rule to beat procrastination.",
      "When I don't feel like starting something, I tell myself to just do it for ten minutes. Nine times out of ten I keep going, because starting is always the hardest part.",
      "Closing the day with a short review.",
      "Every evening I ask myself what I learned that day and what I could do better tomorrow. It keeps me grounded and focused on progress instead of perfection.",
      "Productivity was never about doing more. It's about doing what matters, with clarity and consistency.",
    ],
  },
  {
    slug: "building-a-culture-of-everyday-innovation",
    title: "Building a Culture of Everyday Innovation",
    category: "Leadership",
    description:
      "A five-part framework for building a culture where innovation happens everywhere, not just in a department called Innovation.",
    date: "2026-04-25",
    readingTime: "2 min read",
    body: [
      "When people hear the word innovation, they often picture moonshot ideas, R&D labs, or the next billion-dollar startup.",
      "But the truth is that real innovation happens in the everyday: in how teams solve problems, adapt to change, and create value faster than the competition. That kind of innovation doesn't come from having a department called Innovation. It comes from building a culture where people at every level are empowered to think, try, and improve.",
      "Here's a simple framework I've seen work across teams and industries.",
      "1. Permission to challenge.",
      "If people feel they can't question the status quo, new ideas will never surface. Build a culture where it's safe to ask why things are done a certain way, and what might work better. Innovation starts with curiosity, and curiosity only thrives where there's trust.",
      "2. Small bets, fast feedback.",
      "Don't wait for the perfect plan. Encourage teams to test ideas early, fail fast, and learn quickly. Low-risk pilots beat long proposals and layers of signoff. What matters most is speed to learning.",
      "3. Decisions at the edge.",
      "Push authority closer to the action. Frontline teams often know what needs to change but are rarely given the autonomy to act on it. The further innovation decisions sit from real-world problems, the less relevant they become.",
      "4. Celebrate effort, not just outcomes.",
      "If you only reward success, people will avoid risk. Celebrating initiative, even when an idea doesn't pan out, builds a culture where trying becomes normal.",
      "5. Connect innovation to purpose.",
      "People aren't inspired by change for its own sake. Tie innovation efforts to a clear mission: how does this improve lives, solve real problems, or drive real impact?",
      "A culture of everyday innovation isn't about chasing trends or hiring a Chief Innovation Officer. It's about shifting how an organization thinks, decides, and learns, until innovation feels safe, simple, and shared. When that happens, people stop waiting to be told what's possible and start creating it.",
      "Which of these five is missing where you work?",
    ],
  },
  {
    slug: "eight-career-lessons-im-still-learning",
    title: "Eight Career Lessons I'm Still Learning",
    category: "Career",
    description:
      "Eight lessons on growth, reputation, and feedback, gathered one birthday at a time.",
    date: "2026-06-17",
    readingTime: "2 min read",
    body: [
      "My birthday was last week, and it had me thinking about how much I've grown, not just as a person, but as a professional.",
      "In that spirit, here are eight career lessons that have shaped me and continue to shape me.",
      "1. You won't grow if you don't do the hard work.",
      "Stretch roles are uncomfortable for a reason. They expose your blind spots and stretch your capacity. Growth doesn't come from staying safe. It comes from choosing the path that demands more of you.",
      "2. Relationships open more doors than resumes.",
      "Your network isn't just about who you know. It's about who believes in you. The people you build real trust with will mention your name in rooms you've never entered.",
      "3. Your reputation is built when no one's watching.",
      "It's easy to show up well on presentation day. What actually shapes your brand is how you respond to pressure, handle small tasks, and treat colleagues when it doesn't count for anything. Consistency beats performance.",
      "4. Clarity comes from movement, not waiting.",
      "You won't figure it all out by sitting on the fence. Every meaningful career move I've made started with a step I wasn't fully sure about. Direction gets clearer the further you walk.",
      "5. Feedback isn't personal, so don't take it personally.",
      "Early on, I used to feel embarrassed when someone pointed out what I could have done better. Now I treat it as a growth hack. Feedback isn't about your worth. It's about your potential.",
      "6. Put your hand up for the big projects.",
      "Even when you feel underqualified. Especially when you feel underqualified. You'll never have all the answers upfront, but taking on real responsibility is what forces you to rise.",
      "7. A growth mindset changes everything.",
      "You will make mistakes and fumble things. Every time you choose to learn instead of sulk, you gain something. Let go of the pressure to be perfect and lean into asking what you can learn.",
      "8. People work harder for leaders who care about them.",
      "Deadlines and KPIs matter. But the people doing the work matter more. I've seen firsthand how much more motivated and loyal people become when they feel seen, heard, and genuinely cared for.",
    ],
  },
  {
    slug: "what-to-do-when-you-get-passed-over-for-a-promotion",
    title: "What to Do When You Get Passed Over for a Promotion",
    category: "Career",
    description:
      "Getting passed over for a promotion stings. Here's how I turned that disappointment into a turning point.",
    date: "2026-03-28",
    readingTime: "2 min read",
    body: [
      "It's one of the most uncomfortable moments in any career: the promotions get announced, and your name isn't on the list.",
      "I've been there. Everyone assumed I'd get promoted with my peers. Honestly, I did too. But I didn't. When I asked why, the feedback was direct: my performance review hadn't met the bar for the next level.",
      "It stung, not because I felt entitled, but because I genuinely thought I'd done enough. Turns out I hadn't, and that was hard to accept.",
      "But here's the part I'm most proud of. I didn't let that moment define me. I used it to refine me.",
      "So, what should you do when you get passed over? Here's what helped me turn disappointment into a turning point.",
      "1. Don't get defensive. Get curious.",
      "It's tempting to assume politics or bias, and sometimes those do play a role. But start by asking what feedback you missed or ignored, and take ownership of the parts you can actually improve.",
      "2. Understand what the next level really expects.",
      "Job descriptions rarely tell you what actually matters. Talk to your manager, a mentor, or someone recently promoted, and ask what success looks like in that role. Then align your output to that, not just your current tasks.",
      "3. Start working like you're already there.",
      "Promotions reward proof, not potential. Lead meetings, take initiative, show maturity, and let your actions speak louder than your ambition.",
      "4. Use feedback as a growth strategy.",
      "I didn't treat the feedback I received as rejection. I treated it as data, and worked on the gaps it pointed to, not just to get promoted, but to actually grow stronger.",
      "5. Say yes to big opportunities, even the scary ones.",
      "Not long after, I got the chance to work on a major client project. It was complex and well outside my comfort zone, but showing up fully for it changed how leadership saw me. Sometimes the project is the promotion.",
      "Getting passed over doesn't feel good. But it isn't a dead end. It can be a mirror, a classroom, and a launchpad. The goal was never just to get promoted. It's to become someone who can't be overlooked next time.",
      "Have you ever been passed over for a promotion? What did it teach you?",
    ],
  },
  {
    slug: "ever-felt-invisible-at-work",
    title: "Ever Felt Invisible at Work?",
    category: "Career",
    description:
      "Doing good work isn't always enough to get seen. A few shifts that helped me show up differently.",
    date: "2026-03-14",
    readingTime: "1 min read",
    body: [
      "Like you're doing your best, but no one seems to notice?",
      "I've been there. You're showing up, delivering, trying, and somehow the recognition, the opportunities, the growth all seem to skip past you.",
      "Here's the hard truth no one tells you: doing good work isn't always enough to get seen. Sometimes you have to strategically show up, not just work hard behind the scenes.",
      "If you're feeling stuck or invisible at work, here are a few shifts that helped me and the people I've worked with.",
      "Speak up, even when it feels uncomfortable. Volunteer updates, share your wins, suggest solutions. Let people hear your voice and see your value.",
      "Document your impact. Keep a record of results you've driven, problems you've solved, and positive feedback you've received. It isn't bragging. It's preparation, especially when performance reviews come around.",
      "Ask for feedback, and act on it. Sometimes you're not stuck, you're just unaware of what's holding you back.",
      "Get visible beyond your team. Support cross-functional projects, join committees, ask to present in meetings. Visibility builds credibility.",
      "Don't wait to be chosen. Start choosing yourself. Advocate for yourself the way you'd advocate for someone you believe in, because you should.",
      "The workplace can feel like a maze at times. But growth doesn't always come from waiting for the next promotion. It comes from showing up differently: intentionally, boldly, and with clarity.",
      "Have you ever felt invisible at work? What helped you break through?",
    ],
  },
  {
    slug: "hire-giants-even-early-in-your-career",
    title: "Hire Giants, Even Early in Your Career",
    category: "Career",
    description:
      "David Ogilvy's nesting-doll lesson on hiring people bigger than yourself, and why it applies long before you're the one hiring.",
    date: "2026-02-28",
    readingTime: "1 min read",
    body: [
      "David Ogilvy, often called the father of modern advertising, had a knack for sharing big lessons in simple ways.",
      "Whenever he appointed a new office head, he would give them a set of Russian nesting dolls. Inside the smallest one was a note: if each of us hires people smaller than we are, the company becomes a company of dwarfs. But if each of us hires people bigger than we are, the company becomes a company of giants.",
      "That lesson was aimed at managers, but it applies long before you're in a position to hire anyone. Early in your career, \"hiring bigger\" means actively seeking out people who are smarter, more experienced, or more skilled than you, and finding ways to work with or learn from them.",
      "Here's how to apply it when you're just starting out:",
      "Choose projects that stretch you. Volunteer for work that forces you to learn from high performers.",
      "Seek out mentors and peers who challenge you, not just people who think the way you do.",
      "Ask for feedback from those ahead of you. Their perspective can help you grow faster than you would on your own.",
      "The people you surround yourself with will either limit you or lift you. The sooner you choose giants, the sooner you'll grow into one.",
      "Who are the giants in your workplace right now, and what have they taught you?",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
