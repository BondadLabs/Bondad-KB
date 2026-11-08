---
date: 2026-11-07
---

# We Are Live!

`systemctl status ehsan` reports `active (running)`, and as of today, so
does bondad.net.

This is where I'll write about the things I build, break and fix: the
infrastructure underneath AI. GPU servers, Kubernetes, Ceph storage and
networking, and the debugging that happens below the framework, with tools
like perf and eBPF.

<!-- more -->

## What to expect

- **Deep dives** into problems I've run into in production, and how they
  were found and fixed.
- **Notes from the lab:** smaller experiments with things I'm learning.
- **Write-ups** of what worked, what didn't, and why.

## How this site is built

The site is plain Markdown, built with [Zensical](https://zensical.org) and
my own [bondad theme](https://github.com/BondadLabs/bondad-zensical), and
deployed to GitHub Pages by a GitHub Actions workflow on every push.

The home page is a terminal: the output of `systemctl status ehsan`, with a
journal that keeps logging while you read. Leave it open for a minute ☕

More soon. In the meantime, you can find me on
[GitHub](https://github.com/EAliakbar) and
[LinkedIn](https://www.linkedin.com/in/ealiakbar/).
