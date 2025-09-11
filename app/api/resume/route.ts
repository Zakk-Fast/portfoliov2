import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const contentfulUrl = "https://assets.ctfassets.net/0b0og15jgw1m/42v3ffUForyRRcNlMuwXOK/b76e89fc96abfbabcfb6b908cd03638f/Zachary_Fast_Resume.pdf";
    
    console.log('Fetching from:', contentfulUrl);
    
    const response = await fetch(contentfulUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Resume-Downloader/1.0)',
      },
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      console.error('Fetch failed with status:', response.status);
      return NextResponse.json({ error: `Failed to fetch resume: ${response.status}` }, { status: 500 });
    }
    
    const buffer = await response.arrayBuffer();
    console.log('Buffer length:', buffer.byteLength);
    
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Zachary-Fast-Resume.pdf"',
        'Content-Length': buffer.byteLength.toString(),
      },
    });
  } catch (err) {
    console.error('Error in resume API:', err);
    return NextResponse.json({ error: 'Failed to download resume' }, { status: 500 });
  }
}