const path = require("path")

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"), //forder name
        filename:"new.js"              //file name
    },
    mode:"development",
    module: {
        rules: [
          { test: /\.css$/, use: ["style-loader","css-loader"]},
          {test: /\.svg$/,use: {
            loader: "svg-inline-loader",
              options: {
                
                iesafe: true,
              },
            },
          }
         
        ]
      },
      
    
}