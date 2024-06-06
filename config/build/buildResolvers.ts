import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildResolvers(
   options: BuildOptions,
): Configuration['resolve'] {
   return {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
         'app': options.paths.app,
         'entities': options.paths.entities,
         'features': options.paths.features,
         'pages': options.paths.pages,
         'shared': options.paths.shared,
         'widgets': options.paths.widgets,
      },
   };
}
