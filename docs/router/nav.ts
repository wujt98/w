import { DefaultTheme } from 'vitepress'
export const nav: DefaultTheme.NavItem[] = [
	{ text: '首页', link: '/' },
	{
		text: '学习资料',
		items: [
			{ text: '项目规范', link: '/views/specification' },
			{ text: 'Git 入门教程', link: '/GIT/git' },
			{
				text: 'CSS',
				items: [
					{
						text: 'Flex 布局',
						link: '/CSS/flex'
					},
					{
						text: 'Grid 布局',
						link: '/CSS/grid'
					}
				]
			}
		]
	},
	{ text: '工具箱', link: '' }
]
