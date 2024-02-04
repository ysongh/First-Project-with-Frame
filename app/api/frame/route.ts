// import { FrameRequest, getFrameAccountAddress } from '@coinbase/onchainkit';
// import { NextRequest, NextResponse } from 'next/server';

// async function getResponse(req: NextRequest): Promise<NextResponse> {
//   let accountAddress: string | undefined = '';
//   try {
//     const body: FrameRequest = await req.json();
//     accountAddress = await getFrameAccountAddress(body, { NEYNAR_API_KEY: 'NEYNAR_API_DOCS' });
//   } catch (err) {
//     console.error(err);
//   }

//   return new NextResponse(`<!DOCTYPE html><html><head>
//     <meta property="fc:frame" content="vNext" />
//     <meta property="fc:frame:image" content="https://images.unsplash.com/photo-1457195740896-7f345efef228?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGVyfGVufDB8fDB8fHww" />
//     <meta property="fc:frame:button:1" content="${accountAddress}" />
//     <meta property="fc:frame:post_url" content="https://first-frame.onrender.com/api/frame" />
//   </head></html>`);
// }

// export async function POST(req: NextRequest): Promise<Response> {
//   return getResponse(req);
// }

// export const dynamic = 'force-dynamic';