export function isVideoFile(path) {
  if (!path) return false;
  return /\.(mp4|webm|mov|ogg)$/i.test(path);
}
