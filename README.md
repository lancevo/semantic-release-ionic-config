# semantic-release-ionic-config

Semantic release plugin for automatically update config.xml files.

## Install

```bash
$ npm install -D semantic-release-ionic-config
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

By default, it updates config.xml to the latest version

`YAML`:

```yaml
prepare:
  - @semantic-release-ionic-config"
```

`JSON`:

```json
{
  "prepare": ["semantic-release-ionic-config"]
}
```

## Configuration

### Options

| **Options** | **Desctiption**               |
| ----------- | ----------------------------- |
| filenames   | name of the config.xml files. |

The example is to update multiple config.xml files, and commit them afterward.

`YAML`:

```yaml
prepare:
  - - 'semantic-release-ionic-config'
    - filenames: ['config.xml', 'config.dev.xml', 'config.prod.xml']

  - - '@semantic-release/git'
    - assets:
        [
          'package.json',
          'package-lock.json',
          'config.xml',
          'config.dev.xml',
          'config.prod.xml',
          'CHANGELOG.md',
        ]
    - message: 'chore(release): v${nextRelease.version}'
```

`JSON`:

```json
{
  "prepare": [
    [
      "semantic-release-ado",
      {
        "filenames": ["config.xml", "config.dev.xml", "config.prod.xml"]
      }
    ],
    {
      "path": "@semantic-release/git",
      "assets": [
        "package.json",
        "package-lock.json",
        "config.xml",
        "config.dev.xml",
        "config.prod.xml",
        "CHANGELOG.md"
      ],
      "message": "chore(release): v${nextRelease.version}"
    }
  ]
}
```

## Commit the modified config.xml files
