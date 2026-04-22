// ============ DATA ============
const BLUFS = [
  { p: "Your manager asks: how's the project going?" },
  { p: "A senior leader asks: what do you recommend?" },
  { p: "Stakeholder asks: why is this late?" },
  { p: "Your team asks: what's our priority this quarter?" },
  { p: "An executive asks: is this worth investing in?" },
  { p: "A peer asks: what do you think of the proposal?" },
  { p: "CEO asks in a hallway: how's your area?" },
  { p: "Client asks: what's the status of deliverable X?" },
  { p: "A colleague challenges your approach. Respond." },
  { p: "New joiner asks: what should I focus on first?" },
  { p: "Board asks: what's the biggest risk?" },
  { p: "Investor asks: why now?" },
  { p: "Your manager: 'Convince me this is worth doing.'" },
  { p: "A peer asks: 'What's blocking you?'" },
  { p: "Senior leader: 'Give me the elevator pitch.'" },
  { p: "Client asks: 'What's changed since last week?'" },
  { p: "Your team asks: 'What did leadership say in that meeting?'" },
  { p: "Stakeholder: 'What do we do about the budget overrun?'" },
  { p: "Executive: 'What's your biggest learning from this quarter?'" },
  { p: "Peer: 'Why did you choose this approach over the alternative?'" }
];

const WAFFLES = [
  { w: "So the thing is, we've been tracking engagement on the new feature for about three weeks now, and honestly, it's been a bit of a mixed picture — some days are great, some days less so, and I think overall we're maybe a bit below where we hoped we'd be at this point.", s: "Feature engagement is below target after three weeks — we need to adjust the rollout plan." },
  { w: "I wanted to raise something that's been on my mind for a while, and I'm not totally sure what to do about it, but our team seems to be taking longer than expected on the backend work, which has knock-on effects for the frontend team.", s: "Backend delays are blocking the frontend team — we need to rebalance resources this week." },
  { w: "Just looping back on the customer research, which as you know we've been running for a couple of months, and I've been going through the data, and it's interesting because there are some patterns emerging, though I'm not 100% sure what to make of them yet.", s: "Customer research shows clear patterns — we need a working session to decide what to act on." },
  { w: "I hate to bring this up but I think we might have a problem with the vendor — they've missed two deadlines in a row now, and the quality on the last delivery wasn't great, and I'm starting to wonder if we need to reconsider.", s: "The vendor has missed two deadlines and delivered poor quality — we need to evaluate alternatives." },
  { w: "Something I've noticed, and I might be reading too much into this, but the team seems a bit less energised than they were a few months ago, and I think it might be related to the workload, or possibly the lack of clarity around priorities.", s: "Team energy is dropping — likely workload and unclear priorities. We need to address both within two weeks." },
  { w: "The budget situation is, well, complicated — we've spent more than planned on tooling, which has eaten into the headcount budget, but tooling is delivering more than expected too, so it's not all bad, though we do need to make a call soon.", s: "Tooling overspend is eating headcount budget — we need to decide this month whether to cut tooling or reduce hiring." },
  { w: "I just wanted to flag that I've been thinking quite a bit about our roadmap, and I'm not saying we should change it, but I do wonder whether some of the priorities we set three months ago still make sense given everything that's happened since.", s: "Our roadmap priorities are stale — we should revisit them this month given recent changes." },
  { w: "It's hard to say for sure, and I don't want to speak out of turn, but from what I've observed in the last few standups, I think there might be some confusion on the team about who owns what, particularly around the new workstream we picked up.", s: "Ownership of the new workstream is unclear — we need to assign it explicitly this week." }
];

