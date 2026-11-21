# The World in One Day — 20 November 2026 (v3)

A one-page newspaper front page that sums up Friday 20 November 2026
in a single image, entered in make.fun's `news-image-20261120`
bounty ($250, top 50 share the pot).

## What the image shows

Masthead **"FRIDAY 20 NOVEMBER 2026"**, with the top four stories as
the subhead, 36 stories drawn from Friday 20 November reports only —
three illustrated hero panels, ten illustrated features, and 23
one-line briefs, every one numbered straight through and every one
carrying a named source. A 6-number stat strip ("the day in
numbers"), a region-count strip whose seven counts sum to 36, a light
world map with 13 numbered pins, and a DATE CHECK box that names the
Thursday stories deliberately left out:

1. **Kyiv / War:** Russian missiles hit three Kyiv bridges — about
   110 missiles and 400 drones overnight, at least nine killed,
   power and water cut in the capital. (Kyiv Independent, BBC)
2. **Odisha / Cyclone:** Cyclone Akvan comes ashore near Gopalpur
   after 300,000+ people were moved to safety; 105,304 sheltered in
   1,224 centres. (IMD, Deccan Herald)
3. **Markets:** AI sell-off sinks Asia's stock markets — Taiwan's
   index fell 6.2% to end its worst week since 1991; Seoul −5.2%,
   Tokyo −5.1%. (Al Jazeera, Anadolu)
4. **Brussels:** UK and EU seal a "reset" deal — food trade, youth
   visas, carbon link.
5. **Antalya / Climate:** COP31 reaches its last day with no deal —
   draft leaves out fossil fuels; $120bn gap open.
6. **Eastern Poland:** Russian cruise missile lands in Poland — it
   fell in a field; two airports paused.
7. **Central Iraq:** Iraqi army enters a militia stronghold — troops
   deploy to Jurf al-Sakhar.
8. **Italy:** General strike over the budget — workers and students
   march.
9. **Tokyo:** Japan's inflation picks up to 2.3% — a December rate
   rise stays in view.
10. **Mercury / Space:** BepiColombo reaches Mercury after 8 years —
    6bn-mile trip ends; orbit insertion Saturday.
11. **Barcelona / Health:** Cancer pill shrinks tumours 60.7% — pill
    + chemo beats chemo alone in trial.
12. **Turkana, Kenya:** Kenya starts drilling its first oil well —
    first crude due 1 December.
13. **San Salvador:** Bukele files to run for a third term — vote on
    28 February 2027.

Region counts: Europe 10 · Asia 7 · Middle East 3 · Africa 6 ·
Americas 4 · Oceania 2 · Global 4 = 36 stories. Plus 23 briefs, from
the Lviv railway strike and the Berlin pupil strike to the Senegal
migrant boat and Nicholls' 175* in Wellington. Every story happened,
or was first reported, on Friday 20 November 2026.

## How it is made

`main.ts` copies `entry.png` into the output directory. The image
itself was drawn by the agent with the generator in
`~/workspace/makefun/news-image-20261120-gen/generate_v3.py` (Pillow +
Noto fonts, cream newsprint page): 13 flat vector illustrations in
one locked style — simple shapes, two or three flat colours per
panel, a red label bar and a source chip — after studying the live
top 1–3 entries (samatch-we 992,057 · 888dao-sats 991,652 · kiencx
991,429) and rebuilding to beat them: Friday-only date discipline,
fewer and bigger stories, a stat strip, and a light map. The
generator is deterministic and fails loudly on any overflowing text
instead of clipping it.
