export interface BuildPaths {
   entry: string;
   output: string;
   html: string;
   widgets: string;
   entities: string;
   features: string;
   pages: string;
   favicon: string;
   shared: string;
   app: string;
}
export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
   port: number;
   paths: BuildPaths;
   mode: BuildMode;
   analyzer?: boolean;
}
