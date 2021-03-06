# CAD-Cypress-Tests

This Cypress based sample API tests project is implemented with the help of TypeScript and uses the [BDD](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) approach. This project will test the Californian Institute of Technology’s (CIT) SBDB Close-Approach Data API. Documentation of the API can be found [here](https://ssd-api.jpl.nasa.gov/doc/cad.html).

**Folder Structure:**

```

├── allure-report (folder to support and generate allure based HTML report)
├── allure-results (contains all the tests results in json format)
├── cypress
|   └── fixtures (All test data goes here)
|   └── screenshots (capture screenshots on failure)
│   └── specs (feature files)
|   └── step-definitions (tests code)
│   └── support (contains all the supporting tests files)
│   └── unit (contains unit tests)
├── cypress.json (cypress global configuration)

```
Note: allure-report & allure-results directories will get generated after the first run.

**Salient Features:**

- Based on Cucumber / Gherkin standard.
- Cross-browser platform.
- Fully automated and provides both console and HTML report using [Allure](https://www.npmjs.com/package/@shelex/cypress-allure-plugin).
- Ability to take screenshots on failure.
- Ability to attach failed step screenshot on allure report.
- Ability to retry failed tests to help reduce test flakiness.
- Containerized the tests using Docker. This extends the ['cypress/included'](https://hub.docker.com/r/cypress/included) base image. It run tests using a [single docker command](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/).

**Installation**:

- Clone the project.
- Open terminal and run `npm install`.

**Running Tests**:

(A) Headed Mode:

- To run tests in browser/headed mode, run `npm run cy:open` command in terminal. This will open an interactive cypress test runner.

(B) Headless Mode:

- To run tests in headless mode, <br>
        * `npm run cy:run` - run tests locally. <br>
        * `npm run cy:run:report` - run tests locally + generates the allure report. <br>
        * `npm run cy:run:report:open` - run tests locally + generates the allure report + opens the report automatically in browser using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). <br>
        * `npm run cy:run:unit` - run unit tests locally. <br>
        * `npm run cy:run:docker` - run tests in Docker container. <br>
        * `npm run cy:run:docker:report` - run tests in Docker container + generates the allure report. <br>
        **(To view all possible commands, navigate to 'package.json' file in the project.)**
        
<ins>Note</ins>:-<br>
1) Please make sure Docker client is installed and running on your machine when running tests via docker.
2) To view allure based HTML report, expand `allure-report` directory and open the `index.html` file using Live Server.</br>

Once the execution is complete, this is how the test report(s) would look like,

<ins>Console</ins>:

<kbd><img src="https://user-images.githubusercontent.com/58862186/153707831-d22bd77f-e2e2-4ea8-9848-493f7c6e5abb.png" alt="Console Report" border="1" width=800></kbd>

<ins>HTML - Pass</ins>: 

<kbd><img src="https://user-images.githubusercontent.com/58862186/153707839-6e1b2270-ec29-4c0a-b1c6-426f9ee230e5.png" alt="HTML Report" border="1" width=800></kbd>

<kbd><img src="https://user-images.githubusercontent.com/58862186/153707840-7a61daf1-6ac2-499f-9117-6ea5e37a8600.png" alt="HTML Report" border="1" width=800></kbd>

<ins>HTML - Fail</ins>: 

<kbd><img src="https://user-images.githubusercontent.com/58862186/153707832-13647647-8d70-429b-a26a-46b529189f9d.png" alt="HTML Report" border="1" width=800></kbd>

<kbd><img src="https://user-images.githubusercontent.com/58862186/153707835-bc70cb7a-13f8-49d4-b962-2b03a73444bb.png" alt="HTML Report" border="1" width=800></kbd>

<kbd><img src="https://user-images.githubusercontent.com/58862186/153707838-cf800616-e347-4794-8db9-fa089df65266.png" alt="HTML Report" border="1" width=800></kbd>


# (A) Testing strategy

The goal of test automation is to increase the effectiveness and efficiency of testing. Good automation makes testing faster, more systematic, and reduces human error. This includes: to reduce the number of test cases that testers have to perform manually as well as those that are challenging to perform manually, therefore saving time and effort.

The ideal test automation strategy is to follow the [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) mindset. Though, this project is simply for a demonstration purpose. However, the test pyramid is a way of thinking about how different kinds of automated tests should be used to create a balanced portfolio. The whole point is to offer immediate feedback to ensure that code changes do not disrupt existing features. This would essentially help both developers and QAs to create high-quality software. It reduces the time required for developers to identify if a change they introduced breaks the code.

This test automation pyramid mainly operates at three levels: Unit, Integration & UI.

<kbd><img src="https://user-images.githubusercontent.com/58862186/153708018-2e182576-6697-43de-a726-d5f32b4a6a19.png" alt="Test Pyramid" border="1" width=500></kbd>

1. <ins>**Unit tests**</ins> form the base of the test pyramid. They should be frequent, and they should run fast.

2. <ins>**Integration tests**</ins> are the middle tier of the pyramid. These tests focus on interactions of your code with the outside world, such as databases and external services or microservices.

3. <ins>**UI tests**</ins> top the test pyramid. They’re written from the perspective of a user and should test that your entire application is functioning from front-end to back-end.

<br></br>
**Why to use test pyramid?**

- Pyramid help QAs to define right priorities. If test scripts are written with a greater focus on the UI, then chances are that core business logic and back-end functionality is not sufficiently verified periodically. Hence, this affects product quality and leads to more work for the team.
- As TAT (turnaround time) of UI tests is high, it leads to lower test coverage overall. By adopting the pyramid, such situations can be completely avoided, and QAs can focus on writing quality tests keeping in mind all the 3 layers defined.
- Frequent collaboration between 3 Amigos (i.e. Developer, Tester & Product Owner)
- Since the pyramid is built to run the complex tests at the beginning, testers can manage time better, get better results and essentially make life easier for everyone involved. Therefore, it emphasize speed and efficacy.
