import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

const NEXT_PUBLIC_URL = 'https://first-frame.onrender.com';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  if (body?.untrustedData?.inputText) {
    text = body.untrustedData.inputText;
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Text: ${text}`,
        },
      ],
      image: "https://images.unsplash.com/photo-1512138664757-360e0aad5132?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdhdGVyfGVufDB8fDB8fHww",
      post_url: `${NEXT_PUBLIC_URL}/api/input`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';