# tfs-build-env

Information about the current TFS team build, derived from the TF_xxx environment variables.

## Usage
```javascript
var teamBuildEnvironment = require("tfs-build-env");
if (teamBuildEnvironment.isTeamBuild) {
	// Running as part of a TFS team build, use properties of teamBuildEnvironment.
}
```

## Properties
The following properties are defined, providing the `isTeamBuild` property is `true`:
* `buildDefinitionName`: The name of the TFS build definition being built
* `buildNumber`: The TFS build number for the current build (format is configured as part of the build definition)
* `buildReason`: The reason that the build was triggered.
* `buildUri`: The TFS artifact URI of the build. Use this when calling TFS APIs.
* `projectCollectionUrl`: The URL of the project collection that hosts the build's containing project.
* `sourcesDirectory`: The full path of the directory containing the build's source files.
* `testResultsDirectory`: The full path of the directory containing the build's test result files.
* `binariesDirectory`: The full path of the directory containing the build's outputs.
