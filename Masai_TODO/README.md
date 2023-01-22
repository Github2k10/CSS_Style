# JS-User-Database-Mock-Server

## Submission Instructions [Please note]

## Maximum Marks -

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅  able to submit the app - 1 mark (default score )
 ✅ Should make GET request to the mock server and display UI with initial data - 2 marks
 ✅ Should make POST request to the mock server on submitting the student details and update UI - 2 marks
 ✅ Should Update the score  on mock server (PATCH) on clicking th update score button - 2 marks
 ✅ Should make DELETE request on clicking remove student button and update UI - 2 marks
 ✅ should sort the students details by score in ascending and descending order (GET request and pass query  params) -  2 marks
 ✅ should filter the score <= 5 marks - 2marks
 ✅ should filter the score > 5 marks - 2 marks


```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- src
  - scripts
    - index.js
- styles
  - index.css
- README.md
- package.json
- cypress (ignore the files under cypress)

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

- Create an admin dashboard for masai, where user will be adding student data to the database, and can perform basic crud operations.

*All the operations will be performed using json-server.
*You can refer this Documentation: https://www.npmjs.com/package/json-server https://github.com/typicode/json-server

- how to pass query params for sorting
  - refer this example https://www.npmjs.com/package/json-server#sort
- how to pass query params for filter

  - example https://www.npmjs.com/package/json-server#operators

- Create an index.html page where user will be able to add the student data and can see and update in real time.

- Refer this image for more clarity:-
- Provide a `remove` and `update score` button on every student card.
- Remove will remove the student from dom and your json server database as well.
- Update will enable the update input box which will update the score of any student.

- For updating score:-

```
- Provide an input box which will be disabled by default
- Once the user click on `update score` button of any user
- The input box will be enabled and the current marks will be present
- Once the user updates the mark and hit `Enter`, the marks should be upadted
- Finally the input box will again be disabled
```

- Provide two buttons for sorting both from high to low and vice versa (based on score).
- Also provide two buttons 'score > 5" and 'score <= 5" for filtering accordingly.
  ![](https://i.imgur.com/ff3q3ci.png)

#### Note:-

- Always store score as a number not string. Otherwise you may face difficulty while sorting and filtering.
- Sorting and filtering will be done using Json-Server only.
- Display score value only, no extra text should be there.

## Requirements

- You should use JSON server
- Use your **deployed mock-server** link only.
- By default when the user loads the page, the user should be shown all students initial data

#### Things to follow :-

```
 1. Student form input boxes will have IDs as "name", "batch", "section", "eval_score" & "image" respectively.
 2. Add Student button ID :- "add_student".
    - `id` does't require any field json-server by default will create id for each entry
 3. Sort Low to High button ID :- "sort-low-to-high"
 4. Sort High to Low button ID :- "sort-high-to-low"
 5. Score > 5 button ID :-  "greater-than"
 6. Score < = 5 button ID :- "less-than"
 7. All the students will be appended inside div with ID :- "container".
 8. Every student card will have class :- "student",
 9. The score in every card will have class :- "student_score" ,
 NOTE:- Show only score value in number, no extra text should be there.
 11. The remove button will have class :- "remove_student",
 12. The update button will have class :- "update_score"
 13. The update input box will have ID :- "new_score"
```

- you can add styling under the `styles` folder

**Note:- Do not use any other names for the Ids, Classes other than those mentioned.**

####

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not submit it last minute
- try to keep one submission at a time
