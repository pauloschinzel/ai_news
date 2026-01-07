import { Zap, Video, Box, Layers, Globe, Mic, Film, Clapperboard } from 'lucide-react';

export const models = [
  {
    id: 'higgsfield',
    title: 'Higgsfield Cinema Studio',
    icon: Clapperboard,
    updated: '2026-01-07',
    images: ['/higgsfield_01.png', '/higgsfield_02.png'],
    summary: 'Higgsfield’s new Cinema Studio shifts the AI video landscape from random generation to controlled cinematography. Designed for filmmakers and agencies, it offers a digital "gear locker" with specific camera and lens simulations (ARRI, Sony, Panavision) and precise focal length controls.',
    keyPoints: [
      'Digital "Gear Locker": Select specific hardware simulations (ARRI Alexa, Sony Venice, Anamorphic lenses) to define image texture and depth of field.',
      'Advanced Motion Control: Execute professional camera moves (Dolly, Orbit) with action logic that adjusts lighting and focus based on the scene\'s narrative.',
      'Integrated VFX & Lighting: Automates complex light physics (flares, reflections) and VFX layering (fire, smoke) with high-quality sound effects.'
    ],
    sources: [
      'https://higgsfield.ai'
    ],
    applications: [
      { title: 'Rapid Prototyping', desc: 'Generate "Director’s Cut" level storyboards and mood reels in minutes to accelerate the pitch process.' },
      { title: 'Commercial Pre-viz', desc: 'Test specific shots (macro food/bev, high-speed automotive) with precise camera specs before renting physical gear.' },
      { title: 'Creative Autonomy', desc: 'Empower creative staff to act as "Digital Directors," controlling camera and lens choices directly rather than relying on generic prompts.' }
    ]
  },
  {
    id: 'kling',
    title: 'Kling 2.6 Pro',
    icon: Zap,
    updated: '2026-01-06',
    video: '/Kling_26_Motion_Control_Example_01.mp4',
    summary: 'Kling AI 2.6 (released Dec 3, 2025) fundamentally transforms video generation with "simultaneous audio-visual generation," creating visuals, voiceovers, and sound effects in one pass. The new Pro Motion Control transfers complex movements (full-body, hands) from 3-30s reference videos to static images with high precision.',
    keyPoints: [
      'Simultaneous Generation: Synchronized audio (voice/SFX) and video in a single workflow.',
      'Pro Motion Control: Exact framing or dynamic camera options; high-fidelity motion transfer (dance, martial arts).',
      'Market Position: Competitive pricing ($6.99/mo) vs Runway ($95/mo), though customer support lags.'
    ],
    sources: [
      'https://app.klingai.com/global/quickstart/motion-control-user-guide',
      'https://app.klingai.com/global/release-notes/rybo04kstj?type=dialog'
    ],
    applications: [
      { title: 'Rapid Pitch Animatics', desc: 'Generate full audiovisual mood boards in one pass, reducing pre-viz time.' },
      { title: 'Localized Social Content', desc: 'Use "Pro Motion Control" to apply a single viral dance trend across multiple brand mascots or regional avatars instantly.' },
      { title: 'Cost-Effective Iteration', desc: 'Low price point allows for high-volume generation of social media variants to test engagement before finalizing high-budget assets.' }
    ]
  },
  {
    id: 'ltx2',
    title: 'LTX-2 Trainer',
    icon: Video,
    updated: '2026-01-06',
    summary: 'LTX-2 was fully open-sourced by Lightricks on January 6, 2026, delivering a comprehensive suite of weights, code, and a modular trainer. The model supports 4K resolution at 50fps with integrated audio-video generation. It follows the LTX-Video v0.9.8 updates (July 2025) which introduced distilled models and IC-LoRAs for depth and pose control.',
    keyPoints: [
      'Open Source Release: Full weights, distilled versions, and trainer released Jan 6, 2026.',
      'Capabilities: 4K/50fps video with synchronized audio; "Retake" video-to-video editing.',
      'Efficiency: optimized for consumer hardware with distilled models and efficient LoRA training.'
    ],
    sources: [
      'https://github.com/Lightricks/LTX-Video',
      'https://huggingface.co/Lightricks/LTX-Video',
      'https://fal.ai/models/fal-ai/ltx2-video-trainer'
    ],
    applications: [
      { title: 'Brand-Specific Models', desc: 'Train custom LoRAs on client assets (colors, logos, mascots) to ensure strict brand guideline adherence in all generated content.' },
      { title: 'Secure Production', desc: 'Run offline instances for clients with high-security IP requirements, avoiding cloud data leaks.' },
      { title: '"Retake" Editing', desc: 'Fix minor glitches in generated footage (e.g., hand artifacts) without expensive reshoots or total regeneration.' }
    ]
  },
  {
    id: 'luma',
    title: 'Luma Ray 3',
    icon: Film,
    updated: '2026-01-06',
    summary: 'Luma AI\'s Ray3 Modify (released Dec 2025) introduces "hybrid-AI workflows," allowing professional video-to-video transformations that preserve actor performance (motion, timing, emotion) while changing appearance. Ray3 is touted as the "first reasoning video model," understanding physical dynamics for HDR-quality output.',
    keyPoints: [
      'Ray3 Modify: Video-to-video with Character Reference and Start/End Frame control for continuity.',
      'Adoption: 30M+ users; integrated into Adobe Firefly; $900M funding round (Nov 2025).',
      'Performance: Competes with Google Veo3; outperforms Runway Gen-4 in reference adherence.'
    ],
    sources: [
      'https://lumalabs.ai/blog/news/ray3-modify',
      'https://www.youtube.com/watch?v=DuI1Nx98Stk'
    ],
    applications: [
      { title: 'Advanced Post-Production', desc: 'Seamlessly swap actor wardrobe or environments while preserving original performance/emotion, reducing on-set costs.' },
      { title: 'HDR Workflow', desc: 'Integrate high-dynamic-range outputs directly into professional color-grading pipelines for TV/Film spots.' },
      { title: 'Adobe Integration', desc: 'Streamline workflows by accessing Ray3 features directly within existing Adobe creative suite tools used by design teams.' }
    ]
  },
  {
    id: 'sam',
    title: 'Meta SAM 2',
    icon: Layers,
    updated: '2026-01-06',
    summary: 'Meta\'s "Segment Anything" ecosystem expanded significantly. SAM 2 (July 2024) and SAM 2.1 (Oct 2024) unified image and video segmentation. The newest addition, SAM Audio (Dec 2025), extends this to sound, isolating specific audio elements via text or visual prompts.',
    keyPoints: [
      'SAM 2.1: Improved segmentation for small objects and complex visual similarity.',
      'SAM Audio: New modality allowing precise audio segmentation from noisy environments.',
      'Open Source: SAM 2 released under Apache 2.0; continues Meta\'s open research strategy.'
    ],
    sources: [
      'https://ai.meta.com/sam2/',
      'https://github.com/facebookresearch/segment-anything-2',
      'https://ai.meta.com/blog/'
    ],
    applications: [
      { title: 'Automated Rotoscoping', desc: 'Drastically reduce VFX labor costs by automating object isolation in video for compositing.' },
      { title: 'Audio Remixing', desc: 'Use SAM Audio to cleanly extract voiceovers or SFX from existing stock footage for repurposing in new edits.' },
      { title: 'Interactive Ads', desc: 'Create clickable video overlays where users can select individual items (shoes, cars) to "shop the look" in real-time.' }
    ]
  },
  {
    id: 'kandinsky',
    title: 'Kandinsky 5.0',
    icon: Box,
    updated: '2026-01-06',
    summary: 'Kandinsky 5.0 Video Pro (19B parameters) was open-sourced on November 20, 2025, offering state-of-the-art high-resolution video synthesis (up to 10s). The model uses a Cross-Attention Diffusion Transformer (CrossDiT) with NABLA attention for efficiency.',
    keyPoints: [
      'Kandinsky 5.0 Pro: 19B parameter open-weight model for HD video generation.',
      'Architecture: CrossDiT with NABLA attention optimizes training and inference efficiency.',
      'Ecosystem: Includes Video Lite (2B) and Image Lite (6B) for diverse use cases.'
    ],
    sources: [
      'https://github.com/ai-forever/Kandinsky-5.0',
      'https://huggingface.co/kandinsky-community',
      'https://fal.ai/models/fal-ai/kandinsky5-pro/image-to-video'
    ],
    applications: [
      { title: 'B-Roll Generation', desc: 'Mass-produce high-quality background assets (nature, textures) for video edits without licensing stock footage.' },
      { title: 'Local Prototyping', desc: 'Use "Lite" models on creative team laptops for rapid, offline concept iteration during brainstorming sessions.' },
      { title: 'Custom Tooling', desc: 'Build proprietary, internal video generation tools tailored to specific campaign needs without recurring API fees.' }
    ]
  },
  {
    id: 'veo',
    title: 'Veo 3 & Seedance',
    icon: Mic,
    updated: '2026-01-06',
    summary: 'Google Veo 3 (May 2025) dominates with native audio and visual realism, while Seedance 1.5 Pro (Dec 2025) offers competitive millisecond lip-sync accuracy and multi-language support at a fraction of the cost.',
    keyPoints: [
      'Veo 3: Top-ranked visual realism and native audio; high enterprise pricing.',
      'Seedance 1.5 Pro: Best-in-class lip-sync and multilingual dialogue support.',
      'Trend: Move toward unified audio-video generation models over silent video.'
    ],
    sources: [
      'https://deepmind.google/technologies/veo/',
      'https://seedance.bytedance.com/',
      'https://lmarena.ai/'
    ],
    applications: [
      { title: 'High-End Storyboarding', desc: 'Use Veo 3 to create photorealistic, audio-synced animatics for premium TVC pitches to help clients visualize the final product.' },
      { title: 'Global Campaign Adaptation', desc: 'Leverage Seedance 1.5 Pro to automatically lip-sync a single spokesperson\'s video into multiple languages for regional ad variants.' },
      { title: 'Influencer Marketing', desc: 'Scale "UGC-style" content creation using AI avatars that speak naturally in diverse languages.' }
    ]
  },
  {
    id: 'world',
    title: 'World Models',
    icon: Globe,
    updated: '2026-01-06',
    summary: 'Google DeepMind’s Genie 3 (Aug 2025) achieves 24fps interactive world generation. WorldLabs Marble (Nov 2025) generates persistent, editable 3D worlds from multimodal inputs. Both target gaming and VFX, shifting from research to industry use.',
    keyPoints: [
      'Genie 3: Real-time 720p interactive environments with dynamic event prompting.',
      'WorldLabs Marble: Persistent 3D world creation and editing with high spatial layout control.',
      'Commercialization: Shift from research to industry use in virtual production and robotics.'
    ],
    sources: [
      'https://marble.worldlabs.ai/',
      'https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/',
      'https://www.youtube.com/watch?v=YYB2SqkyE7c&t=121s'
    ],
    applications: [
      { title: 'Immersive Brand Experiences', desc: 'Create gamified, explorable 3D worlds for campaign microsites where users interact with products in real-time.' },
      { title: 'Virtual Location Scouting', desc: 'Visualize and "walk through" potential set designs or event spaces before physical construction begins.' },
      { title: 'Interactive Banners', desc: 'Deploy rich media ads allowing users to navigate a 3D environment directly within the ad unit.' }
    ]
  }
];
