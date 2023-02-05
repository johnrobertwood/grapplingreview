export interface Technique {
  id: number;
  name: string;
  displayName: string;
  prevTechnique: string | null;
  nextTechnique: string | null;
  video: {
    demoUrl: string;
    jamUrl: string;
    tabUrl: string;
    thumbnail: string;
  };
}

export interface SongModule {
  userId: string;
}

export interface ModuleObject {
  module: string;
  techniques: Technique[];
}

export interface ModuleNames {
  userId: string;
}
