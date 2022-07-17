# FileMaker as a Headless CMS

Files, slides and code for AutoEnter live presentation.

This the next.js project, that was used during the presentation.

The FileMaker file is called JamClub and it is in this repor
username and password is admin and admin.

## Show Notes

### Image Session Cookie Setting

You can turn off the need to have a authenticated cookie support on the url returned from the container with an admin api.

Here are the docs on how to make that call.

https://(www.example.com)/fmi/admin/apidoc/#tag/Database-Server/operation/setAuthenticatedStream

### Using S3 With FileMaker

Here is a link to a very good example of how to use s3 as a comtainer alternative from Jason Woods.

https://www.definedatabase.com/s3-object-storage-filemaker-container-alternative/

## Deploying

This example repo was deployed automatically to Vercel using (Vercel's GitHub integration)[https://vercel.com/docs/concepts/git/vercel-for-github].

## Integration with Next and Vercel

This demo makes heavy use of tight integrtion between FileMaker, and (Next.js)[https://nextjs.org/] running on (Vercel)[https://vercel.com].

[Prevode Mode](https://nextjs.org/docs/advanced-features/preview-mode), a feature of Next.js, allows you to display drafts of you content in the live website just for you. No one else can see it. It is a "preview" of what the content will look like when you publish it. The demo shows how FileMaker can turn on this feaure in your browser, be using the Open Url script step.

We also used (Incremental Static Site Generation and On Demand revalidation)[https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration]. FileMaker can trigger a particular page to be "rebuilt" by making an HTTP request using Insert From URL.

The demo File also has an example of triggering an entire redeploy of the site from Github. You can see this on the Site Settings page.
