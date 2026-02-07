# Playwright Automation Practice

## Project Overview

This is a practice project for automated testing using **Playwright** and **Node.js**.  
It contains tests created during my learning process and practical exercises.

### Technologies & Skills

- Playwright (browser automation testing)
- Node.js & npm
- Allure Report (test reporting)
- Writing and organizing automated tests
- Git & GitHub version control

### Purpose

- Demonstrate knowledge of test automation concepts
- Showcase Playwright test structure and reporting

## How to Run the Project

### 1. Install Dependencies

```bash
npm install


npx playwright install

npx playwright test


npx allure generate allure-results --clean
npx allure open

OR By Script

npm run allure:report

Project Structure

tests/ – automated test files

playwright.config.js – Playwright configuration

package.json – dependencies and scripts

README.md – project documentation


Notes

No sensitive data (passwords, tokens, API keys) is included

This repository is intended to demonstrate Playwright automation skills


CI/CD and Slack Notifications

This project is integrated with Slack to notify test results for **every workflow run** via GitHub Actions.

- Notifications are sent **regardless of success or failure**.
- Status icons used:
  - ✅ SUCCESS
  - ❌ FAILURE
- Notifications include:
  - Repository name
  - Branch
  - Workflow run link
- Webhook URL is securely stored in **GitHub Secrets** (`SLACK_WEBHOOK_URL`)

This setup ensures real-time visibility of test execution directly in Slack.

```

## ⚠️ Intentional Failing Test

The test **Home Page** (`tests/HomePageTest.spec.js`) is intentionally designed to fail.
This test is used to verify that:

- GitHub Actions workflow is triggered correctly
- CI pipeline reports failed tests properly
- Slack notifications are sent on failure
