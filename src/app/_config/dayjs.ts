import { extend, locale } from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'
import weekOfYear from 'dayjs/plugin/weekOfYear'

locale('ru')

extend(relativeTime)
extend(weekOfYear)
