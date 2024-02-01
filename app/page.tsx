import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['Next image', "More image"],
  image: 'https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0ZXJ8ZW58MHx8MHx8fDA%3D',
  post_url: 'https://first-frame.onrender.com/api/frame',
});

export const metadata: Metadata = {
  title: 'First Frame',
  description: 'My First Frame',
  openGraph: {
    title: 'First Frame',
    description: 'My First Frame',
    images: ['https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0ZXJ8ZW58MHx8MHx8fDA%3D'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>First Frame</h1>
    </>
  );
}