const WORDS = [
  { w: "leverage", d: "to use something to maximum advantage", e: "We should leverage our existing customer relationships before chasing new ones.", t: "strategy" },
  { w: "align", d: "to bring into agreement on direction or purpose", e: "I need to align the team on priorities before we start the sprint.", t: "strategy" },
  { w: "trade-off", d: "a balance between two things that can't both be fully achieved", e: "The trade-off is speed versus quality — we can't have both.", t: "decision" },
  { w: "prioritise", d: "to rank by importance and act on the top items first", e: "We need to prioritise the customer issue over the internal one.", t: "decision" },
  { w: "accountable", d: "responsible for the outcome, not just the task", e: "I'm accountable for the launch, even if the team owns execution.", t: "ownership" },
  { w: "stakeholder", d: "a person whose interests are affected by a decision", e: "Let's map the stakeholders before we announce anything.", t: "people" },
  { w: "cadence", d: "the rhythm or pace at which something happens", e: "We need a weekly cadence for status updates.", t: "execution" },
  { w: "mandate", d: "the authority or instruction to act on something", e: "Our mandate is to grow revenue, not optimise cost.", t: "strategy" },
  { w: "unblock", d: "to remove an obstacle preventing progress", e: "I need your help to unblock the design review.", t: "execution" },
  { w: "scope", d: "the boundary of what's included in a project or decision", e: "Can we agree the scope before we start estimating?", t: "execution" },
  { w: "pragmatic", d: "practical, focused on what actually works", e: "Let's be pragmatic — ship what we have and iterate.", t: "style" },
  { w: "credible", d: "believable and trustworthy, backed by evidence", e: "Her recommendation was credible because she'd run the numbers herself.", t: "style" },
  { w: "rigorous", d: "thorough, careful, and exact", e: "We need a rigorous review before we present to the board.", t: "style" },
  { w: "incisive", d: "sharp, direct, and cutting to the core", e: "His incisive question ended the debate.", t: "style" },
  { w: "calibrate", d: "to adjust based on new information or feedback", e: "Let's calibrate our estimates after the first two sprints.", t: "execution" },
  { w: "ambiguity", d: "a situation with multiple possible interpretations", e: "Senior leaders have to be comfortable with ambiguity.", t: "thinking" },
  { w: "constraint", d: "a limit that shapes what's possible", e: "Time is our biggest constraint, not budget.", t: "thinking" },
  { w: "implication", d: "a consequence that follows from something", e: "The implication is we'll miss the launch window.", t: "thinking" },
  { w: "nuance", d: "a subtle distinction that affects meaning", e: "There's a nuance here that the summary misses.", t: "thinking" },
  { w: "dependency", d: "something that must happen before the next thing can", e: "The API is a dependency for the mobile team.", t: "execution" },
  { w: "friction", d: "resistance that slows progress", e: "We need to reduce the friction in the onboarding flow.", t: "execution" },
  { w: "lever", d: "a point of control that produces outsized impact", e: "Pricing is the biggest lever we haven't pulled yet.", t: "strategy" },
  { w: "hypothesis", d: "a testable assumption about what might be true", e: "Our hypothesis is that users will pay for the premium tier.", t: "thinking" },
  { w: "signal", d: "a meaningful indication hidden in noisy data", e: "Repeat purchases are a strong signal of product-market fit.", t: "thinking" },
  { w: "thesis", d: "a central argument or belief that drives action", e: "Our investment thesis is that AI agents replace workflow tools.", t: "strategy" },
  { w: "downstream", d: "affecting what happens later in the sequence", e: "This decision has downstream effects on engineering.", t: "thinking" },
  { w: "upstream", d: "affecting what happens earlier in the sequence", e: "The upstream problem is our requirements-gathering process.", t: "thinking" },
  { w: "root cause", d: "the underlying reason beneath surface symptoms", e: "Missed deadlines aren't the root cause — unclear scope is.", t: "thinking" },
  { w: "orchestrate", d: "to coordinate multiple moving parts into a whole", e: "She orchestrated the launch across six teams.", t: "execution" },
  { w: "steward", d: "someone who carefully manages something entrusted to them", e: "Leaders are stewards of the team's time and focus.", t: "ownership" },
  { w: "mobilise", d: "to organise people into coordinated action", e: "We need to mobilise the team around this one goal.", t: "people" },
  { w: "galvanise", d: "to energise a group into decisive action", e: "Her speech galvanised the whole department.", t: "people" },
  { w: "articulate", d: "to express clearly and effectively", e: "Can you articulate the problem in one sentence?", t: "communication" },
  { w: "frame", d: "to present information in a particular context", e: "Let's frame this as a growth opportunity, not a cost.", t: "communication" },
  { w: "concise", d: "saying a lot in few words", e: "Her concise summary saved us twenty minutes.", t: "communication" },
  { w: "candid", d: "honest even when uncomfortable", e: "I appreciated his candid feedback.", t: "communication" },
  { w: "decisive", d: "acting with clear resolve", e: "The team needs a decisive leader in the next phase.", t: "style" },
  { w: "measured", d: "calm, careful, controlled", e: "She gave a measured response to a provocative question.", t: "style" },
  { w: "substantive", d: "having real meaning or importance", e: "Let's have a substantive conversation, not small talk.", t: "communication" },
  { w: "tangible", d: "real and concrete", e: "We need tangible results by end of quarter.", t: "execution" },
  { w: "north star", d: "the guiding goal that shapes all other decisions", e: "Our north star is customer retention, not growth.", t: "strategy" },
  { w: "runway", d: "the time available before resources run out", e: "We have nine months of runway to prove this works.", t: "strategy" },
  { w: "unit economics", d: "the profitability per individual customer or sale", e: "Our unit economics don't work until we raise prices.", t: "strategy" },
  { w: "mental model", d: "a simplified framework for understanding how something works", e: "Share your mental model — I want to understand your thinking.", t: "thinking" },
  { w: "first principles", d: "reasoning from fundamental truths rather than analogy", e: "Let's go back to first principles on this.", t: "thinking" },
  { w: "commitment", d: "a binding promise to a specific action", e: "I need a commitment on the date, not a best effort.", t: "ownership" },
  { w: "autonomy", d: "the freedom to make decisions without approval", e: "Give the team autonomy on how, not what.", t: "people" },
  { w: "empower", d: "to give someone the authority and confidence to act", e: "I want to empower you to make this call.", t: "people" },
  { w: "delegate", d: "to hand responsibility to someone else while staying accountable", e: "Delegate the execution, but own the outcome.", t: "people" },
  { w: "coach", d: "to develop someone through questions, not answers", e: "My job is to coach the team, not solve their problems.", t: "people" },
  { w: "convene", d: "to bring people together for a specific purpose", e: "Let's convene the stakeholders on Thursday.", t: "people" },
  { w: "resolve", d: "firm determination under difficulty", e: "Leadership takes resolve when the path is unclear.", t: "style" },
  { w: "conviction", d: "a strongly held belief that drives decisions", e: "She spoke with conviction, and the room followed.", t: "style" },
  { w: "clarity", d: "the state of being easy to understand", e: "Leaders provide clarity when situations are ambiguous.", t: "communication" },
  { w: "focus", d: "concentrated attention on what matters most", e: "Our biggest issue isn't capacity — it's focus.", t: "strategy" },
  { w: "signal-to-noise", d: "the ratio of meaningful information to irrelevant content", e: "The signal-to-noise ratio in that meeting was poor.", t: "thinking" },
  { w: "second-order", d: "the consequences of the consequences", e: "Second-order effects often matter more than first-order ones.", t: "thinking" },
  { w: "bandwidth", d: "the capacity to take on additional work", e: "I don't have bandwidth for another project right now.", t: "execution" },
  { w: "blocker", d: "a specific obstacle preventing progress", e: "What's the biggest blocker on this workstream?", t: "execution" },
  { w: "outcome", d: "the real-world result, not just activity completed", e: "Measure outcomes, not output.", t: "execution" },
  { w: "de-risk", d: "to reduce the probability or impact of failure", e: "We need to de-risk the launch by testing earlier.", t: "execution" },
  { w: "optionality", d: "the value of keeping future choices open", e: "This approach preserves our optionality.", t: "strategy" },
  { w: "contingency", d: "a plan for what to do if something goes wrong", e: "What's our contingency if the vendor pulls out?", t: "execution" },
  { w: "baseline", d: "the starting reference point for measuring change", e: "Let's agree a baseline before we claim improvement.", t: "thinking" },
  { w: "directionally", d: "generally correct even if not exact", e: "The numbers are directionally right, even if the precision is off.", t: "thinking" }
];

