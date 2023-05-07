import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {structure} from './src/structure'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'magenta-sheep',

  projectId: 'bpy0mxas',
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },
})
