$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027com\\siva\\test\\app\\login\\FirstPage.feature\u0027");
formatter.feature({
  "id": "explore-junit",
  "description": "\r\nIn order to gain knowledge\r\nAs an Automation TestAnalyst\r\nI want to become expert on Junit",
  "name": "Explore JUnit",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "explore-junit;test-login-scenario-on-firefox",
  "tags": [
    {
      "name": "@login",
      "line": 7
    }
  ],
  "description": "",
  "name": "Test login scenario on Firefox",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I have launched the firefox browser",
  "keyword": "Given ",
  "line": 10,
  "rows": [
    {
      "cells": [
        "industry",
        "country",
        "city"
      ],
      "line": 11
    },
    {
      "cells": [
        "IT",
        "India",
        "Blore"
      ],
      "line": 12
    },
    {
      "cells": [
        "Auto",
        "Germany",
        "Berlin"
      ],
      "line": 13
    },
    {
      "cells": [
        "Pharma",
        "USA",
        "Texas"
      ],
      "line": 14
    }
  ]
});
formatter.step({
  "name": "I submit the url",
  "keyword": "When ",
  "line": 15,
  "rows": [
    {
      "cells": [
        "Section"
      ],
      "line": 16
    },
    {
      "cells": [
        "News"
      ],
      "line": 17
    },
    {
      "cells": [
        "Sport"
      ],
      "line": 18
    },
    {
      "cells": [
        "Money"
      ],
      "line": 19
    },
    {
      "cells": [
        "Arts"
      ],
      "line": 20
    }
  ]
});
formatter.step({
  "name": "I want to see homepage",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "want to see weather forecast",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "the page not opened",
  "keyword": "But ",
  "line": 23
});
formatter.match({
  "location": "Login.I_have_launched_the_firefox_browser(DataTable)"
});
formatter.result({
  "duration": 174222003,
  "status": "passed"
});
formatter.match({
  "location": "Login.I_submit_the_url(DataTable)"
});
formatter.result({
  "duration": 451035,
  "status": "passed"
});
formatter.match({
  "location": "Login.I_want_to_see_homepage()"
});
formatter.result({
  "duration": 72286,
  "status": "passed"
});
formatter.match({
  "location": "Login.want_to_see_weather_forecast()"
});
formatter.result({
  "duration": 72705,
  "status": "passed"
});
formatter.match({
  "location": "Login.the_page_not_opened()"
});
formatter.result({
  "duration": 68375,
  "status": "passed"
});
});