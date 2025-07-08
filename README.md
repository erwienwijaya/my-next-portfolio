## About

This website is designed to build relationships between job seekers and workplaces or employers, where information should follow the 4W + H concept (What, Who, When, Where + How). The website is built using Next.js.

## Requirement

- NPM >= 18

## Installation

Run the following command to install dependencies:

```bash
npm install
```

## Getting Started

To start the development server and run the website, use:

```bash
npm run dev
```

Then open your browser and navigate to <http://localhost:3000>.

## Using VSCode Debug Configuration

If you are using Visual Studio Code, click "Add Configuration" in the launch.json file and enter the following configuration:

```bash
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "portfolio-web",
            "runtimeExecutable": "npm",
             "runtimeArgs": [
                "run-script",
                "dev"
            ],
            "env": {
                "PORT": "3060"
            },
            "console": "integratedTerminal"
        }
    ]
}
```

## Demo Website

if you want to see the preview of demo you can check it out:
<https://my-next-portfolio-lou4.vercel.app/>

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.