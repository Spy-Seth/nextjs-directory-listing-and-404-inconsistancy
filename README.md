# Next.js reproduction issue directory listing instead of 404 error

This directory demonstrate an inconsistency between Next.js dev mode (`next dev`) and the deployed version on versel.

This application have a dynamic route `/[locale]/foo`. And staticly generate two routes: `/fr/foo` & `/en/foo`.

As expected, all the following urls are returning a 404 pages in development:

- ✔ `/it/foo`
- ✔ `/fr/bar`
- ✔ `/fr`
- ✔ `/baz`

On vercel environment the path `/fr` does not show a 404 pages but list the directory content.

- ✔ https://csb-gg6n3-4laukaxm8.vercel.app/it/foo
- ✔ https://csb-gg6n3-4laukaxm8.vercel.app/fr/bar
- ❌ https://csb-gg6n3-4laukaxm8.vercel.app/fr
- ✔ https://csb-gg6n3-4laukaxm8.vercel.app/baz

## How to reproduce the issue yourself?

This codesource is available to quick edit in CodeSandbox: https://codesandbox.io/s/focused-snyder-gg6n3

And deployed on Vercel: https://csb-gg6n3-4laukaxm8.vercel.app/
