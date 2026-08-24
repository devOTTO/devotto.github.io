---
title: Auto-CEGAR Gating for RWML Time-Series Anomaly Detection
date: 2026-05-11
tags:
  - PyTorch
  - Slurm
  - Weights & Biases
---

Independent study at Carnegie Mellon. Integrated 5 auto-CEGAR gating algorithms into the RWML anomaly detection model, porting and training every variant end to end on a self-built PyTorch experimentation platform. Orchestrated 1,300+ tracked runs across 200+ datasets on a Slurm HPC cluster, and cut benchmark cost from 17 to 1.3 GPU-hours by screening out weak configurations early.

<!--more-->

## Correcting a result in my own favor

The first complete sweep looked like a clear success: the gated model won on 6 of 7 benchmarks. That number did not survive scrutiny.

The wins had been measured under an idealized configuration rather than one that could actually be selected at deployment time. Re-running the comparison under deployable conditions brought the honest count to **3 of 7**. I reported the corrected figure and, from then on, kept oracle and deployable performance as separate columns in every results table, so that go/no-go decisions rest on what the model would actually deliver rather than on its best possible case.

Half the wins disappeared. The ones that remained were real.

## Experiment infrastructure

- Orchestrated 1,300+ tracked GPU runs across 200+ datasets on a Slurm HPC cluster with Weights & Biases tracking
- Cut benchmark cost from 17 to 1.3 GPU-hours by screening out weak configurations early
- Ran offline Weights & Biases logging on air-gapped HPC compute nodes, with scripted sync and run regrouping
- Automated reporting end to end: CLI tools regenerate every results table, figure, and markdown report committed to the repository

## Measurement discipline

- Built per-run diagnostics beyond headline metrics, including gate localization AUC and score-contrast measures for every experiment
- Profiled gating runtime and memory overhead (1.3-2.1x versus baseline) post hoc from Weights & Biases telemetry, with zero re-runs
- Verified results by reproducing published baselines within 0.01 AUC-PR and isolating gains with matched control runs
