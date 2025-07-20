# coangha.dev

[![CI/CD (HaNQ-Portfolio)](https://github.com/vippr1237/HaNQ-Portfolio/actions/workflows/app-ci.yml/badge.svg)](https://github.com/vippr1237/HaNQ-Portfolio/actions/workflows/app-ci.yml)
[![](https://img.shields.io/website?down_color=red&down_message=offline&label=HaNQ-Portfolio&up_color=green&up_message=online&url=https%3A%2F%2FHaNQ-Portfolio)](https://HaNQ-Portfolio)
[![](https://img.shields.io/website?down_color=red&down_message=offline&label=vippr1237.github.io&up_color=green&up_message=online&url=https%3A%2F%2Fvippr1237.github.io)](https://vippr1237.github.io)
[![](https://img.shields.io/website?down_color=red&down_message=offline&label=vippr1237.dev&up_color=green&up_message=online&url=https%3A%2F%2Fvippr1237.dev)](https://vippr1237.dev)

## Overview

This repo contains the source for https://coangha.dev, powered by [AstroWind](https://astro.build/themes/details/astrowind/)

The project is a profolio website hosted in S3 and served to internet via CloudFront. All the change will be checked, build and deployed to coangha.dev

Demo site: http://coangha.dev.s3-website-ap-southeast-1.amazonaws.com/

![Architecture](architecture.png)

## Usage

### Pre-reqs

```
# get a copy of the code
git clone https://github.com/loganmarchione/HaNQ-Portfolio.git
cd HaNQ-Portfolio
```

### Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:4321`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npm run check`     | Check your project for errors                      |
| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### add, commit, push to kick off GitHub Actions

```
git add .
git commit -m "Update some stuff"
git push
```

## GitHub Actions

Below is a visual representation of the GitHub Actions workflows.

```mermaid
  flowchart TD
      A(["Start"]) --> B["Create Branch"] & n1["Commit/Merge to main"]
      n1 --> C["Run CI"]
      B --> n2["Open Pull Request"]
      n2 --> C & n1
      C --> n3["CI OK?"]
      n3 -- No --> n6["End"]
      n5["Create Deployment Request"] --> n7["Deploy Trunk"]
      n7 --> n8["Trunk OK?"]
      n8 -- Yes --> n9["Workflow Dispatch"]
      n9 --> n10["Deploy to Production"]
      n3 -- Yes --> n11["Is commit to main?"]
      n11 -- Yes --> n5
      n11 -- No --> n6
      n8 -- No --> n6
      B@{ shape: rect}
      n3@{ shape: diam}
      n6@{ shape: rounded}
      n8@{ shape: diam}
      n11@{ shape: diam}
```
