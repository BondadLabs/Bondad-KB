# Bondad-KB

The source of [bondad.net](https://bondad.net), the personal site and blog of
Ehsan Aliakbar, a cloud platform engineer. It's about the infrastructure
underneath AI: GPU servers, Kubernetes, Ceph storage and networking, and the
debugging that happens below the framework.

The home page is a terminal, the output of `systemctl status ehsan`; the blog
is plain Markdown in `docs/blog/posts/`.

Built with [Zensical](https://zensical.org) and the
[bondad](https://github.com/BondadLabs/bondad-zensical) theme, and deployed to
GitHub Pages by `.github/workflows/docs.yml` on every push to `main`.

## Local development

```sh
uv sync
uv run zensical serve          # preview at http://localhost:8000
uv run zensical build --clean  # build into site/
```
