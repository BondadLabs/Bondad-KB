---
title: Ehsan Aliakbar
template: home.html
hide:
  - navigation
  - toc
  - footer
---

<!--
  `systemctl status ehsan`. Each line is one <div class="st-line">: a
  <span class="st-label"> and a <span class="st-val">. Spaces are kept as
  written on desktop (white-space: pre), so pad each label to 12 characters
  before the colon, the way systemd right-aligns them. On phones the labels
  sit in a narrow column and the values wrap. Keep this block free of
  blank lines, or Markdown will end it early.
-->
<section class="st-section" aria-labelledby="st-status">
<h2 class="st-prompt" id="st-status"><span class="st-dollar">$</span> systemctl status ehsan</h2>
<div class="st-scroll" tabindex="0" role="region" aria-label="systemctl status output">
<div class="st-out">
<h1 class="st-unit"><span class="st-dot" aria-hidden="true">●</span> ehsan.service <span class="st-desc">- Cloud platform engineer</span></h1>
<div class="st-line"><span class="st-label">     Loaded: </span><span class="st-val">loaded (/home/ehsan/bio.md; enabled; preset: curious)</span></div>
<div class="st-line"><span class="st-label">     Active: </span><span class="st-val"><span class="st-ok">active (running)</span> since forever; powered by coffee</span></div>
<div class="st-line"><span class="st-label">   Main PID: </span><span class="st-val">1 (Senior Cloud Infrastructure Engineer at Denvr)</span></div>
<div class="st-line"><span class="st-label">      Tasks: </span><span class="st-val">gpu-infra, kubernetes, gitops, ceph, networking</span></div>
<div class="st-line"><span class="st-label">     CGroup: </span><span class="st-val">/platform.slice/ehsan.service</span></div>
<div class="st-line"><span class="st-label">             └─ </span><span class="st-val">/usr/bin/build-things <span class="st-arg">--break-them</span> <span class="st-arg">--write-about-it</span></span></div>
<div class="st-line"><span class="st-label">             └─ </span><span class="st-val">/usr/bin/trace <span class="st-arg">--below-the-framework</span> <span class="st-arg">--tools=perf,ebpf</span></span></div>
<div class="st-line st-docs st-docs--first"><span class="st-label">       Docs: </span><span class="st-val"><a class="st-link" href="blog/">blog/</a><span class="st-hint">                         ← start here</span></span></div>
<div class="st-line st-docs"><span class="st-label">             </span><span class="st-val"><a class="st-link" href="https://github.com/EAliakbar" aria-label="GitHub: EAliakbar"><svg class="st-icon" aria-hidden="true" viewBox="0 0 512 512"><path fill="currentColor" d="M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5v52c0 15 12.5 23.5 27.5 17.5C441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5v-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21"/></svg>EAliakbar</a></span></div>
<div class="st-line st-docs"><span class="st-label">             </span><span class="st-val"><a class="st-link" href="https://www.linkedin.com/in/ealiakbar/" aria-label="LinkedIn: in/EAliakbar"><svg class="st-icon" aria-hidden="true" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77m282.1 320h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9z"/></svg>in/EAliakbar</a></span></div>
</div>
</div>
<!--
  Journal: the log lines systemctl prints after the unit info. One
  <div class="st-log"> per line: dimmed prefix, then the message. Wrap a
  "warning:" in <span class="st-warn"> to colour it amber. In the prefix,
  the date and the "bondad ehsan[1]:" part are their own spans
  (st-log-date, st-log-src) because phones show only the time.
  These lines are what shows without JavaScript. With it,
  docs/javascripts/home-journal.js replays them with the visitor's
  clock as timestamps, then rolls on through its own list of lines.
-->
<div class="st-journal">
<div class="st-scroll" tabindex="0" role="region" aria-label="journal output">
<div class="st-log-out">
<div class="st-log"><span class="st-log-prefix"><span class="st-log-date">Nov 07 </span>00:35:12<span class="st-log-src"> bondad ehsan[1]:</span></span> Building the infrastructure underneath AI.</div>
<div class="st-log"><span class="st-log-prefix"><span class="st-log-date">Nov 07 </span>00:35:13<span class="st-log-src"> bondad ehsan[1]:</span></span> Writing about what I build, break and fix.</div>
<div class="st-log"><span class="st-log-prefix"><span class="st-log-date">Nov 07 </span>00:35:14<span class="st-log-src"> bondad ehsan[1]:</span></span> <span class="st-warn">warning:</span> coffee.lock held for 16h, continuing anyway</div>
</div>
</div>
</div>
</section>
