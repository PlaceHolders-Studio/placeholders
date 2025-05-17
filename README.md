# KnotFun - create project website

<br/>

This is a simple React website for [KnotFun / PlaceHolders](https://place-holders.itch.io/)

<br/><br/>

### 1. Install Node.js

  - download from the website: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

  - **OR** install through package manager (e.g. `sudo dnf install nodejs` on RHEL/CentOS or `sudo apt install nodejs` on Ubuntu)

  - verify the installation by running `node -v` and `npm -v`

<br/><br/>

### 2. Create a React project

<br/>

```bash
npx create-react-app placeholders-site
```

<br/>

```bash
cd placeholders-site
```

<br/><br/>

### 3. Adjust the `package.json` file

<br/>

> [!IMPORTANT]
>
> Change the `homepage` field to point to your GitHub Pages repository
>
> `https://{USERNAME_OR_ORGANIZATION}.github.io/{REPOSITORY_NAME}`

<br/>

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

<br/><br/>

### 4. Install `gh-pages` and add it to devDependencies

<br/>

```bash
npm install gh-pages --save-dev
```

<br/><br/>

### 5. Replace content with your custom website

<br/>

Clear the `src` and `public` folders and add your custom content.

<br/><br/>

### 6. Initialize a local git repository

<br/>

```bash
git init
```

<br/>

```bash
git add .
```

<br/>

```bash
git commit -m "Initial commit"
```

<br/><br/>

### 7. Create a GitHub repository (e.g. `KnotFun`)

  - Go to [https://github.com/new](https://github.com/new)

  - Give it a name, e.g. `KnotFun`

  - DON'T ADD README.md, LICENSE, or .gitignore

  - Click "Create repository"

<br/><br/>

### 8. Link local project with GitHub repository

<br/>

```bash
git remote add origin https://github.com/knotfun/KnotFun.git
```

<br/>

```bash
git branch -M master
```

<br/>

```bash
git push -u origin master
```

<br/><br/>

### 9. Deploy to GitHub Pages

<br/>

```bash
npm run deploy
```

<br/><br/>

### 10. Test locally (optional, visit [`http://localhost:3000`](http://localhost:3000))

<br/>

```bash
npm start
```

<br/><br/>
