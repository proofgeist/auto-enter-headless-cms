// change this to point to your own .env file as needed
require("dotenv").config({ path: ".env.local" });

/**
 * @type {import("@proofgeist/fmdapi/dist/utils/codegen").GenerateSchemaOptions}
 */
const config = {
  schemas: [
    { layout: "posts_web", schemaName: "Posts" },
    { layout: "posts_web_preview", schemaName: "PostPreviews" },
    { layout: "files_web", schemaName: "Files" },
    { layout: "site_settings_web", schemaName: "SiteSettings" }
  ],
  path: "./server/apis/fm/clients"
};
module.exports = config;
