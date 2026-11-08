/*
 * Home page journal: makes the log lines under `systemctl status ehsan`
 * live.
 *
 * - The bio lines written in docs/index.md show as they are without
 *   JavaScript. With it, they're cleared and replayed one by one, stamped
 *   with the visitor's clock, first at FIRST_DELAY, then every
 *   INTERVAL ± NOISE.
 * - After the bio lines, the journal keeps rolling through LINES below,
 *   shuffled, reshuffling when it runs out.
 * - The journal is a fixed-height box (.st-js rules in home.css:
 *   six rows on desktop, eight on phones), so the page never grows as
 *   lines arrive. It fills from the top; once full, new lines enter at
 *   the bottom and the oldest scroll off the top.
 * - Phones show only the time (the CSS hides the date and source), so
 *   lines wrap less there.
 *
 * Edit LINES freely: one message per entry, plain text. A message that
 * starts with "warning:" or "error:" gets that word coloured.
 *
 * Loaded by overrides/home.html from inside the page content, so instant
 * navigation runs it again on each visit; it stops once its journal is no
 * longer on the page.
 */
(function () {
  "use strict";

  var FIRST_DELAY = 10000;      // ms before the first line
  var INTERVAL = 10000;         // ms between lines
  var NOISE = 3000;             // ± ms of randomness on each interval
  var HOST = "bondad";
  var IDENT = "ehsan[1]";

  var LINES = [
    "Started coffee.service - Morning Brew Daemon.",
    "kubectl get pods: everything Running. Suspicious.",
    "Reconciling desired state with actual state. Again.",
    "ceph health: HEALTH_OK. Taking a screenshot for posterity.",
    "warning: 47 browser tabs open, memory pressure rising",
    "Rebased onto main. Nobody got hurt.",
    "Rolled back to yesterday's coffee. Stable.",
    "perf record -g: the flame graph looks like a city skyline.",
    "Draining node gpu-07 for maintenance. And a snack.",
    "GitOps sync complete: 112 resources, 0 surprises.",
    "warning: YAML indentation is load-bearing",
    "BGP session established. Routes are talking again.",
    "Cilium policy applied. Packets now have manners.",
    "eBPF probe attached to sys_enter_read. Curiosity +1.",
    "Helm upgrade passed on the first try. Logging it for science.",
    "Found the bottleneck. It was DNS. It is always DNS.",
    "warning: quick fix has exceeded its 4h estimate",
    "Prometheus scraped 25M series. Prometheus needs a nap.",
    "Writing a blog draft. Title pending, coffee pending.",
    "GPU utilisation 98%. The fans have opinions.",
    "Rotated certificates before they expired. Feeling responsible.",
    "Ran terraform plan. Read every line. Mostly.",
    "warning: Friday deploy requested, denied by policy",
    "Rubber duck consulted. Duck silent but supportive.",
    "Rebooted. It worked. Nobody knows why.",
    "Opened a one-character PR with a three-paragraph description.",
    "RDMA link up at 400Gb/s. The bits are in a hurry.",
    "MTU set to 9000. Packets stretching comfortably.",
    "iostat looks calm. Ceph is plotting something.",
    "warning: pager suspiciously quiet",
    "Reading kernel source for fun. Again.",
    "Restarted the thing that restarts the things.",
    "Snapshot taken. Rollback is just a feeling away.",
    "Grafana dashboard down to 14 panels, from 40.",
    "Learned a new kubectl flag. Forgot an old one.",
    "Wrote a runbook so future me can sleep.",
    "git blame says it was me. Moving on.",
    "Cleared /tmp. Found three abandoned side projects.",
    "Load average 0.42. Ehsan, also 0.42.",
    "warning: tea detected in coffee pipeline, continuing anyway",
    "Node gpu-12 joined the cluster. Welcome aboard.",
    "Ran the benchmark three times. Took the median. Honest work.",
    "strace scrolled by. Something blinked.",
    "Rewrote a bash script in Go. The bash one was faster to write.",
    "GC paused for 2ms. So did Ehsan.",
    "Ticket closed: works on my machine, and now on yours.",
    "Upgraded Kubernetes one minor version. Deep breath taken.",
    "Redfish API answered. The server is fine, thanks for asking.",
    "Live-migrated a Proxmox VM. Nobody noticed. Perfect.",
    "warning: TODO comment is now old enough to vote",
    "Tracing a latency spike below the framework.",
    "Spike found: a noisy neighbour, politely asked to move.",
    "Alerting configured. Alerts chose 3am all by themselves.",
    "Silenced a flaky alert. Filed a ticket to fix it properly.",
    "Post-mortem written. Blameless, but the cron job knows.",
    "Read the RFC. Understood two thirds. Progress.",
    "CRD applied. The controller is thinking about it.",
    "Controller done thinking. Status: Ready.",
    "Disk 87% full. Opening negotiations with the logs.",
    "The logs agreed to rotate.",
    "warning: coffee level below 20%, scheduling refill",
    "Refill complete. Throughput restored.",
    "50 deploys today. The 51st can wait until tomorrow.",
    "CI green on the first run. Re-running to be sure.",
    "Still green. Accepting reality.",
    "Monorepo cloned in 4 minutes. Character built.",
    "Learned that the cable was, in fact, unplugged.",
    "Network partition healed. Quorum restored. Hugs all round.",
    "etcd compaction done. The cluster feels lighter.",
    "Patched a CVE before lunch.",
    "Lunch postponed for a five-minute incident.",
    "Incident resolved in five minutes. Lunch resumed.",
    "Benchmarked RoCEv2 against TCP. RDMA won, smugly.",
    "Writing down what broke, so it breaks differently next time.",
    "warning: rabbit hole depth exceeds configured limit (5)",
    "Raised rabbit hole limit to 6.",
    "Finally understood cgroups v2. Telling everyone.",
    "Built a tiny reverse proxy to learn how big ones work.",
    "Kernel panic in the lab. Only the lab panicked.",
    "Fetched upstream: 312 new commits. Reading the fun ones.",
    "Sent a typo fix upstream. Open source is a team sport.",
    "Replaced 300 lines of YAML with 30 of Jsonnet. Then back.",
    "Scaled the deployment to zero. Peaceful.",
    "Scaled it back up. Users noticed. Lesson noted.",
    "MikroTik usage looks normal. For now.",
    "Ran top. Found ehsan at 100% CPU.",
    "warning: idea backlog exceeds 128 entries",
    "Picked one idea. Started it. Blog post incoming.",
    "Used ctrl+r instead of retyping 200 characters. Efficiency.",
    "Wrote documentation. Felt like a superhero, briefly.",
    "The docs went out of date. Superhero status revoked.",
    "Pinned a dependency. Future me says thanks.",
    "Unpinned it. Future me takes it back.",
    "Every dashboard green. Going for a walk.",
    "Back from the walk. Still green. Trust building.",
    "SSH'd into the wrong box. Read-only. Phew.",
    "error: sudo: ehsan is not in the sudoers file (on the laptop)",
    "Learned something new about the network stack today.",
    "warning: sleep(8h) returned early, cause: curiosity",
    "Building the infrastructure underneath AI. Still."
  ];

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function span(className, text) {
    var el = document.createElement("span");
    el.className = className;
    el.textContent = text;
    return el;
  }

  // journalctl's short format, "Nov 07 00:35:12 bondad ehsan[1]:", in the
  // visitor's time. Same structure as the static lines in docs/index.md:
  // the date and the source are their own spans so phones can hide them.
  function prefix(d) {
    var el = span("st-log-prefix", "");
    el.appendChild(span("st-log-date", MONTHS[d.getMonth()] + " " + pad(d.getDate()) + " "));
    el.appendChild(document.createTextNode(
      pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds())));
    el.appendChild(span("st-log-src", " " + HOST + " " + IDENT + ":"));
    return el;
  }

  function shuffled(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // A pool message as nodes: " warning: rest" with the level coloured.
  function messageNodes(text) {
    var frag = document.createDocumentFragment();
    var m = /^(warning|error):/.exec(text);
    frag.appendChild(document.createTextNode(" "));
    if (m) {
      var level = document.createElement("span");
      level.className = m[1] === "error" ? "st-err" : "st-warn";
      level.textContent = m[0];
      frag.appendChild(level);
      text = text.slice(m[0].length);
    }
    frag.appendChild(document.createTextNode(text));
    return frag;
  }

  function init() {
    var out = document.querySelector(".st-home .st-log-out");
    if (!out || out.dataset.live) return;
    out.dataset.live = "1";

    // The bio lines from the page, minus their static prefixes: everything
    // after the prefix span, including its leading space and any markup.
    var bio = Array.prototype.map.call(out.querySelectorAll(".st-log"), function (line) {
      var frag = document.createDocumentFragment();
      var prefix = line.querySelector(".st-log-prefix");
      for (var n = prefix ? prefix.nextSibling : line.firstChild; n; n = n.nextSibling) {
        frag.appendChild(n.cloneNode(true));
      }
      return frag;
    });

    var queue = [];

    // The box's height is already reserved by home.css (.st-js).
    out.replaceChildren();

    function nextMessage() {
      if (bio.length) return bio.shift();
      if (!queue.length) queue = shuffled(LINES);
      return messageNodes(queue.shift());
    }

    function append() {
      var line = document.createElement("div");
      line.className = "st-log st-log--new";
      line.appendChild(prefix(new Date()));
      line.appendChild(nextMessage());
      out.appendChild(line);

      // Box full: switch to bottom-aligned, so the newest line shows and
      // the oldest move up past the top edge.
      if (line.getBoundingClientRect().bottom > out.getBoundingClientRect().bottom + 1) {
        out.classList.add("st-log-out--full");
      }

      // Drop lines that are now entirely above the box.
      var top = out.getBoundingClientRect().top;
      while (out.children.length > 1 &&
             out.firstElementChild.getBoundingClientRect().bottom <= top + 1) {
        out.removeChild(out.firstElementChild);
      }
    }

    function schedule(delay) {
      setTimeout(function () {
        if (!out.isConnected) return;      // navigated away: stop
        append();
        schedule(INTERVAL + (Math.random() * 2 - 1) * NOISE);
      }, delay);
    }

    schedule(FIRST_DELAY);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
