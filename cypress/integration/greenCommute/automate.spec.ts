import { RobotHands, Dependencies,RobotEyes } from '../../robots/greenCommute/greenCommuteRobot'

context('Search Test', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies()

   

    describe('Search the required information', ()=>{

        it('Navigate to Green Commute page', () => {
           
            dependencies.visitWebsite('http://bc15-green-commute.dev-apps.io/')
        })

        it('Check the visibility and type Your Location on input text field',()=>{
           
            robotEyes.seeInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
            robotEyes.seesTextWithId('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss10 > div:nth-child(1) > p','Your Location')
            robotHands.clickOnInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div','Banglore, Karnataka, India')

        })
        it('Check the visibility of next button of Your Location and click on next button of Your Location',()=>{

            robotEyes.seeNextButton('MuiButton-label',0,'Next')

            robotHands.clickOnNextButton('MuiButton-label',0)
        })

        it('Check the visibility and type the Job location on input text field',()=>{


            robotEyes.seeInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
            robotEyes.seesTextWithId('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss10 > div:nth-child(2) > p','Job Location')
            robotHands.clickOnInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div',"Banglore, Karnataka, India")


        })
        it('Check the visibility of next button and click on next button  of Job Location',()=>{

            robotEyes.seeNextButton('MuiButton-label',0,'Next')
            robotHands.clickOnNextButton('MuiButton-label',0)
        })
        it('Check the visibility and type the Skills on input text field',()=>{
           
            robotEyes.seeInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
            robotEyes.seesTextWithId('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss10 > div:nth-child(3) > p','Your skills')
            robotHands.clickOnInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div','Software Engineer')

        })
        it('Check the visibility of next button and click on next button  of skills',()=>{

            robotEyes.seeNextButton('MuiButton-label',0,'Finish')
            robotHands.clickOnNextButton('MuiButton-label',0)
            robotEyes.seesPathNameInUrl('/findJobs')
        })
        it('Check the visibility and click on find jobs',()=>{
           
            robotEyes.seeInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(2) > div.MuiListItemText-root.jss53 > p')
            robotHands.clickOnFindJobs('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(2) > div.MuiListItemText-root.jss53 > p')
            robotEyes.seesPathNameInUrl('/findJobs')
        })

        it('Click on Filter',()=>{
           
            robotHands.clickOnFilter('.jss72')
        })


        it('Apply the Filter',()=>{
           
            robotHands.applyFilter('input[type=checkbox]',7)
            robotHands.applyFilter('input[type=checkbox]',13)
            robotHands.applyFilter('input[type=checkbox]',14)
            robotHands.applyFilter('input[type=checkbox]',15)
            robotHands.applyFilter('input[type=checkbox]',16)
            robotHands.clickOnApplyFilter('button[type=button]',5)

        })
        it('Click on the first Job of the applied filter and click on Save',()=>{

            robotHands.clickOnFirstJob("div[class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center']","div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4']",1)
            robotEyes.seeSavedJobAfterFilterVisible("MuiGrid-root > .MuiButton-outlined > .MuiButton-label")
            robotHands.clickOnTheJobToBeSaved('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
            robotEyes.seesTextWithClassForMultiAlerts('MuiAlert-message')

            
        })

        it('Check the visibility and click on Saved jobs ',()=>{

            robotEyes.seeSavedJobs('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(3) > div.MuiListItemText-root.jss54 > p')
            robotHands.clickOnSavedJobs('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(3) > div.MuiListItemText-root.jss54 > p')
            robotEyes.seesPathNameInUrl('/savedJobs')
            
        })
        
        it('Remove the saved Job ',()=>{
           
            robotHands.clickOnThreeDotsOfFirstSavedJob('.jss153 > .MuiSvgIcon-root',0)
            robotHands.removeFirstSavedJob('.MuiButton-outlined > .MuiButton-label',0)
            robotEyes.seesTextWithClass('MuiAlert-message','Job removed from saved jobs.')
   
   
   
   
   
        })

    })

})
    