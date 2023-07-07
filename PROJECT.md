## If I had a week to work on this, in order of importance, I would:

1. Finish the Rental Listing Card component - description, price, etc
1. Accessibility - screen reader, keyboard input handling
1. Utilize CSS library to strengthen styles
1. Add E2E testing
1. Advanced search filters - dates, location, price, beds, etc
1. Improve pagination -- infinite scrolling, handling what happens when you get to the "end of the data"

## Other future considerations
1. If scope of project increases, utilize state store such as Redux, Context
1. Move 'handleSearch' function out of component and into Util file
1. Documentation

## Decisions made during project - can discuss in detail later
*  Decided to limit the API call to 100 for now since the breadth of this test is covered with that much data. In the future, we can expand upon this by requesting the next 100 once the user reaches the last page, and adding that to the data.

* Passed a 'currentSearchedTerm' prop that is currently unused, but could be used for something in the future, decided not to remove it for now.

*  Added pagination as an additional feature, possibility of adding infinite scrolling / infinite pagination in the future (until there's no more data, of course)

*  Added utility function to calculate total pages and display for pagination -- including unit tests for util function

*  Decided to use basic CSS since adding a library with such little requirements would be overkill. As part of this, keeping the CSS at minimum specificity is an ongoing goal for the project. High amounts of nesting is undesirable, so keeping CSS at a component level would be the goal.

*  Utilized an automatic interface generator to generate the types in SearchData based on JSON input -- It may be helpful to double check these types by hand if longer time were given.