const LISTENS = [
  "Today, ask one person: 'What am I missing here?' Then stay silent for 5 seconds after they finish.",
  "In your next 1-on-1, ask: 'What's the hardest part of your week?' Don't offer solutions. Just listen.",
  "Ask a colleague: 'What do you think we're getting wrong?' Write down what they say without interrupting.",
  "In your next meeting, before stating your view, ask: 'What's the strongest argument against this?'",
  "Ask your manager: 'If you were me, what would you be focusing on right now?'",
  "Pick someone quieter and ask: 'What haven't you had a chance to say yet?'",
  "When someone raises a concern today, ask: 'Help me understand — what's the underlying worry?'",
  "Ask a peer: 'What do you wish more people understood about your work?'",
  "In a group, ask: 'Before we decide, what are we assuming that might be wrong?'",
  "Ask someone senior: 'What's something you changed your mind about recently?'",
  "Ask your team: 'What's something I should stop doing?' Then don't defend — just receive.",
  "In any conversation today, ask one follow-up question before moving on. Just one more 'tell me more.'",
  "Ask a stakeholder: 'What does success look like for you specifically?'",
  "In your next meeting, count how long you speak vs listen. Aim for 30/70.",
  "Ask someone: 'What's a decision we made recently that you'd make differently?'",
  "When someone disagrees, ask: 'What would have to be true for your view to be right?'",
  "Ask a junior colleague: 'What's frustrating you that senior people might not see?'",
  "Before sharing your opinion in any meeting today, summarise the previous speaker's point first.",
  "Ask: 'What's one thing you think I don't know that I should?'",
  "In a debate, ask: 'Where do we actually agree? Let's start there.'"
];

const PRESSURES = [
  { p: "A senior leader interrupts your update with: 'Why should I care about any of this?'", h: "Restate the value in one sentence, not the full argument." },
  { p: "In a meeting, someone says: 'That's not going to work.' All eyes turn to you.", h: "Pause. Ask: 'What specifically concerns you?'" },
  { p: "You're asked a question you don't know the answer to, in front of an executive.", h: "'I don't know — I'll find out by [specific time].' No waffle, no bluff." },
  { p: "Your manager says: 'I expected more from this work.'", h: "Ask: 'Which part specifically fell short?'" },
  { p: "A peer publicly takes credit for your idea.", h: "'Glad it's landing — when I raised this last week, my thinking was X.' No accusation." },
  { p: "You're asked: 'Can this be done in half the time?'", h: "'Yes, if we cut X. Otherwise, no.' Trade-offs make you credible." },
  { p: "Someone says: 'I disagree with your approach.'", h: "'Good — tell me why.' Understanding beats defending." },
  { p: "You're put on the spot to summarise a complex topic in 30 seconds.", h: "Pick the one thing that matters most." },
  { p: "An executive asks a question mid-presentation that derails your flow.", h: "Answer briefly, then: 'I can expand on that, or continue — which is more useful?'" },
  { p: "Someone says: 'This has been tried before and it didn't work.'", h: "'What was different then, and what's changed now?'" },
  { p: "You're asked to commit to a date you're not confident about.", h: "'I can commit to X by [date], with [condition]. Anything beyond that I'd need to investigate.'" },
  { p: "A colleague publicly points out a mistake in your work.", h: "'You're right — thanks for catching it. Here's how I'll fix it.' No defence." }
];

