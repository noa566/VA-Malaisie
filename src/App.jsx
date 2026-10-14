import Chapter from "./components/Chapter.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import MissionMap, { MissionTimeline } from "./components/MissionMap.jsx";
import Navbar from "./components/Navbar.jsx";
import Offers from "./components/Offers.jsx";
import Process from "./components/Process.jsx";
import Seo from "./components/Seo.jsx";
import StoryLine from "./components/StoryLine.jsx";
import TeamGrid from "./components/TeamGrid.jsx";
import Transition from "./components/Transition.jsx";
import { useI18n } from "./i18n.jsx";

export default function App() {
  const { ui, team, mission, offers, process, cta } = useI18n();

  return (
    <div className="page-bg relative min-h-svh">
      <Seo />
      <div className="grain" aria-hidden="true" />
      <a href="#contenu" className="skip-link">
        {ui.skip}
      </a>
      <Navbar />
      <StoryLine />
      <main id="contenu" className="pl-4 sm:pl-6 md:pl-10">
        <Hero />
        <Chapter
          id={team.id}
          number={team.number}
          title={team.title}
          lead={team.lead}
        >
          <TeamGrid />
        </Chapter>
        <Transition>{team.transition}</Transition>
        <Chapter
          id={mission.id}
          number={mission.number}
          title={mission.title}
          lead={mission.lead}
        >
          <MissionBlock />
        </Chapter>
        <Transition>{mission.transition}</Transition>
        <Chapter
          id={offers.id}
          number={offers.number}
          title={offers.title}
          lead={offers.lead}
        >
          <Offers />
        </Chapter>
        <Transition>{offers.transition}</Transition>
        <Chapter
          id={process.id}
          number={process.number}
          title={process.title}
          lead={process.lead}
        >
          <Process />
        </Chapter>
        <Chapter
          id={cta.id}
          number={cta.number}
          title={cta.title}
        >
          <CTA />
        </Chapter>
      </main>
      <Footer />
    </div>
  );
}

function MissionBlock() {
  const { mission } = useI18n();

  return (
    <div>
      <aside className="mb-14 max-w-3xl rounded-2xl border border-accent/25 bg-surface px-6 py-8 sm:px-8">
        <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
          {mission.learningJourney.kicker}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
          {mission.learningJourney.title}
        </h3>
        <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-muted">
          {mission.learningJourney.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </aside>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="font-display text-lg font-semibold text-cream">
            {mission.whyTitle}
          </h3>
          <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-muted">
            {mission.why.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-cream">
            {mission.visionTitle}
          </h3>
          <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-muted">
            {mission.vision.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-3xl">
        <MissionMap />
      </div>
      <MissionTimeline />
    </div>
  );
}
