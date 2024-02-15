@regression
Feature: ToolShop Login Testleri

    @validLogin
    Scenario Outline: Gecerli ve gecersiz verilerle login testleri
        Given Ben ToolShop sitesine giderim
        When Sign in linkine tiklarim
        And Email alanina "<email>" yazarim
        And Password alanina "<password>" yazarim
        And Login butonuna tiklarim
        Then Site URL'inde "<url1>" ve "<url2>" kelimelerinin gectigini dogrularim

        Examples:
            | email                                 | password  | url1  | url2      |
            | admin@practicesoftwaretesting.com     | welcome01 | admin | dashboard |
            | customer@practicesoftwaretesting.com  | welcome01 | #     | account   |
            | customer2@practicesoftwaretesting.com | welcome01 | #     | account   |
            | customer3@practicesoftwaretesting.com | welcome01 | auth  | gurkay     |