// ============ TOUR CONTENT ============
const TOUR = [
  {
    icon: '★',
    tag: 'DRILL 1 · BLUF',
    tagColor: '#3C3489',
    tagBg: '#EEEDFE',
    title: 'Answer first. Explain second.',
    body: 'BLUF stands for <strong>Bottom Line Up Front</strong>. It\'s how senior leaders answer questions — conclusion first, reasoning second.',
    example: 'Question: "How\'s the project going?"<br><br>Wafflly: <em>"So, we\'ve been working on it for three weeks, and it\'s been interesting because..."</em><br><br>BLUF-style: <em>"On track for Friday launch. One risk — we\'re short a designer."</em>',
    howto: 'You\'ll see a question. Type your answer aloud (as you would say it). The app checks <strong>5 signals</strong>: length, filler words, hedged openings, repeated words, and redundant phrases. Hit all 5 green = leadership-grade.'
  },
  {
    icon: '◆',
    tag: 'DRILL 2 · REFRAME',
    tagColor: '#633806',
    tagBg: '#FAEEDA',
    title: 'Cut the waffle. Add the "so what".',
    body: 'You\'ll read a deliberately waffled paragraph. Your job is two-step: <strong>compress it to one sentence</strong>, then <strong>add what we should do about it</strong>.',
    example: 'Waffled: <em>"I\'ve been thinking about the budget and some numbers are a bit off..."</em><br><br>Your reframe: <em>"The budget is £20k over — we need to cut travel or delay hiring."</em> <br><br>Facts + implication = leadership framing.',
    howto: 'Type under 30 words. Include an action word (need, should, must, recommend). The app shows a model answer for comparison.'
  },
  {
    icon: '◉',
    tag: 'DRILL 3 · WORD',
    tagColor: '#085041',
    tagBg: '#E1F5EE',
    title: 'One word a day. Built to stick.',
    body: 'You said your vocabulary feels limited. The fix isn\'t learning 1,000 words — it\'s learning 73 <strong>leadership-grade</strong> words really well. The app uses <strong>spaced repetition</strong> — a proven memory method.',
    example: 'Day 1: learn "leverage". <br>Day 2: learn "cadence". <br>Day 4: "leverage" comes back for review. <br>Day 8: "cadence" comes back. <br><br>After 6 months, 73 words in active use.',
    howto: 'You\'ll see a new word (or a review). Write a real sentence using it — about your actual work, not a made-up example. Real context locks it in.'
  },
  {
    icon: '◐',
    tag: 'DRILL 4 · LISTEN',
    tagColor: '#0C447C',
    tagBg: '#E6F1FB',
    title: 'The most powerful leadership skill.',
    body: 'This is the one that will change your career fastest. You\'ll get <strong>one question to ask a real person today</strong>. Ask it. Listen. Don\'t interrupt. Come back and log what you learned.',
    example: 'Today\'s challenge: <em>"Ask a colleague: \'What do you think we\'re getting wrong?\'"</em><br><br>Senior people remember the colleague who asked the sharp question. Not the one with the cleverest answer.',
    howto: 'Read the question. Take it into a real conversation. Return to the app later to log what you learned. Don\'t skip — this is the biggest lever you have.'
  },
  {
    icon: '▲',
    tag: 'DRILL 5 · PRESSURE',
    tagColor: '#712B13',
    tagBg: '#FAECE7',
    title: 'Composure under fire.',
    body: 'Real leadership moments happen when you\'re <strong>interrupted, challenged, or caught off-guard</strong>. The instinct is to waffle defensively. Train the opposite — short, steady, no defence.',
    example: 'Scenario: Your boss says <em>"I expected more from this work."</em><br><br>Waffly: <em>"I\'m sorry, I\'ve been really busy and..."</em><br><br>Composed: <em>"Which part specifically fell short?"</em>',
    howto: 'Read the scenario. Write a short, non-defensive response. The app flags defensive or apologetic language and gives you a coach\'s note.'
  },
  {
    icon: '●',
    tag: 'DRILL 6 · PRESENCE',
    tagColor: '#72243E',
    tagBg: '#FBEAF0',
    title: 'Lock in presence before you walk in.',
    body: 'Before your most important meeting each day, answer <strong>three questions</strong>. This 1-minute ritual changes how you show up — because you\'ve already decided how you want the meeting to go.',
    example: '1. The one message I\'m leaving them with<br>2. A sharp question I\'ll ask first<br>3. A physical cue (slower pace, longer pauses)<br><br>Locking these in before you walk in = presence.',
    howto: 'Fill in all three before your next key meeting. The act of writing them down is half the value.'
  },
  {
    icon: '◈',
    tag: 'THE 10-MINUTE ROUTINE',
    tagColor: '#3C3489',
    tagBg: '#EEEDFE',
    title: 'You\'re ready.',
    body: 'Every morning: open the app, do each drill in order. <strong>10 minutes total</strong>. The <strong>Listen</strong> drill is a question you take into your day — come back later to log it.',
    example: 'Morning: 6 drills × ~90 seconds<br>Throughout the day: the Listen question, the Presence prep before a meeting<br>End of day: your streak is +1, your word library grows, your BLUF score trends up.<br><br>180 days = a different you.',
    howto: 'Your progress saves on this device. If you ever need a refresher on any drill, tap the ? button in the top right of its header.'
  }
];

// ============ STATE ============
function getState() {
  let s = {};
  try { s = JSON.parse(localStorage.getItem('leadCommV2') || '{}'); } catch (e) {}
  s.welcomed = s.welcomed || false;
  s.days = s.days || 0;
  s.reps = s.reps || 0;
  s.listen = s.listen || 0;
  s.wordsLearned = s.wordsLearned || 0;
  s.lastDay = s.lastDay || '';
  s.blufI = s.blufI || 0;
  s.waffleI = s.waffleI || 0;
  s.wordI = s.wordI || 0;
  s.listenI = s.listenI || 0;
  s.pressureI = s.pressureI || 0;
  s.learned = s.learned || {};
  s.blufHistory = s.blufHistory || [];
  s.activeDays = s.activeDays || {};
  s.streak = s.streak || 0;
  return s;
}
let state = getState();
function saveState() {
  try { localStorage.setItem('leadCommV2', JSON.stringify(state)); } catch (e) {}
}

const INTERVALS = [1, 3, 7, 14, 30, 90];

function dayKey(d) {
  d = d || new Date();
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}

function markDay() {
  const today = dayKey();
  if (state.lastDay !== today) {
    state.days++;
    state.lastDay = today;
    state.activeDays[today] = (state.activeDays[today] || 0) + 1;
    // streak calc
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (state.activeDays[dayKey(yesterday)]) {
      state.streak++;
    } else {
      state.streak = 1;
    }
    saveState();
    updateStats();
  } else {
    state.activeDays[today] = (state.activeDays[today] || 0) + 1;
    saveState();
  }
}

// ============ WELCOME + TOUR ============
let tourStep = 0;
let tourOverride = -1; // if replaying specific tab

function startTour() {
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('tour').classList.remove('hidden');
  tourStep = 0;
  tourOverride = -1;
  renderTour();
}
window.startTour = startTour;

function skipToApp() {
  state.welcomed = true;
  saveState();
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  updateStats();
  renderCharts();
}
window.skipToApp = skipToApp;

