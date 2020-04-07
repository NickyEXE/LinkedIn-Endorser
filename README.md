# LinkedIn Endorser
Sometimes you want to be incredibly supportive and endorse your friend for everything.

# What is this?
A Google Chrome extension that will likely break next time LinkedIn updates something. It gives users the ability to endorse their friends for all their skills. It was built to show my students JavaScript in action. It's available in the Chrome store [here][https://chrome.google.com/webstore/detail/linkedin-endorser/plpojgnkonpbkjhmlgaoehheeodhango?hl=en-US].


# What if I want to just steal your script?

That's totally cool! Check out the file [endorse.js!][https://github.com/NickyEXE/LinkedIn-Endorser/blob/master/endorse.js]

It gives you two commands -- Endorse a skill, and Endorse all the skills.

# How do I use this script? 
Ensure the buttons to endorse someone is loaded -- You have to scroll down to the skills section to load it. If you want to endorse them for absolutely everything, be sure to click on the "See More" button under skills first on the LinkedIn page.

Then, use one of the below two functions.

# Endorse a Skill

This is a helper method but feel free to use it directly. It takes in three arguments, the index of the button in the array of all skill buttons on the page (so the first button to render is 0, second is 1, third is 2, etc. etc.).

The second argument is a skill value, it takes 0 for "Good", 1 for "Very Good", and 2 for "Highly Skilled."

The third argument designates how you worked together and the options are: "WORKED_TOGETHER_DIRECTLY", "MANAGED_DIRECTLY", "REPORTED_DIRECTLY", "WORKED_TOGETHER_INDIRECTLY", "HEARD_ABOUT", "NONE".

```
//Make the second skill that appears on the page rated as "Highly Skilled" for someone you worked with directly.
endorseASkill = (1, 2, "WORKED_TOGETHER_DIRECTLY")
////Make the fourth skill that appears on the page rated as "Good" for someone you managed.
endorseASkill = (4, 0, "MANAGED_DIRECTLY")
```

This really didn't need to be included as a function in the README but I'm already fully deep into this documentation for this ridiculous script so I'm leaning into it by writing it all down.

# Endorse all the Skills

This is where the magic happens. It takes in two arguments. The first is a number that can be 0, 1, 2, depending on whether you want to endorse them as Good, Very Good, or Highly Skilled. The second is how you worked with them, and can be: "WORKED_TOGETHER_DIRECTLY", "MANAGED_DIRECTLY", "REPORTED_DIRECTLY", "WORKED_TOGETHER_INDIRECTLY", "HEARD_ABOUT", "NONE"

```
//Rate someone you heard about as highly skilled for everything.
endorseAllTheSkills(2, "HEARD_ABOUT")

```

As above, this will note that you worked together directly unless you revise the code for the function `workedTogetherDirectly()`. See below under [Customize your Script!](#Customize-your-Script).

# Test this Script Out

If you're looking for a page to test this out on, consider [my LinkedIn profile](https://www.linkedin.com/in/ndover/).
