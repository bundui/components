import umami from "@umami/node";

type UmamiTrackType = {
  name: string;
  url?: string;
};

umami.init({
  websiteId: "04c3c0e0-946d-4cb4-8c02-2f40a7558ec1",
  hostUrl: "https://cloud.umami.is",
});

export const umamiTrack = (data: UmamiTrackType) => {
  return umami.track({
    ...data,
    hostname: window.location.hostname,
    screen: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language,
    title: document.title,
    url: window.location.pathname,
  });
};
