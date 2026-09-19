import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Arham Topiwala — Full Stack Web Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '80px',
                    background: '#0a0a0f',
                    color: '#ffffff',
                    fontFamily: 'Arial',
                }}
            >
                <div style={{ display: 'flex', fontSize: 28, color: '#a1a1aa', marginBottom: 24 }}>
                    FULL STACK WEB DEVELOPER
                </div>
                <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, letterSpacing: -3 }}>
                    Arham Topiwala
                </div>
                <div style={{ display: 'flex', fontSize: 30, color: '#a1a1aa', marginTop: 28, maxWidth: 900 }}>
                    Scalable applications · RESTful APIs · Performance · AI integrations
                </div>
                <div style={{ display: 'flex', marginTop: 70, fontSize: 22, color: '#71717a' }}>
                    Ahmedabad, Gujarat · India
                </div>
            </div>
        ),
        { ...size }
    );
}
