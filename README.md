# SwiftTranslator Playwright Test Automation Project

This repository contains an automated test suite developed using the
Playwright framework to evaluate the behavior and translation accuracy
of the SwiftTranslator web application, which converts Singlish text
into Sinhala output.

---

## Project Description

The objective of this project is to assess the correctness, reliability,
and stability of the SwiftTranslator system under a variety of realistic
input conditions. The automated tests cover both successful translation
scenarios and cases where the system is expected to behave incorrectly.

This test automation project is completed as part of **Assignment 1**
for the module **IT3040 – IT Project Management (ITPM)** under the
**BSc (Hons) in Information Technology** degree programme.

---

## System Requirements

Ensure the following software is available on your system before
executing the tests:

- Node.js (version 16 or newer)
- npm (bundled with Node.js)
- Internet connectivity to access the SwiftTranslator website

---

## Installation and Environment Setup

### Step 1: Obtain the Project

Clone the repository using Git:

```bash
git clone <repository-url>
cd <project-directory>

Step 2: Install Required Dependencies

From the project root directory, run:

npm install


This command installs Playwright and all other required packages.

Step 3: Install Playwright Browser Binaries

To ensure browser compatibility, install the required browsers:

npx playwright install

Project Directory Structure
tests/
 ├── positive.spec.js    # Positive functional test scenarios
 ├── negative.spec.js    # Negative and robustness test scenarios
 └── ui.spec.js          # UI behavior validation tests
playwright.config.js     # Playwright configuration settings
package.json             # Project dependencies and scripts
README.md                # Project documentation

Executing the Test Suite
Run all automated tests
npx playwright test

Run tests in headed mode (visible browser)
npx playwright test --headed

Run tests using only the Chromium browser
npx playwright test --project=chromium

Viewing Test Results

Playwright generates a detailed HTML report after test execution.
To open the report, run:

npx playwright show-report

Test Coverage Summary
Positive Functional Tests

The positive test cases verify:

Correct handling of simple, compound, and complex sentences

Accurate conversion of questions and commands

Support for different tense forms

Daily conversational language usage

Polite and informal sentence structures

Proper handling of numbers, time, and currency formats

Negative Functional Tests

Negative test scenarios are designed to identify weaknesses such as:

Joined or improperly spaced words

Slang-heavy and informal expressions

Typographical and casing inconsistencies

Mixed-language inputs

Formatting irregularities and special characters

UI Test Scenarios

UI-related tests focus on:

Real-time Sinhala output generation

Dynamic updates as the user types input

Basic responsiveness of the translation interface

Configuration Details

Execution behavior is controlled via playwright.config.js, including:

Global timeout values

Browser selection

Test execution order (sequential execution)

Notes and Assumptions

All tests are executed sequentially to avoid interference

Screenshots and traces are collected only when a test fails

The application under test is assumed to be publicly accessible

Author Information

Name: Minuri W L N
Student ID: IT23156906
Degree Programme: BSc (Hons) in Information Technology
Academic Year: Year 3
