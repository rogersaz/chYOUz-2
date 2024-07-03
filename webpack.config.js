const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // Add other loaders here if needed
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.html'],
  },
  // Include other configurations as necessary
};
