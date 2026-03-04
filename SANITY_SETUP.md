# Sanity Studio setup

## Project

- **Project ID:** `1uk9rgzk`
- **Dataset:** `production`
- **Account:** webflow@rockagency.com.au (Rock Agency)

All configs (root and `studio-test/`) point to this project.

---

## 1. Remove an old deployment

If you had a Studio deployed for a different project (e.g. mty9ps0j or nllxwfbs):

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and log in.
2. Open the **project** that had the old Studio (or the org that owns it).
3. Go to **Studios** / **Deployments** (or **Settings** → **Studios**).
4. Find the old deployment and **Delete** or **Remove** it.

You only need to do this if you want to stop an old hosted Studio URL.

---

## 2. Run Studio locally (localhost)

**Always run from the repo root** (where `sanity.config.ts` and `package.json` are):

```bash
cd /Users/RockAgency/studio-test
npm run dev
```

Then open **http://localhost:3333**.

If you see **"Not authorized"**:

- Clear site data for `http://localhost:3333`: DevTools → Application → Storage → clear Local storage, Session storage, Cookies.
- Close the tab and open http://localhost:3333 again. Log in with **webflow@rockagency.com.au** when prompted.

---

## 3. Deploy Studio and use the hosted URL

From the repo root:

```bash
cd /Users/RockAgency/studio-test
npm run build
npx sanity deploy
```

When asked for a **hostname**, choose one (e.g. `rock-studio-test`). Your Studio will be at:

**https://&lt;hostname&gt;.sanity.studio**

Log in there with **webflow@rockagency.com.au** to access the project.
