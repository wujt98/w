import { DefaultTheme } from 'vitepress'
export const nav: DefaultTheme.NavItem[] = [
	{ text: '首页', link: '/' },
	{ text: '学习资料', items: [{ text: '测试1', link: '/api-examples' }] },
	{ text: '工具箱', link: '/markdown-examples' }
]
