const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    collection: `https://api.postman.com/collections/30237658-f606a596-7865-4a92-85f1-4007ef36a04d?access_key=${process.env.PMT_KEY}`,
    // collection: require('./collection/dmoney-user-api-collection.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be created inside the root
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
