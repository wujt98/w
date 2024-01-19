import Theme from 'vitepress/theme'
import './style.css'
import 'element-plus/dist/index.css'
export default { ...Theme }
// import { h } from 'vue'
// import { useData } from 'vitepress'
// import './style.css'
// import Theme from 'vitepress/theme'

// export default Object.assign({}, Theme, {
// 	Layout: () => {
// 		const { frontmatter, theme } = useData()

// 		console.log('frontmatter======>', theme.value)
// 		return h(Theme.Layout)
// 	}
// })
