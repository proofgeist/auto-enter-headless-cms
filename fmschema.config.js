// change this to point to your own .env file as needed
require("dotenv").config({ path: ".env.local" });

/**
 * @type {import("@proofgeist/fmdapi/dist/utils/codegen").GenerateSchemaOptions}
 */
const config = {
  schemas: [
    { layout: "posts_web", schemaName: "Posts" },
    { layout: "posts_web_preview", schemaName: "PostPreviews" }
  ],
  path: "./server/apis/fm/clients"
};
module.exports = config;
