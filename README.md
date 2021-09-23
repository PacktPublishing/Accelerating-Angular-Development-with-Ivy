# Accelerating Angular Development with Ivy

<a href="https://www.packtpub.com/product/accelerating-angular-development-with-ivy/9781800205215?utm_source=github&utm_medium=repository&utm_campaign=9781800205215"><img src="https://static.packt-cdn.com/products/9781800205215/cover/smaller" alt="Accelerating Angular Development with Ivy" height="256px" align="right"></a>

This is the code repository for [Accelerating Angular Development with Ivy](https://www.packtpub.com/product/accelerating-angular-development-with-ivy/9781800205215?utm_source=github&utm_medium=repository&utm_campaign=9781800205215), published by Packt.

**A practical guide to building faster and more testable Angular apps with the new Ivy engine**

## What is this book about?
Angular Ivy is the latest rendering engine and compiler introduced in Angular. Ivy helps frontend developers to make their Angular applications faster, better optimized, and more robust. This easy-to-follow guide will help you get to grips with the new features of Angular Ivy and show you how to migrate your Angular apps from View Engine to Ivy.

This book covers the following exciting features: 
* Find out why Angular Ivy tests are faster and more robust
* Explore the concept of CSS custom properties and scoping of values and learn how to use them with Angular Ivy
* Use testing harnesses present in Angular components to write effective tests
* Explore the architecture of the Angular compatibility compiler and understand why it is important
* Discover effective techniques for migrating your existing Angular apps to the Ivy engine

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/180020521X) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter01.

The code will look like the following:
```
function changeSettings(settings: {
sleepTimer: number;
volume: number;
}): void {
const volumeSetting = settings.volume || 0.5;
sendVolumeSignal(volumeSetting);
const sleepTimerSetting = settings.sleepTimer || 900;
sendSleepTimerSignal(sleepTimerSetting);
}
```

**Following is what you need for this book:**

This book is for experienced Angular web developers who want to migrate to the latest Ivy engine for building faster web applications. Intermediate knowledge of Angular and TypeScript will help you get the most out of this book.

With the following software and hardware list you can run all code files present in the book (Chapter 1-12).

### Software and Hardware List

| Chapter  | Software required                   | OS required                        |
| -------- | ------------------------------------| -----------------------------------|
| 1-12     | Angular versions 9 through 12       | Windows, Mac OS X, and Linux (Any) |
| 1-12     | TypeScript versions 3.6 through 4.3 | Windows, Mac OS X, and Linux (Any) |
| 1-12     | Angular CLI                         | Windows, Mac OS X, and Linux (Any) |
| 1-12     | Angular CDK                         | Windows, Mac OS X, and Linux (Any) |
| 1-12     | Angular Google Maps                 | Windows, Mac OS X, and Linux (Any) |
| 1-12     | Angular Material                    | Windows, Mac OS X, and Linux (Any) |
| 1-12     | Angular YouTube Player              | Windows, Mac OS X, and Linux (Any) |

Make sure to install a recent version of Angular CLI globally.

## Part 1: A quick and functional guide to Angular Ivy

### Chapter 1: Discovering new APIs and language syntax

Feature app: [Globalization](/projects/chapter1/globalization/src/app)

### Chapter 2: Boosting developer productivity through tooling, configuration and convenience

Feature app: [Inheritance](/projects/chapter2/inheritance/src/app)

Feature app: [Style bindings](/projects/chapter2/style-bindings/src/app)

### Chapter 3: Introducing CSS Custom Properties and new provider scopes

Feature app: [Any provider scope](/projects/chapter3/any-provider-scope/src/app)

Feature app: [Colored panels](/projects/chapter3/colored-panels/src/app)

Feature app:
[CSS Custom Properties](/projects/chapter3/css-custom-properties/src/app)

Feature app: [Welcome](/projects/chapter3/welcome/src/app)

### Chapter 4: Exploring Angular Components features

Feature app: [Map](/projects/chapter4/map/src/app)

Feature app: [Video](/projects/chapter4/video/src/app)

## Part 2: Build a real world application with the Angular Ivy features you learnt

Real world app: [Angular Academy](/projects/demo/src/app)

## Part 3: Upgrade your View Engine application and development workflow to Angular Ivy

### Chapter 9: Debugging with the new Ivy runtime APIs

Feature app: [Random number](/projects/chapter9/random-number/src/app)

### Chapter 12: Embracing Ahead-of-Time compilation

Feature app:
[Feature flag initializer](/projects/chapter12/feature-flag-initializer/src/app)

Feature app: [Feature flags](/projects/chapter12/feature-flags/src/app)
<hr>

We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://static.packt-cdn.com/downloads/9781800205215_ColorImages.pdf).


### Related products <Other books you may enjoy>
* Linux: Powerful Server Administration [[Packt]](https://www.packtpub.com/networking-and-servers/linux-powerful-server-administration?utm_source=github&utm_medium=repository&utm_campaign=9781788293778) [[Amazon]](https://www.amazon.com/dp/1788293770)

* Linux Device Drivers Development [[Packt]](https://www.packtpub.com/networking-and-servers/linux-device-drivers-development?utm_source=github&utm_medium=repository&utm_campaign=9781785280009) [[Amazon]](https://www.amazon.com/dp/1788293770)

## Get to Know the Authors
**Jacob Andresen**
works as a senior software developer based in Copenhagen, Denmark. He has been working as a software developer and consultant in information retrieval systems and web applications since 2002. 

**Lars Gyrup Brink Nielsen**
is a frontend architect at Systemate A/S in Denmark. As a cofounder of the open learning non-profit This is Learning, he creates open platforms for free knowledge and public learning. Lars is a tech writer, international tech speaker, FOSS maintainer, Microsoft MVP in Developer Technologies, and GitHub Star.


