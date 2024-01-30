import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { nav } from '../router/nav'
import { sidebar } from '../router/sidebar'
import { NAME, SEARCH_LOCALES } from '../config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: NAME,
	titleTemplate: `:title - ${NAME}`,
	head: [['link', { rel: 'icon', href: '/w/favicon.ico' }]],
	base: '/w/',
	themeConfig: {
		darkModeSwitchLabel: '深浅主题',
		lastUpdated: {
			text: '最后更新于'
		},
		editLink: {
			pattern: 'https://github.com/wujt98/w/edit/main/docs/:path',
			text: '在 Github 上编辑此页面'
		},
		logo: '/avatar.jpg',
		nav,
		sidebar,
		search: {
			provider: 'local',
			options: {
				locales: SEARCH_LOCALES
			}
		},
		outline: {
			label: '页面导航'
		}
	},
	rewrites: {
		'views/:pkg/(.*)': ':pkg/(.*)'
	},
	vite: {
		resolve: {
			alias: [
				{
					find: /^.*\/VPFeature\.vue$/,
					replacement: fileURLToPath(new URL('../components/CustomFeature.vue', import.meta.url))
				}
			]
		}
	},
	markdown: {
		lineNumbers: true,
		image: {
			lazyLoading: true
		}
	}
})
