import localeEn from './locale.en'
import localeKo from './locale.ko'
import localeZhCn from './locale.zh-cn'

type LocaleIndex = keyof typeof localeEn
export type LocaleType = 'zh' | 'en' | 'ko'

type CountBrace<
  Str extends string,
  Cnt extends string[] = []
> = Str extends `${infer _L}{${Cnt['length']}}${infer _R}` ? CountBrace<Str, [...Cnt, string]> : Cnt

export let locale: LocaleType = 'zh'
let localeDict: Record<LocaleIndex, string> = localeZhCn

export function setLocale(lec: 'zh' | 'en' | 'ko') {
  locale = lec
  if (locale === 'zh') {
    localeDict = localeZhCn
  } else if (locale === 'ko') {
    localeDict = localeKo
  } else {
    localeDict = localeEn
  }
}

export function t<K extends LocaleIndex>(key: K, ...args: CountBrace<(typeof localeEn)[K]>) {
  let str = localeDict[key]
  for (const [idx, arg] of Object.entries(args)) {
    str = str.replaceAll(`{${idx}}`, arg)
  }
  return str
}

export type t = typeof t
