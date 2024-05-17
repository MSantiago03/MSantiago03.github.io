# Plate Mate Bowdoin
# Visit website:
https://msantiago03.github.io/

# Github Repo Link:
https://github.com/MSantiago03/msantiago03.github.io

## Inspiration
Our team takes their meals seriosly and understands so do other Bowdoin students. We know when deciding on where to eat can depend on various factors so we chose three main factors: menu, crowdedness, and friends. We made a platfrom
that helps find all thi information all in one place. Plate Mate Bowdoin allows users to see dining hall menus, see where most students are located based on user checkin, and see where friends are eating. This takes the guessing out of choosing a dining hall and help users arrive at a decision.

## What it does
- Display current meal at both dining halls (webscrapping down and filler currently present for meals)
- Users can input where they are going and platform takes tally to display above menus.
- Friends page employs a Friend Request System that allows users to mange friends:
  - Accept Requests: meaning they add another student to their list of friends
  - See where their friends are dining
  - Quick add friends and undo any sent friend requests that have not been accepted yet. Since we are using local storage this doesn't connect with other actuall user but is dynamic to show what it could look like.
## How we built it
- Used Bootstrap, HMTL, CSS, Javascript and local storage to mimick a real database.
- This way users can create an account and sign in and have a dynamic website.

## Challenges we ran into
- We do have some code that webscrapes but  were are not able to fromat it so we used filler menus instead. We used Python and Selenium for they code we did not include for the final model.
- UI Style issues that arrose when trying to make the website sleek, clean, consistent, and aesthetic.

## Accomplishments that we're proud of
- Figuring out the counter
- Creating a mostly working Friend Request System.

## What we learned
- We learned API endpoints might be the better option (if available) when tryint to web scrape. It might have been easier as we could then store the different parts into some data structure.
