```sh
npm create astro@latest -- --template minimal
```

[![StackBlitzで開く](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![CodeSandboxで開く](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![GitHub Codespacesで開く](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **ベテランの宇宙飛行士ですか？** このファイルを削除してください。楽しんで！

## 🚀 プロジェクト構造

Astroプロジェクト内には、以下のフォルダとファイルが含まれています：

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astroは`src/pages/`ディレクトリ内の`.astro`または`.md`ファイルを検索します。各ページはファイル名に基づいてルートとして公開されます。

`src/components/`について特別なことはありませんが、Astro/React/Vue/Svelte/Preact コンポーネントを置くのが好きな場所です。

画像などの静的アセットは、`public/`ディレクトリに配置できます。

## 🧞 コマンド

すべてのコマンドはプロジェクトのルートから、ターミナルから実行されます：

| コマンド                    | アクション                                      |
| :------------------------ | :------------------------------------------- |
| `npm install`             | 依存関係をインストール                         |
| `npm run dev`             | ローカル開発サーバーを`localhost:4321`で起動   |
| `npm run build`           | プロダクションサイトを`./dist/`にビルド         |
| `npm run preview`         | デプロイ前にビルドをローカルでプレビュー       |
| `npm run astro ...`       | `astro add`、`astro check`などのCLIコマンド実行 |
| `npm run astro -- --help` | Astro CLIの使用方法を取得                       |

## 👀 もっと知りたいですか？

ぜひ[当社のドキュメント](https://docs.astro.build)をご覧になるか、[Discordサーバー](https://astro.build/chat)に参加してください。