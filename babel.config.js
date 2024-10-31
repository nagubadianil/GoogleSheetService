module.exports = {
    env: {
      cjs: {
        presets: [["@babel/preset-env", { modules: "commonjs" }]]
      },
      esm: {
        presets: [["@babel/preset-env", { modules: false }]]
      }
    }
  };