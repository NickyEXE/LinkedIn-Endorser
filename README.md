# LinkedIn-Endorser
Sometimes you want to be incredibly supportive and endorse your friend for everything.

# What is this?
A script that will likely break next time LinkedIn updates something. It gives you two commands -- Endorse a skill, and Endorse all the skills.

# How do I use this script? 
Ensure the buttons to endorse someone is loaded, and then call one of the two functions in the console.

# Endorse a Skill

This is a helper method but feel free to use it directly. It takes in two arguments, the index of the button in the array of all skill buttons on the page (so the first button to render is 0, second is 1, third is 2, etc. etc.).

The second argument is a skill value, it takes 0 for "Good", 1 for "Very Good", and 2 for "Highly Skilled." This will note that you worked together directly unless you revise the code for the function `workedTogetherDirectly()`. See below under [Customize your Script!](#Customize-your-Script)

This really didn't need to be included as a function in the README but I'm already fully deep into this documentation for this ridiculous script so I'm leaning into it by writing it all down.

# Endorse all the Skills

This is where the magic happens. 


# Customize your Script

The two functions are built to auto fill the field for how you know the person as "Worked together directly." Commented out in the function is other options though that are fairly self explanatory. 

If you would like to change the code to use any of the other values, go for it! (I could have made this an argument for one of the functions but I really did create this largely as a joke.)

```//Alternatively for each option: "WORKED_TOGETHER_DIRECTLY", "MANAGED_DIRECTLY", "REPORTED_DIRECTLY", "WORKED_TOGETHER_INDIRECTLY", "HEARD_ABOUT", "NONE"
const workedTogetherDirectly = () => document.querySelectorAll("select")[1].value = "WORKED_TOGETHER_DIRECTLY"```
