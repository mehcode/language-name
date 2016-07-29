# Language Name
> Simple getter for language names in its language (backed by a script that dumps data direct from the CLDR).

## Install

```bash
npm i language-name --save
```

## Usage

```js
import languageName from "language-name";

// languageName( LANGUAGE SUBTAG )
languageName("en"); // United States
languageName("de"); // Deutsch
languageName("ja"); // 日本語
```

## Contributing

Pull requests are always welcome.
