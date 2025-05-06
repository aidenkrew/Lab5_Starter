*Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)*
Because it enhances readability and prevents issues from occurring with CSS conflicts.



*What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?*
Data attributes store extra info on elements without impacting the DOM structure or appearance. But overusing data attributes can clutter HTML and they are not visible to screen readers or search engines by default.


*What is a DOM fragment? Why are they powerful?*
A DOM fragment is a lightweight container used to build a part of the DOM in memory without reflowing or repainting the page. 


*What is the point of a “Virtual DOM”? What do you gain? What do you lose?*
Virtual DOM is a concept used in libraries like React and it allows for faster UI updates but it gives up direct DOM control.

*In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?*
Class is a reserved keyword in JavaScript as it is used for declaring classes in OOP.



*What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?*
It is mostly the same but the addEventListener has a remove event listener but other than that, it is mostly the same. I can't think of any advantages using one over the other.
