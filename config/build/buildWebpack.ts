import { Configuration } from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): Configuration {
   const isDev = options.mode == 'development';
   const devtool = isDev ? 'inline-source-map' : false;

   return {
      mode: options.mode ?? 'development',
      entry: options.paths.entry,
      output: {
         path: options.paths.output,
         publicPath: '/',  
         filename: '[name].[contenthash].js',
         clean: true,
      },
      plugins: buildPlugins(options),
      module: {
         rules: buildLoaders(options),
      },
      resolve: buildResolvers(options),
      devtool,
      devServer: isDev ? buildDevServer(options) : undefined,
   };
}
