'option strict';

var path = require("path");

var teamBuildEnvironment = {
	isTeamBuild:			true,
	buildDefinitionName:	"TF_BUILD_BUILDDEFINITIONNAME",
	buildNumber:			"TF_BUILD_BUILDNUMBER",
	buildReason:			"TF_BUILD_BUILDREASON",
	buildUri:				"TF_BUILD_BUILDURI",
	projectCollectionUrl:	"TF_BUILD_COLLECTIONURI",
	sourcesDirectory:		"TF_BUILD_SOURCESDIRECTORY",
	testResultsDirectory:	"TF_BUILD_TESTRESULTSDIRECTORY",
	binariesDirectory:		"TF_BUILD_BINARIESDIRECTORY"
};

var environment = process.env;
if (environment.TF_BUILD === "True") {
	for (var property in teamBuild) {
		if (!teamBuildEnvironment.hasOwnProperty(property))
			continue;

		var environmentVariable = teamBuild[property];
		if (typeof environmentVariable !== "string")
			continue;

		teamBuildEnvironment[property] = environment[environmentVariable] || "";
	}

	module.exports = teamBuildEnvironment;
}
else
{
	module.exports = {
		isTeamBuild: false
	};
}
