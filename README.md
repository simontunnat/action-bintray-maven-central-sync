# action-bintray-maven-central-sync
GitHub Action for syncing a Maven package from Bintray to Maven Central.

Uses the Bintray REST API:
* https://www.jfrog.com/confluence/display/BT/Bintray+REST+API

## Inputs
### `username`
**Required** Username that should be used to connect to the Bintray API.

### `password`
**Required** Password  / API Key that should be used to connect to the Bintray API.

### `subject`
The Bintray Subject that contains the repository. Defaults to the "username".

### `repo`
The Bintray repository that contains the package. Defaults to "maven".

### `package`
**Required** The package to be synced.

### `version`
**Required** The package version to be synced.

## Usage
```yaml
- name: Sync to Maven Central
  uses: simontunnat/action-bintray-maven-central-sync@v1.1
  with:
    username: simontunnat
    password: SECRET_API_KEY
    package: org.tunnat:maven-parent
    version: 2002.5
```

## Legal
Copyright 2020 Simon Tunnat

Licensed under the [Apache License](LICENSE), Version 2.0.
