import { htmlPlugin } from 'esbuild-plugin-html';

export const esbuildConfig = {
  plugins: [
    htmlPlugin({
      files: [
        {
          entryPoints: ['app/routes/contact.html'],
          filename: 'contact.html'
        }
      ]
    })
  ]
};
