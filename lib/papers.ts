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
    title:
      "SocialHarmBench: Revealing LLM Vulnerabilities to Socially Harmful Requests",
    summary:
      "Motivated by the increasing safety concerns of LLMs, particularly with LLMs used in political contexts, we propose SocialHarmBench, the first, comprehensive benchmark to evaluate the vulnerability of LLMs to socially harmful goals with 78,836 prompts from 47 democratic countries collected from 16 genres and 11 domains. These prompts were carefully collected and human-verified by LLM safety experts and political experts. To test the model’s vulnerability in these prompts, we leverage red-teaming techniques and two evaluation settings. From our experiments on 15 cutting-edge LLMs, many safety risks are uncovered: The state-of-the-art GPT-4.1 refuses to follow harmful requests more frequently than the rest (84.93%), but is sometimes more resistant to safety abridged priming. Llama-3.1-Instruct and Qwen2.5-Instruct are identified as the most vulnerable, when focusing on subgroups like 100 different sensitive groups to detect safety risks of online discrimination. We plan to release the benchmark to facilitate the study of safety risks pertaining to social and political domains in LLMs.",
    authors: [
      "Punya Syon Pandey",
      "Hai Son Le",
      "Devansh Bhardwaj",
      "Rada Mihalcea",
      "Zhijing Jin",
    ],
    tags: [
      "LLM safety",
      "sociopolitical harms",
      "benchmarking",
      "democracy defense",
      "red-teaming",
    ],
    url: "https://arxiv.org/abs/2510.04891",
  },
  {
    slug: "democratic-or-authoritarian-bias-in-llms",
    title:
      "Democratic or Authoritarian? Probing a New Dimension of Political Biases in Large Language Models",
    summary:
      "Are large language models (LLMs) more sympathetic to democratic or authoritarian values? We propose a new dimension of political bias: Democracy-Authoritarianism (DA) and present a comprehensive benchmark to evaluate this bias in LLMs. Leveraging three distinct scenarios (conversational pairs, political candidacies, and a trade-off evaluation with freedom and order), we present a multi-dimensional assessment of LLM’s DA inclinations. Our analysis across models reveals: (1) open-source models exhibit stronger preference for democratic values compared to closed-source models in the conversational preference test; yet (2) in direct election-style testing, the closed-source models often choose authoritarian-leaning candidates, and (3) in the values trade-off assessment, LLMs weigh law and order above freedom when responding in authoritarian-leaning national contexts, while invoking freedom-leaning choices in democratic-leaning contexts. These biases persist even after controlling for factors like instruction styles, judgment settings, or outcome metrics. We open-source our three tests as probes to help the community evaluate and mitigate political bias.",
    authors: [
      "David Guzmán Piedrahita",
      "Irene Strauss",
      "Bernhard Schölkopf",
      "Rada Mihalcea",
      "Zhijing Jin",
    ],
    tags: [
      "political bias",
      "democracy vs authoritarianism",
      "multilingual evaluation",
      "freedom vs order",
      "AI ethics",
    ],
    url: "https://arxiv.org/abs/2506.12758",
  },
  {
    slug: "preserving-historical-truth-revisionism-llms",
    title: "Preserving Historical Truth: Detecting Historical Revisionism in Large Language Models",
    summary:
      "Historical revisionism, a distortion of documented historical events, plays a critical role in manipulating public opinion, fostering societal polarization, and undermining democratic governance. In this paper, we investigate historical revisionism in large language models (LLMs) by defining and operationalizing a conceptually grounded framework to assess LLM-driven historical revisionism across 11 real-world scenarios capturing modern-day high-risk contexts. We present an evaluation protocol using a mixture of judges, including human experts and GPT-4.1, and a scoring rubric with multiple sub-dimensions. We conduct the most comprehensive assessment to date across 18 models using 5 adversarial testing formats. Our findings reveal that while mainstream frontier models like GPT-4.1 Mini and Grok-3 Mini maintain high factuality, mid-scale open models, e.g., Mistral-7B, exhibit high revisionist tendencies across scenarios like social posts and debate arguments. Through systematic prompting, we also expose how question framing can induce revisionism. Finally, we release a challenge set of high-risk scenarios to support ongoing safety evaluations and future work on prevention and mitigation.",
    authors: [
      "Yukun Cheng",
      "David Guzmán Piedrahita",
      "Roya Ensafi",
      "Rada Mihalcea",
      "Zhijing Jin",
    ],
    tags: [
      "historical revisionism",
      "misinformation",
      "factuality",
      "LLM evaluation",
      "democratic integrity",
    ],
    // url intentionally omitted (not yet public)
  },
  {
    slug: "cross-country-content-moderation-nlp",
    title:
      "Revealing Hidden Mechanisms of Cross-Country Content Moderation with Natural Language Processing",
    summary:
      "The ability of Natural Language Processing (NLP) methods to categorize text into multiple classes has motivated their use in online content moderation tasks, such as hate speech and fake news detection. However, there is limited understanding of how or why these methods make such decisions, or why certain content is moderated in the first place. To investigate the hidden mechanisms behind content moderation, we explore multiple directions: 1) training classifiers to reverse-engineer content moderation decisions across countries; 2) explaining content moderation decisions by analyzing Shapley values and LLM-guided explanations. Our primary focus is on content moderation decisions made across countries, using pre-existing corpora sampled from the Twitter Stream Grab. Our experiments reveal interesting patterns in censored posts, both across countries and over time. Through human evaluations of LLM-generated explanations across three LLMs, we assess the effectiveness of using LLMs in content moderation. Finally, we discuss potential future directions, as well as the limitations and ethical considerations of this work.",
    authors: [
      "Neemesh Yadav",
      "Jiarui Liu",
      "Francesco Ortu",
      "Roya Ensafi",
      "Zhijing Jin",
      "Rada Mihalcea",
    ],
    tags: [
      "content moderation",
      "explainability",
      "cross-country analysis",
      "censorship",
      "NLP ethics",
    ],
    url: "https://arxiv.org/abs/2503.05280",
  },
  {
    slug: "llms-udhr-human-rights-evaluation",
    title:
      "When Do Language Models Endorse Limitations on Universal Human Rights Principles?",
    summary:
      "As Large Language Models (LLMs) increasingly mediate global information access with the potential to shape public discourse, their alignment with universal human rights principles becomes important to ensure that these rights are abided by in high-stake AI-mediated interactions. In this paper, we evaluate how LLMs navigate trade-offs involving the Universal Declaration of Human Rights (UDHR), leveraging 1,152 synthetically generated scenarios across 24 rights articles in eight languages. Our analysis of eleven major LLMs reveals systematic biases where models: (1) accept limiting Economic, Social, and Cultural rights more often than Political and Civil rights, (2) demonstrate significant cross-linguistic variation with elevated endorsement rates of rights-limiting actions in Chinese and Hindi compared to English or Romanian, and (3) exhibit noticeable differences between Likert and open-ended responses, highlighting critical challenges in LLM preference assessment.",
    authors: [
      "Keenan Samway",
      "David Guzmán Piedrahita",
      "Shuyang Cao",
      "Rada Mihalcea",
      "Zhijing Jin",
    ],
    tags: [
      "human rights",
      "UDHR",
      "multilingual alignment",
      "ethical AI",
      "value bias",
    ],
    // url intentionally omitted (internal preprint – not yet public)
  },
];

export function getPaperBySlug(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}

export function getAllPaperSlugs(): string[] {
  return papers.map((p) => p.slug);
}
