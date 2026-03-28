import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TitleSection from "./components/TitleSection";
import InfoSection from "./components/InfoSection";
import TextLeft_GraphicRight from "./components/layouts/TextLeft_GraphicRight";
import GraphicLeft_TextRight from "./components/layouts/GraphicLeft_TextRight";
import TextOnly from "./components/layouts/TextOnly";
import TextLeft_GraphicTopRight_CaptionBottomRight from "./components/layouts/TextLeft_GraphicTopRight_CaptionBottomRight";
import CardGrid from "./components/layouts/CardGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <TitleSection />

      {/* ── Section 0.1 ───────────────────────────────────────────────── */}
      <InfoSection
        id="section-01"
        number="0.1"
        title="Scientific Attitude, Critical Thinking, Developing Arguments"
        variant="light"
      >
        <TextOnly>
          <h3>What is Scientific Attitude?</h3>
          <ul>
            <li>It is embracing curiosity, skepticism, and humility to use Critical thinking</li>
            <li>We use evidence and Critical thinking to examine assumptions, assess the source, discern hidden bias, evaluate evidence, and assess conclusions</li>
            <li>Directed, problem-focused thinking for solutions/errors. Essential to examining how valid a hypothesis is in meaning of research</li>
            <li>Scientific inquiry can help sift reality from illusion</li>
          </ul>
          <h3>Scientific Attitude Components</h3>
          <ul>
            <li><strong>Curiosity</strong>: Does it work? Can it be tested and confirmed?</li>
            <li><strong>Skepticism</strong>: Is it true? How do you know? Cannot believe everything, but also cannot write off everything</li>
            <li><strong>Humility</strong>: How can I explore deeper? Willingness to follow new ideas as not everything is as predicted. Be surprised and open to beliefs and original perceptions being different.</li>
          </ul>
          <h3>Critical Thinking</h3>
          <ul>
            <li>Reevaluating and interpreting information deeper to recognize and eliminate bias, better evaluate evidence, question and assess sources, and come to conclusions.</li>
            <li>Science based answers are better than &ldquo;common sense&rdquo; based answers because of human tendency to have biases.</li>
          </ul>
        </TextOnly>

        <TextOnly
          col1={
            <>
              <h3>Cultural &amp; Cognitive Biases</h3>
              <ul>
                <li><strong>Cultural norms</strong>: Expectations and rules shared among a group of people that guides accepted behaviors</li>
                <li><strong>Cognitive biases</strong>: Systematic patterns of thinking errors that affect judgment and decision-making.</li>
                <li><strong>Confirmation bias</strong>: Tendency to search for or interpret information that confirms one&apos;s beliefs</li>
              </ul>
            </>
          }
          col2={
            <>
              <h3>Research &amp; Thinking Biases</h3>
              <ul>
                <li><strong>Hindsight bias</strong>: Belief that one &ldquo;knew it all along&rdquo; after learning an outcome</li>
                <li><strong>Overconfidence</strong>: Overestimating the accuracy of one&apos;s beliefs or judgments.</li>
              </ul>
            </>
          }
        />
      </InfoSection>

      {/* ── Section 0.2 ───────────────────────────────────────────────── */}
      <InfoSection
        id="section-02"
        number="0.2"
        title="Need for Psychological Science"
        variant="dark"
      >
        <TextLeft_GraphicRight
          graphic={
            <Image
              src="/images/0.2_correlation_not_causation.png"
              alt="Diagram illustrating that correlation is not causation"
              width={560}
              height={380}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          }
        >
          <h3>Psychology</h3>
          <ul>
            <li>The study of the mind and behavior through the use of research and experimental methods to understand thoughts, emotions, and behaviors</li>
            <li>Base of psychology is observation</li>
          </ul>
        </TextLeft_GraphicRight>

        <TextOnly
          col1={
            <>
              <h3>Hindsight Bias</h3>
              <p>After learning an outcome, individuals have a tendency to believe they would have foreseen it&mdash;&ldquo;I knew it all along.&rdquo; This bias can lead people to criticize poor, risky decisions while praising successful ones, even when both involve similar uncertainty. When findings align with &ldquo;common sense,&rdquo; individuals may assume they already understood the concept and fail to question or analyze it more deeply.</p>
            </>
          }
          col2={
            <>
              <h3>Overconfidence</h3>
              <p>Overconfidence often results from a tendency to seek out information that confirms existing judgments. This inflated sense of certainty can drive quicker thinking, but not necessarily more accurate thinking. As a result, individuals may become blind to errors or alternative perspectives, even when their answers are incorrect.</p>
            </>
          }
        />

        <TextOnly
          col2={
            <>
              <h3>Perceiving Patterns in Random Events</h3>
              <ul>
                <li>Many people find a random and unpredictable world unsettling</li>
                <li>As a result, they tend to perceive patterns or order in random events, as doing so provides a sense of control and reduces stress</li>
              </ul>
            </>
          }
        />

        <GraphicLeft_TextRight
          graphic={
            <Image
              src="/images/0.2_Perceiving_Patterns_in_Random_Events.png"
              alt="Visual example of perceiving patterns in random events"
              width={560}
              height={380}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          }
        >
          <h3>Confirmation Bias</h3>
          <ul>
            <li>The tendency to seek out, interpret, and remember information that confirms our pre-existing notions and beliefs while also ignoring and discounting contradictory evidence</li>
          </ul>
          <h3>How is Psychology a Science?</h3>
          <ul>
            <li>Psychology uses scientific methods such as observation, experimentation, and testing to draw conclusions and make educated guesses</li>
          </ul>
        </GraphicLeft_TextRight>

        <div style={{ textAlign: "center", padding: "8px 0" }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 500,
            fontStyle: "italic",
            color: "var(--color-text)",
            letterSpacing: "0.01em",
            textDecoration: "underline",
            textUnderlineOffset: "5px",
          }}>
            ★ Correlation is <span style={{ fontStyle: "normal", fontWeight: 700 }}>not</span> Causation
          </p>
        </div>
      </InfoSection>

      {/* ── Section 0.3 ───────────────────────────────────────────────── */}
      <InfoSection
        id="section-03"
        number="0.3"
        title="The Scientific Method"
        variant="light"
      >
        <TextLeft_GraphicRight
          graphic={
            <Image
              src="/images/0.3_scientific_method.png"
              alt="Diagram of the scientific method steps"
              width={1160}
              height={500}
              style={{ width: "auto", height: "auto", borderRadius: "4px" }}
            />
          }
        >
          <h3>Core Concepts</h3>
          <ul>
            <li><strong>Hypothesis</strong>: testable explanation or prediction for a specific phenomenon</li>
            <li><strong>Falsifiability</strong>: your hypothesis can be proven true or false</li>
            <li><strong>Operational Definition</strong>: specifies how a concept or term is going to be defined or measured in practice in clear instructions</li>
            <li>
              <strong>Null Hypothesis (H₀)</strong>: States that there is no relationship or difference between variables
              <ul>
                <li>Default stance when doing statistical testing</li>
                <li>e.g. &ldquo;There is no significant relationship between caffeine consumption and academic performance.&rdquo;</li>
              </ul>
            </li>
            <li>
              <strong>Alternative Hypothesis (Hₐ)</strong>: Predicts that a relationship or effect does exist between the variables
              <ul>
                <li>Tested against the null hypothesis</li>
              </ul>
            </li>
          </ul>
        </TextLeft_GraphicRight>

        <TextOnly
          col1={
            <>
              <h3>Reliability &amp; Validity</h3>
              <ul>
                <li>
                  <strong>Reliability</strong>: Consistently getting the same result when doing something multiple times
                  <ul>
                    <li>If a study is reliable, it should give similar results every time it is repeated</li>
                    <li>Replication is confirmation</li>
                  </ul>
                </li>
                <li>
                  <strong>Validity</strong>: Testing how true or accurate something actually is
                  <ul>
                    <li>A study can be reliable but not valid (consistent but wrong)</li>
                  </ul>
                </li>
              </ul>
            </>
          }
          col2={
            <>
              <h3>Generalizability &amp; Sampling Basics</h3>
              <ul>
                <li><strong>Generalizability</strong>: How well the results from a sample can be applied to the larger population. If your sample is good, you can confidently generalize your results</li>
                <li><strong>Population</strong>: The entire group of people you want to study. Example: all students in the U.S., all humans, all students at Darnell Cookman</li>
                <li><strong>Sample</strong>: A smaller group taken from the population. Example: one class, one school, one city</li>
                <li><strong>Sampling</strong>: The process of choosing people from the population to be in your sample</li>
              </ul>
            </>
          }
        />

        <GraphicLeft_TextRight
          graphic={
            <Image
              src="/images/0.3_representative_sampling.png"
              alt="Diagram illustrating representative sampling from a population"
              width={560}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          }
        >
          <h3>Sampling Methods &amp; Issues</h3>
          <ul>
            <li><strong>Sampling Bias</strong>: When the sample is chosen in a way that does NOT represent the population. Happens when researchers pick people based on what they want instead of accuracy. Example: only surveying athletes about school stress</li>
            <li><strong>Convenience Sampling</strong>: Choosing people who are easiest or closest to you. Example: surveying your friends or your own class</li>
            <li><strong>Representative Sampling</strong>: A sample that matches the population&apos;s key characteristics (age, gender, race, etc.). This makes your results more accurate</li>
            <li><strong>Random Sampling</strong>: Everyone in the population has an equal chance of being chosen. No one is specifically picked</li>
            <li>Representative sampling helps ensure your data actually reflects the population, making your conclusions more accurate and trustworthy</li>
          </ul>
        </GraphicLeft_TextRight>

        <TextOnly
          col1={
            <>
              <h3>Types of Data</h3>
              <ul>
                <li><strong>Qualitative Data</strong>: Non-numerical, descriptive data. Example: opinions, feelings, descriptions</li>
                <li><strong>Quantitative Data</strong>: Numerical data that can be measured. Example: scores, percentages, statistics</li>
              </ul>
              <h3>Surveys &amp; Bias</h3>
              <ul>
                <li><strong>Pros of Surveys</strong>: Quick, efficient, and can collect a lot of data from many people</li>
                <li><strong>Cons of Surveys</strong>: You can&apos;t always tell if people are telling the truth or taking it seriously</li>
                <li><strong>Self-Report Bias</strong>: When people give inaccurate answers about themselves, often to look better or avoid embarrassment</li>
                <li><strong>Social Desirability Bias</strong>: When people answer in a way they think is more acceptable or &ldquo;correct.&rdquo; Example: saying you study more than you actually do</li>
              </ul>
            </>
          }
          col2={
            <>
              <h3>Scientific Process &amp; Validation</h3>
              <ul>
                <li><strong>Peer Review</strong>: Other experts in the same field examine your study before it is accepted. Helps check for mistakes and improve accuracy</li>
                <li><strong>Replication</strong>: When another researcher repeats your study and gets the same results. If the same results happen again, it proves the findings are reliable and not just by chance</li>
              </ul>
              <h3>Theories</h3>
              <ul>
                <li>Explanations that apply an integrated set of principles → used to organize observations and generate hypotheses</li>
                <li>Theories can bias observations → we may see what we expect or already believe</li>
                <li>A useful theory: organizes observations clearly, implies predictions that can be tested</li>
                <li>Strong theories stimulate further research → may be revised to better organize and predict behavior</li>
              </ul>
            </>
          }
        />

        <CardGrid
          columns={3}
          cards={[
            {
              title: "Experimental",
              body: "Designed to test a hypothesis to establish a cause and effect relationship between a dependent and independent variable using a controlled scientific environment. Requires random assignment.",
            },
            {
              title: "Non-Experimental",
              body: "Used for research when controlled experimenting would be impossible or unethical. Just meant to describe behavior and cannot establish cause and effect relationship between variables.",
            },
            {
              title: "Case Study",
              body: "Focused examination of a specific person, group, event, or situation for unique detailed insight on a topic.",
            },
            {
              title: "Correlational Study",
              body: "Determines the relationship and strength between two variables.",
            },
            {
              title: "Meta-analysis",
              body: "Combining results across many studies to make a conclusion.",
            },
            {
              title: "Naturalistic Observation",
              body: "Gathering data by observing individuals in natural environments and a real world setting.",
            },
          ]}
        />
      </InfoSection>

      {/* ── Section 0.4 ───────────────────────────────────────────────── */}
      <InfoSection
        id="section-04"
        number="0.4"
        title="Correlation and Experimentation"
        variant="dark"
      >
        <TextLeft_GraphicTopRight_CaptionBottomRight
          caption=""
          graphic={
            <Image
              src="/images/wallahi.png"
              alt="Chart showing correlation coefficients from strong negative to strong positive"
              width={560}
              height={380}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          }
        >
          <h3>Correlation</h3>
          <ul>
            <li><strong>Correlation</strong>: The relationship between two variables</li>
            <li><strong>Correlation coefficient (r)</strong>: The strength of the relationship between those two variables. Values range from -1 (negative) to +1 (positive)</li>
            <li><strong>Positive correlation</strong>: As the independent variable increases, the dependent variable increases as well.</li>
            <li><strong>Negative correlation</strong>: As the independent variable increases, the dependent variable decreases as well.</li>
          </ul>
        </TextLeft_GraphicTopRight_CaptionBottomRight>

        <GraphicLeft_TextRight
          graphic={
            <Image
              src="/images/0.4_graph_relationship.png"
              alt="Graph showing the relationship between two variables on a scatterplot"
              width={560}
              height={380}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          }
        >
          <h3>Scatterplot &amp; Statistical Significance</h3>
          <ul>
            <li><strong>Scatterplot</strong>: Type of graph that is used to visulize the relationship between two variables</li>
            <li>
              <strong>Statistical significance</strong>: The likelihood that the results are not because of random chance and are actually related (p &lt; .05)
              <ul>
                <li>Used to determine if results are meaningful</li>

              </ul>
            </li>
          </ul>
        </GraphicLeft_TextRight>

        <TextLeft_GraphicRight
          graphic={
            <Image
              src="/images/0.4_normal_curve.png"
              alt="Bell curve showing the normal distribution with standard deviation ranges"
              width={560}
              height={480}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          }
        >
          <h3>Data &amp; Statistics</h3>
          <ul>
            <li>
              <strong>Mean</strong>: Average value of a dataset.
            </li>
            <li><strong>Median</strong>: Middle value of a dataset. </li>
            <li>
              <strong>Mode</strong>: Most frequent value in a dataset. There can be more than 1 mode.
            </li>
            <li><strong>Range</strong>: Difference between highest and lowest value in a dataset</li>
            <li>
              <strong>Standard deviation</strong>: Measure of data spread around the mean. Low and high standard deviation scores mean that the values are clumped together and spread out, respectively.
            </li>
          </ul>
          <h3>Normal Curve &amp; Percentile Rank</h3>
          <ul>
            <li>
              <strong>Normal curve / Bell Curve</strong>: A perfect distribution where the mean, median, and mode are all equal. 
            </li>
            <li>
              <strong>68–95–99.7 rule:</strong> 68% of the data is contained in 1 SD, 95% is in 2 SD, and 99.7% is in 3 SD.
            </li>
            <li><strong>Percentile rank</strong>: Percentage of scores below a given score. 90th percentile = scored higher than 90% of people</li>
          </ul>
          <h3>Data Types</h3>
          <ul>
            <li><strong>Descriptive data</strong>: Summarizes data (mean, graphs)</li>
            <li><strong>Inferential data</strong>: Draws conclusions about a population</li>
          </ul>
        </TextLeft_GraphicRight>

        <TextLeft_GraphicRight
          graphic={
            <Image
              src="/images/0.4_skewked_curves.png"
              alt="Diagrams showing positive and negative skew in distributions"
              width={560}
              height={360}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          }
        >
          <h3>Skewed Distributions</h3>
          <ul>
            <li>
              <strong>Positive skew</strong>: Tail extends right when mean &gt; median.
              <ul>
                <li>Usually occurs when most scores are <u>low</u>, but there are a few <u>high</u> outliers that attracts the mean to the right</li>
              </ul>
            </li>
            <li>
              <strong>Negative skew</strong>: Tail extends left when mean &lt; median.
              <ul>
                <li>Usually occurs when most scores are <u>high</u>, but there are a few <u>low</u> outliers that attracts the mean to the right</li>
              </ul>
            </li>
          </ul>
        </TextLeft_GraphicRight>

        <GraphicLeft_TextRight
          graphic={
            <Image
              src="/images/0.4_bimodal_distributions.png"
              alt="Diagram of a bimodal distribution with two peaks"
              width={560}
              height={360}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          }
        >
          <h3>Bimodal Distribution</h3>
          <ul>
            <li>Occurs when there are two peaks in data and a dip towards the middle of the dataset</li>
            <li>Ex: Amount of people at resturants with a relation to time (2 peaks: lunch &amp; dinner)</li>
          </ul>
        </GraphicLeft_TextRight>

        <TextOnly
          col1={
            <>
              <h3>Experimental Design</h3>
              <ul>
                <li><strong>Independent variable (IV)</strong>: Factor manipulated by the researcher</li>
                <li><strong>Dependent variable (DV)</strong>: Outcome measured in the experiment</li>
                <li><strong>Variables</strong>: Any factors that can change in a study</li>
                <li><strong>Confounding variable</strong>: Outside factors that affect the results</li>
                <li><strong>Third variable problem</strong>: A hidden variable influences both variables in a correlation</li>
                <li><strong>Experimental group</strong>: Group exposed to the independent variable</li>
                <li><strong>Control group</strong>: Group <u>not</u> exposed to the independent variable</li>
                <li><strong>Random assignment</strong>: Randomly placing participants into groups</li>
                <li><strong>Placebo</strong>: Fake substance given to participants to usually get a baseline</li>
                <li><strong>Placebo effect</strong>: Changes in behavior due to the expectation of a change and not an actual change</li>
                <li><strong>Single-blind procedure</strong>: Participants are unaware of whether they are assigned to the treatment or control group</li>
                <li><strong>Double-blind procedure</strong>: Neither the participants nor the researchers interacting with them know who is receiving a particular treatment</li>
                <li>
                  <strong>Experimenter bias</strong>: When researcher&apos;s expectations influence results
                </li>
              </ul>
            </>
          }
          col2={
            <>
              <h3>Bias in Research</h3>
              <ul>
                <li>
                  <strong>Wording Effects/Framing</strong>: The phenomenon where the way the question is phrased can influence responses given by the partipants. 
                  <ul>
                    <li>
                      Ex: How fast was the car moving? vs. How fast was the car moving when it crashed?
                    </li>
                  </ul>
                </li>
                <li><strong>Self-report bias</strong>: Inaccurate responses in surveys</li>
                <li><strong>Social desirability bias</strong>: A tendancy for people to give the socially acceptable answers instead of the truth so others view them in a better light.</li>
              </ul>
              <h3>Survey Tools</h3>
              <ul>
                <li><strong>Structured interviews</strong>: Standardized questions asked to all participants one-on-one (like an interview)</li>
                <li><strong>Likert scales</strong>: A test used to plot participants responses on a scale. Some examples are: 1-10, strongly agree → strongly disagree, etc. </li>
              </ul>
            </>
          }
        />

        <CardGrid
          columns={3}
          cards={[
            {
              title: "Peer Review",
              body: "Evaluation by other experts before publication.",
            },
            {
              title: "Institutional Review Board (IRB)",
              body: "Committee ensuring ethical standards.",
            },
            {
              title: "Informed Consent",
              body: "Participants are fully informed before agreeing.",
            },
            {
              title: "Informed Assent",
              body: "Minors or those unable to physically consent themselves agree through parental consent.",
            },
            {
              title: "Protection from Harm",
              body: "Participants must not be harmed in any way, physically or mentally. Participants also have the right to withdraw from the experiment at any time.",
            },
            {
              title: "Confidentiality",
              body: "Keeping participant information private and secure.",
            },
            {
              title: "Deception",
              body: "Misleading participants from the true purpose, procedures, or conditions of a study (must be justified and ethical).",
            },
            {
              title: "Debriefing",
              body: "Conversation after the experiment where researchers explain the true purpose, reveal any deception used, and address misconceptions.",
            },
            {
              title: "Confederates",
              body: "Actors working alongside researchers in a study",
            },
          ]}
        />
      </InfoSection>

      <Footer />
    </main>
  );
}
