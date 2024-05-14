import rss, { type RSSOptions } from '@astrojs/rss';

// contextの型を定義します。具体的なプロパティは使用する環境によって異なるため、適宜調整が必要です。
interface RSSContext {
    site: string;
}

// GET関数の型を定義します。ここでは非同期関数であるため、Promise<RSS>を返します。
export async function GET(context: RSSContext): Promise<RSSOptions> {
    return rss({
        title: 'Astro学習者 | ブログ',
        description: 'Astroを学ぶ旅',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>ja-jp</language>`,
    });
}
