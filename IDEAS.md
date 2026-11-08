# Ideas

Parked work for the home page and the site. The home page is built as
`systemctl status ehsan` (see `docs/index.md`, `overrides/home.html`,
`docs/stylesheets/home.css`); the full design is in
`design/systemctl-status.dc.html`.

## Home page: later sections

Each is another command and its output, below the status block. The data is
real (LinkedIn and GitHub, Nov 2026).

- **`$ cat /etc/ehsan/job.conf`:** the current job as an ini file.
  - `[Job]`: Title=Senior Cloud Infrastructure Engineer, Company=Denvr,
    Since=Mar 2026, Location=London, Ontario, Canada, Focus=the
    infrastructure underneath AI: GPU servers, Kubernetes, storage,
    networking.
  - `[History]`, as `ExecStartPre=` lines ("everything that had to start
    first"):
    - Platform/Cloud Technical Lead, Snapp! (2024–2026)
    - Senior Platform/Cloud Engineer, Snapp! (2021–2024)
    - Platform/Cloud Engineer, Snapp! (2020–2021)
    - Cloud Infrastructure Engineer, Khallagh Borhan (2019–2020)
    - HPC Engineer, IUST Cloud Computing Center (2017–2019)
- **`$ cat ~/benchmarks.txt # receipts`:** four big-number tiles:
  - −80% Ceph RBD p95 latency on a petabyte-scale cluster (perf and eBPF)
  - −75% p99 latency after moving every cluster to Cilium, with zero downtime
  - 25M+ active time series on multi-tenant Prometheus/Thanos
  - 50 deploys a day from a monorepo of 100+ Helm charts
- **`$ git log --author=ehsan --all-upstreams`:** open-source
  contributions, hidden behind a "▶ run" button that reveals the rows one by
  one.
  - [snapp-incubator/cluster-machine-approver#55](https://github.com/snapp-incubator/cluster-machine-approver/pull/55):
    support the new CSR client usages in OKD 4.14 (2024-01)
  - [acmesh-official/acme.sh#2797](https://github.com/acmesh-official/acme.sh/pull/2797):
    add the Arvan Cloud DNS API (2020-03)
  - [fandoghpaas/fandogh-docs#83](https://github.com/fandoghpaas/fandogh-docs/pull/83):
    fix a typo in the exec example (2019-02)
  - [Aseman-Land/libqtelegram-aseman-edition#59](https://github.com/Aseman-Land/libqtelegram-aseman-edition/pull/59):
    fix login in a sample (2017-07)
- **`$ ls ~/src --pinned`:** cards for the pinned repos: Acumen (MikroTik
  usage monitoring, JS), Elixy (learning reverse proxy, Go),
  iximiuz-resources, Raycast-extensions.
- **`$ top -u ehsan # currently tinkering with`:** current interests as a
  process table, e.g. RoCEv2, CephFS, kcp, Proxmox Redfish. Ask Ehsan for
  the current list.
- **`$ journalctl -u ehsan --lines=3 # latest posts`:** the three newest
  blog posts as log lines, generated from the blog at build time, plus a
  `--follow →` link to the blog.
- **`$ ss -tlnp | grep ehsan # say hi`:** contact methods as "listening
  ports" (email TBD, LinkedIn).
- **Interactive shell:** a real prompt visitors can type into: `help`,
  `blog`, `github`, `linkedin`, `ls`, `clear`. Easter eggs: `sudo` → "not
  in the sudoers file. This incident will be reported."; `rm` → "not
  today."; `kubectl get pods` → `ehsan-0 … 3 (coffee) restarts`; `exit` →
  "there is no exit. there is only the blog."
- **Real journal timestamps.** The journal lines under the status block
  (`Nov 07 00:35:12 bondad ehsan[1]: …`) use fixed, hand-written
  timestamps in `docs/index.md`. Later they could come from real dates:
  the site's build time, or the dates of the newest blog posts (which
  would tie in with the `journalctl` section above).
- **Bondad Labs:** link to the Labs brand (`bondad/labs_`, coral) once it
  exists.

## Candidates for the `bondad` theme (`../Bondad-Zensical`)

Things that came out of the home page and could be reusable. Don't edit the
theme from this repo; move them over there.

- **Terminal block component.** A prompt heading (`$` in the primary
  colour) plus a preformatted output box that scrolls sideways instead of
  wrapping, with muted right-aligned labels. Today it's the `.st-*` classes
  in `docs/stylesheets/home.css`.
- **Closing prompt with cursor.** `user@host:~$` followed by a coral
  blinking cursor block, the same cursor the theme already draws after the
  site name in the header (`bondad-blink`). Could be a footer option.
- **Status colours as named variables.** The theme already defines
  `--bondad-green` (and red, amber, blue, violet) per scheme, but they're
  undocumented. Documenting them as the "status" palette would let sites
  use them without guessing.
- **Per-page stylesheets under instant navigation.** A page-specific
  stylesheet linked from `<head>` doesn't load or unload with
  `navigation.instant`, so the home page links its CSS from inside the
  content block. A theme-level hook (e.g. `extra_css` in front matter) would
  be neater.
