# A custom Next.js site with Sanity Studio

> **Note**
> The project uses experimental [/app][app-dir] directory

## Configuration

### Step 1. Set up the project locally

[Clone the repository](https://github.com/tuomasorhanen/Tuomas-s-Sitebuilder.git) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

In the `.env` file update the sanity variables.

### Step 2. Run Next.js locally in development mode

```bash
yarn
yarn dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your blog should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

The localhost:3000 needs to be manually added in sanity at https://www.manage.sanity.io 

### Step 3. Deployment...

... use Azure or Vercel