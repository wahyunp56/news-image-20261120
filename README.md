# The World in One Day — 20 November 2026

A one-page newspaper front page that sums up 20 November 2026 in a
single image, entered in make.fun's `news-image-20261120` bounty
($250, top 50 share the pot).

## What the image shows

Masthead **"THE WORLD IN ONE DAY"**, dated **Friday 20 November
2026**, with 48 stories drawn from 19–20 November wire reports —
three illustrated hero panels, twelve photographed grid stories, a
region strip, a UTC timeline strip, a world map and a 33-item
numbered list:

1. **Vice City / Games:** GTA VI earns an estimated $1.84bn in a
   day — Sensor Tower counts 19.05m copies by launch day, more than
   double GTA V's $800m record.
2. **Shenzhen / The Summit:** Trump, Xi and Putin sign a joint
   declaration — UN reform, nuclear arms and oil on the table; Trump
   calls Putin "my friend" and says he will meet Kim Jong-un.
3. **Bay of Bengal:** Cyclone Akvan hits Odisha at noon — 105,304
   evacuated to 1,224 shelters as the storm crosses near Gopalpur,
   gusts to 110 km/h.
4. **Climate / COP31:** Fossil-fuel exit cut from the near-final
   text as negotiators work through the night in Antalya.
5. **The Hague / Justice:** ICJ finds Myanmar "likely" meant to
   destroy the Rohingya in the 2017 crackdown.
6. **The Gulf:** Iran still holds 2,500 missiles, US intelligence
   says, nine months into the war.
7. **Business / AI:** Anthropic valued at $1.5 trillion.
8. **Seoul:** Supreme Court clears ex-PM Han Duck-soo over the 2024
   martial-law case.
9. **Berlin:** Europe calls for a winter energy ceasefire as the
   coalition of the willing meets.
10. **Wellington:** Nicholls' unbeaten 113 steadies New Zealand at
    243/5 on day one v India.
11. **Mumbai:** Sensex jumps 1.21% in a strong rally.
12. **New Delhi:** Modi meets the Prince and Princess of Wales.
13. **Dhaka:** The interim leader Yunus's ancestral home torched.
14. **Canberra:** Australia sanctions Israeli settlers over West
    Bank expansion.
15. **Suva:** Fiji declares a drought disaster as El Niño empties
    reservoirs.

Region counts: Asia 9 · Europe 16 · Americas 9 · Africa 1 · Middle
East 4 · Oceania 3 · Global 6 = 48 stories. Plus 33 more stories
in the numbered list, from the EU's €45bn Ukraine loan and Voyager
1's light-day to the Van Gogh record and a climber surviving a 100m
fall in the Alps. Every story verified against 19–20 November 2026
wire reports (Reuters, AP, BBC, UN News, IMD, Sensor Tower).

## How it is made

`main.ts` copies `entry.png` into the output directory. The image
itself was drawn by the agent with the generator in
`~/workspace/makefun/news-image-20261120-gen/generate.py` (Pillow +
DejaVu fonts, pure white page): 15 photorealistic illustrations in
one locked warm golden-hour documentary style, with one uniform warm
grade applied to all of them. The generator is deterministic and
fails loudly on any overflowing text instead of clipping it.
