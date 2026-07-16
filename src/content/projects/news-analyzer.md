---
title: News Analyzer
summary: LLM-powered analysis of Sri Lankan news — categorizing articles by sentiment and their social, economic, and political impact.
tech: [Python, LLM, NLP]
github: https://github.com/yasanthaniroshan/news-Analyzer
category: Systems & Software
order: 4
---

**News Analyzer** ingests news articles and assesses their potential impact on Sri Lankan citizens, using Google's **PaLM** model to categorize each story by sentiment and by its relevance to social, economic, and political spheres.

## Pipeline

The system extracts article URLs from a CSV feed, retrieves and cleans the article content, then runs the LLM analysis and aggregates the categorized results into insights.
