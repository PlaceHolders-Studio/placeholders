# KnotFun - create project website

1. Install Node.js

    - download from the website: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

    - **OR** install through package manager (e.g. `sudo dnf install nodejs` on RHEL/CentOS or `sudo apt install nodejs` on Ubuntu)

    - verify the installation by running `node -v` and `npm -v`

2. Create a React project

```bash
npx create-react-app placeholders-site
```

```bash
cd placeholders-site
```

3. Adjust the `package.json` file

```json
{
  "name": "placeholders-site",
  "homepage": "https://knotfun.github.io/KnotFun",
  
  ...

  },
  "scripts": {
    ...

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    
    ...

  },

    ...

}

```

4. Install `gh-pages` and add it to devDependencies

```bash
npm install gh-pages --save-dev
```

5. Replace content with your custom website

Clear the `src` and `public` folders and add your custom content.

6. Initialize a local git repository

```bash
git init
git add .
git commit -m "Initial commit"
```

7. Create a GitHub repository (e.g. `KnotFun`)

    - Go to [https://github.com/new](https://github.com/new)

    - Click "Create a new repository"

    - Give it a name, e.g. `KnotFun`

    - DON'T ADD README.md, LICENSE, or .gitignore

    - Click "Create repository"

8. Link local project with GitHub repository

```bash
git remote add origin https://github.com/knotfun/KnotFun.git
git branch -M master
git push -u origin master
```

9. Deploy to GitHub Pages

```bash
npm run deploy
```

10. Test locally (optional, visit [`http://localhost:3000`](http://localhost:3000))

```bash
npm start
```