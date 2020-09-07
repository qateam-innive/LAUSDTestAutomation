/// <reference types="Cypress" />

class MMEDPages {

    verifyMMEDpagelaunch() {
        const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
        const analyticareas = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div > div.b-title > span'
        const mmed = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div:nth-child(3) > div.b-icon > img'
        const mmedpagetitle = 'div.brintell-framework-App-container-landing > div > div.banner-content > div:nth-child(1) > div.banner-column.left-column > div:nth-child(1) > div > p.title'
        const mmedpagetitletext = 'MMED'
        cy.get(instruction)
            .should('be.visible')
            .click()
        //Navigating from Home page to MMED
        cy.pagelaunch(mmed, mmedpagetitle, mmedpagetitletext,'result1','{','mmedpagetitletext','}');
        cy.wait(7000)

    }
    verifyoperationaldashboard() {
        //Objects
        const operational_dashboard_title = 'div.brintell-framework-botton-tiles-title-second-level.brintell-framework-botton-tiles-title-selected > span'
        const operational_dashboard = '.b-mega-menu-pages > .brintell-framework-botton-tile > .brintell-framework-botton-tile-name'

        // Test case1: The Operational Dashboards should be shown
        cy.get(operational_dashboard_title)
            .scrollIntoView()
            .should('be.visible')
        cy.get(operational_dashboard)
            .should(($operational_dashboard) => {
                // should have found 4 elements
                expect($operational_dashboard).to.have.length(4)
                expect($operational_dashboard.eq(0)).to.contain('MMED')
                expect($operational_dashboard.eq(1)).to.contain('MMED Elementary')
                expect($operational_dashboard.eq(2)).to.contain('MMED Secondary')
                expect($operational_dashboard.eq(3)).to.contain('Seal of Biliteracy')
            })


    }
//mmeddashboard
    verifycurrentyearanalysis() {
        const mmedtile = 'div.brintell-framework-App-container-landing > div > div.banner-content > div:nth-child(2) > div > div > div.b-mega-menu-pages > div:nth-child(1)'
        const mmedpagetitle = 'div.brintell-framework-top > div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)'
        const mmedpagetitletext = 'Multilingual and Multicultural Education Department '
        const current_year = '.switcher-container-content-child:nth-child(1) > .wrap-component > .wrap-component-top > .toolbar-component > .toolbar-component-header-container > .toolbar-component-title-subtitle > .toolbar-component-title'
        const current_year_graphview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(1)'
        const current_year_tableview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(2)'

        //Test case8: MMED- RFEP Enrollment- Current Year vs Last Year Analysis
        //Navigating from MMED home page by clicking MMED tile
        cy.pagelaunch(mmedtile, mmedpagetitle, mmedpagetitletext);

     //   cy.wait(7000)
        cy.get(current_year).should('be.visible')
        cy.get(current_year_graphview).should('be.visible')
        
        cy.get(current_year_tableview).should('be.visible')
    }
    verifymmedtiles() {
        const tiles = 'div.kpi-card-single-component-wrapper > div >span'

        cy.get(tiles)
            .should(($tiles) => {
                // should have found 7 elements
                expect($tiles).to.have.length(7)
                expect($tiles.eq(0)).to.contain('RFEP Enrollment')
                expect($tiles.eq(1)).to.contain('English Learners ETK 12')
                expect($tiles.eq(2)).to.contain('Newcomer')
                expect($tiles.eq(3)).to.contain('P - LTEL')
                expect($tiles.eq(4)).to.contain('LTEL')
                expect($tiles.eq(5)).to.contain('RFEP to Date - As Of Census Day')
                expect($tiles.eq(6)).to.contain('RFEP Monitoring')

            })
    }

    verifyglobalfilter() {
        const filtericon = 'div.brintell-framework-icons > div:nth-child(3) > div > button'
        cy.get(filtericon).click()

    }

   

    verifyprofilesummarydropdown() {
        const dropdown = '#react-select-2--value > div.Select-value'
        const droplist = '#react-select-8--list'
        const dropdownoptions = 'div.Select-option'
        
        cy.get(dropdown).click()
        cy.wait(30000)
        cy.get(droplist)
        .find(dropdownoptions)
            .then(($dropoptions) => {
                const listcount = $dropoptions.length;
                expect($dropoptions).to.have.length(listcount)
                var i;
                for (i = 0; i < listcount; i++) {
                    cy.wait(30000)
                    cy.get($dropoptions[i]).click()
                    cy.wait(30000)
                    var value;
                    switch (i) {
                        case 0:
                            value = "div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div > span";
                            break;
                        case 1:
                            value = "#d\:dashboard\~p\:h5mcmhuif4uusd24\~r\:khjl16chjsark38lResult > table:nth-child(1) > tbody > tr:nth-child(2) > td";
                            break;
                        case 2:
                            value = "#htmlview\!1Div > table:nth-child(1)";
                            break;
                        case 3:
                            value = "div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(4) .custom-am-charts-stacked-bar-component";
                            break;
                        case 4:
                            value = "#d\:dashboard\~p\:h5mcmhuif4uusd24\~s\:sh5idusvlr4apk00Contents";
                            break;
                        case 5:
                            value = "#SWITCHER_CONTAINER > section > div > div:nth-child(6) > section > div.wrap-component-container > div";
                            break;
                        case 6:
                            value = "#d\:dashboard\~p\:h5mcmhuif4uusd24\~s\:91h63d0bkff8sueeContents";
                            break;
                    }
                    cy.get(value).should('be.visible')
                    cy.wait(30000)
              
                    cy.get(dropdown).click()
                    cy.wait(30000)
                }

            });
    }

