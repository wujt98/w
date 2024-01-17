import { defineConfig } from 'vitepress'
import { nav } from '../router/nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: '名字还没想好',
	head: [['link', { rel: 'icon', href: '/w/favicon.ico' }]],
	base: '/w/',
	themeConfig: {
		darkModeSwitchLabel: '主题颜色',
		logo: '/avatar.jpg',
		nav,
		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' }
				]
			}
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/wujt98' }]
	}
})
