import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TitleSection from "./components/TitleSection";
import InfoSection from "./components/InfoSection";
import TextLeft_GraphicRight from "./components/layouts/TextLeft_GraphicRight";
import GraphicLeft_TextRight from "./components/layouts/GraphicLeft_TextRight";
import TextOnly from "./components/layouts/TextOnly";
import GraphicTop_TextBottom from "./components/layouts/GraphicTop_TextBottom";
import TextLeft_GraphicTopRight_CaptionBottomRight from "./components/layouts/TextLeft_GraphicTopRight_CaptionBottomRight";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <TitleSection />

      {/* ── Section 0.1 ───────────────────────────────────────────────── */}
      <InfoSection
        id="section-01"
        number="0.1"
        title="The Scientific Attitude, Critical Thinking, and Developing Arguments"
        variant="light"
      >
        <TextLeft_GraphicRight>
          <h3>The Scientific Attitude</h3>
          <p>
            Psychologists approach their work with a distinctive set of values that separate
            scientific inquiry from casual observation. <strong>Curiosity</strong> drives
            researchers to ask questions about human behavior; <strong>skepticism</strong>
            prevents premature conclusions; and <strong>humility</strong> ensures findings
            are held tentatively, ready to be revised in light of new evidence.
          </p>
          <p>
            Together these three traits form the foundation of the scientific attitude —
            placeholder text to be replaced with course content on the scientific attitude
            and how it guides psychological research.
          </p>
        </TextLeft_GraphicRight>

        <TextLeft_GraphicTopRight_CaptionBottomRight
          caption="Figure 1.1 — Placeholder caption describing the graphic above. Replace with a real figure description once the graphic is added."
        >
          <h3>Critical Thinking</h3>
          <p>
            Critical thinking involves evaluating claims by examining the evidence, reasoning,
            and assumptions behind them. It requires distinguishing between <strong>empirical
            claims</strong> (testable by observation) and non-empirical claims that fall
            outside the scope of science.
          </p>
          <p>
            Placeholder text to be replaced with course content covering pseudoscience,
            anecdotal evidence, and the role of operational definitions in making claims
            precise and testable.
          </p>
          <p>
            Key concepts: confirmation bias, anecdotal evidence, pseudoscience, operational
            definitions, and the difference between correlation and causation.
          </p>
        </TextLeft_GraphicTopRight_CaptionBottomRight>

        <TextOnly
          col1={
            <>
              <h3>Developing Arguments</h3>
              <p>
                Constructing a psychological argument requires selecting appropriate evidence,
                identifying the claim being supported, and acknowledging counter-evidence.
                Placeholder text — replace with content on argumentation and claim-evidence
                reasoning in psychology.
              </p>
            </>
          }
          col2={
            <>
              <h3>Key Vocabulary</h3>
              <p>
                <strong>Empiricism</strong> — the view that knowledge comes from experience
                and observation. <strong>Operational definition</strong> — a precise
                description of how a variable is measured. <strong>Replication</strong> —
                repeating a study to verify its findings. Placeholder — add full vocabulary
                list here.
              </p>
            </>
          }
        />
      </InfoSection>

      {/* ── Section 0.2 ───────────────────────────────────────────────── */}
      <InfoSection
        id="section-02"
        number="0.2"
        title="The Need for Psychological Science"
        variant="dark"
      >
        <GraphicLeft_TextRight>
          <h3>Why Science Over Intuition?</h3>
          <p>
            Human intuition is prone to systematic errors. <strong>Hindsight bias</strong>
            — the feeling that we "knew it all along" after learning an outcome — and
            <strong> overconfidence</strong> in our judgments make everyday reasoning
            unreliable. Science provides a structured way to overcome these tendencies.
          </p>
          <p>
            Placeholder text to be replaced with course content on why psychological science
            is necessary and how it corrects for the limits of common sense and folk
            psychology.
          </p>
        </GraphicLeft_TextRight>

        <TextLeft_GraphicRight>
          <h3>Hindsight Bias &amp; Overconfidence</h3>
          <p>
            Studies show that people consistently overestimate how predictable events were
            before they occurred. This tendency — combined with overconfidence in our own
            knowledge and abilities — creates a false sense of certainty that science is
            designed to check.
          </p>
          <p>
            Placeholder text — replace with specific studies, theorists, and examples
            relevant to hindsight bias and overconfidence as covered in the unit.
          </p>
        </TextLeft_GraphicRight>

        <TextOnly>
          <h3>Key Terms &amp; Theorists</h3>
          <p>
            <strong>Hindsight bias</strong> — the tendency to believe, after learning an
            outcome, that one would have predicted it. <strong>Overconfidence</strong> —
            excessive confidence in one's own answers. <strong>Perceiving order in
            random events</strong> — the tendency to find patterns in random data.
            Placeholder — add full key terms and theorist names here.
          </p>
        </TextOnly>
      </InfoSection>

      {/* ── Section 0.3 ───────────────────────────────────────────────── */}
      <InfoSection
        id="section-03"
        number="0.3"
        title="The Scientific Method"
        variant="light"
      >
        <GraphicTop_TextBottom>
          <h3>Overview of the Scientific Method</h3>
          <p>
            The scientific method is a systematic process for generating and testing
            knowledge. It typically proceeds through observation, hypothesis formation,
            data collection, analysis, and conclusion — with each step designed to
            minimize bias and maximize reproducibility.
          </p>
          <p>
            Placeholder text — replace with a detailed walkthrough of the scientific
            method as presented in your unit, including the role of theory, hypothesis,
            and peer review.
          </p>
        </GraphicTop_TextBottom>

        <TextLeft_GraphicRight>
          <h3>Hypotheses &amp; Variables</h3>
          <p>
            A <strong>hypothesis</strong> is a testable prediction derived from a theory.
            Good hypotheses specify an <strong>independent variable</strong> (what the
            researcher manipulates) and a <strong>dependent variable</strong> (what is
            measured). Both must be given precise operational definitions.
          </p>
          <p>
            Placeholder text — replace with content on confounding variables, control
            groups, and how researchers construct testable hypotheses in psychology.
          </p>
        </TextLeft_GraphicRight>

        <GraphicLeft_TextRight>
          <h3>Research Methods</h3>
          <p>
            Psychologists use a variety of methods including <strong>naturalistic
            observation</strong>, <strong>surveys</strong>, <strong>case studies</strong>,
            and <strong>experiments</strong>. Each method has distinct strengths and
            weaknesses depending on the research question and ethical constraints.
          </p>
          <p>
            Placeholder text — replace with a comparison of descriptive methods, their
            appropriate uses, and key examples from the unit.
          </p>
        </GraphicLeft_TextRight>
      </InfoSection>

      {/* ── Section 0.4 ───────────────────────────────────────────────── */}
      <InfoSection
        id="section-04"
        number="0.4"
        title="Correlation and Experimentation"
        variant="dark"
      >
        <TextLeft_GraphicTopRight_CaptionBottomRight
          caption="Figure 4.1 — Placeholder: replace with a scatterplot or diagram illustrating correlation coefficients (positive, negative, and zero correlation)."
        >
          <h3>Correlation</h3>
          <p>
            A <strong>correlation</strong> describes the statistical relationship between
            two variables. The <strong>correlation coefficient</strong> (r) ranges from
            −1 to +1, where values near ±1 indicate a strong relationship and values
            near 0 indicate no relationship.
          </p>
          <p>
            Critically, <strong>correlation does not imply causation</strong>. A third
            variable (confound) may explain the relationship between two correlated
            variables. Placeholder — add specific examples and relevant studies here.
          </p>
        </TextLeft_GraphicTopRight_CaptionBottomRight>

        <GraphicLeft_TextRight>
          <h3>Experimental Design</h3>
          <p>
            Experiments are the only research method that can establish <strong>cause
            and effect</strong>. By randomly assigning participants to <strong>experimental</strong>
            and <strong>control</strong> groups and manipulating only the independent
            variable, researchers can isolate its effect on the dependent variable.
          </p>
          <p>
            Placeholder text — replace with content on random assignment, double-blind
            procedures, placebos, and key experiments from the unit.
          </p>
        </GraphicLeft_TextRight>

        <TextOnly
          col1={
            <>
              <h3>Statistical Reasoning</h3>
              <p>
                Understanding <strong>mean</strong>, <strong>median</strong>, and
                <strong> mode</strong>; measures of variation such as <strong>range</strong>
                and <strong>standard deviation</strong>; and the role of
                <strong> statistical significance</strong> in evaluating results.
                Placeholder — add full statistical reasoning content here.
              </p>
            </>
          }
          col2={
            <>
              <h3>Key Vocabulary</h3>
              <p>
                <strong>Correlation coefficient</strong> — numerical expression of the
                degree of relationship between two variables. <strong>Random
                assignment</strong> — assigning participants to groups by chance.
                <strong> Double-blind</strong> — neither participant nor researcher knows
                group assignment. Placeholder — complete vocabulary list here.
              </p>
            </>
          }
        />
      </InfoSection>

      <Footer />
    </main>
  );
}
