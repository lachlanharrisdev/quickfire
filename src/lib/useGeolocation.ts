import * as React from "react";

interface GeolocationState {
  lat: number | null;
  lon: number | null;
  accuracy: number | null;
  loading: boolean;
  error: string | null;
}

/**
 * get user's geolocation through the browser
 */
export function useGeolocation(): GeolocationState {
  const [state, setState] = React.useState<GeolocationState>({
    lat: null,
    lon: null,
    accuracy: null,
    loading: true,
    error: null,
  });

  React.useEffect(() => {
    if (!navigator.geolocation) {
      setState((s) => ({
        ...s,
        loading: false,
        error: "Geolocation not supported",
      }));
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        accuracy: Math.round(position.coords.accuracy),
        loading: false,
        error: null,
      });
    };

    const onError = (err: GeolocationPositionError) => {
      setState((s) => ({
        ...s,
        loading: false,
        error: err.message,
      }));
    };

    // initial position...
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 10000,
    });

    // ...versus position updates
    const watchId = navigator.geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true,
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return state;
}
