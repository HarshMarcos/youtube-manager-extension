import type { CurrentVideo } from "./currentVideo.types";

export interface UseCurrentVideoResult {
  video: CurrentVideo | null;

  loading: boolean;

  error: string | null;

  refresh: () => Promise<void>;
}
