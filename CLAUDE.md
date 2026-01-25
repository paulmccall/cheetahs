# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cheetahs is a static website project. The site is served from the `docs/` directory for GitHub Pages compatibility.

## Development

No build step required. To preview locally:
```bash
python -m http.server 8000
```
Then open http://localhost:8000/docs/

## Architecture

- `docs/index.html` - Main entry point and only page
- Static HTML/CSS/JS (no framework or build tooling)
