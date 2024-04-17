# Front Template

---

This project is a template for making a skin analysis experience for \*\*\*.
Since it was made to fit a certain site, some files will surely needs to be removed or rearranged to fit the targeted site.

---

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Guideline](#guideline)
5. [Features](#features)
6. [Modules Explanation](#modules-explanation)
7. [Components Explanation](#components-explanation)

## General Info

This project was initialized with **vitejs**, made in **React**, and is using **typescript**.
The styles files are made in css-in-js using **styled-components**.

> If you don't already have it, using vscode's vscode-styled-components extension will be helpful, for the style does look like a classic css file.

The project also use **eslint** and **prettier** to help to keep a good standardization of the code.

## Technologies

- nodejs : version ^12.17.0
- react : version ^17.0.2

If you don't have **nodejs** installed yet, you can follow this [nodejs install instructions](https://nodejs.org/en/download/package-manager/)

If you need some info on React, here is [React official documentation](https://reactjs.org/)

## Installation

First of all, if you don't already have it, you will need to install **nodejs** to your system to install and run this project.

Once you have the repository on local, enter the folder in the terminal and type `npm install` or `npm i` to install all the necessary depedencies.

Once everything is installed, type `npm run dev` to run the project in your browser.

> The project run on http://localhost:3000/, make sure nothing else run on this port before typing this.

## Guideline

### Folders and file organisation

#### types

This folder contain files for typescript configuration.

- global.d.ts : configuration for being able to use pictures at **.jpg**, **.jpeg** and **.png** format.
  > If there is necessity to add some pictures format, add it to this file following the declaration of the previous statements
- window.d.ts : configuration for being able to use module working with the **window** property, like the **YMK module**.

#### src

This folder contain the files and folder necessary to load the app

files:

- main.tsx : call the **App.tsx**, **reset.css** and **index.css**
- App.tsx : call the component calling all the app's components, and wrap it with react-router-dom's **ReactBrowser** tag to enable routing on the app
- reset.css : reduce browser inconsistencies by settings everything in a minimal way, so it is easier to set up style, paying less attention to what browser it will be run on.
- index.css : set the **fonts**, **global variable** and **global styles**. If an element is recurrent on all the site, and it's style is independent to its component, it is settled here.

folders:

- assets : contain the assets of the app.
  All the fonts are in the **fonts** folder.
  All the pictures are in the **images** folder.
- components : contain the components of the app.
  The Main.tsx is the only file called at the root of the **components** folder.
  All the other components are sorted in differents folders depending what they display.
- content : contain **.json** files handling the site's content.

### Project's practice

#### Naming and files format

- Folders inside the components folder are named, in **camelCase**, depending what part of the app they handle.
  > ex: header handle the header display, so it could contain Header and Nav components
- Components files name are in **PascalCase** and in a **.tsx** format.
  > ex: Header.tsx, Footer.tsx
- Styles files name have the name of the component they are styling with a **capital S at the start of the name**, and are in a **.tsx** format since style is written through **styled-component**.
  > ex: SHeader.tsx, SFooter.tsx
- Interfaces names are the **component's name** it refers to with **Props** at the end.
  > ex: HeaderProps, FooterProps
- All that is not above follow the **camelCase** convention.

#### Code

- Imports order are made following this schema : React -> npm modules -> self made module -> images -> style -> contents files
- Use **classic export** instead of default export. Components then need to be call using curly brackets.
  > ex : _export const Footer_ to export the Footer component, and _import {Footer} from_ to import it.
- Always declare the types of variables and functions, avoiding the **any** type.
- Use **React.memo()** to declare a component.
- Use **absolute path** when possible to import files. The actual absolutes pathes are:

  - **~/** for src/
  - **~assets** for src/assets
  - **~components** for src/components
  - **~content** for src/content

  > Those absolutes pathes are settled in the **vite.config.ts**. If a new absolute path is needed, add it in this files following the previous pathes convention.

- Declare **interfaces** for the props before the first component declaration.
- Write **tsDoc** right above whatever it is describing.
- Call **interfaces** when you declare the **component type**.
  > ex : export const Footer: React.FunctionComponent< FooterProps >

## Features

The 3 main features are, in this order:

1. Take a selfie to perform your skin analysis
2. Display the results of the analysis through a chart
3. Recommand a product or a product line depending the score you get

## Modules Explanation

### Recharts

Recharts is the module used in this project to make the spidercharts.
The module can make several types of charts, depending what you import from it.
We import those following parameters to make the spiderchart:

- RadarChart : the types of chart, this one being the spiderchart.
- PolarAngleAxis : for displaying the labels on the chart. We use **DiagResult** 's **renderCustomBarLabel** to customize them and place them as we want.
- Radar : for displaying the results on the chart. We use **CustomScatterDot** to customize the dots on it and to make them clickable.

For some further explanations on how work the module, please check Recharts' [official documentation](https://recharts.org/en-US)

### YMK

YMK is the module to take the selfie to perform a skin diagnostic.
It is a **client library CDN** initialized through the **initYMK** function by creating a script tag in the HMTL via the DOM, and can run thanks to the useEffect loading the API key.
The **registerEvents** function settle the different events the module will proceed through.
The **closeYMKModule** function remove one of these events.
When on step 1, a useEffect start the module.
The module then stock the resutls in the **skinDiagResults** variable.

## Components Explanation

Since this project was made to fit certain expectations in term of display, some existing components should be modify, or even deleted. So here is an explanation of what each components do, to know what is necessary and what may be expendable.

### Main

The component in charge of loading the other components, and to make the main routes.

### Header

The header of the app. It should be reworked to fit the targeted website, so you may delete all pictures import, and what is inside the SHeader brackets. Also modify the SHeader.tsx to apply the wanted style.

### StarterScreen

Screen displayed at the start of the experience. Modify as necessary, or if not needed, you may delete this component.

> If this component is deleted, remember to modify the pathes at Main.tsx

### DiagResult

Component initializing the YMK module to take selfie, manage the results returned by the module, and handle the differents steps of the experience.
A modification here could overflow to the other components, DiagResult passing many informations through the props.

### Breadcrumb

A navigation indicator to help the user to situate himself in the experience.
Should be deleted if not needed.

### Instruction

Display the instructions for the selfie, and ask for an input to be check to continue the experience. Made to accept an image or the selfie module as a children in the DiagResult component.

### RadarChartResults

Call the recharts module to display a spider charts that will display the graphic depending the results of the skin diagnostic. Also made the selfie module focus a single criteria depending depending the dot you click on the chart, through the **CustomScatterDot** component.
Also need the **renderCustomBarLabel** from DiagResult to display the labels as needed.

### ProductSuggestions

Suggestion of a product depending the score the user got. Display severous informations like the highest and lowest score, the product picture, and the product description. Should be modify depending the wanted display of the suggested product.

### RoutineLine

Display an SVG line to present the routines linked to the suggested product. Display a different line depending the routine we want to see. Should be modify depending the number of routine linked to the product, or deleted if not needed.

### Product

Display each elements of the routine. Should be deleted if no routine, or modify to show other products as needed.

### ButtonPanel

Handle the button to proceed through the different steps of the experience.

### Footer

The footer of the app. It should be reworked to fit the targeted website, so you may delete all pictures import, and what is inside the SFooter brackets. Also modify the SFooter.tsx to apply the wanted style.
It is actually display only at the last step of the experience in DiagResutl, may need to be load in the Main.tsx instead if in need of a constant display of the footer.

### Loader

A loader to use while the selfie module's results are being calculated. Need a complete rework if in need of a loader, or to be deleted in unnacessary.
