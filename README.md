# Ember Blog)

A micro-blog application using Ember. The app consists of two pages:

- a Home page that displays some curated and top posts
- a page to view a specific blog post

Below sections are just a few highlights. Skip to [Prerequisites](#prerequisites) to get instructions on how to boot the app!

### Data

I'm using [Mirage](https://www.ember-cli-mirage.com/) to mock out a server and database. All the data is randomized using mostly [faker.js](https://github.com/marak/Faker.js/).

### Responsiveness

Using [Bulma](https://bulma.io/) to help with responsive layouts. The underlying css (mostly in _\_curated-posts.css_) is written to be mobile-first.

### Tests

I've written some integration tests around where there is logic. In order to save some time, I dont have tests for just checking if elements are rendered within components. Also in the interest of time, I have not included acceptance tests.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <[repository-url](https://github.com/bolanzach/ember-blog.git)>` this repository
- `cd ember-blog`
- `npm install`

## Running / Development

- `ember serve` or `ember s`
- Visit the app at [http://localhost:4200](http://localhost:4200).
- Visit tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `ember test`
  x
