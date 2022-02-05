export default function getImageUrl(image: string): string {
  if (image.startsWith('http') || image.startsWith('/img')) {
    return image
  }

  return `${process.env.NEXT_PUBLIC_API_URL}/uploads/${image}`
}
