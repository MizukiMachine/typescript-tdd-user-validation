# TypeScript Form Validation TDD Example

このリポジトリは、TypeScriptでフォームバリデーションを実装する際のテスト駆動開発(TDD)の実践例を提供します。
Zenn記事「[TypeScript/ハンズオン]テスト駆動開発(TDD)入門 第4回：エラーハンドリングとバリデーションのテスト」のサンプルコードです。

## 機能
- ユーザー名バリデーション（長さ、使用可能文字のチェック）
- カスタムバリデーションエラー
- Jest用カスタムマッチャー

## 必要要件
- Node.js (v16以上を推奨)
- npm (v8以上を推奨)

## セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/MizukiMachine/typescript-tdd-user-validation.git
cd form-validation-tdd

# 依存パッケージのインストール
npm install
```

## 使い方

```bash
# テストの実行（監視モード）
npm test

# テストカバレッジの確認
npm run test:coverage

# ビルド
npm run build

# ビルド成果物のクリーンアップ
npm run clean
```

## プロジェクト構造
```
src/
├── errors/
│   ├── ValidationError.ts
│   └── ValidationError.test.ts
├── testing/
│   └── matchers.ts
├── validators/
│   ├── username.ts
│   ├── username.test.ts
│   └── rules.ts
├── types.ts
└── test-setup.ts
```

## 学べること
- TDDの基本的なワークフロー
- TypeScriptでのバリデーション実装
- Jestでのテスト記述
- カスタムマッチャーの作成方法
- エラー処理のベストプラクティス

## 関連記事
- [テスト駆動開発(TDD)入門 第4回：エラーハンドリングとバリデーションのテスト](https://zenn.dev/nezumizuki/articles/175da0bad038f7)

## ライセンス
MIT

## 貢献について
Issue、Pull Requestはお気軽にどうぞ。

```
