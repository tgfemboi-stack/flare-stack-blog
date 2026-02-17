import type { Config } from "release-it";

export default {
  git: {
    commit: true,
    tag: true,
    push: true,
  },
  github: {
    release: true,
  },
  hooks: {
    "before:init": ["bun check", "bun run test"],
    "after:release":
      "echo Successfully released ${name} v${version} to ${repo.repository}.",
  },
} satisfies Config;
