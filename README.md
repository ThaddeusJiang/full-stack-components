# full-stack-components

This is a repo for [a talk](https://thaddeusjiang.com/talk/) and [a blog post](https://thaddeusjiang.com/blog/) by Thaddeus Jiang

### SPA vs. SSR vs. Template Engine vs. Server-driven UI

SPA - client side rendering

- heavy JS bundles
- heavy client side runtime
- Don’t work when disable JS

SSR - server side rendering

- JS runtime difference
- server: Node.js runtime v8
- client: browser runtime v8

Template Engine - server side rendering

- hard fresh UI
- too large network data transition

Server-Driven UI

- no hard fresh UI
- light JS bundle
- work well even disable JS
- Push UI update, not pull

## Apps

- [x] Next.js + Express - SPA
- [x] Remix - SSR
- [x] Node.js Pug - Template Engine
- [x] LiveView - Server Driven UI

# Refs

- [Full Stack Components – Kent C. Dodds, Remix Conf Europe 2022](https://www.youtube.com/watch?v=RszUDp_yiLI&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf)
- [Server-driven UI - ThoughtWorks Radar](https://www.thoughtworks.com/radar/techniques/server-driven-ui)
