export type Paper = {
  slug: string;
  title: string;
  summary: string; // Abstract
  authors: string[];
  date?: string; // ISO (optional)
  tags?: string[]; // Keywords
  url?: string; // External link
};

export const papers: Paper[] = [
  {
    slug: "socialharmbench-llm-vulnerabilities",
    title: "SocialHarmBench: Revealing LLM Vulnerabilities to Socially Harmful Requests",
    summary:
      "Motivated by the increasing safety concerns of LLMs, particularly with LLMs used in political contexts, we propose SocialHarmBench, the first, comprehensive benchmark to evaluate the vulnerability of LLMs to socially harmful goals with 78,836 prompts from 47 democratic countries collected from 16 genres and 11 domains. These prompts were carefully collected and human-verified by LLM safety experts and political experts. To test the model's vulnerability in these prompts, we leverage red-teaming techniques and two evaluation settings. From our experiments on 15 cutting-edge LLMs, many safety risks are uncovered: The state-of-the-art GPT-4.1 refuses to follow harmful requests more frequently than the rest (84.93%), but is sometimes more resistant to safety abridged priming. Llama-3.1-Instruct and Qwen2.5-Instruct are identified as the most vulnerable, when focusing on subgroups like 100 different sensitive groups to detect safety risks of online discrimination. We plan to release the benchmark to facilitate the study of safety risks pertaining to social and political domains in LLMs.",
    authors: ["Punya Syon Pandey", "Hai Son Le", "Devansh Bhardwaj", "Rada Mihalcea", "Zhijing Jin"],
    tags: ["LLM safety", "sociopolitical harms", "benchmarking", "democracy defense", "red-teaming"],
    url: "https://arxiv.org/abs/2510.04891",
  },
  {
    slug: "democratic-or-authoritarian-bias-in-llms",
    title: "Democratic or Authoritarian? Probing a New Dimension of Political Biases in Large Language Models",
    summary:
      "As Large Language Models (LLMs) become increasingly integrated into everyday life and information ecosystems, concerns about their implicit biases continue to persist. While prior work has primarily examined socio-demographic and left--right political dimensions, little attention has been paid to how LLMs align with broader geopolitical value systems, particularly the democracy--authoritarianism spectrum. In this paper, we propose a novel methodology to assess such alignment, combining (1) the F-scale, a psychometric tool for measuring authoritarian tendencies, (2) FavScore, a newly introduced metric for evaluating model favorability toward world leaders, and (3) role-model probing to assess which figures are cited as general role-models by LLMs. We find that LLMs generally favor democratic values and leaders, but exhibit increases favorability toward authoritarian figures when prompted in Mandarin. Further, models are found to often cite authoritarian figures as role models, even outside explicit political contexts. These results shed light on ways LLMs may reflect and potentially reinforce global political ideologies, highlighting the importance of evaluating bias beyond conventional socio-political axes.",
    authors: ["David Guzman Piedrahita", "Irene Strauss", "Bernhard Schölkopf", "Rada Mihalcea", "Zhijing Jin"],
    tags: ["political bias", "democracy vs authoritarianism", "multilingual evaluation", "freedom vs order", "AI ethics"],
    url: "https://arxiv.org/abs/2506.12758",
  },
  {
    slug: "preserving-historical-truth-revisionism-llms",
    title: "Defending against LLM Propaganda: Detecting Historical Revisionism by Large Language Models",
    summary:
      "Large language models (LLMs) are increasingly used by citizens, journalists, and institutions as sources of historical information, raising concerns about their potential to reproduce or amplify historical revisionism— the distortion, omission, or reframing of established historical facts. We introduce HistoricalMisinfo, a curated dataset of 500 historically contested events from 45 countries, each paired with both factual and revisionist narratives. To simulate real-world pathways of information dissemination, we design eleven prompt scenarios per event, mimicking diverse ways historical content is conveyed in practice. Evaluating responses from multiple mediumsized LLMs, we observe vulnerabilities and systematic variation in revisionism across models, countries, and prompt types. This benchmark offers policymakers, researchers, and industry a practical foundation for auditing the historical reliability of generative systems, supporting emerging safeguards.",
    authors: ["Francesco Ortu", "Joeun Yook", "Bernhard Schölkopf", "Rada Mihalcea", "Zhijing Jin"],
    tags: ["historical revisionism", "misinformation", "factuality", "LLM evaluation", "democratic integrity"],
    // url intentionally omitted (not yet public)
  },
  {
    slug: "cross-country-content-moderation-nlp",
    title: "Revealing Hidden Mechanisms of Cross-Country Content Moderation with Natural Language Processing",
    summary:
      "The ability of Natural Language Processing (NLP) methods to categorize text into multiple classes has motivated their use in online content moderation tasks, such as hate speech and fake news detection. However, there is limited understanding of how or why these methods make such decisions, or why certain content is moderated in the first place. To investigate the hidden mechanisms behind content moderation, we explore multiple directions: 1) training classifiers to reverse-engineer content moderation decisions across countries; 2) explaining content moderation decisions by analyzing Shapley values and LLM-guided explanations. Our primary focus is on content moderation decisions made across countries, using pre-existing corpora sampled from the Twitter Stream Grab. Our experiments reveal interesting patterns in censored posts, both across countries and over time. Through human evaluations of LLM-generated explanations across three LLMs, we assess the effectiveness of using LLMs in content moderation. Finally, we discuss potential future directions, as well as the limitations and ethical considerations of this work.",
    authors: ["Neemesh Yadav", "Jiarui Liu", "Francesco Ortu", "Roya Ensafi", "Zhijing Jin", "Rada Mihalcea"],
    tags: ["content moderation", "explainability", "cross-country analysis", "censorship", "NLP ethics"],
    url: "https://arxiv.org/abs/2503.05280",
  },
  {
    slug: "llms-udhr-human-rights-evaluation",
    title: "When Do Language Models Endorse Limitations on Universal Human Rights Principles?",
    summary:
      "As Large Language Models (LLMs) increasingly mediate global information access with the potential to shape public discourse, their alignment with universal human rights principles becomes important to ensure that these rights are abided by in high-stake AI-mediated interactions. In this paper, we evaluate how LLMs navigate trade-offs involving the Universal Declaration of Human Rights (UDHR), leveraging 1,152 synthetically generated scenarios across 24 rights articles in eight languages. Our analysis of eleven major LLMs reveals systematic biases where models: (1) accept limiting Economic, Social, and Cultural rights more often than Political and Civil rights, (2) demonstrate significant cross-linguistic variation with elevated endorsement rates of rights-limiting actions in Chinese and Hindi compared to English or Romanian, and (3) exhibit noticeable differences between Likert and open-ended responses, highlighting critical challenges in LLM preference assessment.",
    authors: ["Keenan Samway", "Nicole Miu Takagi", "Rada Mihalcea", "Bernhard Schölkopf", "Ilias Chalkidis", "Daniel Hershcovich", "Zhijing Jin"],
    tags: ["human rights", "UDHR", "multilingual alignment", "ethical AI", "value bias"],
    // url intentionally omitted (internal preprint - not yet public)
  },
];

export function getPaperBySlug(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}

export function getAllPaperSlugs(): string[] {
  return papers.map((p) => p.slug);
}
