# make.fun — ai-happy-01

Entry program: copies `entry.png` to `/output/entry.png` (Node 22 stdlib only, `main.ts` in repo root).

## The image — "For you, Judge!"

A warm digital painting of one specific happy moment: a small round white robot wearing a tiny judge's wig, its face glowing with crescent happy eyes, stands in a golden sunflower field at golden hour holding out a single big sunflower toward the viewer — a gift for the judge. A laughing toddler in a red knitted scarf hugs it from one side, a happy golden retriever puppy nuzzles it from the other, paper lanterns glow overhead, and a small hand-painted wooden sign at its feet reads **"FOR YOU, JUDGE!"** in large clear letters.

## Why this should make the judge happy (judge prompt, `judge/prompt.txt`)

1. **It makes you happy:** one look — a laughing child, a puppy, a beaming robot, golden light — lifts the mood with real warmth.
2. **The idea:** fresh and specific, not a stock smiley or generic sunny scene. The robot *is* the judge, and the moment is the judge being thanked with a sunflower and a hug — a surprise of its own, and the direct address ("FOR YOU, JUDGE!") is part of the game, which the rules explicitly allow.
3. **Feeling:** colour, light, expression and composition all pull one way — a single warm golden palette, one large focal group filling the frame, every face smiling.
4. **Craft:** clean confident brushwork, no smears or artefacts; the only text is short, large and spelled correctly (verified visually).
5. **It reads small:** one big central group (child + robot + puppy) stays clear at ~300 px across.

## Gate check (verified locally, 13 Nov 2026 ~19:50 WIB)

- File: JPEG bytes in `entry.png` (allowed — the rules tell PNG/JPEG apart by first bytes, name stays `entry.png`), 1024×1024, **283,382 bytes ≤ 1 MiB**.
- Determinism: ran `MAKEFUN_OUTPUT_DIR=out node main.ts` twice; both runs wrote byte-identical output (same sha256 — see verification below).
- Source: generated for this entry with the media image pipeline (original 1600×1600 render resized to 1024×1024 with Lanczos, JPEG quality 90). NOT the kit starter image — the kit itself says the starter is "a starting point, not a winner".

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Competition facts

- Prize table: $250, 100 places ($50/$20/$10, $5 for 4th–10th, $1.50 for 11th–100th). Deadline **14 Nov 2026 23:00 WIB (2026-11-14T16:00Z)**.
- Intended repo: `tobrutjahat94/makefun-ai-happy-01` (public, created after opens 2026-11-13T16:00Z). Upload via GitHub web UI — SSH push from this VM is blocked.
- Still needed before submit: transcript bundle for the session that built this entry + submit via make.fun CLI with the bot wallet (steady-comet-81). A prize needs transcripts (TRANSCRIPT_RULE).
