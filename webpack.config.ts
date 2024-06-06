import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths } from './config/build/types/types';
import path from 'path';
import webpack from 'webpack';

interface EnvVariables {
   mode?: BuildMode;
   port?: number;
}

export default (env: EnvVariables) => {
   const paths: BuildPaths = {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      widgets: path.resolve(__dirname, 'src/widgets'),
      entities: path.resolve(__dirname, 'src/entities'),
      features: path.resolve(__dirname, 'src/features'),
      pages: path.resolve(__dirname, 'src/pages'),
      shared: path.resolve(__dirname, 'src/shared'),
      app: path.resolve(__dirname, 'src/app'),
   };

   const config: webpack.Configuration = buildWebpack({
      mode: env.mode ?? 'development',
      port: env.port ?? 3000,
      paths,
   });
   return config;
};
