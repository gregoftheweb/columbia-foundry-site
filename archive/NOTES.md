# app-ads.txt

`app-ads.txt` (root of this site) declares Columbia Foundry's authorized ad
sellers per the IAB Tech Lab spec. AdMob won't fully serve ads to an app
until it can crawl and verify this file at the domain listed as that app's
developer website.

```
google.com, pub-6531703213094507, DIRECT, f08c47fec0942fa0
```

`pub-6531703213094507` is the shared AdMob publisher ID for every Columbia
Foundry app (Dogs I've Met, Smuggler of Sol, Speed Gonzo, etc.) — this one
file covers all of them since they all list `columbiafoundry.com` as their
developer website.

**When adding a new app to AdMob:** it needs both (1) its store listing
linked in AdMob's "App store details" and (2) this file already live here.
With both in place, AdMob's "Verify app" / "Check for updates" action should
pass immediately — no changes needed to this file unless the publisher ID
changes or a new ad network needs its own authorized-sellers line added.

Fixed 2026-09-28: all apps were stuck on "Limited ad serving" because this
file didn't exist yet (`app-ads.txt` commit).
