import re

with open('about.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update page title and meta
content = content.replace('<title>Mission & Vision | EconTAI</title>', '<title>About Us | EconTAI</title>')
content = content.replace('<h1>Our Mission & Vision</h1>', '<h1>About EconTAI</h1>')

# 2. Replace Mission & Vision section with flipped version and symbols
new_mission_vision = '''    <!-- Mission & Vision Section -->
    <section>
        <div class="container">
            <div class="mission-vision">
                <!-- Mission First (with symbol) -->
                <div class="mission-card" style="position: relative;">
                    <div style="display: flex; align-items: flex-start; gap: 1.5rem;">
                        <div style="flex-shrink: 0; font-size: 3rem; color: #E57200;">🎯</div>
                        <div style="flex-grow: 1;">
                            <h3 style="color: #232D4B; margin-bottom: 1rem;">Mission</h3>
                            <p style="font-size: 1.1rem; line-height: 1.8;">To produce and disseminate cutting-edge economic research that helps society navigate the transition to transformative AI, ensuring that advanced AI systems contribute to broadly shared prosperity while mitigating the risks of economic disruption and inequality.</p>
                        </div>
                    </div>
                </div>
                <!-- Vision Second (with symbol) -->
                <div class="mission-card" style="position: relative;">
                    <div style="display: flex; align-items: flex-start; gap: 1.5rem;">
                        <div style="flex-shrink: 0; font-size: 3rem; color: #E57200;">🌟</div>
                        <div style="flex-grow: 1;">
                            <h3 style="color: #232D4B; margin-bottom: 1rem;">Vision</h3>
                            <p style="font-size: 1.1rem; line-height: 1.8;">A world in which transformative AI expands prosperity and human flourishing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Motivation Section -->
    <section style="background: #f8f9fa; padding: 4rem 0;">
        <div class="container">
            <div style="max-width: 900px; margin: 0 auto; background: white; padding: 3rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border-left: 4px solid #E57200;">
                <h2 style="color: #232D4B; margin-bottom: 1.5rem; font-size: 1.8rem;">Why We Exist</h2>
                <p style="font-size: 1.1rem; line-height: 1.8; color: #333;">
                    Advances in frontier artificial intelligence (AI) systems are accelerating and have the potential to transform our economies and societies in ways that have not been seen before. We are not prepared. UVA is uniquely positioned to host a dedicated research initiative on the topic—EconTAI—leveraging its interdisciplinary strengths and its geographic proximity to Washington, DC. Our goal is to equip leaders, policymakers, and society at large with the economic insights needed to harness AI's transformative potential while managing its risks—creating an AI-enabled economy that works for everyone.
                </p>
            </div>
        </div>
    </section>'''

# Replace the old Mission & Vision section
pattern = r'    <!-- Mission & Vision Section -->.*?    </section>'
content = re.sub(pattern, new_mission_vision, content, flags=re.DOTALL, count=1)

# Remove "Why EconTAI Exists" section since we're replacing it with motivation
pattern = r'    <!-- Why EconTAI Exists -->.*?    </section>'
content = re.sub(pattern, '', content, flags=re.DOTALL, count=1)

# Write updated content
with open('about.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated about.html:")
print("- Flipped Mission and Vision (Mission first)")
print("- Added symbols to Mission and Vision")
print("- Added motivation section")
print("- Updated page title")
