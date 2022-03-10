import type { RoundConfig } from '../types'

export const ROUND_CONFIG: RoundConfig = {
  FOCUS: {
    color: '#1890ff',
    trailColor: '#64748b',
    strokeColor: '#64748b',
    defaultMinutes: 25,
    title: '工 作',
    noticeTitle: '休息好了!',
    body: '开始工作了!',
  },
  BREAK: {
    color: '#04eb8b',
    trailColor: '#a8a29e',
    strokeColor: '#a8a29e',
    defaultMinutes: 5,
    title: '休 息',
    noticeTitle: '工作结束了!',
    body: '休息一下吧!',
  },
}