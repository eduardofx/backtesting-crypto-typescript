export default function calculateVPVR(data: any[], binSize: number) {
  const vpvr: { [key: string]: number } = {};

  data.forEach((entry) => {
    const price = entry.close;
    const volume = entry.volume;

    const bin = Math.floor(price / binSize) * binSize;

    if (!vpvr[bin]) {
      vpvr[bin] = 0;
    }
    vpvr[bin] += volume;
  });

  const sortedVPVR = Object.entries(vpvr).sort((a, b) => b[1] - a[1]);

  return sortedVPVR;
}