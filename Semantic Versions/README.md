# Semantic Versions

This program will take a version string and increment it to the next version.

## Installation

Use the package manager to install the dependencies

```
npm install
```

## Usage

```
npm run dev

nextVersions('1.2.3') # returns 1.2.4
nextVersions('0.9.9') # returns 1.0.0
nextVersions('9.9') # returns 10.0
```

## Testing

```
npm test
```
