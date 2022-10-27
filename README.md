# Make It Real - Rick and Morty react card

This is a solution to the Rick and Morty react card project of the Make It Real course with React.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Visualize the characters cards properly.

## My process

### Built with

- HTML5
- CSS
- CSS Grid
- Mobile-first workflow
- React

### What I learned

In this project we learn how to use react to make multiple components from one template.

```js
    {
        data.map(item => {
            return <CharacterCard key={item.id} name={item.name} image={item.image} status={item.status} species={item.species} locationUrl={item.location.url} locationName={item.location.name}
            originUrl={item.origin.url} originName={item.origin.name}/>
        })
    }
```
```js
const CharacterCard = (props) => (
  <article className="characterCard">
    <div className="characterImagen">
      <img
        src={props.image}
        alt={props.name}
      />
    </div>
```


### Continued development

We need to continue learning about how React components works.

### Useful resources

- [Resource 1](https://reactjs.org/docs/components-and-props.html) - This helped me to understand props.

## Author

- Juan Sebastián Muñoz


## Acknowledgments

Thanks to Camilo, Yulany and the teacher