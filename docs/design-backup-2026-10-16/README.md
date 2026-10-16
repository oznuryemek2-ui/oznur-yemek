# Pre-redesign restore point

- Repository: oznuryemek2-ui/oznur-yemek
- Persistent branch: backup/before-redesign-2026-10-16
- Commit: f1e4a0e9a0d2a9955549f8ba95bfa4c482121206
- Production deployment: dpl_Cg8ffGNhQEE1wYJ4jxSLLBKVmmfA
- Immutable deployment: https://oznur-yemek-i2vpmppzm-oznur.vercel.app
- Public domain: https://www.oznuryemek.com
- Baseline desktop screenshot: home-before.jpg

The branch preserves all versioned code, styles, images, menu content and SEO changes exactly as they were before this redesign. Existing image files are retained. No database or hosting environment changes were made as part of the redesign.

## Restore

When requested, create a new commit on main whose tree matches the backup branch, after checking for newer work that should be retained. Deploy that commit normally through Vercel, then check the public domain and representative pages. This preserves branch history and normal automatic deployment behavior. Do not force-reset main. For an urgent deployment rollback, the deployment ID above is the Vercel restore target; verify domain assignment and automatic assignment settings afterwards.