    //mmedelementarydashboard
    verifycurrentyearanalysis() {
        const mmedelementarytile = 'div.brintell-framework-App-container-landing > div > div.banner-content > div:nth-child(2) > div > div > div.b-mega-menu-pages > div:nth-child(2)'
        const mmedelementarypagetitle = 'div.brintell-framework-top > div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)'
        const mmedelementarypagetitletext = 'Multilingual and Multicultural Education Department '
        const current_year = '.switcher-container-content-child:nth-child(1) > .wrap-component > .wrap-component-top > .toolbar-component > .toolbar-component-header-container > .toolbar-component-title-subtitle > .toolbar-component-title'
        const current_year_graphview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(1)'
        const current_year_tableview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(2)'

        //Test case8: MMED- RFEP Enrollment- Current Year vs Last Year Analysis
        //Navigating from MMED home page by clicking MMED tile
        cy.pagelaunch(mmedelementarytile, mmedelementarypagetitle, mmedelementarypagetitletext);

     //   cy.wait(7000)
        cy.get(current_year).should('be.visible')
        cy.get(current_year_graphview).should('be.visible')
        cy.get(current_year_tableview).should('be.visible')
    }
    verifymmedtiles() {
        const tiles = 'div.kpi-card-single-component-wrapper > div >span'

        cy.get(tiles)
            .should(($tiles) => {
                // should have found 7 elements
                expect($tiles).to.have.length(7)
                expect($tiles.eq(0)).to.contain('RFEP Enrollment')
                expect($tiles.eq(1)).to.contain('English Learners ETK 12')
                expect($tiles.eq(2)).to.contain('Newcomer')
                expect($tiles.eq(3)).to.contain('P - LTEL')
                expect($tiles.eq(4)).to.contain('LTEL')
                expect($tiles.eq(5)).to.contain('RFEP to Date - As Of Census Day')
                expect($tiles.eq(6)).to.contain('RFEP Monitoring')

            })
    }

    verifyglobalfilter() {
        const filtericon = 'div.brintell-framework-icons > div:nth-child(3) > div > button'
        cy.get(filtericon).click()

    }

   

    verifyprofilesummarydropdown() {
        const dropdown = '#react-select-2--value > div.Select-value'
        const droplist = '#react-select-8--list'
        const dropdownoptions = 'div.Select-option'
        
        cy.get(dropdown).click()
        cy.wait(30000)
        cy.get(droplist)
        .find(dropdownoptions)
            .then(($dropoptions) => {
                const listcount = $dropoptions.length;
                expect($dropoptions).to.have.length(listcount)
                var i;
                for (i = 0; i < listcount; i++) {
                    cy.wait(30000)
                    cy.get($dropoptions[i]).click()
                    cy.wait(30000)
                    var value;
                    switch (i) {
                        case 0:
                            value = "div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div > span";
                            break;
                        case 1:
                            value = "#d\:dashboard\~p\:h5mcmhuif4uusd24\~r\:khjl16chjsark38lResult > table:nth-child(1) > tbody > tr:nth-child(2) > td";
                            break;
                        case 2:
                            value = "#htmlview\!1Div > table:nth-child(1)";
                            break;
                        case 3:
                            value = "div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(4) .custom-am-charts-stacked-bar-component";
                            break;
                        case 4:
                            value = "#d\:dashboard\~p\:h5mcmhuif4uusd24\~s\:sh5idusvlr4apk00Contents";
                            break;
                        case 5:
                            value = "#SWITCHER_CONTAINER > section > div > div:nth-child(6) > section > div.wrap-component-container > div";
                            break;
                        case 6:
                            value = "#d\:dashboard\~p\:h5mcmhuif4uusd24\~s\:91h63d0bkff8sueeContents";
                            break;
                    }
                    cy.get(value).should('be.visible')
                    cy.wait(30000)
              
                    cy.get(dropdown).click()
                    cy.wait(30000)
                }

            });
    }
    
}
export default MMEDPages