function renderTour() {
  const step = tourOverride >= 0 ? TOUR[tourOverride] : TOUR[tourStep];
  const isLastStep = tourOverride < 0 && tourStep === TOUR.length - 1;
  const isReplay = tourOverride >= 0;

  const dots = TOUR.map((_, i) => {
    let cls = 'tour-dot';
    if (isReplay) {
      if (i === tourOverride) cls += ' active';
    } else {
      if (i === tourStep) cls += ' active';
      else if (i < tourStep) cls += ' done';
    }
    return '<div class="' + cls + '"></div>';
  }).join('');

  document.getElementById('tour-modal').innerHTML = `
    <div class="tour-step-indicator">${dots}</div>
    <span class="tour-icon">${step.icon}</span>
    <div style="text-align: center; margin-bottom: 14px;">
      <span class="tour-tag" style="background: ${step.tagBg}; color: ${step.tagColor};">${step.tag}</span>
    </div>
    <div class="tour-title">${step.title}</div>
    <div class="tour-body">${step.body}</div>
    ${step.example ? '<div class="tour-example">' + step.example + '</div>' : ''}
    ${step.howto ? '<div class="tour-body" style="margin-top: 14px;"><strong>How it works:</strong> ' + step.howto + '</div>' : ''}
    <div class="tour-btns">
      ${isReplay
        ? '<button onclick="closeTour()">Got it</button>'
        : (tourStep > 0 ? '<button onclick="prevTour()">Back</button>' : '<button onclick="closeTour()">Skip</button>') +
          (isLastStep
            ? '<button class="primary" onclick="finishTour()">Start training →</button>'
            : '<button class="primary" onclick="nextTour()">Next →</button>')
      }
    </div>
  `;
}

function nextTour() { tourStep++; renderTour(); }
function prevTour() { tourStep--; renderTour(); }
function closeTour() {
  document.getElementById('tour').classList.add('hidden');
  if (!state.welcomed) {
    state.welcomed = true;
    saveState();
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    updateStats();
    renderCharts();
  }
}
function finishTour() {
  state.welcomed = true;
  saveState();
  document.getElementById('tour').classList.add('hidden');
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  updateStats();
  renderCharts();
}
function replayTour(tabIdx) {
  tourOverride = tabIdx;
  document.getElementById('tour').classList.remove('hidden');
  renderTour();
}
window.nextTour = nextTour;
window.prevTour = prevTour;
window.closeTour = closeTour;
window.finishTour = finishTour;
window.replayTour = replayTour;

// ============ TAB SWITCH ============
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const i = parseInt(btn.dataset.tab);
    for (let k = 0; k < 7; k++) {
      const p = document.getElementById('panel-' + k);
      if (p) p.classList.toggle('hidden', k !== i);
    }
    document.querySelectorAll('.tab').forEach((t, k) => t.classList.toggle('on', k === i));
    if (i === 6) renderCharts();
  });
});

