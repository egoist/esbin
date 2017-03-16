# ESBIN

*[Work In Progress]*

> JavaScript debugging made simple.

[Download the latest release.](https://github.com/egoist/esbin/releases)

<img src="https://ooo.0o0.ooo/2017/03/16/58ca56390afd4.png" alt="preview" />

## Why

You may also like [jsbin](https://jsbin.com) or [webpackbin](http://webpackbin.com), this is like jsbin and webpackbin had a baby and works offline.

## Notes

- `HTML` and `CSS` are saved on the fly, for `JS` you need to press `cmd/ctrl+s` manually to save it.

## Folder structure

- `app/`: Main process, written with native ES6 support
- `src/`: Renderer process, bundle with Webpack

## Development

- `yarn dev`: Run in development mode
- `yarn build`: Build in production mode
- `yarn lint`: Run eslint
- `yarn dist`: Distribute Electron app for mac/windows/linux
- `yarn dist:mac`: Distribute Electron app for mac
- `yarn dist:win`: Distribute Electron app for windows
- `yarn dist:linux`: Distribute Electron app for linux

## License

MIT &copy; [EGOIST](https://github.com/egoist)
