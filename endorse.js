const allButtons = () => document.querySelectorAll(".pv-skill-category-entity__endorse-action")

// Make n 0 for good, 1 for very good, or 2 for Highly Skilled
const rankPerson = (n) => document.querySelector(".pv-endorsement-followup__radios").children[1].children[n].children[1].click()


//Alternatively for each option: "WORKED_TOGETHER_DIRECTLY", "MANAGED_DIRECTLY", "REPORTED_DIRECTLY", "WORKED_TOGETHER_INDIRECTLY", "HEARD_ABOUT", "NONE"
const workedTogetherDirectly = () => document.querySelector(".pv-endorsement-followup__select").value = "WORKED_TOGETHER_DIRECTLY"

const submit = () => document.querySelector(".pv-endorsement-followup__footer").children[0].click()

// Make n 0 for good, 1 for very good, or 2 for Highly Skilled
const fillOutForm = (n) => {
    rankPerson(n)
    workedTogetherDirectly()
    setTimeout(() => submit(), 300)
}

const endorseASkill = (skillButtonNumber, skillValue) => {
    allButtons()[skillButtonNumber].children[0].click()
    setTimeout(() => fillOutForm(skillValue), 1500)
} 

// Make n 0 for good, 1 for very good, or 2 for Highly Skilled
const endorseAllTheSkills = (skillValue) => {
    let iterator = 0
    const waitThenFillForm = () => {
        setTimeout(()=> fillOutForm(skillValue), iterator+1000)
    }
    [...allButtons()].forEach(button => {
        setTimeout(()=>button.children[0].click(), iterator)
        waitThenFillForm()
        iterator += 2000
    })
}
//Paste this code into the console and then you can call functions such as:

//Endorse all the skills as "highly skilled"
//endorseAllTheSkills(2)

//Endorse a skill by its button number as very good
// endorseASkill(0, 1)