// ============ BLUF ============
function loadBluf() {
  document.getElementById('bluf-prompt').textContent = BLUFS[state.blufI % BLUFS.length].p;
  document.getElementById('bluf-ans').value = '';
  document.getElementById('bluf-fb').innerHTML = '';
  document.getElementById('bluf-meter').innerHTML = '';
  liveCountBluf();
}
function nextBluf() { state.blufI++; saveState(); loadBluf(); }
function liveCountBluf() {
  const v = document.getElementById('bluf-ans').value.trim();
  const n = v ? v.split(/\s+/).length : 0;
  const el = document.getElementById('bluf-live');
  el.textContent = n + (n === 1 ? ' word' : ' words');
  el.style.color = (n > 0 && n <= 30) ? '#0F6E56' : (n > 30 ? '#A32D2D' : '');
}
function detectRepetition(text) {
  const clean = text.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const words = clean.split(' ').filter(w => w.length > 3);
  const counts = {};
  words.forEach(w => counts[w] = (counts[w] || 0) + 1);
  const stop = new Set(['that','this','with','from','they','them','have','been','were','will','what','when','which','their','would','could','should','about','because','there','these','those','your','some','more','over','than','also','into','just','very','much','many','most']);
  return Object.entries(counts).filter(([w, c]) => c >= 2 && !stop.has(w)).length;
}
function detectRedundantPhrases(text) {
  const patterns = [/\bin order to\b/gi, /\bat this point in time\b/gi, /\bdue to the fact that\b/gi, /\bin the event that\b/gi, /\bfor the purpose of\b/gi, /\bwith regard to\b/gi, /\bon a daily basis\b/gi, /\bin a timely manner\b/gi, /\bat the end of the day\b/gi, /\bgoing forward\b/gi, /\bneedless to say\b/gi, /\bas a matter of fact\b/gi];
  return patterns.reduce((a, p) => a + ((text.match(p) || []).length), 0);
}
function analyseBluf() {
  const ans = document.getElementById('bluf-ans').value.trim();
  if (!ans) { document.getElementById('bluf-fb').innerHTML = '<div class="fb-warn">Type an answer first.</div>'; return; }
  const words = ans.split(/\s+/).length;
  const sentences = ans.split(/[.!?]+/).filter(s => s.trim());
  const fillers = (ans.match(/\b(basically|actually|sort of|kind of|just|like|I mean|you know|maybe|possibly|I think|I guess|honestly|literally)\b/gi) || []).length;
  const firstSent = sentences[0] || '';
  const hedged = /^(so|well|um|uh|i think|i guess|maybe|it's kind of|basically|i mean|honestly)/i.test(firstSent.trim());
  const repeats = detectRepetition(ans);
  const redundant = detectRedundantPhrases(ans);

  const signals = [
    { good: words <= 30, val: words, lbl: 'Words' },
    { good: fillers <= 1, val: fillers, lbl: 'Fillers' },
    { good: !hedged, val: hedged ? 'Yes' : 'No', lbl: 'Hedged' },
    { good: repeats === 0, val: repeats, lbl: 'Repeats' },
    { good: redundant === 0, val: redundant, lbl: 'Phrases' }
  ];
  const score = signals.filter(s => s.good).length;

  const meterCells = signals.map(s =>
    `<div class="meter-cell ${s.good ? 'good' : 'bad'}">
      <div class="meter-val">${s.val}</div>
      <div class="meter-lbl">${s.lbl}</div>
    </div>`
  ).join('');

  document.getElementById('bluf-meter').innerHTML = `
    <div class="score-big">
      <span class="score-big-num">${score}</span><span class="score-big-max">/5</span>
      <div class="score-big-label">Signals green</div>
    </div>
    <div class="meter-wrap">${meterCells}</div>
  `;

  if (score === 5) {
    document.getElementById('bluf-fb').innerHTML = '<div class="fb-good"><strong>Leadership-grade.</strong> Five greens. Now say it out loud once — that\'s how it reaches your real speech.</div>';
  } else {
    let issues = [];
    if (words > 30) issues.push('cut to under 30 words');
    if (fillers > 1) issues.push('drop fillers ("just", "basically", "actually")');
    if (hedged) issues.push('your first sentence starts with a hedge — lead with the conclusion');
    if (repeats > 0) issues.push('say each idea once, trust the listener');
    if (redundant > 0) issues.push('cut phrases like "in order to"');
    document.getElementById('bluf-fb').innerHTML = '<div class="fb-warn"><strong>Sharpen:</strong> ' + issues.join('; ') + '.</div>';
  }

  state.blufHistory.push({ score, ts: Date.now() });
  if (state.blufHistory.length > 100) state.blufHistory = state.blufHistory.slice(-100);
  state.reps++;
  saveState();
  markDay();
  updateStats();
}

// ============ REFRAME ============
function loadWaffle() {
  document.getElementById('waffle-text').textContent = WAFFLES[state.waffleI % WAFFLES.length].w;
  document.getElementById('reframe-ans').value = '';
  document.getElementById('reframe-fb').innerHTML = '';
  liveCountReframe();
}
function nextWaffle() { state.waffleI++; saveState(); loadWaffle(); }
function liveCountReframe() {
  const v = document.getElementById('reframe-ans').value.trim();
  const n = v ? v.split(/\s+/).length : 0;
  const el = document.getElementById('reframe-live');
  el.textContent = n + (n === 1 ? ' word' : ' words');
  el.style.color = (n > 0 && n <= 30) ? '#0F6E56' : (n > 30 ? '#A32D2D' : '');
}
function analyseReframe() {
  const ans = document.getElementById('reframe-ans').value.trim();
  if (!ans) { document.getElementById('reframe-fb').innerHTML = '<div class="fb-warn">Type your version first.</div>'; return; }
  const w = WAFFLES[state.waffleI % WAFFLES.length];
  const words = ans.split(/\s+/).length;
  const hasImplication = /\b(need|should|must|recommend|propose|let's|we'll|by|within|before|decide|call)\b/i.test(ans);
  let fb;
  if (words <= 30 && hasImplication) {
    fb = '<div class="fb-good"><strong>Strong — under 30 words, and you named the implication.</strong><br><br><strong>Model:</strong> "' + w.s + '"</div>';
  } else if (!hasImplication) {
    fb = '<div class="fb-warn"><strong>You summarised but didn\'t frame.</strong> Add "so we need to..." or "we should decide...".<br><br><strong>Model:</strong> "' + w.s + '"</div>';
  } else {
    fb = '<div class="fb-warn"><strong>Too long (' + words + ' words).</strong> Trim to under 30.<br><br><strong>Model:</strong> "' + w.s + '"</div>';
  }
  document.getElementById('reframe-fb').innerHTML = fb;
  state.reps++; saveState(); markDay(); updateStats();
}

// ============ WORD (spaced rep) ============
let currentWordPick = null;
function pickWord() {
  const now = Date.now();
  const dueForReview = Object.entries(state.learned)
    .filter(([i, data]) => data.nextReview <= now && data.level < 5)
    .map(([i]) => parseInt(i));
  if (dueForReview.length > 0 && Math.random() < 0.4) {
    const idx = dueForReview[Math.floor(Math.random() * dueForReview.length)];
    return { index: idx, isReview: true };
  }
  let idx = state.wordI % WORDS.length;
  let attempts = 0;
  while (state.learned[idx] && state.learned[idx].level >= 5 && attempts < WORDS.length) {
    state.wordI++;
    idx = state.wordI % WORDS.length;
    attempts++;
  }
  return { index: idx, isReview: false };
}
function markWordLearned(idx) {
  const now = Date.now();
  if (!state.learned[idx]) {
    state.learned[idx] = { level: 1, nextReview: now + INTERVALS[0] * 86400000 };
    state.wordsLearned++;
  } else {
    const lv = Math.min(state.learned[idx].level + 1, 5);
    state.learned[idx].level = lv;
    state.learned[idx].nextReview = now + INTERVALS[Math.min(lv - 1, INTERVALS.length - 1)] * 86400000;
  }
  saveState();
}
function loadWord() {
  currentWordPick = pickWord();
  const w = WORDS[currentWordPick.index];
  document.getElementById('word-main').textContent = w.w;
  document.getElementById('word-def').textContent = w.d;
  document.getElementById('word-ex').textContent = '"' + w.e + '"';
  const badge = document.getElementById('word-badge');
  if (currentWordPick.isReview) {
    badge.textContent = 'Review · level ' + state.learned[currentWordPick.index].level + '/5';
  } else if (state.learned[currentWordPick.index]) {
    badge.textContent = 'Level ' + state.learned[currentWordPick.index].level + '/5 · ' + w.t;
  } else {
    badge.textContent = 'New word · ' + w.t;
  }
  document.getElementById('word-ans').value = '';
  document.getElementById('word-fb').innerHTML = '';
  document.getElementById('word-review').classList.add('hidden');
}
function nextWord() {
  if (!currentWordPick || !currentWordPick.isReview) state.wordI++;
  saveState();
  loadWord();
}
function analyseWord() {
  const ans = document.getElementById('word-ans').value.trim();
  const w = WORDS[currentWordPick.index];
  if (!ans) { document.getElementById('word-fb').innerHTML = '<div class="fb-warn">Write a sentence first.</div>'; return; }
  const pattern = w.w.replace(/[- ]/g, '[- ]?');
  const used = new RegExp('\\b' + pattern + '\\w*\\b', 'i').test(ans);
  if (used) {
    markWordLearned(currentWordPick.index);
    const lvl = state.learned[currentWordPick.index].level;
    const nextDays = INTERVALS[Math.min(lvl - 1, INTERVALS.length - 1)];
    document.getElementById('word-fb').innerHTML = '<div class="fb-good"><strong>Locked in at level ' + lvl + '/5.</strong> Next review in ' + nextDays + ' day' + (nextDays > 1 ? 's' : '') + '. Say your sentence out loud once.</div>';
    if (!currentWordPick.isReview) state.wordI++;
    state.reps++; saveState(); markDay(); updateStats();
  } else {
    document.getElementById('word-fb').innerHTML = '<div class="fb-warn">"' + w.w + '" isn\'t in your sentence. Try again.</div>';
  }
}
function showReview() {
  const learned = Object.entries(state.learned).map(([i, d]) => ({ word: WORDS[i], data: d }));
  const rev = document.getElementById('word-review');
  if (learned.length === 0) {
    rev.innerHTML = '<div style="margin-top: 14px; padding: 20px; text-align: center; color: var(--text-muted); background: var(--surface-alt); border-radius: var(--radius-md);">Your library is empty. Learn your first word above.</div>';
  } else {
    const rows = learned.sort((a, b) => b.data.level - a.data.level).map(item =>
      '<div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 0.5px solid var(--border);"><div><strong>' + item.word.w + '</strong> <span style="color: var(--text-muted); font-size: 13px;">· ' + item.word.d + '</span></div><span style="font-size: 11px; background: var(--purple-bg); color: var(--purple-text); padding: 3px 8px; border-radius: 99px; flex-shrink: 0; margin-left: 8px;">lv ' + item.data.level + '</span></div>'
    ).join('');
    rev.innerHTML = '<div style="margin-top: 14px;"><div class="label">Your library · ' + learned.length + ' words</div>' + rows + '</div>';
  }
  rev.classList.toggle('hidden');
}

// ============ LISTEN ============
function loadListen() {
  document.getElementById('listen-prompt').textContent = LISTENS[state.listenI % LISTENS.length];
  document.getElementById('listen-ans').value = '';
  document.getElementById('listen-fb').innerHTML = '';
}
function nextListen() { state.listenI++; saveState(); loadListen(); }
function logListen() {
  const ans = document.getElementById('listen-ans').value.trim();
  if (!ans) { document.getElementById('listen-fb').innerHTML = '<div class="fb-warn">Come back after the conversation — log what you learned.</div>'; return; }
  document.getElementById('listen-fb').innerHTML = '<div class="fb-good"><strong>Logged.</strong> This is how curiosity becomes a leadership skill.</div>';
  state.listen++; state.reps++; saveState(); markDay(); updateStats();
}

// ============ PRESSURE ============
function loadPressure() {
  const p = PRESSURES[state.pressureI % PRESSURES.length];
  document.getElementById('pressure-prompt').textContent = p.p;
  document.getElementById('pressure-ans').value = '';
  document.getElementById('pressure-fb').innerHTML = '';
}
function nextPressure() { state.pressureI++; saveState(); loadPressure(); }
function analysePressure() {
  const ans = document.getElementById('pressure-ans').value.trim();
  if (!ans) { document.getElementById('pressure-fb').innerHTML = '<div class="fb-warn">Type your response first.</div>'; return; }
  const p = PRESSURES[state.pressureI % PRESSURES.length];
  const words = ans.split(/\s+/).length;
  const defensive = /\b(but|well actually|that's not fair|you don't understand|to be honest|with respect)\b/i.test(ans);
  const apologetic = /\b(sorry|my bad|I apologise|I shouldn't have)\b/i.test(ans);
  let issues = [];
  if (defensive) issues.push('sounds defensive');
  if (apologetic) issues.push('don\'t apologise reflexively');
  if (words > 40) issues.push('too long (' + words + ' words)');
  if (issues.length === 0) {
    document.getElementById('pressure-fb').innerHTML = '<div class="fb-good"><strong>Composed.</strong> Short, steady, no defence.<br><br><strong>Coach:</strong> ' + p.h + '</div>';
  } else {
    document.getElementById('pressure-fb').innerHTML = '<div class="fb-warn"><strong>Adjust:</strong> ' + issues.join('; ') + '.<br><br><strong>Coach:</strong> ' + p.h + '</div>';
  }
  state.reps++; saveState(); markDay(); updateStats();
}

// ============ PRESENCE ============
function savePrep() {
  const a = document.getElementById('p-1').value.trim();
  const b = document.getElementById('p-2').value.trim();
  const c = document.getElementById('p-3').value.trim();
  if (!a || !b || !c) {
    document.getElementById('prep-saved').className = 'fb-warn';
    document.getElementById('prep-saved').textContent = 'Fill all three fields.';
    document.getElementById('prep-saved').classList.remove('hidden');
    return;
  }
  document.getElementById('prep-saved').className = 'fb-good';
  document.getElementById('prep-saved').innerHTML = '<strong>Locked in.</strong> Walk in slower than you think. Ask before you tell. Let silence work for you.';
  document.getElementById('prep-saved').classList.remove('hidden');
  state.reps++; saveState(); markDay(); updateStats();
}
function clearPrep() {
  ['p-1', 'p-2', 'p-3'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('prep-saved').classList.add('hidden');
}

// ============ STATS + CHARTS ============
function updateStats() {
  const streakEl = document.getElementById('streak-val');
  if (streakEl) streakEl.textContent = state.streak;
  const stats = {
    'progress-streak': state.streak,
    'stat-reps': state.reps,
    'stat-words': state.wordsLearned,
    'stat-listen': state.listen
  };
  Object.entries(stats).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  // BLUF avg
  const avgEl = document.getElementById('stat-bluf-avg');
  if (avgEl) {
    if (state.blufHistory.length === 0) {
      avgEl.textContent = '–';
    } else {
      const recent = state.blufHistory.slice(-10);
      const avg = recent.reduce((a, b) => a + b.score, 0) / recent.length;
      avgEl.textContent = avg.toFixed(1) + '/5';
    }
  }

  // progress message
  const msgEl = document.getElementById('progress-msg');
  if (msgEl) {
    if (state.streak === 0) msgEl.textContent = 'Start today. Come back tomorrow.';
    else if (state.streak < 7) msgEl.textContent = 'Building the habit. Don\'t break the chain.';
    else if (state.streak < 30) msgEl.textContent = 'You\'re in. The hard part is behind you.';
    else if (state.streak < 90) msgEl.textContent = 'Real change is compounding now.';
    else msgEl.textContent = 'You\'re someone else now. Keep going.';
  }
}

function renderCharts() {
  renderBlufChart();
  renderCalendar();
  renderWordLibrary();
}

function renderBlufChart() {
  const el = document.getElementById('bluf-chart');
  if (!el) return;
  const history = state.blufHistory.slice(-20);
  if (history.length === 0) {
    el.innerHTML = '<div class="empty-progress"><span class="empty-progress-emoji">○</span><div>No BLUF attempts yet. Do drill 1 to see your score trend.</div></div>';
    return;
  }

  const W = 600, H = 200, pad = 30;
  const xStep = history.length > 1 ? (W - pad * 2) / (history.length - 1) : 0;
  const yScale = (v) => H - pad - (v / 5) * (H - pad * 2);

  // build path
  const points = history.map((h, i) => ({ x: pad + i * xStep, y: yScale(h.score), score: h.score }));
  const path = points.map((p, i) => (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ');
  const areaPath = path + ' L' + points[points.length - 1].x.toFixed(1) + ',' + (H - pad) + ' L' + pad + ',' + (H - pad) + ' Z';

  // gridlines
  const gridlines = [0, 1, 2, 3, 4, 5].map(v =>
    `<line x1="${pad}" y1="${yScale(v)}" x2="${W - pad}" y2="${yScale(v)}" stroke="currentColor" stroke-opacity="0.08" stroke-dasharray="${v === 5 ? '0' : '3 3'}"/>` +
    `<text x="${pad - 6}" y="${yScale(v) + 4}" font-size="11" fill="currentColor" fill-opacity="0.4" text-anchor="end">${v}</text>`
  ).join('');

  const dots = points.map(p => {
    const color = p.score >= 4 ? '#0F6E56' : p.score >= 3 ? '#BA7517' : '#A32D2D';
    return `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}"/>`;
  }).join('');

  el.innerHTML = `<svg class="chart-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
    ${gridlines}
    <path d="${areaPath}" fill="#534AB7" fill-opacity="0.08"/>
    <path d="${path}" fill="none" stroke="#534AB7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${dots}
  </svg>`;
}

function renderCalendar() {
  const el = document.getElementById('calendar');
  if (!el) return;
  const days = 35;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Start from Monday of the week 5 weeks ago
  const start = new Date(today);
  const todayDow = today.getDay() === 0 ? 6 : today.getDay() - 1; // Mon=0
  start.setDate(start.getDate() - (4 * 7 + todayDow));

  let cells = '';
  for (let i = 0; i < days; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const key = dayKey(d);
    const active = !!state.activeDays[key];
    const isToday = key === dayKey(today);
    const future = d > today;
    cells += `<div class="cal-cell ${active ? 'active' : ''} ${isToday ? 'today' : ''}" style="${future ? 'opacity: 0.3;' : ''}"></div>`;
  }
  el.innerHTML = cells;
}

function renderWordLibrary() {
  const el = document.getElementById('word-library');
  if (!el) return;
  const total = WORDS.length;
  let html = '';
  for (let i = 0; i < total; i++) {
    const l = state.learned[i];
    const cls = l ? 'lib-dot lv' + l.level : 'lib-dot';
    html += `<div class="${cls}" title="${WORDS[i].w}"></div>`;
  }
  el.innerHTML = html;
}

// ============ EXPORT / RESET ============
function exportData() {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'comm-trainer-progress-' + dayKey() + '.json';
  a.click();
  URL.revokeObjectURL(url);
}
function resetAll() {
  if (confirm('Reset all progress? This cannot be undone.')) {
    localStorage.removeItem('leadCommV2');
    location.reload();
  }
}

// ============ EXPOSE ============
window.analyseBluf = analyseBluf;
window.nextBluf = nextBluf;
window.liveCountBluf = liveCountBluf;
window.analyseReframe = analyseReframe;
window.nextWaffle = nextWaffle;
window.liveCountReframe = liveCountReframe;
window.analyseWord = analyseWord;
window.nextWord = nextWord;
window.showReview = showReview;
window.logListen = logListen;
window.nextListen = nextListen;
window.analysePressure = analysePressure;
window.nextPressure = nextPressure;
window.savePrep = savePrep;
window.clearPrep = clearPrep;
window.exportData = exportData;
window.resetAll = resetAll;

// ============ INIT ============
if (state.welcomed) {
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
}
loadBluf();
loadWaffle();
loadWord();
loadListen();
loadPressure();
updateStats();
renderCharts();
