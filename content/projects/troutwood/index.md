---
title: Financial Integration Service (Troutwood)
date: 2026-01-01
tags:
  - AWS
  - CI/CD
  - GitHub Actions
image:
  preview_only: true
---

Serverless payroll-data ingestion platform on AWS (Lambda, SQS, DynamoDB, CDK), built as a CMU MSE Studio project for [Troutwood](https://www.troutwood.com/). I built the end-to-end delivery platform for the serverless monorepo: 14 of 17 GitHub Actions CI/CD workflows (6 authored solo), the foundational AWS CDK stacks in Python, and LocalStack-based integration tests that run on every pull request.

<!--more-->

## Delivery platform

- Designed parallel CI, gated dev auto-deploys, approval-guarded prod deploys, and per-branch ephemeral test stacks
- Authored the foundational AWS CDK stacks in Python and LocalStack-based integration tests run on every pull request
- Migrated pipeline AWS authentication to GitHub OIDC, eliminating long-lived access keys
- Introduced gitleaks secret scanning and Python/Go coverage reporting as merge gates

## AI agent engineering

The team runs a 24-skill AI agent engineering framework on Claude Code and Codex, with runtime quality hooks and a review-learning loop that distills real PR feedback into enforced coding patterns. Within it, I built the architecture-decision-record skills and the context-management standard that define how agents record decisions and load project context, and ran a cross-team knowledge-sharing session.
