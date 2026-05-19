# Sowers 請求書作成アプリ

## GitHubにアップロードする方法

1. このZIPを解凍します。
2. GitHubのリポジトリ画面で「uploading an existing file」を押します。
3. 解凍したフォルダの中身をすべてドラッグ＆ドロップします。
4. 「Commit changes」を押します。

## Vercelで公開する方法

1. https://vercel.com にログインします。
2. 「Add New...」→「Project」を押します。
3. GitHubの `sowersseikyu` リポジトリを選択します。
4. Framework Preset が「Vite」になっていることを確認します。
5. 「Deploy」を押します。

## ローカルで確認する場合

```bash
npm install
npm run dev
```

## 注意

この版はブラウザだけで動く簡易版です。
入力内容はサーバー保存されません。
将来的に「本部へ自動送信」「ログイン」「履歴保存」などを追加できます。
