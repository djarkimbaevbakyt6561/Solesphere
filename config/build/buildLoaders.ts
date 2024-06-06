import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
   const isDev = options.mode === 'development';
   const cssLoader = {
      loader: 'css-loader',
      options: {
         modules: {
            auto: true,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
         },
      },
   };
   const svgrLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
         {
            loader: '@svgr/webpack',
            options: {
               icon: true,
               svgoConfig: {
                  plugins: [
                     {
                        name: 'convertColors',
                        params: {
                           currentColor: true,
                        },
                     },
                  ],
               },
            },
         },
      ],
   };

   const assetsLoader = {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
   };
   const sassLoader = {
      test: /\.(c|sc|sa)ss$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         cssLoader,
         // {
         //   loader: 'postcss-loader',
         //   options: {
         //     postcssOptions: {
         //       plugins: [postcssPresetEnv()],
         //     },
         //   },
         // },
         'sass-loader',
      ],
   };
   const tsLoader = {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
         {
            loader: 'ts-loader',
            options: {
               transpileOnly: false,
            },
         },
      ],
   };
   return [sassLoader, tsLoader, assetsLoader, svgrLoader];
}
