const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@components": path.resolve(__dirname, "./src/components"),
            // "@contexts": path.resolve(__dirname, "./src/contexts"),
            // "@enums": path.resolve(__dirname, "./src/enums"),
            // "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@helpers": path.resolve(__dirname, "./src/helpers"),
            "@styles": path.resolve(__dirname, "./src/styles")
        }
    }
};
