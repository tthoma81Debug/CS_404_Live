# Build Notes

## Browser Build Target Warning

The `build:browser` script uses esbuild with the following target:
```
--target=es2017,chrome58,edge18,firefox57,safari11,ios11
```

⚠️ **Known Issue**: Modern esbuild versions have issues with date-fns when targeting old Safari/iOS versions (safari11/ios11) because they don't support destructuring. The date-fns package has to down-compile, which can cause build errors.

**Recommendation**: Check the targets carefully if you encounter this error. This is the "more problems at compile, less at runtime" tradeoff with build tools and bundling of interpreted languages.

### Alternative Build Command (if needed)
If you need to support modern browsers only, you can use:
```bash
esbuild js=public/exampleJavascript.js ts=public/exampleJavascript.ts --bundle --platform=browser --target=es2020 --outdir=public/dist --out-extension:.js=.min.js
```
