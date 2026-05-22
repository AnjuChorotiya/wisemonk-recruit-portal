# Wisemonk Recruit — Portal

Static prototype of the Wisemonk recruitment portal. 20 self-contained HTML files (inline CSS + JS), no build step.

**Entry point:** [recruit-flow.html](recruit-flow.html) — main app shell after sign-in.

## Key pages

| File | What it is |
| --- | --- |
| `recruit-signup.html` → `recruit-setup.html` | Onboarding flow |
| `recruit-flow.html` | Home / role overview |
| `recruit-role.html`, `recruit-job-post.html` | Role creation + JD generation |
| `recruit-candidates.html`, `recruit-pipeline.html` | Candidate management |
| `recruit-interview.html`, `recruit-meeting.html` | Interview scheduling + scorecard |
| `recruit-settings.html`, `recruit-upgrade.html`, `recruit-help.html` | System pages |

## Run locally

Just double-click any `.html` file, or:

```bash
python -m http.server 8080
# then open http://localhost:8080
```
