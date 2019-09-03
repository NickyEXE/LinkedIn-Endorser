let endorse = document.getElementById('endorse');
let paramsForEndorsing = document.getElementById('paramsForEndorsing')

endorse.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id, 
          {code: `
          console.log("hello there")
          const checkIfSkillsLoaded = () => !!document.querySelector(".pv-skill-categories-section")
          const scroll = () => window.scrollBy({
              top: 100,
              left: 0,
            })
          
          const scrollAndThenEndorseAllTheSkills = (skillLevel, howWeWorkedTogether) => {
              if (checkIfSkillsLoaded()){
                  scroll()
                  document.querySelector(".pv-skills-section__additional-skills").attributes[2].value !== "true" && document.querySelector(".pv-skills-section__additional-skills").click()
                  setTimeout(() => endorseAllTheSkills(skillLevel, howWeWorkedTogether), 50)
              }
              else {
                  scroll()
                  setTimeout(() => scrollAndThenEndorseAllTheSkills(skillLevel, howWeWorkedTogether), 50)
              }	
          }
          
          const allButtons = () => document.querySelectorAll(".pv-skill-category-entity__endorse-action")
          
          // Make n 0 for good, 1 for very good, or 2 for Highly Skilled
          const rankPerson = (n) => document.querySelector(".pv-endorsement-followup__radios").children[1].children[n].children[1].click()
          
          
          //Accepted arguments: "WORKED_TOGETHER_DIRECTLY", "MANAGED_DIRECTLY", "REPORTED_DIRECTLY", "WORKED_TOGETHER_INDIRECTLY", "HEARD_ABOUT", "NONE"
          const howDidIWorkWithYou = (string) => document.querySelector(".pv-endorsement-followup__select").value = string
          
          const submit = () => document.querySelector(".pv-endorsement-followup__footer").children[0].click()
          
          // Make n 0 for good, 1 for very good, or 2 for Highly Skilled
          const fillOutForm = (n, string) => {
              rankPerson(n)
              howDidIWorkWithYou(string)
              setTimeout(() => submit(), 300)
          }
          
          // First argument is which button in the array of all buttons
          // Second argument:  0 for good, 1 for very good, or 2 for Highly Skilled
          // Third argument takes: "WORKED_TOGETHER_DIRECTLY", "MANAGED_DIRECTLY", "REPORTED_DIRECTLY", "WORKED_TOGETHER_INDIRECTLY", "HEARD_ABOUT", "NONE"
          const endorseASkill = (skillButtonNumber, skillValue, howDidIWorkWithYou) => {
              allButtons()[skillButtonNumber].children[0].click()
              setTimeout(() => fillOutForm(skillValue, howDidIWorkWithYou), 1500)
          } 
          
          // First argument:  0 for good, 1 for very good, or 2 for Highly Skilled
          // Second argument takes: "WORKED_TOGETHER_DIRECTLY", "MANAGED_DIRECTLY", "REPORTED_DIRECTLY", "WORKED_TOGETHER_INDIRECTLY", "HEARD_ABOUT", "NONE"
          const endorseAllTheSkills = (skillValue, howDidIWorkWithYou) => {
              let iterator = 0
              const waitThenFillForm = () => {
                  setTimeout(()=> fillOutForm(skillValue, howDidIWorkWithYou), iterator+1000)
              }
              [...allButtons()].forEach(button => {
                  setTimeout(()=>button.children[0].click(), iterator)
                  waitThenFillForm()
                  iterator += 2000
              })
          }
          //Paste this code into the console and then you can call functions such as:
          
          //Endorse all the skills as "highly skilled" for someone you worked with together directly
          //endorseAllTheSkills(2, "WORKED_TOGETHER_DIRECTLY")
          
          //Endorse a skill by its button number as very good for someone who you reported to
          // endorseASkill(0, 1, "REPORTED_DIRECTLY")
          
          // If you want to skip scrolling down and opening up the "Additional Skills" section, you can use 
          scrollAndThenEndorseAllTheSkills(${paramsForEndorsing.children[0].children[1].value}, "${paramsForEndorsing.children[3].children[1].value}")`
        });
    });
  };