import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold">My Blog</h1>
        <p className="py-6">
          Question:-1. What are the different ways to manage a state in a React
          application? Answer: Managing state in your React apps isn’t as simple
          as using useState or useReducer, useReducer.
        </p>
        <p className="py-6">
          Question:-2. How does prototypical inheritance work? Answer:
          Prototypal inheritance is a language feature that helps in that. For
          instance, we have a user object with its properties and methods, and
          want to make admin and guest as slightly modified variants of it. We’d
          like to reuse what we have in user, not copy/reimplement its methods,
          just build a new object on top of it.
        </p>
        <p className="py-6">
          Question:-3. What is a unit test? Why should we write unit tests?
          Answer: Unit Testing is a type of software testing where individual
          units or components of a software are tested. purpose is to validate
          that each unit of the software code performs as expected. Unit Testing
          is done during the development (coding phase) of an application by the
          developers. Unit Tests isolate a section of code and verify its
          correctness. A unit may be an individual function, method, procedure,
          module, or object.
        </p>
        <p className="py-6">
          Question:-4. React vs. Angular vs. Vue. Answer: Angular is a front-end
          framework with lots of components, services, and tools. On Angular’s
          site, you can see that they define Angular as: “The modern web
          developer’s platform” It is developed and maintained by Google
          developers, but curiously it is not used to implement any of their
          most common products such as Search or YouTube. React is considered a
          UI library. They define themselves as: “A JavaScript library for
          building user interfaces” Facebook developers are behind the
          development and maintenance of this library. And, in this case, most
          of Facebook’s products are made with React.
        </p>
      </div>
    </div>
  );
};

export default Blog;
