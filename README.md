# CAD-Cypress-Tests

This Cypress based sample API tests project is implemented with the help of TypeScript and uses the BDD approach.

**Folder Structure:**

```

├── allure-report (folder to support and generate allure based HTML report)
├── allure-results (contains all the tests results in json format)
├── cypress
│   └── specs (feature files)
|   └── step-definitions (tests code)
│   └── support (contains all the supporting tests files)
│   └── screenshots (capture screenshots on failure)
└── cypress.json (cypress global configuration)
└── testReport.html (mochawesome based HTML report)

```
Note: allure-report & allure-results directories will get generated after the first run.

**Salient Features:**

- Based on Cucumber / Gherkin standard.
- Cross-browser platform.
- Fully automated and provide both console and HTML report.
- Ability to take screenshot on failure.
- All tests are configured on CI/CD pipeline, hence doesn't require any manual intervention to run tests.
- Containerized the tests using Docker. This extends the ['cypress/included'](https://hub.docker.com/r/cypress/included) base image.

**Installation**:

- Clone the project
- Open terminal and run `npm install`

**Running Tests**:

(A) Headed Mode:

- To run tests in browser/headed mode, run `npm run cy:open`

(B) Headless Mode:

- To run tests in headless mode, <br>
        * `npm run cy:run` - run tests locally. <br>
        * `npm run cy:run:report` - run tests locally + generates the allure report. <br>
        * `npm run cy:run:report:open` - run tests locally + generates the allure report + opens the report automatically in browser using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). <br>
        * `npm run cy:run:docker` - run tests in Docker container. <br>
        * `npm run cy:run:docker:report` - run tests in Docker container + generates the allure report. <br>

<ins>Note</ins>:- To view allure based HTML report, expand `allure-report` directory and open the `index.html` file using Live Server.

Once the execution is complete, this is how the test report(s) would look like,

<ins>Console</ins>:

<kbd><img src="/uploads/8b9e33a83f547e2c1c5b550cd374123c/cad_console.png" alt="Console Report" border="1" width=800></kbd>

<ins>HTML - Pass</ins>: 

<kbd><img src="/uploads/6cca51f40e6650c51cc4b006ad4920ef/cad-report-pass-1.png" alt="HTML Report" border="1" width=800></kbd>

<kbd><img src="/uploads/db2102c3f176e0981f1ca3516a34a8e9/cad-report-pass-2.png" alt="HTML Report" border="1" width=800></kbd>

<ins>HTML - Fail</ins>: 

<kbd><img src="/uploads/5ffdac7aee62b552e72170678190d067/cad-report-fail-1.png" alt="HTML Report" border="1" width=800></kbd>

<kbd><img src="/uploads/ed5ea315b48f6e1aa11e51ce074ecbe3/cad-report-fail-2.png" alt="HTML Report" border="1" width=800></kbd>

<kbd><img src="/uploads/9c999dd8945054c6363c74e7219107b4/cad-report-fail-3.png" alt="HTML Report" border="1" width=800></kbd>


# (A) Testing strategy

The goal of test automation is to increase the effectiveness and efficiency of testing. Good automation makes testing faster, more systematic, and reduces human error. This includes: to reduce the number of test cases that testers have to perform manually as well as those that are challenging to perform manually, therefore saving time and effort.

The ideal test automation strategy is to follow the [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) mindset. Though this project is simply for a demonstration purpose. However, the test pyramid is a way of thinking about how different kinds of automated tests should be used to create a balanced portfolio. The whole point is to offer immediate feedback to ensure that code changes do not disrupt existing features. This would essentially help both developers and QAs to create high-quality software. It reduces the time required for developers to identify if a change they introduced breaks the code.

This test automation pyramid mainly operates at three levels: Unit, Integration & UI.

<kbd><img src="/uploads/35ea89b86a8a8b1f3ec44aca86be0f7e/pyramid2.png" alt="Test Pyramid" border="1" width=500></kbd>


1. <ins>**Unit tests**</ins> form the base of the test pyramid. They should be frequent, and they should run fast.

2. <ins>**Integration tests**</ins> are the middle tier of the pyramid. These tests focus on interactions of your code with the outside world, such as databases and external services or microservices.
3.	<ins>**UI tests**</ins> top the test pyramid. They’re written from the perspective of a user and should test that your entire application is functioning from front-end to back-end.

<br></br>
**Why to use test pyramid?**

- Pyramid help QAs to define right priorities. If test scripts are written with a greater focus on the UI, then chances are that core business logic and back-end functionality is not sufficiently verified periodically. Hence, this affects product quality and leads to more work for the team.
- As TAT (turnaround time) of UI tests is high, it leads to lower test coverage overall. By adopting the pyramid, such situations can be completely avoided, and QAs can focus on writing quality tests keeping in mind all the 3 layers defined.
- Frequent collaboration between 3 Amigos (i.e. Developer, Tester & Product Owner)
- Since the pyramid is built to run the complex tests at the beginning, testers can manage time better, get better results and essentially make life easier for everyone involved. Therefore, it emphasize speed and efficacy.