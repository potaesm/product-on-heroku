*** Settings ***
Library    SeleniumLibrary
Test Setup    เปิด Chrome
Test Teardown    ปิด Chrome

*** Variables ***
${URL}    https://suthinan-product-app.herokuapp.com

*** Keywords ***
เปิด Chrome
    Open Browser    ${URL}    chrome
ปิด Chrome
    Close Browser
คลิก Product List
    Wait Until Page Contains Element    //a[@href="/list"]
    Click Element    //a[@href="/list"]

*** Test Cases ***
คลิกที่ Product List บน Product App
    คลิก Product List