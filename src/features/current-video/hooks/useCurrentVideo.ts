import { useCallback, useEffect, useState } from "react";

import { currentVideoService } from "../services/currentVideo.service";
import type { CurrentVideo } from "../types/currentVideo.types";
import type { UseCurrentVideoResult } from "../types/useCurrentVideo.types";

export function useCurrentVideo(): UseCurrentVideoResult {
  const [video, setVideo] = useState<CurrentVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setError(null);

      const currentVideo = await currentVideoService.getCurrentVideo();

      setVideo(currentVideo);
    } catch {
      setError("Failed to load current video.");
      setVideo(null);
    }
  }, []);

  useEffect(() => {
    async function initialize() {
      await refresh();
      setLoading(false);
    }

    initialize();

    const interval = setInterval(refresh, 3000);

    return () => clearInterval(interval);
  }, [refresh]);

  return {
    video,
    loading,
    error,
    refresh,
  };
}
