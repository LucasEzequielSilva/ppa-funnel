# Design Guidelines: VSL Landing Page - "De Invisible a Referente Legal en 30 Días con IA"

## Design Approach
**Reference-Based**: Drawing from high-converting VSL landing pages (ClickFunnels, Russell Brunson style) combined with professional legal service aesthetics. The design balances conversion optimization with professional credibility.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Background Light: #fef2f2 (warm off-white, rose tint)
- Primary Dark: #450a0a (deep maroon/burgundy for authority)
- Pure White: #ffffff (content cards, CTAs)
- Neutral Gray: #f2f2f2 (subtle sections)

**Accent & Supporting:**
- Success Green: 142 70% 45% (for guarantees, testimonials)
- Warm gradient overlays using primary colors for hero depth

### Typography
**Font Stack:**
- Headlines: 'Playfair Display' or 'Crimson Pro' (serif, professional legal feel)
- Body: 'Inter' or 'Open Sans' (clean, readable)
- CTAs: Bold 'Inter' or 'Montserrat'

**Hierarchy:**
- H1 Hero: 3xl to 6xl, bold, line-height tight
- H2 Sections: 2xl to 4xl, semibold
- Body: base to lg, regular weight, generous line-height (1.7)
- CTA Text: lg to xl, bold

### Layout System
**Spacing Primitives:** Use Tailwind units 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
**Container:** max-w-6xl for content, max-w-prose for text blocks
**Section Padding:** py-16 to py-24 (desktop), py-12 (mobile)

### Component Library

**Sections Structure (10+ sections for comprehensive VSL):**
1. **Hero**: Full-width with background gradient (#fef2f2 to white), headline, subheadline, primary CTA button, trust indicators
2. **Pain/Story Section**: Two-column layout, storytelling text + supporting image placeholder
3. **Transformation Promise**: Visual timeline or before/after cards showing 30-day journey
4. **Course Stack**: Grid layout (2-3 columns) with value stacks, icons for each component
5. **6 Module Breakdown**: Accordion or card grid, each module with icon, title, bullets
6. **Benefits + Social Proof**: Testimonial cards with student results, quota highlights
7. **Guarantee Section**: Shield icon, bold promise text, risk-free messaging
8. **Pricing/CTA**: Centered card with price, bonuses list, urgency timer, large CTA
9. **FAQ Accordion**: Clean expandable items addressing objections
10. **Final CTA**: Sticky or prominent bottom section with last-chance messaging

**Buttons:**
- Primary CTA: #450a0a background, white text, rounded-lg, px-8 py-4, shadow-lg
- Secondary: outline variant with #450a0a border
- Hover: Subtle scale and shadow increase

**Cards:**
- White background on #fef2f2 sections
- Subtle shadow (shadow-md)
- Rounded corners (rounded-xl)
- Padding: p-6 to p-8

**Icons:**
- Use Heroicons throughout
- Color: #450a0a for primary icons
- Size: w-8 h-8 for feature icons, w-12 h-12 for section headers

### Images
**Hero Section:** Large hero image or video thumbnail placeholder showing a professional lawyer (female, matching "Majo" persona) in modern office setting, overlay with warm gradient for text readability

**Supporting Images:**
- Pain section: Stressed lawyer at desk or empty office
- Transformation: Professional headshot, confident lawyer on camera
- Benefits: Screenshots of social media posts, consultation bookings
- Testimonials: Student headshot placeholders
- Module graphics: Icons or abstract illustrations for each module theme

All images should have warm filters matching the #fef2f2 palette

### Animation & Interactions
**Minimal, Strategic Use:**
- Scroll-triggered fade-ins for sections (subtle, fast)
- CTA pulse animation (gentle, 2s interval)
- Smooth accordion expand/collapse
- NO distracting hero animations or parallax

### Accessibility & Dark Mode
**Light Mode Only**: The warm color scheme (#fef2f2, #450a0a) is specifically designed for light mode professional aesthetic. Maintain high contrast ratios (WCAG AA minimum) between #450a0a text and light backgrounds.

## Layout Specifics

**Viewport Strategy:**
- Hero: 85vh maximum (not forced 100vh)
- Content sections: Natural height based on content
- Avoid floating elements in empty space

**Multi-Column Usage:**
- Course stack: 3 columns desktop, 1 mobile
- Module breakdown: 2 columns desktop, 1 mobile  
- Benefits/testimonials: 2-3 columns desktop, stacked mobile
- Pain/story: 2 columns (text + image)

**Vertical Rhythm:**
- Consistent py-20 between major sections
- py-12 for subsections
- Generous spacing around CTAs (mt-12, mb-16)

## VSL-Specific Elements
- Video player section (16:9 ratio, centered, max-w-4xl)
- Progress indicators showing page scroll
- Multiple CTA repetition (every 2-3 sections)
- Urgency elements: countdown timer, limited spots badges
- Trust signals: payment icons, guarantee badges, student count

**Critical Success Factors:**
- Professional credibility (legal industry appropriate)
- Warm, approachable tone (via colors and typography)
- Clear conversion path with strategic CTAs
- Comprehensive content without overwhelming design
- Mobile-responsive with same impact as desktop