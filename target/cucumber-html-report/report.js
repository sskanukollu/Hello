$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027main\\resources\\com\\siva\\test\\app\\testcases\\CreateLead.feature\u0027");
formatter.feature({
  "id": "create-a-new-lead",
  "description": "\r\nIn order to verify the functionality\r\nAs a user\r\nI want to create a new Lead",
  "name": "Create a new Lead",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "create-a-new-lead;create-a-new-lead",
  "tags": [
    {
      "name": "@createlead",
      "line": 13
    }
  ],
  "description": "",
  "name": "Create a new Lead",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario_outline"
});
formatter.step({
  "name": "browser is \"\u003cBrowserType\u003e\"",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "I click on \"leadtab\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "\"Leads\" element should be present",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on \"newButton\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "\"NewLead\" element should be present",
  "keyword": "Then ",
  "line": 20
});
formatter.examples({
  "id": "create-a-new-lead;create-a-new-lead;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 23,
  "rows": [
    {
      "id": "create-a-new-lead;create-a-new-lead;;1",
      "cells": [
        "BrowserType"
      ],
      "line": 24
    },
    {
      "id": "create-a-new-lead;create-a-new-lead;;2",
      "cells": [
        "chrome"
      ],
      "line": 25
    },
    {
      "id": "create-a-new-lead;create-a-new-lead;;3",
      "cells": [
        "firefox"
      ],
      "line": 26
    },
    {
      "id": "create-a-new-lead;create-a-new-lead;;4",
      "cells": [
        "ie"
      ],
      "line": 27
    }
  ]
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "I am logged in Salesforce on \"chrome\"",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I am logged in Salesforce on \"firefox\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I am logged in Salesforce on \"ie\"",
  "keyword": "Given ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 30
    }
  ],
  "location": "coomonutil.I_am_logged_in_Salesforce(String)"
});
formatter.result({
  "duration": 32742354545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 30
    }
  ],
  "location": "coomonutil.I_am_logged_in_Salesforce(String)"
});
formatter.result({
  "duration": 30445469466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 30
    }
  ],
  "location": "coomonutil.I_am_logged_in_Salesforce(String)"
});
formatter.result({
  "duration": 30285942836,
  "status": "passed"
});
formatter.scenario({
  "id": "create-a-new-lead;create-a-new-lead;;2",
  "tags": [
    {
      "name": "@createlead",
      "line": 13
    }
  ],
  "description": "",
  "name": "Create a new Lead",
  "keyword": "Scenario Outline",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "browser is \"chrome\"",
  "keyword": "Given ",
  "line": 16,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"leadtab\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "\"Leads\" element should be present",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on \"newButton\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "\"NewLead\" element should be present",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "coomonutil.browser_is(String)"
});
formatter.result({
  "duration": 121598346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leadtab",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "duration": 1671192987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leads",
      "offset": 1
    }
  ],
  "location": "coomonutil.element_should_be_present(String)"
});
formatter.result({
  "duration": 46218164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newButton",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "duration": 814087685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewLead",
      "offset": 1
    }
  ],
  "location": "coomonutil.element_should_be_present(String)"
});
formatter.result({
  "duration": 68228644,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "I am logged in Salesforce on \"chrome\"",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I am logged in Salesforce on \"firefox\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I am logged in Salesforce on \"ie\"",
  "keyword": "Given ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 30
    }
  ],
  "location": "coomonutil.I_am_logged_in_Salesforce(String)"
});
formatter.result({
  "duration": 70062256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 30
    }
  ],
  "location": "coomonutil.I_am_logged_in_Salesforce(String)"
});
formatter.result({
  "duration": 40223478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 30
    }
  ],
  "location": "coomonutil.I_am_logged_in_Salesforce(String)"
});
formatter.result({
  "duration": 83534290,
  "status": "passed"
});
formatter.scenario({
  "id": "create-a-new-lead;create-a-new-lead;;3",
  "tags": [
    {
      "name": "@createlead",
      "line": 13
    }
  ],
  "description": "",
  "name": "Create a new Lead",
  "keyword": "Scenario Outline",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "browser is \"firefox\"",
  "keyword": "Given ",
  "line": 16,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"leadtab\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "\"Leads\" element should be present",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on \"newButton\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "\"NewLead\" element should be present",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 12
    }
  ],
  "location": "coomonutil.browser_is(String)"
});
formatter.result({
  "duration": 25307686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leadtab",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "duration": 143932888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leads",
      "offset": 1
    }
  ],
  "location": "coomonutil.element_should_be_present(String)"
});
formatter.result({
  "duration": 1716479259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newButton",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "duration": 2500047423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewLead",
      "offset": 1
    }
  ],
  "location": "coomonutil.element_should_be_present(String)"
});
formatter.result({
  "duration": 61788091,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "I am logged in Salesforce on \"chrome\"",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I am logged in Salesforce on \"firefox\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I am logged in Salesforce on \"ie\"",
  "keyword": "Given ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 30
    }
  ],
  "location": "coomonutil.I_am_logged_in_Salesforce(String)"
});
formatter.result({
  "duration": 30788829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 30
    }
  ],
  "location": "coomonutil.I_am_logged_in_Salesforce(String)"
});
formatter.result({
  "duration": 547351409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 30
    }
  ],
  "location": "coomonutil.I_am_logged_in_Salesforce(String)"
});
formatter.result({
  "duration": 81001007,
  "status": "passed"
});
formatter.scenario({
  "id": "create-a-new-lead;create-a-new-lead;;4",
  "tags": [
    {
      "name": "@createlead",
      "line": 13
    }
  ],
  "description": "",
  "name": "Create a new Lead",
  "keyword": "Scenario Outline",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "browser is \"ie\"",
  "keyword": "Given ",
  "line": 16,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"leadtab\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "\"Leads\" element should be present",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on \"newButton\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "\"NewLead\" element should be present",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 12
    }
  ],
  "location": "coomonutil.browser_is(String)"
});
formatter.result({
  "duration": 27163718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leadtab",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "duration": 1944289847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leads",
      "offset": 1
    }
  ],
  "location": "coomonutil.element_should_be_present(String)"
});
formatter.result({
  "duration": 54231404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newButton",
      "offset": 12
    }
  ],
  "location": "coomonutil.I_click_on(String)"
});
formatter.result({
  "duration": 2702095587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewLead",
      "offset": 1
    }
  ],
  "location": "coomonutil.element_should_be_present(String)"
});
formatter.result({
  "duration": 53885201,
  "status": "passed"
});
});