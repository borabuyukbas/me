export type Platforms = "GitHub" | "GitLab" | "Hugging Face"

export interface Project {
  name: string,
  description: string,
  url: string,
  platform: Platforms,

  date: number,

  language?: string
}

async function getGitHubRepos(): Promise<Project[]> {
  const ghResponse = await fetch("https://api.github.com/users/borabuyukbas/repos")

  if (!ghResponse.ok) throw ""

  const ghJson: Record<string, string>[] = await ghResponse.json()

  return ghJson.map(e => <Project>{
    name: e.name,
    description: e.description,
    url: e.html_url,
    platform: "GitHub",

    date: Date.parse(e.pushed_at),

    language: e.language,
  })
}

async function getGitLabRepos(): Promise<Project[]> {
  const ghResponse = await fetch("https://gitlab.com/api/v4/users/3331811/projects")

  if (!ghResponse.ok) throw ""

  const ghJson: Record<string, string>[] = await ghResponse.json()

  return ghJson.map(e => <Project>{
    name: e.name,
    description: e.description,
    url: e.web_url,
    platform: "GitLab",

    date: Date.parse(e.last_activity_at),
  })
}

async function getHFModels(): Promise<Project[]> {
  const hfResponse = await fetch("https://huggingface.co/api/models?author=borabuyukbas")

  if (!hfResponse.ok) throw ""

  const hfJson: Record<string, string>[] = await hfResponse.json()

  return hfJson.map(e => <Project>{
    name: e.id.split("/").at(-1),
    description: `A(n) ${e.pipeline_tag} model available built with ${e.library_name} technology on the Hugging Face.`,
    url: `https://huggingface.co/${e.id}`,
    platform: "Hugging Face",

    date: Date.parse(e.createdAt),

    language: "Jupyter Notebook",
  })
}

export default defineEventHandler(async () => {
  const ghRepos = await getGitHubRepos();
  const gitlabRepos = await getGitLabRepos();
  const hfModels = await getHFModels();

  return {
    projects: [
      ...ghRepos,
      ...gitlabRepos,
      ...hfModels
    ].sort((a, b) => b.date - a.date)
  }
})
