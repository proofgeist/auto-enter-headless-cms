// change this to point to your own .env file as needed
require("dotenv").config({ path: ".env.local" });

/**
 * @type {import("@proofgeist/fmdapi/dist/utils/codegen").GenerateSchemaOptions}
 */
const config = {
  schemas: [
    { layout: "post_versions_web", schemaName: "Post" },
    { layout: "files_web", schemaName: "Files" },
    { layout: "site_settings_web", schemaName: "SiteSettings" }
  ],
  path: "./server/apis/fm/clients"
};
module.exports = config;
