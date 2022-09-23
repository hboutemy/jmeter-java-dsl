(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{306:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("There are many tools to script performance/load tests, being "),a("a",{attrs:{href:"http://jmeter.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JMeter"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://gatling.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gatling"),a("OutboundLink")],1),t._v(" the most popular ones.")]),t._v(" "),a("p",[t._v("Here we explore some alternatives, their pros & cons, and the main motivations behind the development of jmeter-java-dsl.")]),t._v(" "),a("h2",{attrs:{id:"alternatives-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternatives-analysis"}},[t._v("#")]),t._v(" Alternatives analysis")]),t._v(" "),a("h3",{attrs:{id:"jmeter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmeter"}},[t._v("#")]),t._v(" JMeter")]),t._v(" "),a("p",[t._v("JMeter is great for people with no programming knowledge since it provides a graphical interface to create test plans and run them. Additionally, it is the most popular tool (with a lot of supporting tools built on it) and has a big amount of supported protocols and plugins making it very versatile.")]),t._v(" "),a("p",[t._v("But, JMeter has some downsides as well: sometimes it might be slow to create test plans in JMeter GUI and you can't get the full picture of the test plan unless you dig in every tree node to check its properties. Furthermore, it doesn't provide a simple programmer-friendly API (you can check "),a("a",{attrs:{href:"https://www.blazemeter.com/blog/5-ways-launch-jmeter-test-without-using-jmeter-gui/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" for an example of how to run JMeter programmatically without jmeter-java-dsl), nor a Git-friendly format (too verbose and hard to review). For example, for this test plan:")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import static"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assertions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token static"}},[t._v("assertThat")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import static"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("us"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abstracta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmeter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javadsl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JmeterDsl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Instant")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContentType")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("junit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jupiter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("us"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abstracta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmeter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javadsl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestPlanStats")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPerformance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestPlanStats")]),t._v(" stats "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPlan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("threadGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpSampler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://my.service"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"name\\": \\"test\\"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContentType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("APPLICATION_JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this is just to log details of each request stats")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jtlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target/jtls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertThat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("overall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sampleTimePercentile99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLessThan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("p",[t._v("In JMeter, you would need a JMX file like "),a("a",{attrs:{href:"https://github.com/abstracta/jmeter-java-dsl/tree/master/docs/motivation/sample.jmx",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),a("OutboundLink")],1),t._v(", and even then, it wouldn't be as simple to do assertions on collected statistics as in provided example.")]),t._v(" "),a("h3",{attrs:{id:"gatling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gatling"}},[t._v("#")]),t._v(" Gatling")]),t._v(" "),a("p",[t._v("Gatling does provide a simple API and Git-friendly format but requires scala knowledge and environment ["),a("a",{attrs:{href:"#gatling-java"}},[t._v("1")]),t._v("]. Additionally, it doesn't provide as a rich environment as JMeter (protocol support, plugins, tools) and requires learning a new framework for testing (if you already use JMeter, which is the most popular tool).")]),t._v(" "),a("h3",{attrs:{id:"taurus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taurus"}},[t._v("#")]),t._v(" Taurus")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gettaurus.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taurus"),a("OutboundLink")],1),t._v(" is another open-source tool that allows specifying tests in a Git-friendly yaml syntax, and provides additional features like pass/fail criteria and easier CI/CD integration. But, this tool requires a python environment, in addition to the java environment. Additionally, there is no built-in GUI or IDE auto-completion support, which makes it harder to discover and learn the actual syntax. Finally, Taurus syntax only supports a subset of the features JMeter provides.")]),t._v(" "),a("h3",{attrs:{id:"ruby-dsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruby-dsl"}},[t._v("#")]),t._v(" ruby-dsl")]),t._v(" "),a("p",[t._v("Finally, "),a("a",{attrs:{href:"https://github.com/flood-io/ruby-jmeter",target:"_blank",rel:"noopener noreferrer"}},[t._v("ruby-dsl"),a("OutboundLink")],1),t._v(" is also an open-source library that allows specifying and running in ruby custom DSL JMeter test plans. This is the most similar tool to jmeter-java-dsl, but it requires ruby (in addition to the java environment) with the additional performance impact, does not follow the same naming and structure convention as JMeter, and lacks debugging integration with JMeter execution engine.")]),t._v(" "),a("h3",{attrs:{id:"jmeter-java-dsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmeter-java-dsl"}},[t._v("#")]),t._v(" jmeter-java-dsl")]),t._v(" "),a("p",[t._v("jmeter-java-dsl tries to get the best of these tools by providing a simple java API with Git friendly format to run JMeter tests, taking advantage of all JMeter benefits and knowledge and also providing many of the benefits of Gatling scripting.\nAs shown in the previous example, it can be easily executed with JUnit, modularized in code, and easily integrated into any CI/CD pipeline. Additionally, it makes it easy to debug the execution of test plans with the usual IDE debugger tools. Finally, as with most Java libraries, you can use it not only in a Java project but also in projects of most JVM languages (like kotlin, scala, groovy, etc.).")]),t._v(" "),a("h2",{attrs:{id:"comparison-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison-table"}},[t._v("#")]),t._v(" Comparison Table")]),t._v(" "),a("p",[t._v("Here is a table with a summary of the main pros and cons of each tool:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Tool")]),t._v(" "),a("th",[t._v("Pros")]),t._v(" "),a("th",[t._v("Cons")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("JMeter")]),t._v(" "),a("td",[t._v("👍 GUI for non programmers"),a("br"),t._v("👍 Popularity"),a("br"),t._v("👍 Protocols Support"),a("br"),t._v("👍 Documentation"),a("br"),t._v("👍 Rich ecosystem")]),t._v(" "),a("td",[t._v("👎 Slow test plan creation"),a("br"),t._v("👎 No VCS friendly format"),a("br"),t._v("👎 Not programmers friendly"),a("br"),t._v("👎 No simple CI/CD integration")])]),t._v(" "),a("tr",[a("td",[t._v("Gatling")]),t._v(" "),a("td",[t._v("👍 VCS friendly"),a("br"),t._v("👍 IDE friendly (auto-complete and debug)"),a("br"),t._v("👍 Natural CI/CD integration"),a("br"),t._v("👍 Natural code modularization and reuse"),a("br"),t._v("👍 Less resources (CPU & RAM) usage"),a("br"),t._v("👍 All details of simple test plans at a glance"),a("br"),t._v("👍 Simple way to do assertions on statistics")]),t._v(" "),a("td",[t._v("👎 Scala knowledge and environment required ["),a("a",{attrs:{href:"#gatling-java"}},[t._v("1")]),t._v("]"),a("br"),t._v("👎 Smaller set of protocols supported"),a("br"),t._v("👎 Less documentation & tooling"),a("br"),t._v("👎 Live statistics charts & grafana integration only available in enterprise version")])]),t._v(" "),a("tr",[a("td",[t._v("Taurus")]),t._v(" "),a("td",[t._v("👍 VCS friendly"),a("br"),t._v("👍 Simple CI/CD integration"),a("br"),t._v("👍 Unified framework for running any type of test"),a("br"),t._v("👍 built-in support for running tests at scale"),a("br"),t._v("👍 All details of simple test plans at a glance"),a("br"),t._v("👍 Simple way to do assertions on statistics")]),t._v(" "),a("td",[t._v("👎 Both Java and Python environments required"),a("br"),t._v("👎 Not as simple to discover (IDE auto-complete or GUI) supported functionality"),a("br"),t._v("👎 Not complete support of JMeter capabilities (nor in the roadmap)")])]),t._v(" "),a("tr",[a("td",[t._v("ruby-dsl")]),t._v(" "),a("td",[t._v("👍 VCS friendly"),a("br"),t._v("👍 Simple CI/CD integration"),a("br"),t._v("👍 Unified framework for running any type of test"),a("br"),t._v("👍 built-in support for running tests at scale"),a("br"),t._v("👍 All details of simple test plans at a glance")]),t._v(" "),a("td",[t._v("👎 Both Java and Ruby environments required"),a("br"),t._v("👎 Not following same naming convention and structure as JMeter"),a("br"),t._v("👎 Not complete support of JMeter capabilities (nor in the roadmap)"),a("br"),t._v("👎 No integration for debugging JMeter code")])]),t._v(" "),a("tr",[a("td",[t._v("jmeter-java-dsl")]),t._v(" "),a("td",[t._v("👍 VCS friendly"),a("br"),t._v("👍 IDE friendly (auto-complete and debug)"),a("br"),t._v("👍 Natural CI/CD integration"),a("br"),t._v("👍 Natural code modularization and reuse"),a("br"),t._v("👍 Existing JMeter documentation"),a("br"),t._v("👍 Easy to add support for JMeter supported protocols and new plugins"),a("br"),t._v("👍 Could easily interact with JMX files and take advantage of JMeter ecosystem"),a("br"),t._v("👍 All details of simple test plans at a glance"),a("br"),t._v("👍 Simple way to do assertions on statistics")]),t._v(" "),a("td",[t._v("👎 Basic Java knowledge required"),a("br"),t._v("👎 Same resources (CPU & RAM) usage as JMeter")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Notes")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{name:"gatling-java"}}),t._v(" One year after jmeter-java-dsl release, on November 2021, Gatling released "),a("a",{attrs:{href:"https://gatling.io/2021/11/gatling-3-7-java-dsl-kotlin-and-much-more/",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.7 version"),a("OutboundLink")],1),t._v(", including a Java friendly API for existing Gatling Scala API. This greatly simplifies usage for Java users and is a great addition to Gatling.")]),t._v(" "),a("p",[t._v("As a side note, take into consideration that the underlying code is still Scala and async model-based, which makes debugging and understanding it harder for Java developers than JMeter code. Additionally, the model is still tied to "),a("code",[t._v("Simulator")]),t._v(" classes and maven (gradle or sbt) plugin to be able to run the tests, compared to the simplicity and flexibility of jmeter-java-dsl tests execution.")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);