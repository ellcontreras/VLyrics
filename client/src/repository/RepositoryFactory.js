import LyricsRepository from "./lyricsRepository";

const repositories = {
  lyrics: LyricsRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
